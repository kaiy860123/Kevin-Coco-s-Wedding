:root {
    --background: #F5F1EA;
    --primary: #6F7C3E;
    --accent: #C97C7C;
    --secondary-background: #EFE7DB;
    --soft-pink: #D8A7A1;
    --sage: #A3B18A;

    --text: #565747;
    --text-soft: #7A796D;

    --primary-light:
        rgba(111, 124, 62, 0.22);

    --accent-light:
        rgba(201, 124, 124, 0.18);

    --sage-light:
        rgba(163, 177, 138, 0.18);
}


* {
    box-sizing: border-box;
}


html {
    scroll-behavior: smooth;
}


html.show-invitation-gate,
html.show-invitation-gate body {
    overflow: hidden;
}


body {
    position: relative;

    margin: 0;

    overflow-x: hidden;

    color: var(--text);

    background:
        var(--background);

    background-image:
        repeating-linear-gradient(
            0deg,
            rgba(111, 124, 62, 0.014) 0,
            rgba(111, 124, 62, 0.014) 1px,
            transparent 1px,
            transparent 5px
        );

    font-family:
        "Noto Sans TC",
        sans-serif;

    line-height: 1.8;
}


button,
input,
select,
textarea {
    font: inherit;
}


img {
    display: block;

    max-width: 100%;
}


[hidden] {
    display: none !important;
}


/* =========================================================
   信封入口
========================================================= */

.invitation-gate {
    position: fixed;

    z-index: 20000;

    inset: 0;

    display: none;

    align-items: center;
    justify-content: center;

    overflow-y: auto;
    overflow-x: hidden;

    color:
        var(--text);

    background:
        repeating-linear-gradient(
            0deg,
            rgba(111, 124, 62, 0.014) 0,
            rgba(111, 124, 62, 0.014) 1px,
            transparent 1px,
            transparent 5px
        ),
        var(--background);

    opacity: 1;

    transition:
        opacity 0.7s ease,
        visibility 0.7s ease;
}


html.show-invitation-gate
.invitation-gate {
    display: flex;
}


.invitation-gate.is-leaving {
    opacity: 0;

    visibility: hidden;

    pointer-events: none;
}


.gate-content {
    position: relative;

    z-index: 2;

    display: flex;

    flex-direction: column;

    align-items: center;
    justify-content: center;

    width:
        min(820px, 100%);

    min-height:
        100svh;

    padding:
        max(
            30px,
            env(safe-area-inset-top)
        )
        20px
        max(
            30px,
            env(safe-area-inset-bottom)
        );

    text-align: center;
}


.gate-title {
    margin:
        0
        0
        clamp(
            15px,
            2.5vh,
            26px
        );

    color:
        var(--primary);

    font-family:
        "Noto Serif TC",
        serif;

    font-size:
        clamp(
            15px,
            2vw,
            18px
        );

    font-weight: 400;

    letter-spacing:
        0.55em;
}


/* =========================================================
   入口 Logo
========================================================= */

.gate-monogram-row {
    display: grid;

    grid-template-columns:
        1fr
        78px
        1fr;

    align-items: center;

    gap:
        clamp(
            12px,
            3vw,
            28px
        );

    width:
        min(620px, 100%);

    margin-bottom:
        clamp(
            18px,
            3vh,
            28px
        );
}


.gate-monogram-row p {
    margin: 0;

    color:
        var(--sage);

    font-family:
        "Noto Serif TC",
        serif;

    font-size:
        clamp(
            11px,
            1.8vw,
            14px
        );

    font-weight: 400;

    letter-spacing:
        0.34em;

    white-space: nowrap;
}


.monogram-logo {
    display: flex;

    align-items: center;
    justify-content: center;

    width: 78px;
    height: 78px;

    margin: 0 auto;
}


.monogram-logo img {
    width: 100%;
    height: 100%;

    object-fit: contain;
}


/* =========================================================
   入口文案與英文姓名
========================================================= */

.gate-main-invitation {
    margin:
        0
        0
        7px;

    color:
        var(--primary);

    font-family:
        "Noto Serif TC",
        serif;

    font-size:
        clamp(
            12px,
            2vw,
            16px
        );

    letter-spacing:
        clamp(
            0.16em,
            1vw,
            0.4em
        );
}


.gate-english-invitation {
    margin: 0;

    color:
        var(--sage);

    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        clamp(
            11px,
            1.7vw,
            14px
        );

    font-weight: 500;

    letter-spacing:
        0.32em;
}


.gate-couple-names {
    display: flex;

    flex-direction: column;

    align-items: center;

    margin:
        clamp(
            12px,
            2.6vh,
            24px
        )
        0
        clamp(
            20px,
            3.5vh,
            34px
        );

    font-family:
        "Allura",
        cursive;

    line-height:
        0.74;
}


.gate-name-kevin {
    margin-right:
        48px;

    color:
        var(--primary);

    font-size:
        clamp(
            40px,
            7vw,
            62px
        );
}


.gate-name-coco {
    margin-top: 9px;

    margin-left:
        58px;

    color:
        var(--accent);

    font-size:
        clamp(
            50px,
            8.5vw,
            76px
        );
}


/* =========================================================
   信封
========================================================= */

