"use strict";

/* =========================================================
   Firebase 設定
========================================================= */

const firebaseConfig = {
    apiKey:
        "AIzaSyAsSnOUE0WyuWhC62njgfEW8j6NyZHDhzI",

    authDomain:
        "weddingseating-4a476.firebaseapp.com",

    databaseURL:
        "https://weddingseating-4a476-default-rtdb.firebaseio.com",

    projectId:
        "weddingseating-4a476",

    storageBucket:
        "weddingseating-4a476.firebasestorage.app",

    messagingSenderId:
        "1055948896345",

    appId:
        "1:1055948896345:web:16b5be9fd192151f851948",

    measurementId:
        "G-XDE62910SE"
};

let database = null;

try {
    if (
        typeof firebase === "undefined" ||
        typeof firebase.initializeApp !== "function"
    ) {
        throw new Error(
            "Firebase SDK 尚未正確載入。"
        );
    }

    if (!firebase.apps.length) {
        firebase.initializeApp(
            firebaseConfig
        );
    }

    database =
        firebase.database();

    console.log(
        "Firebase Realtime Database 初始化成功。"
    );
} catch (error) {
    console.error(
        "Firebase 初始化失敗：",
        error
    );
}

/* =========================================================
   婚禮場次設定
========================================================= */

const weddingConfig = {
    defaultLocation:
        "tainan",

    getCurrentLocation() {
        const urlParams =
            new URLSearchParams(
                window.location.search
            );

        const requestedLocation =
            urlParams.get("loc");

        if (
            requestedLocation &&
            this.events[requestedLocation]
        ) {
            return requestedLocation;
        }

        return this.defaultLocation;
    },

    events: {
        tainan: {
            title:
                "Kevin & Coco",

            browserTitle:
                "Kevin & Coco's Wedding - 台南場",

            date:
                "2027年01月17日（星期日）12:00",

            countdownTarget:
                "2027-01-17T12:00:00+08:00",

            venueName:
                "台南晶英酒店",

            venueAddress:
                "台南市中西區和意路1號",

            venueDetail: `
                <p>
                    <strong>婚宴時間：</strong>
                    12:00
                </p>
            `,

            noticeText:
                "",

            coverImage:
                "./images/DJI_20250929143417_0165_D.JPG",

            galleryImages: [
                "./images/DJI_20250929143417_0165_D.JPG",
                "./images/DJI_20250929143427_0169_D.JPG",
                "./images/S__19112005.jpg"
            ],

            timelineImage:
                "./images/timeline-tainan.jpg",

            timelineImageAlt:
                "Kevin 與 Coco 台南場婚禮時程表",

            mapEmbedSrc:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.9815295554013!2d120.19685391161538!3d22.987706679111458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e767c77f6350f%3A0x802cfbc73a87af85!2z5Y-w5Y2X5pm26Iux6YWS5bqXIChTaWxrcyBQbGFjZSBUYWluYW4p!5e0!3m2!1szh-TW!2stw!4v1785570947869!5m2!1szh-TW!2stw",

            googleMapUrl:
                "https://www.google.com/maps/search/?api=1&query=%E5%8F%B0%E5%8D%97%E6%99%B6%E8%8B%B1%E9%85%92%E5%BA%97",

            trafficInfo: `
                <p>
                    <strong>高鐵：</strong>
                    搭乘高鐵至高鐵台南站，可轉乘高鐵快捷公車
                    H31，於「小西門站」下車。
                </p>

                <p>
                    <strong>台鐵：</strong>
                    抵達台南火車站後，可轉乘計程車前往，
                    車程約 10 分鐘。
                </p>

                <p>
                    <strong>自行開車：</strong>
                    可使用上方 Google Maps 導航至
                    台南晶英酒店。
                </p>
            `,

            parkingInfo: `
                <p>
                    飯店設有地下停車場，
                    請依現場標示進入停車場。
                </p>

                <p>
                    婚宴賓客的停車折抵方式，
                    請依婚宴當日飯店櫃台及現場人員指示辦理。
                </p>
            `,

            formToggles: {
                showCeremony:
                    false
            }
        },

        nantou: {
            title:
                "Kevin & Coco",

            browserTitle:
                "Kevin & Coco's Wedding - 南投場",

            date:
                "2027年01月24日（星期日）12:00",

            countdownTarget:
                "2027-01-24T12:00:00+08:00",

            venueName:
                "日月潭涵碧樓",

            venueAddress:
                "南投縣魚池鄉中興路142號",

            venueDetail: `
                <p>
                    <strong>證婚地點：</strong>
                    8F 星光露台
                </p>

                <p>
                    <strong>用餐地點：</strong>
                    7F 湖光軒
                </p>
            `,

            noticeText:
                "溫馨提醒：本場次謝絕禮金，您的到來就是最好的祝福！",

            coverImage:
                "./images/DJI_20250929143417_0165_D.JPG",

            galleryImages: [
                "./images/S__19112027_0.jpg",
                "./images/S__19112034_0.jpg",
                "./images/DJI_20250929143417_0165_D.JPG",
                "./images/DJI_20250929143427_0169_D.JPG"
            ],

            timelineImage:
                "./images/timeline-nantou.jpg",

            timelineImageAlt:
                "Kevin 與 Coco 南投涵碧樓婚禮時程表",

            mapEmbedSrc:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.750948355145!2d120.90602371163745!3d23.862975978504466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468d60f0d7e1f0b%3A0xa748afffa2011207!2z5pel5pyI5r2t5ra156Kn5qiT!5e0!3m2!1szh-TW!2stw!4v1785571059341!5m2!1szh-TW!2stw",

            googleMapUrl:
                "https://www.google.com/maps/search/?api=1&query=%E6%97%A5%E6%9C%88%E6%BD%AD%E6%B6%B5%E7%A2%A7%E6%A8%93",

            trafficInfo: `
                <p>
                    <strong>南投客運：</strong>
                    搭乘南投客運由台中干城車站發車，
                    經台中火車站、高鐵台中烏日站、埔里至日月潭，
                    約每小時一班車。
                </p>

                <p>
                    詳細時刻表請聯絡南投客運埔里站：
                    <a href="tel:0492984031">
                        049-2984031
                    </a>。
                </p>

                <p>
                    抵達日月潭車站終點後
                    （即水社遊客中心），
                    步行約 15 分鐘即可抵達涵碧樓。
                </p>

                <p>
                    <strong>自行開車：</strong>
                    行駛國道六號，由愛蘭交流道下交流道後，
                    沿台 21 線往日月潭方向行駛。
                </p>

                <p>
                    山區假日可能出現車流，
                    建議預留較充裕的行車時間。
                </p>
            `,

            parkingInfo: `
                <p>
                    抵達涵碧樓飯店入口後，
                    請依現場服務人員指示辦理停車或代客泊車。
                </p>

                <p>
                    婚宴賓客的停車安排及費用，
                    請以婚宴當日飯店現場公告為準。
                </p>
            `,

            formToggles: {
                showCeremony:
                    true
            }
        }
    }
};

