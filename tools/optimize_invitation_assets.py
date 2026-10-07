from __future__ import annotations

import os
import re
import subprocess
import tempfile
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
IMAGES = ROOT / "invitation" / "images"
FONTS = ROOT / "invitation" / "fonts"
CSS = ROOT / "invitation" / "style.css"
INDEX = ROOT / "invitation" / "index.html"
APP = ROOT / "invitation" / "app.js"

# Target budgets are deliberately conservative for a wedding page expected
# to receive around 1,000 visits in one to two months.
JPEG_TARGETS = {
    "hero-cover.jpg":       {"max_w": 1920, "max_h": 1920, "target_kb": 850},
    "6.jpg":                {"max_w": 1800, "max_h": 1800, "target_kb": 650},
    "7.jpg":                {"max_w": 1800, "max_h": 1800, "target_kb": 650},
    "8.jpg":                {"max_w": 1800, "max_h": 1800, "target_kb": 700},
    "moment-01.jpg":        {"max_w": 1800, "max_h": 1800, "target_kb": 750},
    "moment-02.jpg":        {"max_w": 1500, "max_h": 1500, "target_kb": 550},
    "moment-03.jpg":        {"max_w": 1500, "max_h": 1500, "target_kb": 550},
    "moment-04.jpg":        {"max_w": 1600, "max_h": 2000, "target_kb": 850},
    "countdown-tainan.jpg": {"max_w": 1600, "max_h": 1600, "target_kb": 450},
    "countdown-nantou.jpg": {"max_w": 1600, "max_h": 1600, "target_kb": 450},
}

PNG_TARGETS = {
    "monogram-kc-black.png": {"max_w": 600, "max_h": 600, "target_kb": 180},
}

# These assets are no longer referenced by the current invitation page.
# Their historical versions remain recoverable in Git history.
UNUSED_CURRENT_ASSETS = [
    IMAGES / "timeline-tainan.jpg",
    IMAGES / "timeline-nantou.jpg",
    FONTS / "QingSongHandwriting.ttf",
]

SOURCE_FONT = FONTS / "GenWanMin2-L.ttc"
WEB_FONT = FONTS / "GenWanMin2-L-subset.woff2"


def kb(path: Path) -> float:
    return path.stat().st_size / 1024


def fit_image(img: Image.Image, max_w: int, max_h: int) -> Image.Image:
    if img.width <= max_w and img.height <= max_h:
        return img

    scale = min(max_w / img.width, max_h / img.height)
    size = (
        max(1, round(img.width * scale)),
        max(1, round(img.height * scale)),
    )
    return img.resize(size, Image.Resampling.LANCZOS)


def encode_jpeg(img: Image.Image, output: Path, quality: int) -> None:
    img.save(
        output,
        format="JPEG",
        quality=quality,
        optimize=True,
        progressive=True,
        subsampling="4:2:0",
    )


def optimize_jpeg(path: Path, spec: dict[str, int]) -> None:
    if not path.exists():
        print(f"SKIP missing: {path.name}")
        return

    before = path.stat().st_size
    target = spec["target_kb"] * 1024

    with Image.open(path) as opened:
        img = ImageOps.exif_transpose(opened).convert("RGB")

    # If already web-sized and within budget, do not re-compress it.
    if (
        img.width <= spec["max_w"]
        and img.height <= spec["max_h"]
        and before <= target
    ):
        print(
            f"OK   {path.name}: {before/1024:.0f} KB, "
            f"{img.width}x{img.height}"
        )
        return

    img = fit_image(img, spec["max_w"], spec["max_h"])

    best_bytes: bytes | None = None
    best_quality = 82

    # First preserve resolution and search for a suitable quality.
    for quality in (86, 83, 80, 77, 74, 71, 68, 65):
        with tempfile.NamedTemporaryFile(suffix=".jpg", delete=False) as tmp:
            tmp_path = Path(tmp.name)

        try:
            encode_jpeg(img, tmp_path, quality)
            data = tmp_path.read_bytes()
        finally:
            tmp_path.unlink(missing_ok=True)

        best_bytes = data
        best_quality = quality

        if len(data) <= target:
            break

    # If a very detailed image is still over budget, reduce dimensions gently.
    working = img
    while best_bytes is not None and len(best_bytes) > target:
        if working.width <= 1100 and working.height <= 1100:
            break

        working = working.resize(
            (
                max(1, round(working.width * 0.90)),
                max(1, round(working.height * 0.90)),
            ),
            Image.Resampling.LANCZOS,
        )

        with tempfile.NamedTemporaryFile(suffix=".jpg", delete=False) as tmp:
            tmp_path = Path(tmp.name)

        try:
            encode_jpeg(working, tmp_path, 72)
            best_bytes = tmp_path.read_bytes()
            best_quality = 72
        finally:
            tmp_path.unlink(missing_ok=True)

    if best_bytes is None:
        raise RuntimeError(f"Unable to optimize {path}")

    path.write_bytes(best_bytes)

    print(
        f"JPEG {path.name}: "
        f"{before/1024/1024:.2f} MB -> {path.stat().st_size/1024:.0f} KB, "
        f"{working.width}x{working.height}, q={best_quality}"
    )