.envelope-button {
    display: block;

    width:
        min(
            420px,
            78vw
        );

    padding: 0;

    background:
        transparent;

    border: 0;

    cursor: pointer;

    -webkit-tap-highlight-color:
        transparent;
}


.envelope-button:focus-visible {
    outline:
        1px
        solid
        var(--accent);

    outline-offset:
        12px;
}


.envelope-button:disabled {
    cursor: default;
}


.envelope {
    position: relative;

    display: block;

    width: 100%;

    aspect-ratio:
        1.55 / 1;

    perspective:
        1000px;

    transform-style:
        preserve-3d;
}


.envelope-back {
    position: absolute;

    z-index: 1;

    inset: 0;

    background:
        linear-gradient(
            180deg,
            #A8B38B 0%,
            var(--sage) 100%
        );

    border:
        1px
        solid
        rgba(
            111,
            124,
            62,
            0.48
        );
}


/* =========================================================
   升起邀請卡
========================================================= */

.envelope-card {
    position: absolute;

    z-index: 2;

    left: 8%;

    bottom: 7%;

    display: flex;

    flex-direction: column;

    align-items: center;
    justify-content: center;

    width: 84%;
    height: 75%;

    padding: 14px;

    color:
        var(--primary);

    background:
        var(--background);

    border:
        1px
        solid
        rgba(
            111,
            124,
            62,
            0.38
        );

    transform:
        translateY(4%);

    transform-origin:
        center bottom;

    transition:
        transform
        1.05s
        cubic-bezier(
            0.2,
            0.72,
            0.22,
            1
        );
}


.envelope-card-decoration {
    margin-bottom:
        4px;

    color:
        var(--sage);

    font-size:
        18px;
}


.envelope-card-name {
    position: relative;

    z-index: 1;

    font-family:
        "Allura",
        cursive;

    font-size:
        clamp(
            27px,
            5vw,
            40px
        );

    line-height: 1;
}


.envelope-card-text {
    margin-top:
        4px;

    color:
        var(--sage);

    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        9px;

    letter-spacing:
        0.28em;
}


.envelope-card-line {
    width: 60px;
    height: 1px;

    margin:
        10px
        0
        8px;

    background:
        var(--accent);

    opacity:
        0.6;
}


.envelope-card-open {
    color:
        var(--primary);

    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        9px;

    letter-spacing:
        0.25em;
}


/* =========================================================
   信封前方摺面
========================================================= */

.envelope-front-left,
.envelope-front-right,
.envelope-front-bottom {
    position: absolute;

    z-index: 4;

    inset: 0;

    pointer-events: none;
}


.envelope-front-left {
    background:
        #9EAA7B;

    clip-path:
        polygon(
            0 0,
            56% 57%,
            0 100%
        );
}


.envelope-front-right {
    background:
        #A8B38B;

    clip-path:
        polygon(
            100% 0,
            44% 57%,
            100% 100%
        );
}


.envelope-front-bottom {
    background:
        var(--sage);

    clip-path:
        polygon(
            0 100%,
            50% 45%,
            100% 100%
        );
}


/* =========================================================
   封蓋
========================================================= */

.envelope-flap {
    position: absolute;

    z-index: 6;

    top: 0;
    left: 0;

    width: 100%;
    height: 60%;

    background:
        #98A674;

    clip-path:
        polygon(
            0 0,
            100% 0,
            50% 100%
        );

    transform:
        rotateX(0deg);

    transform-origin:
        top center;

    backface-visibility:
        hidden;

    transition:
        transform
        0.8s
        cubic-bezier(
            0.4,
            0,
            0.2,
            1
        );
}


/* =========================================================
   KC Logo 放在信封正面
========================================================= */

.envelope-front-logo {
    position: absolute;

    z-index: 7;

    left: 50%;

    /*
        約在整個信封高度 58% 的位置，
        比原本封蓋 Logo 更低
    */
    top: 59%;

    display: flex;

    align-items: center;
    justify-content: center;

    width: 64px;
    height: 64px;

    background:
        transparent;

    transform:
        translate(
            -50%,
            -50%
        );

    pointer-events: none;

    transition:
        opacity 0.35s ease;
}


.envelope-front-logo img {
    width: 100%;
    height: 100%;

    object-fit: contain;
}


/*
   開封時 Logo 留在信封上，
   但略微變淡以避免搶邀請卡焦點
*/

.invitation-gate.is-opening
.envelope-front-logo {
    opacity: 0.82;
}


/* =========================================================
   TAP TO OPEN
========================================================= */

.gate-instruction {
    margin-top:
        clamp(
            16px,
            2.8vh,
            30px
        );

    transition:
        opacity 0.3s ease,
        transform 0.3s ease;
}


.gate-instruction p {
    margin: 0;

    color:
        var(--primary);

    font-family:
        "Cormorant Garamond",
        serif;

    font-size: 14px;

    font-weight: 500;

    letter-spacing:
        0.42em;
}


.gate-instruction span {
    display: block;

    margin-top:
        3px;

    color:
        var(--sage);

    font-family:
        "Noto Serif TC",
        serif;

    font-size:
        11px;

    letter-spacing:
        0.3em;
}


/* =========================================================
   信封動畫
========================================================= */