/* =========================================================
   DOM 輔助函式
========================================================= */

function getElement(id) {
    const element =
        document.getElementById(id);

    if (!element) {
        console.warn(
            `找不到頁面元素：#${id}`
        );
    }

    return element;
}

function setText(
    id,
    value
) {
    const element =
        getElement(id);

    if (element) {
        element.textContent =
            value;
    }
}

function setHtml(
    id,
    value
) {
    const element =
        getElement(id);

    if (element) {
        element.innerHTML =
            value;
    }
}

/* =========================================================
   頁面基本資訊
========================================================= */

function renderBasicInformation(
    config,
    currentLocation
) {
    document.title =
        config.browserTitle;

    setText(
        "page-title",
        config.title
    );

    setText(
        "wedding-date",
        config.date
    );

    setText(
        "wedding-location",
        `${config.venueName}｜${config.venueAddress}`
    );

    setText(
        "venue-name",
        config.venueName
    );

    setText(
        "venue-address",
        config.venueAddress
    );

    setHtml(
        "venue-detail",
        config.venueDetail
    );

    setHtml(
        "traffic-info",
        config.trafficInfo
    );

    setHtml(
        "parking-info",
        config.parkingInfo
    );

    const formLocationInput =
        getElement(
            "form-wedding-location"
        );

    if (formLocationInput) {
        formLocationInput.value =
            currentLocation;
    }

    const googleMapLink =
        getElement(
            "google-map-link"
        );

    if (googleMapLink) {
        googleMapLink.href =
            config.googleMapUrl;
    }
}

/* =========================================================
   首頁背景照片
========================================================= */