def optimize_png(path: Path, spec: dict[str, int]) -> None:
    if not path.exists():
        print(f"SKIP missing: {path.name}")
        return

    before = path.stat().st_size
    target = spec["target_kb"] * 1024

    with Image.open(path) as opened:
        img = ImageOps.exif_transpose(opened).convert("RGBA")

    if (
        img.width <= spec["max_w"]
        and img.height <= spec["max_h"]
        and before <= target
    ):
        print(
            f"OK   {path.name}: {before/1024:.0f} KB, "
            f"{img.width}x{img.height}"
        )
        return

    img = fit_image(img, spec["max_w"], spec["max_h"])

    # Palette quantization works very well for the black transparent monogram.
    quantized = img.quantize(
        colors=128,
        method=Image.Quantize.FASTOCTREE,
        dither=Image.Dither.NONE,
    )

    with tempfile.NamedTemporaryFile(suffix=".png", delete=False) as tmp:
        tmp_path = Path(tmp.name)

    try:
        quantized.save(
            tmp_path,
            format="PNG",
            optimize=True,
            compress_level=9,
        )
        data = tmp_path.read_bytes()
    finally:
        tmp_path.unlink(missing_ok=True)

    # If still larger than desired, reduce dimensions once more.
    if len(data) > target and max(img.size) > 480:
        img = fit_image(img, 480, 480)
        quantized = img.quantize(
            colors=96,
            method=Image.Quantize.FASTOCTREE,
            dither=Image.Dither.NONE,
        )

        with tempfile.NamedTemporaryFile(suffix=".png", delete=False) as tmp:
            tmp_path = Path(tmp.name)

        try:
            quantized.save(
                tmp_path,
                format="PNG",
                optimize=True,
                compress_level=9,
            )
            data = tmp_path.read_bytes()
        finally:
            tmp_path.unlink(missing_ok=True)

    path.write_bytes(data)

    print(
        f"PNG  {path.name}: "
        f"{before/1024:.0f} KB -> {path.stat().st_size/1024:.0f} KB, "
        f"{img.width}x{img.height}"
    )


def build_font_subset() -> None:
    if not SOURCE_FONT.exists():
        if WEB_FONT.exists():
            print(f"OK   font subset already present: {kb(WEB_FONT):.0f} KB")
        else:
            print("WARN source and subset fonts are both missing.")
        return

    text_parts = []

    for source in (INDEX, APP, CSS):
        if source.exists():
            text_parts.append(source.read_text(encoding="utf-8"))

    # Keep wedding names and editorial text even if the surrounding markup changes.
    text_parts.append(
        "周愷元陳佳惠在你身邊日日又年年拾光片刻婚禮邀請函賓客回覆"
        "CocoKevin&×・，。！？：；（）「」、0123456789"
    )

    glyph_text = "".join(text_parts)

    with tempfile.NamedTemporaryFile(
        mode="w",
        encoding="utf-8",
        suffix=".txt",
        delete=False,
    ) as tmp:
        tmp.write(glyph_text)
        glyph_file = Path(tmp.name)

    try:
        command = [
            "pyftsubset",
            str(SOURCE_FONT),
            "--font-number=0",
            f"--output-file={WEB_FONT}",
            "--flavor=woff2",
            f"--text-file={glyph_file}",
            "--layout-features=*",
            "--glyph-names",
            "--symbol-cmap",
            "--legacy-cmap",
            "--notdef-glyph",
            "--notdef-outline",
            "--recommended-glyphs",
            "--name-IDs=*",
            "--name-legacy",
            "--name-languages=*",
        ]
        subprocess.run(command, check=True)
    finally:
        glyph_file.unlink(missing_ok=True)

    if not WEB_FONT.exists():
        raise RuntimeError("WOFF2 subset was not generated.")

    print(
        f"FONT {SOURCE_FONT.name}: "
        f"{kb(SOURCE_FONT)/1024:.2f} MB -> {kb(WEB_FONT):.0f} KB WOFF2"
    )

    css = CSS.read_text(encoding="utf-8")

    css_new = re.sub(
        r'src:\s*'
        r'url\("\./fonts/GenWanMin2-L\.ttc"\)\s*format\("collection"\),\s*'
        r'url\("\./fonts/GenWanMin2-L\.ttc"\);',
        'src: url("./fonts/GenWanMin2-L-subset.woff2") format("woff2");',
        css,
        count=1,
    )

    if css_new == css:
        # Handle a previously simplified TTC declaration if it exists.
        css_new = css.replace(
            'src: url("./fonts/GenWanMin2-L.ttc");',
            'src: url("./fonts/GenWanMin2-L-subset.woff2") format("woff2");',
        )

    if "GenWanMin2-L-subset.woff2" not in css_new:
        raise RuntimeError(
            "Could not update CSS to reference the optimized WOFF2 font."
        )

    CSS.write_text(css_new, encoding="utf-8")

    # Git history keeps the original font, while the current Pages artifact stays small.
    SOURCE_FONT.unlink()


def remove_unused_assets() -> None:
    for path in UNUSED_CURRENT_ASSETS:
        if path.exists():
            print(f"REMOVE unused current asset: {path.relative_to(ROOT)}")
            path.unlink()


def report_total() -> None:
    active = [
        IMAGES / name
        for name in JPEG_TARGETS
    ] + [
        IMAGES / name
        for name in PNG_TARGETS
    ]

    if WEB_FONT.exists():
        active.append(WEB_FONT)

    total = sum(
        p.stat().st_size
        for p in active
        if p.exists()
    )

    print(
        f"ACTIVE ASSET TOTAL: {total/1024/1024:.2f} MB "
        f"(images + custom web font)"
    )


def main() -> None:
    for name, spec in JPEG_TARGETS.items():
        optimize_jpeg(IMAGES / name, spec)

    for name, spec in PNG_TARGETS.items():
        optimize_png(IMAGES / name, spec)

    build_font_subset()
    remove_unused_assets()
    report_total()


if __name__ == "__main__":
    main()