.invitation-gate:not(.is-opening)
.envelope-button {
    animation:
        envelopeFloat
        3.2s
        ease-in-out
        infinite;
}


.invitation-gate.is-opening
.envelope-flap {
    z-index: 1;

    transform:
        rotateX(180deg);
}


.invitation-gate.is-opening
.envelope-card {
    transform:
        translateY(-68%);
}


.invitation-gate.is-opening
.gate-instruction {
    opacity: 0;

    transform:
        translateY(8px);
}


.invitation-gate.is-opening
.gate-title,
.invitation-gate.is-opening
.gate-monogram-row,
.invitation-gate.is-opening
.gate-main-invitation,
.invitation-gate.is-opening
.gate-english-invitation,
.invitation-gate.is-opening
.gate-couple-names {
    transition:
        opacity 0.7s ease;

    opacity: 0.46;
}


@keyframes envelopeFloat {

    0%,
    100% {
        transform:
            translateY(0);
    }

    50% {
        transform:
            translateY(-7px);
    }

}


/* =========================================================
   植物裝飾
========================================================= */

.gate-botanical,
.botanical-decoration {
    position: fixed;

    z-index: 0;

    width:
        250px;

    height:
        330px;

    opacity:
        0.08;

    pointer-events:
        none;

    background:
        radial-gradient(
            ellipse
            at
            40%
            30%,
            rgba(
                163,
                177,
                138,
                0.32
            ),
            transparent
            50%
        );
}


.gate-botanical-left,
.botanical-top-left {
    left:
        -80px;

    bottom:
        -80px;
}


.gate-botanical-right,
.botanical-top-right {
    top:
        -80px;

    right:
        -80px;
}


.botanical-bottom-left {
    bottom:
        -90px;

    left:
        -90px;
}


.botanical-bottom-right {
    right:
        -90px;

    bottom:
        -90px;
}


/* =========================================================
   共用標題
========================================================= */

.eyebrow {
    margin:
        0
        0
        10px;

    color:
        var(--primary);

    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        14px;

    font-weight:
        500;

    letter-spacing:
        5px;

    text-transform:
        uppercase;
}


.section-heading {
    margin-bottom:
        44px;
}


.centered-heading {
    text-align:
        center;
}


.section-heading h2 {
    margin: 0;

    color:
        var(--primary);

    font-family:
        "Noto Serif TC",
        serif;

    font-size:
        clamp(
            28px,
            5vw,
            38px
        );

    font-weight:
        500;

    letter-spacing:
        4px;
}


.section-note {
    margin:
        14px
        0
        0;

    color:
        var(--text-soft);

    font-family:
        "Noto Serif TC",
        serif;

    font-size:
        14px;
}


.section-divider,
.ornamental-divider {
    display: flex;

    align-items:
        center;

    justify-content:
        center;

    gap:
        12px;

    width:
        min(
            280px,
            76%
        );

    margin:
        24px
        auto
        0;
}


.section-divider span,
.ornamental-divider span {
    display:
        block;

    width:
        90px;

    height:
        1px;

    background:
        var(--primary);

    opacity:
        0.45;
}


.section-divider i,
.ornamental-divider i {
    color:
        var(--accent);

    font-style:
        normal;
}


/* =========================================================
   Hero
========================================================= */

.hero-section {
    position:
        relative;

    z-index:
        1;

    min-height:
        94svh;

    background-color:
        var(--secondary-background);

    background-position:
        center;

    background-repeat:
        no-repeat;

    background-size:
        cover;
}


.hero-overlay {
    position:
        absolute;

    inset:
        0;

    background:
        linear-gradient(
            180deg,
            rgba(
                245,
                241,
                234,
                0.15
            ),
            rgba(
                245,
                241,
                234,
                0.42
            ),
            rgba(
                245,
                241,
                234,
                0.86
            )
        );
}


.hero-content {
    position:
        relative;

    z-index:
        2;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    min-height:
        94svh;

    padding:
        80px
        24px;
}


.hero-card {
    width:
        min(
            740px,
            94%
        );

    padding:
        52px
        20px;

    text-align:
        center;

    background:
        rgba(
            245,
            241,
            234,
            0.61
        );
}


.hero-chinese-label {
    margin:
        0;

    color:
        var(--text-soft);

    font-family:
        "Noto Serif TC",
        serif;

    font-size:
        14px;

    letter-spacing:
        5px;
}


/* =========================================================
   首頁中文姓名
========================================================= */

.hero-couple-title {
    margin:
        30px
        0
        28px;

    color:
        var(--primary);

    font-family:
        "Noto Serif TC",
        serif;

    font-size:
        clamp(
            34px,
            6vw,
            56px
        );

    font-weight:
        400;

    line-height:
        1.35;

    letter-spacing:
        0.12em;

    text-transform:
        none;
}


.hero-couple-title em {
    display:
        inline-block;

    margin:
        0
        10px;

    color:
        var(--accent);

    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        0.9em;

    font-style:
        italic;

    font-weight:
        400;
}


/* =========================================================
   日期
========================================================= */

.hero-date-wrap {
    display:
        flex;

    flex-direction:
        column;

    gap:
        0;

    margin-bottom:
        24px;
}