function renderHeroImage(config) {
    const hero =
        getElement("hero-bg");

    if (!hero) {
        return;
    }

    const preloadImage =
        new Image();

    preloadImage.onload = () => {
        hero.style.backgroundImage =
            `url("${config.coverImage}")`;
    };

    preloadImage.onerror = () => {
        console.error(
            `首頁背景圖片載入失敗：${config.coverImage}`
        );

        hero.style.backgroundImage =
            "none";
    };

    preloadImage.src =
        config.coverImage;
}

/* =========================================================
   公告
========================================================= */

function renderNotice(config) {
    const noticeSection =
        getElement(
            "notice-section"
        );

    if (!noticeSection) {
        return;
    }

    const noticeText =
        String(
            config.noticeText || ""
        ).trim();

    if (noticeText) {
        noticeSection.textContent =
            noticeText;

        noticeSection.hidden =
            false;
    } else {
        noticeSection.textContent =
            "";

        noticeSection.hidden =
            true;
    }
}

/* =========================================================
   婚禮時程表圖片
========================================================= */

function renderTimelineImage(config) {
    const timelineImage =
        getElement(
            "timeline-image"
        );

    const errorMessage =
        getElement(
            "timeline-image-error"
        );

    if (
        !timelineImage ||
        !errorMessage
    ) {
        return;
    }

    timelineImage.hidden =
        false;

    errorMessage.hidden =
        true;

    timelineImage.alt =
        config.timelineImageAlt;

    timelineImage.onload = () => {
        timelineImage.hidden =
            false;

        errorMessage.hidden =
            true;
    };

    timelineImage.onerror = () => {
        console.error(
            `婚禮時程表圖片載入失敗：${config.timelineImage}`
        );

        timelineImage.hidden =
            true;

        errorMessage.hidden =
            false;
    };

    timelineImage.src =
        config.timelineImage;
}

/* =========================================================
   Google Maps
========================================================= */

function renderMap(config) {
    const iframe =
        getElement(
            "map-iframe"
        );

    if (!iframe) {
        return;
    }

    iframe.src =
        config.mapEmbedSrc;

    iframe.title =
        `${config.venueName} Google Maps`;
}

/* =========================================================
   相片藝廊
========================================================= */

function renderGallery(config) {
    const photoGrid =
        getElement(
            "photo-grid"
        );

    const lightbox =
        getElement(
            "lightbox"
        );

    const lightboxImage =
        getElement(
            "lightbox-img"
        );

    const closeButton =
        getElement(
            "close-lightbox"
        );

    if (
        !photoGrid ||
        !lightbox ||
        !lightboxImage ||
        !closeButton
    ) {
        return;
    }

    photoGrid.innerHTML =
        "";

    function openLightbox(
        imageSource,
        imageAlt
    ) {
        lightboxImage.src =
            imageSource;

        lightboxImage.alt =
            imageAlt;

        lightbox.hidden =
            false;

        document.body.style.overflow =
            "hidden";

        closeButton.focus();
    }

    function closeLightbox() {
        lightbox.hidden =
            true;

        lightboxImage.src =
            "";

        document.body.style.overflow =
            "";
    }

    config.galleryImages.forEach(
        (
            imageSource,
            index
        ) => {
            const image =
                document.createElement(
                    "img"
                );

            image.src =
                imageSource;

            image.alt =
                `Kevin 與 Coco 婚禮照片 ${index + 1}`;

            image.className =
                "photo-item";

            image.loading =
                "lazy";

            image.decoding =
                "async";

            image.tabIndex =
                0;

            image.addEventListener(
                "click",
                () => {
                    openLightbox(
                        image.src,
                        image.alt
                    );
                }
            );

            image.addEventListener(
                "keydown",
                (event) => {
                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {
                        event.preventDefault();

                        openLightbox(
                            image.src,
                            image.alt
                        );
                    }
                }
            );

            image.addEventListener(
                "error",
                () => {
                    console.error(
                        `照片載入失敗：${imageSource}`
                    );

                    image.remove();

                    if (
                        photoGrid.children.length === 0
                    ) {
                        const message =
                            document.createElement(
                                "p"
                            );

                        message.className =
                            "photo-error-message";

                        message.textContent =
                            "照片目前無法載入，請稍後重新整理頁面。";

                        photoGrid.appendChild(
                            message
                        );
                    }
                }
            );

            photoGrid.appendChild(
                image
            );
        }
    );

    closeButton.addEventListener(
        "click",
        closeLightbox
    );

    lightbox.addEventListener(
        "click",
        (event) => {
            if (
                event.target ===
                lightbox
            ) {
                closeLightbox();
            }
        }
    );

    document.addEventListener(
        "keydown",
        (event) => {
            if (
                event.key === "Escape" &&
                !lightbox.hidden
            ) {
                closeLightbox();
            }
        }
    );
}