.hero-date {
    margin:
        0;

    color:
        var(--accent);

    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        clamp(
            18px,
            3vw,
            23px
        );

    font-weight:
        500;

    letter-spacing:
        4px;

    line-height:
        1.4;

    text-transform:
        uppercase;

    white-space:
        nowrap;
}


.hero-date-line2 {
    color:
        var(--primary);
}


/* =========================================================
   首頁邀請文字
========================================================= */

.hero-invitation-copy {
    width:
        min(
            580px,
            100%
        );

    margin:
        0
        auto;
}


.hero-invitation-zh {
    margin:
        0;

    color:
        var(--text);

    font-family:
        "Noto Serif TC",
        serif;

    font-size:
        15px;

    font-weight:
        400;

    line-height:
        2;

    letter-spacing:
        0.08em;
}


.hero-invitation-en {
    margin:
        10px
        0
        0;

    color:
        var(--text-soft);

    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        14px;

    line-height:
        1.55;

    letter-spacing:
        0.06em;
}


.hero-floral-mark {
    margin-top:
        26px;

    color:
        var(--sage);
}


/* =========================================================
   大區塊
========================================================= */

.countdown-section,
.content-section,
.moments-section,
.rsvp-section {
    position:
        relative;

    z-index:
        1;

    padding-top:
        105px;

    padding-bottom:
        105px;
}


.countdown-section {
    padding-left:
        20px;

    padding-right:
        20px;

    background:
        rgba(
            239,
            231,
            219,
            0.45
        );
}


.content-section {
    width:
        min(
            1000px,
            calc(
                100% - 30px
            )
        );

    margin:
        0
        auto;

    padding-left:
        30px;

    padding-right:
        30px;

    background:
        transparent;
}


/* =========================================================
   圖片
========================================================= */

.editorial-image-frame {
    width:
        min(
            720px,
            100%
        );

    margin:
        0
        auto
        60px;

    padding:
        0;

    background:
        transparent;

    border:
        0;

    box-shadow:
        none;
}


.countdown-frame {
    margin-bottom:
        0;
}


.countdown-image,
.event-image {
    width:
        100%;

    height:
        auto;

    aspect-ratio:
        3 / 2;

    object-fit:
        contain;

    background:
        transparent;
}


.image-error-message {
    padding:
        30px;

    color:
        var(--text-soft);

    text-align:
        center;
}


/* =========================================================
   婚禮資訊
========================================================= */

.detail-grid {
    display:
        grid;

    grid-template-columns:
        1fr
        1fr;

    gap:
        0
        50px;

    width:
        min(
            820px,
            100%
        );

    margin:
        0
        auto;
}


.detail-item {
    position:
        relative;

    padding:
        26px
        10px
        34px;

    text-align:
        center;
}


.detail-item::after {
    position:
        absolute;

    bottom:
        0;

    left:
        15%;

    width:
        70%;

    height:
        1px;

    content:
        "";

    background:
        rgba(
            111,
            124,
            62,
            0.24
        );
}


.detail-item-wide {
    grid-column:
        1 / -1;

    padding-top:
        42px;
}


.detail-label {
    margin:
        0;

    color:
        var(--accent);

    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        14px;

    letter-spacing:
        4px;

    text-transform:
        uppercase;
}


.detail-item h3 {
    margin:
        4px
        0
        18px;

    color:
        var(--primary);

    font-family:
        "Noto Serif TC",
        serif;

    font-size:
        21px;

    font-weight:
        500;

    letter-spacing:
        4px;
}


.detail-main {
    margin:
        0;

    color:
        var(--text);

    font-family:
        "Noto Serif TC",
        serif;

    font-size:
        17px;
}


.detail-secondary {
    margin:
        7px
        0
        0;

    color:
        var(--text-soft);

    font-family:
        "Cormorant Garamond",
        "Noto Serif TC",
        serif;

    font-size:
        14px;
}


.venue-detail {
    margin-top:
        16px;
}


.venue-detail p {
    margin:
        5px
        0;
}


.venue-detail strong {
    color:
        var(--primary);
}


.venue-detail .en-line {
    color:
        var(--accent);

    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        14px;
}


/* =========================================================
   Dress Code
========================================================= */

.dress-code-section {
    width:
        min(
            820px,
            100%
        );

    margin:
        82px
        auto
        0;

    padding-top:
        54px;

    border-top:
        1px
        solid
        rgba(
            111,
            124,
            62,
            0.22
        );

    text-align:
        center;
}


.dress-code-heading h3 {
    margin:
        0;

    color:
        var(--primary);

    font-family:
        "Noto Serif TC",
        serif;

    font-size:
        26px;

    font-weight:
        500;

    letter-spacing:
        4px;
}


.dress-code-introduction {
    margin:
        18px
        auto
        0;

    color:
        var(--text);

    font-family:
        "Noto Serif TC",
        serif;

    font-size:
        14px;

    line-height:
        1.9;

    letter-spacing:
        0.05em;
}


.dress-code-introduction-en {
    margin:
        4px
        auto
        0;

    color:
        var(--text-soft);

    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        14px;

    line-height:
        1.5;
}


.dress-code-palette {
    display:
        flex;

    align-items:
        flex-start;

    justify-content:
        center;

    gap:
        clamp(
            16px,
            4vw,
            36px
        );

    margin-top:
        34px;
}


.dress-color-item {
    display:
        flex;

    flex-direction:
        column;

    align-items:
        center;

    width:
        90px;
}


.dress-color-circle {
    width:
        68px;

    height:
        68px;

    border-radius:
        50%;

    box-shadow:
        inset
        0
        0
        0
        1px
        rgba(
            86,
            87,
            71,
            0.08
        );
}


.dress-color-light {
    border:
        1px
        solid
        rgba(
            111,
            124,
            62,
            0.28
        );
}


.dress-color-item p {
    margin:
        12px
        0
        0;

    color:
        var(--primary);

    font-family:
        "Noto Serif TC",
        serif;

    font-size:
        13px;

    letter-spacing:
        0.08em;
}


.dress-color-item span {
    display:
        block;

    margin-top:
        1px;

    color:
        var(--text-soft);

    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        11px;

    letter-spacing:
        0.05em;
}


/* =========================================================
   婚禮時程
========================================================= */

.timeline-text-board {
    width:
        min(
            720px,
            100%
        );

    margin:
        0
        auto;

    padding:
        0;

    background:
        transparent;

    border:
        0;

    box-shadow:
        none;
}


.timeline-board-title {
    display:
        flex;

    align-items:
        center;

    gap:
        17px;

    margin-bottom:
        26px;

    padding-bottom:
        18px;

    border-bottom:
        1px
        solid
        rgba(
            111,
            124,
            62,
            0.25
        );
}


.timeline-board-icon {
    display:
        flex;

    align-items:
        center;
    justify-content:
        center;

    width:
        54px;

    height:
        54px;

    color:
        var(--primary);

    font-size:
        28px;
}


.timeline-board-heading {
    display:
        flex;

    align-items:
        baseline;

    gap:
        18px;
}


.timeline-board-heading span {
    color:
        var(--primary);

    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        18px;

    font-weight:
        600;

    letter-spacing:
        5px;

    text-transform:
        uppercase;
}


.timeline-board-heading h3 {
    margin:
        0;

    color:
        var(--primary);

    font-family:
        "Noto Serif TC",
        serif;

    font-size:
        24px;

    font-weight:
        500;

    letter-spacing:
        5px;
}


.timeline-item {
    position:
        relative;

    display:
        grid;

    grid-template-columns:
        75px
        1fr;

    gap:
        18px;

    padding:
        12px
        0
        24px;
}


.timeline-marker {
    position:
        relative;

    display:
        flex;

    justify-content:
        center;
}


.timeline-dot {
    position:
        relative;

    z-index:
        1;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    width:
        48px;

    height:
        48px;

    color:
        var(--primary);

    background:
        var(--background);

    border:
        1px
        solid
        var(--sage);

    border-radius:
        50%;

    font-size:
        20px;
}


.timeline-line {
    position:
        absolute;

    top:
        48px;

    bottom:
        -24px;

    left:
        50%;

    width:
        1px;

    background:
        var(--sage);

    transform:
        translateX(-50%);
}


.timeline-item:last-child
.timeline-line {
    display:
        none;
}


.timeline-time {
    margin:
        0;

    color:
        var(--primary);

    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        18px;

    font-weight:
        600;

    letter-spacing:
        2px;
}


.timeline-title {
    margin:
        2px
        0
        0;

    color:
        var(--text);

    font-family:
        "Noto Serif TC",
        serif;

    font-size:
        17px;
}


.timeline-subtitle {
    margin:
        1px
        0
        0;

    color:
        var(--accent);

    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        15px;
}


.timeline-note {
    margin:
        4px
        0
        0;

    color:
        var(--text-soft);

    font-size:
        12px;
}


/* =========================================================
   Google Map
========================================================= */

.map-actions {
    margin-bottom:
        30px;

    text-align:
        center;
}


.primary-link {
    display:
        inline-flex;

    flex-direction:
        column;

    align-items:
        center;

    min-width:
        230px;

    padding:
        13px
        28px;

    color:
        var(--background);

    background:
        var(--primary);

    border:
        0;

    text-decoration:
        none;

    transition:
        background-color
        0.25s
        ease;
}


.primary-link:hover {
    background:
        var(--accent);
}


.primary-link span {
    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        12px;

    letter-spacing:
        3px;
}


.map-container {
    overflow:
        hidden;

    width:
        min(
            900px,
            100%
        );

    margin:
        0
        auto
        60px;

    background:
        transparent;

    border:
        0;

    box-shadow:
        none;
}


.map-container iframe {
    display:
        block;

    width:
        100%;

    border:
        0;
}


/* =========================================================
   交通
========================================================= */

.information-grid {
    display:
        grid;

    grid-template-columns:
        1fr
        1fr;

    gap:
        60px;

    width:
        min(
            900px,
            100%
        );

    margin:
        0
        auto;
}


.information-item {
    position:
        relative;

    padding:
        10px
        0;
}


.information-item:first-child::after {
    position:
        absolute;

    top:
        5%;

    right:
        -30px;

    width:
        1px;

    height:
        90%;

    content:
        "";

    background:
        rgba(
            111,
            124,
            62,
            0.2
        );
}


.information-en-title {
    margin:
        0;

    color:
        var(--accent);

    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        15px;

    letter-spacing:
        4px;

    text-transform:
        uppercase;
}