/* =========================================================
   倒數計時
========================================================= */

function startCountdown(config) {
    const countdownContainer =
        getElement(
            "countdown-container"
        );

    const daysElement =
        getElement(
            "cd-days"
        );

    const hoursElement =
        getElement(
            "cd-hours"
        );

    const minutesElement =
        getElement(
            "cd-mins"
        );

    const secondsElement =
        getElement(
            "cd-secs"
        );

    if (
        !countdownContainer ||
        !daysElement ||
        !hoursElement ||
        !minutesElement ||
        !secondsElement
    ) {
        return;
    }

    const targetTime =
        new Date(
            config.countdownTarget
        ).getTime();

    if (
        !Number.isFinite(
            targetTime
        )
    ) {
        countdownContainer.innerHTML = `
            <div class="countdown-message">
                婚禮日期設定錯誤
            </div>
        `;

        console.error(
            `無效的婚禮時間：${config.countdownTarget}`
        );

        return;
    }

    let timerId =
        null;

    function updateCountdown() {
        const remainingTime =
            targetTime -
            Date.now();

        if (
            remainingTime <= 0
        ) {
            if (
                timerId !== null
            ) {
                window.clearInterval(
                    timerId
                );
            }

            countdownContainer.innerHTML = `
                <div class="countdown-message">
                    婚禮已經開始囉！
                </div>
            `;

            return;
        }

        const oneSecond =
            1000;

        const oneMinute =
            oneSecond * 60;

        const oneHour =
            oneMinute * 60;

        const oneDay =
            oneHour * 24;

        const days =
            Math.floor(
                remainingTime /
                oneDay
            );

        const hours =
            Math.floor(
                (
                    remainingTime %
                    oneDay
                ) /
                oneHour
            );

        const minutes =
            Math.floor(
                (
                    remainingTime %
                    oneHour
                ) /
                oneMinute
            );

        const seconds =
            Math.floor(
                (
                    remainingTime %
                    oneMinute
                ) /
                oneSecond
            );

        daysElement.textContent =
            String(days).padStart(
                2,
                "0"
            );

        hoursElement.textContent =
            String(hours).padStart(
                2,
                "0"
            );

        minutesElement.textContent =
            String(minutes).padStart(
                2,
                "0"
            );

        secondsElement.textContent =
            String(seconds).padStart(
                2,
                "0"
            );
    }

    updateCountdown();

    timerId =
        window.setInterval(
            updateCountdown,
            1000
        );
}

/* =========================================================
   表單欄位控制
========================================================= */

function setFieldVisibility(
    element,
    visible
) {
    if (!element) {
        return;
    }

    element.hidden =
        !visible;

    const controls =
        element.querySelectorAll(
            "input, select, textarea"
        );

    controls.forEach(
        (control) => {
            if (visible) {
                if (
                    control.dataset
                        .originallyRequired ===
                    "true"
                ) {
                    control.required =
                        true;
                }
            } else {
                control.required =
                    false;
            }
        }
    );
}

function prepareFormControls(config) {
    const form =
        getElement(
            "rsvp-form"
        );

    const attendanceSelect =
        getElement(
            "attendance"
        );

    const attendanceDetails =
        getElement(
            "attendance-detail-fields"
        );

    const ceremonyField =
        getElement(
            "field-ceremony"
        );

    const dietarySelect =
        getElement(
            "dietary-type"
        );

    const vegetarianCountField =
        getElement(
            "field-veg-count"
        );

    const vegetarianCountInput =
        getElement(
            "veg-count"
        );

    if (
        !form ||
        !attendanceSelect ||
        !attendanceDetails ||
        !ceremonyField ||
        !dietarySelect ||
        !vegetarianCountField ||
        !vegetarianCountInput
    ) {
        return;
    }

    form
        .querySelectorAll(
            "input, select, textarea"
        )
        .forEach(
            (control) => {
                if (
                    control.dataset
                        .originallyRequired ===
                    undefined
                ) {
                    control.dataset
                        .originallyRequired =
                        String(
                            control.required
                        );
                }
            }
        );

    function updateAttendanceFields() {
        const isAttending =
            attendanceSelect.value ===
            "yes";

        setFieldVisibility(
            attendanceDetails,
            isAttending
        );

        if (isAttending) {
            setFieldVisibility(
                ceremonyField,
                config.formToggles
                    .showCeremony
            );
        }
    }

    function updateVegetarianField() {
        const dietaryType =
            dietarySelect.value;

        const shouldShow =
            dietaryType ===
                "all_veg" ||
            dietaryType ===
                "mixed";

        setFieldVisibility(
            vegetarianCountField,
            shouldShow
        );

        if (!shouldShow) {
            vegetarianCountInput.value =
                "0";
        }
    }

    if (
        attendanceSelect.dataset
            .listenerBound !==
        "true"
    ) {
        attendanceSelect.addEventListener(
            "change",
            updateAttendanceFields
        );

        attendanceSelect.dataset
            .listenerBound =
            "true";
    }

    if (
        dietarySelect.dataset
            .listenerBound !==
        "true"
    ) {
        dietarySelect.addEventListener(
            "change",
            updateVegetarianField
        );

        dietarySelect.dataset
            .listenerBound =
            "true";
    }

    updateAttendanceFields();
    updateVegetarianField();
}