.information-item h3 {
    margin:
        4px
        0
        20px;

    color:
        var(--primary);

    font-family:
        "Noto Serif TC",
        serif;

    font-size:
        20px;

    font-weight:
        500;
}


.information-content p {
    margin:
        0
        0
        18px;

    font-size:
        14px;
}


.information-content strong {
    color:
        var(--primary);
}


.information-content a {
    color:
        var(--accent);
}


.information-content .en-line {
    display:
        block;

    margin-top:
        3px;

    color:
        var(--text-soft);

    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        14px;
}


/* =========================================================
   Notice
========================================================= */

.notice-section {
    padding:
        34px
        20px;

    background:
        rgba(
            216,
            167,
            161,
            0.16
        );

    border-top:
        1px
        solid
        var(--accent-light);

    border-bottom:
        1px
        solid
        var(--accent-light);
}


.notice-inner {
    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    gap:
        20px;

    width:
        min(
            850px,
            100%
        );

    margin:
        0
        auto;

    text-align:
        center;
}


.notice-inner p {
    margin:
        2px
        0;
}


.notice-zh {
    color:
        var(--primary);

    font-family:
        "Noto Serif TC",
        serif;
}


.notice-en {
    color:
        var(--accent);

    font-family:
        "Cormorant Garamond",
        serif;
}


.notice-leaf {
    color:
        var(--sage);
}


/* =========================================================
   Our Moments
========================================================= */

.moments-section {
    padding-left:
        max(
            20px,
            calc(
                (100% - 1040px) / 2
                + 30px
            )
        );

    padding-right:
        max(
            20px,
            calc(
                (100% - 1040px) / 2
                + 30px
            )
        );

    background:
        rgba(
            239,
            231,
            219,
            0.42
        );
}


.photo-grid {
    display:
        grid;

    grid-template-columns:
        repeat(
            4,
            1fr
        );

    gap:
        18px;

    width:
        min(
            980px,
            100%
        );

    margin:
        0
        auto;
}


.photo-item {
    width:
        100%;

    aspect-ratio:
        3 / 4;

    object-fit:
        cover;

    cursor:
        zoom-in;

    transition:
        transform
        0.3s
        ease;
}


.photo-item:nth-child(even) {
    transform:
        translateY(
            16px
        );
}


.photo-item:hover {
    transform:
        translateY(
            -4px
        );
}


/* =========================================================
   RSVP
========================================================= */

.rsvp-section {
    padding-left:
        20px;

    padding-right:
        20px;

    background:
        transparent;
}


.rsvp-inner {
    width:
        min(
            720px,
            100%
        );

    margin:
        0
        auto;

    padding:
        20px
        20px
        0;

    background:
        transparent;

    border:
        0;

    box-shadow:
        none;
}


/* =========================================================
   RSVP Signature
========================================================= */

.rsvp-couple-signature {
    display:
        flex;

    flex-direction:
        column;

    align-items:
        center;

    margin:
        24px
        0
        12px;

    font-family:
        "Allura",
        cursive;

    line-height:
        0.72;
}


.rsvp-kevin {
    margin-right:
        42px;

    color:
        var(--primary);

    font-size:
        clamp(
            42px,
            7vw,
            60px
        );
}


.rsvp-coco {
    margin-top:
        9px;

    margin-left:
        48px;

    color:
        var(--accent);

    font-size:
        clamp(
            50px,
            8vw,
            70px
        );
}


.rsvp-couple-chinese {
    margin:
        0
        0
        26px;

    color:
        var(--text-soft);

    font-family:
        "Noto Serif TC",
        serif;

    font-size:
        13px;

    letter-spacing:
        0.14em;
}


.rsvp-couple-chinese i {
    margin:
        0
        9px;

    color:
        var(--accent);

    font-style:
        normal;
}


.deadline-display {
    margin-top:
        18px;

    color:
        var(--accent);

    font-family:
        "Noto Serif TC",
        serif;

    font-size:
        13px;
}


/* =========================================================
   RSVP Form
========================================================= */

.form-group {
    margin-bottom:
        32px;
}


.form-group label {
    display:
        block;

    margin-bottom:
        8px;

    color:
        var(--primary);

    font-family:
        "Noto Serif TC",
        serif;

    font-size:
        15px;

    font-weight:
        500;
}


.form-group label span {
    display:
        block;

    color:
        var(--accent);

    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        13px;

    letter-spacing:
        3px;

    text-transform:
        uppercase;
}


.form-group label b {
    color:
        var(--accent);
}


.form-group input,
.form-group select,
.form-group textarea {
    display:
        block;

    width:
        100%;

    padding:
        12px
        4px;

    color:
        var(--text);

    background:
        transparent;

    border:
        0;

    border-bottom:
        1px
        solid
        var(--sage);

    border-radius:
        0;

    font-size:
        16px;

    outline:
        none;
}


.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    border-bottom-color:
        var(--accent);
}


.form-group select option {
    color:
        var(--text);

    background:
        var(--background);
}


.form-group textarea {
    min-height:
        90px;

    resize:
        vertical;
}


.field-help {
    margin:
        7px
        0
        0;

    color:
        var(--text-soft);

    font-family:
        "Noto Serif TC",
        serif;

    font-size:
        12px;
}