/* =========================================================
   整理 RSVP 資料
========================================================= */

function buildRsvpData(
    form,
    currentLocation,
    config
) {
    const formData =
        new FormData(form);

    const isAttending =
        formData.get(
            "isAttending"
        ) === "yes";

    const attendCount =
        isAttending
            ? Number(
                formData.get(
                    "attendCount"
                ) || 0
            )
            : 0;

    const childSeatCount =
        isAttending
            ? Number(
                formData.get(
                    "childSeatCount"
                ) || 0
            )
            : 0;

    const childTablewareCount =
        isAttending
            ? Number(
                formData.get(
                    "childTablewareCount"
                ) || 0
            )
            : 0;

    const vegetarianCount =
        isAttending
            ? Number(
                formData.get(
                    "vegCount"
                ) || 0
            )
            : 0;

    return {
        weddingLocation:
            currentLocation,

        weddingVenue:
            config.venueName,

        weddingDate:
            config.date,

        guestName:
            String(
                formData.get(
                    "guestName"
                ) || ""
            ).trim(),

        relation:
            String(
                formData.get(
                    "relation"
                ) || ""
            ).trim(),

        phone:
            String(
                formData.get(
                    "phone"
                ) || ""
            ).trim(),

        isAttending:
            isAttending
                ? "是"
                : "否",

        attendCeremony:
            isAttending &&
            config.formToggles
                .showCeremony
                ? (
                    formData.get(
                        "attendCeremony"
                    ) === "yes"
                        ? "是"
                        : "否"
                )
                : "不適用",

        attendCount:
            attendCount,

        childSeatCount:
            childSeatCount,

        childTablewareCount:
            childTablewareCount,

        dietaryType:
            isAttending
                ? String(
                    formData.get(
                        "dietaryType"
                    ) || ""
                )
                : "不適用",

        vegetarianCount:
            vegetarianCount,

        foodAllergy:
            isAttending
                ? String(
                    formData.get(
                        "foodAllergy"
                    ) || ""
                ).trim()
                : "",

        message:
            String(
                formData.get(
                    "message"
                ) || ""
            ).trim(),

        submittedAtServer:
            firebase.database
                .ServerValue
                .TIMESTAMP,

        sourcePage:
            window.location.href,

        formVersion:
            "20260803-02"
    };
}

/* =========================================================
   表單資料驗證
========================================================= */

function validateRsvpData(data) {
    if (!data.guestName) {
        return "請填寫您的姓名。";
    }

    if (!data.relation) {
        return "請選擇您與新人的關係。";
    }

    if (!data.phone) {
        return "請填寫聯絡電話。";
    }

    if (
        data.isAttending === "是" &&
        (
            !Number.isInteger(
                data.attendCount
            ) ||
            data.attendCount < 1 ||
            data.attendCount > 20
        )
    ) {
        return "總出席人數需為 1 至 20 人，並包含兒童人數。";
    }

    if (
        data.isAttending === "是" &&
        (
            !Number.isInteger(
                data.childSeatCount
            ) ||
            data.childSeatCount < 0 ||
            data.childSeatCount >
                data.attendCount
        )
    ) {
        return "兒童座椅數量不可大於總出席人數。";
    }

    if (
        data.isAttending === "是" &&
        (
            !Number.isInteger(
                data.childTablewareCount
            ) ||
            data.childTablewareCount < 0 ||
            data.childTablewareCount >
                data.attendCount
        )
    ) {
        return "兒童餐具數量不可大於總出席人數。";
    }

    if (
        data.isAttending === "是" &&
        (
            !Number.isInteger(
                data.vegetarianCount
            ) ||
            data.vegetarianCount < 0 ||
            data.vegetarianCount >
                data.attendCount
        )
    ) {
        return "素食人數不可大於總出席人數。";
    }

    return "";
}