.highlighted-help {
    color:
        var(--accent);
}


/* =========================================================
   Submit
========================================================= */

.submit-btn {
    display:
        block;

    width:
        min(
            340px,
            100%
        );

    margin:
        42px
        auto
        0;

    padding:
        14px
        24px;

    color:
        var(--background);

    background:
        var(--primary);

    border:
        0;

    cursor:
        pointer;

    transition:
        background-color
        0.25s
        ease;
}


.submit-btn:hover {
    background:
        var(--accent);
}


.submit-btn span {
    display:
        block;

    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        12px;

    letter-spacing:
        4px;

    text-transform:
        uppercase;
}


.submit-btn:disabled {
    opacity:
        0.55;

    cursor:
        default;
}


.form-status {
    min-height:
        28px;

    margin-top:
        16px;

    text-align:
        center;
}


.form-status.success {
    color:
        var(--primary);
}


.form-status.error {
    color:
        var(--accent);
}


/* =========================================================
   Deadline
========================================================= */

.deadline-notice {
    width:
        min(
            500px,
            100%
        );

    margin:
        20px
        auto;

    padding:
        34px
        0;

    text-align:
        center;

    border-top:
        1px
        solid
        var(--accent-light);

    border-bottom:
        1px
        solid
        var(--accent-light);
}


.deadline-main {
    color:
        var(--accent);

    font-family:
        "Noto Serif TC",
        serif;

    font-size:
        20px;
}


.deadline-en {
    color:
        var(--primary);

    font-family:
        "Cormorant Garamond",
        serif;
}


/* =========================================================
   返回邀請函
========================================================= */

.back-invitation-wrap {
    margin-top:
        60px;

    text-align:
        center;
}


.back-invitation-button {
    padding:
        12px
        28px;

    color:
        var(--primary);

    background:
        transparent;

    border:
        1px
        solid
        var(--primary);

    cursor:
        pointer;

    transition:
        color
        0.25s
        ease,
        border-color
        0.25s
        ease;
}


.back-invitation-button:hover {
    color:
        var(--accent);

    border-color:
        var(--accent);
}


.back-invitation-button span {
    display:
        block;

    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        11px;

    letter-spacing:
        3px;

    text-transform:
        uppercase;
}


/* =========================================================
   Lightbox
========================================================= */

.lightbox {
    position:
        fixed;

    z-index:
        9999;

    inset:
        0;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    padding:
        28px;

    background:
        rgba(
            70,
            72,
            55,
            0.92
        );
}


.lightbox-content {
    max-width:
        min(
            1100px,
            94vw
        );

    max-height:
        88vh;

    object-fit:
        contain;
}


.close-lightbox {
    position:
        absolute;

    top:
        max(
            16px,
            env(safe-area-inset-top)
        );

    right:
        20px;

    color:
        var(--background);

    background:
        transparent;

    border:
        0;

    font-size:
        44px;

    cursor:
        pointer;
}


/* =========================================================
   Footer
========================================================= */

.page-footer {
    padding:
        80px
        24px;

    color:
        var(--text-soft);

    background:
        rgba(
            239,
            231,
            219,
            0.48
        );

    text-align:
        center;
}


.footer-decoration {
    color:
        var(--sage);
}


.footer-signature {
    display:
        flex;

    flex-direction:
        column;

    align-items:
        center;

    margin:
        12px
        0
        18px;

    font-family:
        "Allura",
        cursive;

    line-height:
        0.72;
}


.footer-signature span:first-child {
    margin-right:
        35px;

    color:
        var(--primary);

    font-size:
        44px;
}


.footer-signature span:last-child {
    margin-top:
        6px;

    margin-left:
        42px;

    color:
        var(--accent);

    font-size:
        52px;
}


.footer-chinese-names {
    font-family:
        "Noto Serif TC",
        serif;

    font-size:
        12px;

    letter-spacing:
        0.12em;
}


.footer-chinese-names i {
    margin:
        0
        7px;

    color:
        var(--accent);

    font-style:
        normal;
}


.footer-line {
    width:
        65px;

    height:
        1px;

    margin:
        24px
        auto;

    background:
        var(--accent);
}


/* =========================================================
   Tablet
========================================================= */

@media (max-width: 800px) {

    .content-section {
        width:
            100%;

        padding-left:
            20px;

        padding-right:
            20px;
    }


    .detail-grid,
    .information-grid {
        grid-template-columns:
            1fr;
    }


    .detail-item-wide {
        grid-column:
            auto;
    }


    .information-grid {
        gap:
            40px;
    }


    .information-item:first-child::after {
        display:
            none;
    }


    .information-item:first-child {
        padding-bottom:
            40px;

        border-bottom:
            1px
            solid
            var(--primary-light);
    }


    .photo-grid {
        grid-template-columns:
            repeat(
                2,
                1fr
            );
    }


    .photo-item:nth-child(even) {
        transform:
            none;
    }


    .dress-code-palette {
        gap:
            18px;
    }


    .dress-color-circle {
        width:
            60px;

        height:
            60px;
    }

}


/* =========================================================
   Mobile
========================================================= */

@media (max-width: 500px) {

    .gate-content {
        padding:
            max(
                18px,
                env(safe-area-inset-top)
            )
            13px
            max(
                18px,
                env(safe-area-inset-bottom)
            );
    }


    .gate-monogram-row {
        grid-template-columns:
            1fr
            58px
            1fr;

        gap:
            7px;
    }


    .gate-monogram-row p {
        font-size:
            10px;

        letter-spacing:
            0.17em;
    }


    .monogram-logo {
        width:
            58px;

        height:
            58px;
    }


    .gate-main-invitation {
        font-size:
            11px;

        letter-spacing:
            0.12em;
    }


    .gate-english-invitation {
        font-size:
            10px;

        letter-spacing:
            0.2em;
    }


    .gate-name-kevin {
        margin-right:
            32px;

        font-size:
            38px;
    }


    .gate-name-coco {
        margin-left:
            40px;

        font-size:
            49px;
    }


    .envelope-button {
        width:
            min(
                310px,
                80vw
            );
    }


    .envelope-front-logo {
        width:
            50px;

        height:
            50px;

        top:
            59%;
    }


    .hero-section,
    .hero-content {
        min-height:
            88svh;
    }


    .hero-content {
        padding:
            50px
            16px;
    }


    .hero-card {
        width:
            100%;

        padding:
            38px
            5px;
    }


    .hero-couple-title {
        font-size:
            32px;

        letter-spacing:
            0.08em;
    }


    .hero-couple-title em {
        margin:
            0
            5px;
    }


    .hero-date {
        font-size:
            17px;

        letter-spacing:
            2px;
    }


    .hero-date-line2 {
        font-size:
            16px;

        white-space:
            nowrap;
    }


    .hero-invitation-zh {
        font-size:
            13px;

        line-height:
            1.9;
    }


    .hero-invitation-en {
        font-size:
            12px;
    }


    .desktop-break {
        display:
            none;
    }


    .countdown-section,
    .content-section,
    .moments-section,
    .rsvp-section {
        padding-top:
            78px;

        padding-bottom:
            78px;
    }


    .section-heading h2 {
        font-size:
            28px;

        letter-spacing:
            3px;
    }


    .editorial-image-frame {
        margin-bottom:
            44px;
    }


    .detail-grid {
        gap:
            0;
    }


    .detail-item {
        padding:
            24px
            5px
            32px;
    }


    .detail-item-wide {
        padding-top:
            36px;
    }


    /* =============================================
       Dress Code 手機仍維持五個並排
    ============================================= */

    .dress-code-section {
        margin-top:
            62px;

        padding-top:
            44px;
    }


    .dress-code-heading h3 {
        font-size:
            23px;
    }


    .dress-code-introduction {
        font-size:
            13px;
    }


    .dress-code-introduction-en {
        font-size:
            12px;
    }


    .dress-code-palette {
        width:
            100%;

        gap:
            5px;

        margin-top:
            28px;
    }


    .dress-color-item {
        flex:
            1;

        min-width:
            0;
    }


    .dress-color-circle {
        width:
            clamp(
                43px,
                12vw,
                52px
            );

        height:
            clamp(
                43px,
                12vw,
                52px
            );
    }


    .dress-color-item p {
        margin-top:
            8px;

        font-size:
            11px;
    }


    .dress-color-item span {
        font-size:
            8px;

        letter-spacing:
            0;
    }


    .timeline-board-title {
        gap:
            12px;
    }


    .timeline-board-icon {
        width:
            42px;

        height:
            42px;

        font-size:
            22px;
    }


    .timeline-board-heading {
        gap:
            11px;
    }


    .timeline-board-heading span {
        font-size:
            15px;

        letter-spacing:
            3px;
    }


    .timeline-board-heading h3 {
        font-size:
            21px;

        letter-spacing:
            3px;
    }


    .timeline-item {
        grid-template-columns:
            58px
            1fr;

        gap:
            10px;
    }


    .timeline-dot {
        width:
            42px;

        height:
            42px;

        font-size:
            18px;
    }


    .timeline-line {
        top:
            42px;
    }


    .timeline-title {
        font-size:
            16px;
    }


    .timeline-subtitle {
        font-size:
            14px;
    }


    .map-container iframe {
        height:
            290px;
    }


    .photo-grid {
        gap:
            8px;
    }


    .rsvp-inner {
        padding:
            10px
            4px
            0;
    }


    .rsvp-kevin {
        font-size:
            40px;
    }


    .rsvp-coco {
        font-size:
            50px;
    }


    .submit-btn {
        width:
            100%;
    }

}


/* =========================================================
   Low-height Mobile
========================================================= */

@media
    (max-height: 720px)
    and
    (max-width: 500px) {

    .gate-title {
        margin-bottom:
            8px;
    }


    .gate-monogram-row {
        margin-bottom:
            10px;
    }


    .gate-couple-names {
        margin-top:
            7px;

        margin-bottom:
            12px;
    }


    .envelope-button {
        width:
            min(
                270px,
                72vw
            );
    }


    .gate-instruction {
        margin-top:
            10px;
    }

}


/* =========================================================
   Reduced Motion
========================================================= */

@media
    (prefers-reduced-motion: reduce) {

    *,
    *::before,
    *::after {
        animation-duration:
            0.01ms !important;

        animation-iteration-count:
            1 !important;

        transition-duration:
            0.01ms !important;
    }

}