/* =========================================================
   寫入 Firebase
========================================================= */

async function submitRsvpData(data) {
    if (!database) {
        throw new Error(
            "Firebase Realtime Database 尚未初始化。"
        );
    }

    const location =
        data.weddingLocation;

    if (
        location !== "tainan" &&
        location !== "nantou"
    ) {
        throw new Error(
            "無效的婚禮場次。"
        );
    }

    const responseReference =
        database.ref(
            `rsvpResponses/${location}`
        );

    const newResponseReference =
        responseReference.push();

    await newResponseReference.set(
        data
    );

    return {
        success:
            true,

        responseId:
            newResponseReference.key
    };
}

/* =========================================================
   表單送出
========================================================= */

function setupRsvpForm(
    currentLocation,
    config
) {
    const form =
        getElement(
            "rsvp-form"
        );

    const submitButton =
        getElement(
            "submit-button"
        );

    const statusElement =
        getElement(
            "form-status"
        );

    if (
        !form ||
        !submitButton ||
        !statusElement
    ) {
        return;
    }

    form.addEventListener(
        "submit",
        async (event) => {
            event.preventDefault();

            statusElement.textContent =
                "";

            statusElement.className =
                "form-status";

            if (
                !form.checkValidity()
            ) {
                form.reportValidity();
                return;
            }

            const data =
                buildRsvpData(
                    form,
                    currentLocation,
                    config
                );

            const validationError =
                validateRsvpData(
                    data
                );

            if (validationError) {
                statusElement.textContent =
                    validationError;

                statusElement.className =
                    "form-status error";

                return;
            }

            console.log(
                "準備寫入 Firebase 的 RSVP：",
                data
            );

            submitButton.disabled =
                true;

            submitButton.textContent =
                "送出中...";

            try {
                const result =
                    await submitRsvpData(
                        data
                    );

                console.log(
                    "RSVP 寫入成功：",
                    result
                );

                statusElement.textContent =
                    "回覆已成功送出，謝謝您的填寫！";

                statusElement.className =
                    "form-status success";

                form.reset();

                const locationInput =
                    getElement(
                        "form-wedding-location"
                    );

                if (locationInput) {
                    locationInput.value =
                        currentLocation;
                }

                prepareFormControls(
                    config
                );
            } catch (error) {
                console.error(
                    "RSVP 送出失敗：",
                    error
                );

                let errorMessage =
                    "資料送出失敗，請稍後再試，或直接聯絡新人。";

                const errorCode =
                    String(
                        error &&
                        error.code
                            ? error.code
                            : ""
                    ).toLowerCase();

                const errorText =
                    String(
                        error &&
                        error.message
                            ? error.message
                            : ""
                    ).toLowerCase();

                if (
                    errorCode.includes(
                        "permission"
                    ) ||
                    errorText.includes(
                        "permission_denied"
                    ) ||
                    errorText.includes(
                        "permission denied"
                    )
                ) {
                    errorMessage =
                        "資料庫拒絕寫入，請確認 Firebase Realtime Database Rules 已正確發布。";
                } else if (!database) {
                    errorMessage =
                        "Firebase 尚未完成初始化，請檢查網路連線及 Firebase SDK。";
                }

                statusElement.textContent =
                    errorMessage;

                statusElement.className =
                    "form-status error";
            } finally {
                submitButton.disabled =
                    false;

                submitButton.textContent =
                    "送出回覆";
            }
        }
    );
}

/* =========================================================
   頁面初始化
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {
        const currentLocation =
            weddingConfig
                .getCurrentLocation();

        const config =
            weddingConfig
                .events[
                    currentLocation
                ];

        if (!config) {
            window.location.replace(
                `?loc=${weddingConfig.defaultLocation}`
            );

            return;
        }

        renderBasicInformation(
            config,
            currentLocation
        );

        renderHeroImage(
            config
        );

        renderNotice(
            config
        );

        renderTimelineImage(
            config
        );

        renderMap(
            config
        );

        renderGallery(
            config
        );

        startCountdown(
            config
        );

        prepareFormControls(
            config
        );

        setupRsvpForm(
            currentLocation,
            config
        );
    }
);