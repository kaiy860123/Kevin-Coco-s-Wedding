"use strict";

/* =========================================================
   Firebase
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
   Google Form
========================================================= */

const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSc08XmBI8W6_rmTZzwnLS3qi8GjLOADrR1Kwx_82zTKs2z1kw/formResponse";

const GOOGLE_FORM_ENTRY = {
    weddingLocation:
        "entry.1643825659",

    weddingVenue:
        "entry.205515836",

    weddingDate:
        "entry.444740231",

    guestName:
        "entry.1010437169",

    relation:
        "entry.15718624",

    phone:
        "entry.1276247041",

    isAttending:
        "entry.203723826",

    attendCeremony:
        "entry.1034257855",

    attendCount:
        "entry.1492633836",

    childSetCount:
        "entry.1396423463",

    dietaryType:
        "entry.573487631",

    vegetarianCount:
        "entry.645844573",

    foodAllergy:
        "entry.1564798313",

    message:
        "entry.666038148",

    formVersion:
        "entry.365524471"
};

/* =========================================================
   共用圖片
========================================================= */

const sharedImages = {
    hero:
        "./images/hero-cover.jpg",

    moments: [
        "./images/moment-01.jpg",
        "./images/moment-02.jpg",
        "./images/moment-03.jpg",
        "./images/moment-04.jpg"
    ]
};

/* =========================================================
   婚禮場次
========================================================= */

const weddingConfig = {
    defaultLocation:
        "tainan",

    getCurrentLocation() {
        const params =
            new URLSearchParams(
                window.location.search
            );

        const requestedLocation =
            params.get("loc");

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
            browserTitle:
                "Kevin & Coco's Wedding - 台南場",

            dateZh:
                "2027 年 1 月 17 日（星期日）",

            dateEn:
                "Sunday, January 17, 2027",

            heroDate:
                "January 17 · 2027 · Tainan",

            countdownTarget:
                "2027-01-17T12:00:00+08:00",

            rsvpDeadline:
                "2026-12-31T23:59:59+08:00",

            rsvpDeadlineZh:
                "2026 年 12 月 31 日 23:59",

            rsvpDeadlineEn:
                "December 31, 2026 at 11:59 PM",

            venueName:
                "台南晶英酒店",

            venueAddress:
                "台南市中西區和意路 1 號",

            venueDetail: `
                <p>
                    <strong>宴會廳：</strong>
                    2F 明倫＋仁德廳
                </p>

                <p class="en-line">
                    Ballroom: 2F Minglun & Rende Ballroom
                </p>
            `,

            noticeZh:
                "",

            noticeEn:
                "",

            eventImage:
                "./images/event-tainan.jpg",

            eventImageAlt:
                "Kevin 與 Coco 台南場婚禮資訊 Tainan Wedding Information",

            timelineImage:
                "./images/timeline-tainan.jpg",

            timelineAlt:
                "Kevin 與 Coco 台南場婚禮時程表 Tainan Wedding Timeline",

            googleMapUrl:
                "https://www.google.com/maps/search/?api=1&query=%E5%8F%B0%E5%8D%97%E6%99%B6%E8%8B%B1%E9%85%92%E5%BA%97",

            mapEmbedSrc:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.9815295554013!2d120.19685391161538!3d22.987706679111458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e767c77f6350f%3A0x802cfbc73a87af85!2z5Y-w5Y2X5pm26Iux6YWS5bqXIChTaWxrcyBQbGFjZSBUYWluYW4p!5e0!3m2!1szh-TW!2stw!4v1785570947869!5m2!1szh-TW!2stw",

            trafficInfo: `
                <p>
                    <strong>高鐵：</strong>
                    搭乘高鐵至高鐵台南站，可轉乘高鐵快捷公車 H31，
                    於「小西門站」下車。

                    <span class="en-line">
                        HSR: Take the H31 shuttle bus from Tainan HSR Station
                        and get off at Xiaoximen Station.
                    </span>
                </p>

                <p>
                    <strong>台鐵：</strong>
                    抵達台南火車站後，可轉乘計程車前往，
                    車程約 10 分鐘。

                    <span class="en-line">
                        TRA: A taxi ride from Tainan Railway Station
                        takes approximately 10 minutes.
                    </span>
                </p>

                <p>
                    <strong>自行開車：</strong>
                    可使用上方 Google Maps 導航至台南晶英酒店。

                    <span class="en-line">
                        Driving: Use the Google Maps link above
                        for directions to Silks Place Tainan.
                    </span>
                </p>
            `,

            parkingInfo: `
                <p>
                    餐會提供每台車至多 4 小時停車折抵。

                    <span class="en-line">
                        Wedding guests may receive up to four hours
                        of parking validation per vehicle.
                    </span>
                </p>

                <p>
                    請於離場前依飯店現場指示辦理停車折抵。

                    <span class="en-line">
                        Please follow the hotel's on-site instructions
                        to validate parking before departure.
                    </span>
                </p>
            `,

            formToggles: {
                showCeremony:
                    false
            }
        },

        nantou: {
            browserTitle:
                "Kevin & Coco's Wedding - 南投場",

            dateZh:
                "2027 年 1 月 24 日（星期日）",

            dateEn:
                "Sunday, January 24, 2027",

            heroDate:
                "January 24 · 2027 · Sun Moon Lake",

            countdownTarget:
                "2027-01-24T12:00:00+08:00",

            rsvpDeadline:
                "2026-12-31T23:59:59+08:00",

            rsvpDeadlineZh:
                "2026 年 12 月 31 日 23:59",

            rsvpDeadlineEn:
                "December 31, 2026 at 11:59 PM",

            venueName:
                "日月潭涵碧樓",

            venueAddress:
                "南投縣魚池鄉中興路 142 號",

            venueDetail: `
                <p>
                    <strong>證婚地點：</strong>
                    8F 星光露台
                </p>

                <p class="en-line">
                    Ceremony: 8F Starlight Terrace
                </p>

                <p>
                    <strong>用餐地點：</strong>
                    7F 湖光軒
                </p>

                <p class="en-line">
                    Luncheon: 7F Lakeview Pavilion
                </p>
            `,

            noticeZh:
                "溫馨提醒：本場次謝絕禮金，您的到來就是最好的祝福！",

            noticeEn:
                "No gifts or cash gifts, please. Your presence is the greatest blessing to us.",

            eventImage:
                "./images/event-nantou.jpg",

            eventImageAlt:
                "Kevin 與 Coco 南投場婚禮資訊 Nantou Wedding Information",

            timelineImage:
                "./images/timeline-nantou.jpg",

            timelineAlt:
                "Kevin 與 Coco 南投涵碧樓婚禮時程表 Nantou Wedding Timeline",

            googleMapUrl:
                "https://www.google.com/maps/search/?api=1&query=%E6%97%A5%E6%9C%88%E6%BD%AD%E6%B6%B5%E7%A2%A7%E6%A8%93",

            mapEmbedSrc:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.750948355145!2d120.90602371163745!3d23.862975978504466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468d60f0d7e1f0b%3A0xa748afffa2011207!2z5pel5pyI5r2t5ra156Kn5qiT!5e0!3m2!1szh-TW!2stw!4v1785571059341!5m2!1szh-TW!2stw",

            trafficInfo: `
                <p>
                    <strong>南投客運：</strong>
                    搭乘南投客運由台中干城車站發車，
                    經台中火車站、高鐵台中烏日站、埔里至日月潭，
                    約每小時一班車。

                    <span class="en-line">
                        Nantou Bus departs from Taichung Gancheng Station
                        and travels via Taichung Railway Station,
                        Taichung HSR Station and Puli to Sun Moon Lake.
                        Service is approximately once per hour.
                    </span>
                </p>

                <p>
                    詳細時刻表請聯絡南投客運埔里站：
                    <a href="tel:0492984031">
                        049-2984031
                    </a>。

                    <span class="en-line">
                        For the detailed timetable,
                        contact Nantou Bus Puli Station at 049-2984031.
                    </span>
                </p>

                <p>
                    抵達日月潭車站終點後（即水社遊客中心），
                    步行約 15 分鐘即可抵達涵碧樓。

                    <span class="en-line">
                        From the Sun Moon Lake terminal at Shuishe Visitor Center,
                        The Lalu is approximately a 15-minute walk.
                    </span>
                </p>

                <p>
                    <strong>自行開車：</strong>
                    行駛國道六號，由愛蘭交流道下交流道後，
                    沿台 21 線往日月潭方向行駛。

                    <span class="en-line">
                        Driving: Take National Freeway 6,
                        exit at Ailan Interchange and follow Provincial Highway 21
                        toward Sun Moon Lake.
                    </span>
                </p>
            `,

            parkingInfo: `
                <p>
                    抵達涵碧樓飯店入口後，
                    請依現場服務人員指示辦理停車或代客泊車。

                    <span class="en-line">
                        Upon arrival, please follow staff instructions
                        for parking or valet service.
                    </span>
                </p>

                <p>
                    婚宴賓客的停車安排及費用，
                    請以婚宴當日飯店現場公告為準。

                    <span class="en-line">
                        Parking arrangements and fees are subject
                        to the hotel's event-day instructions.
                    </span>
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
   DOM 輔助
========================================================= */

function getElement(id) {
    return document.getElementById(id);
}

function setText(id, value) {
    const element =
        getElement(id);

    if (element) {
        element.textContent =
            value;
    }
}

function setHtml(id, value) {
    const element =
        getElement(id);

    if (element) {
        element.innerHTML =
            value;
    }
}

/* =========================================================
   信封入口
========================================================= */

function setupInvitationGate(currentLocation) {
    const gate =
        getElement("invitation-gate");

    const envelopeButton =
        getElement("envelope-button");

    if (
        !gate ||
        !envelopeButton
    ) {
        document.documentElement.classList.remove(
            "show-invitation-gate"
        );

        return;
    }

    const shouldShow =
        document.documentElement.classList.contains(
            "show-invitation-gate"
        );

    if (!shouldShow) {
        gate.hidden =
            true;

        gate.setAttribute(
            "aria-hidden",
            "true"
        );

        return;
    }

    gate.hidden =
        false;

    gate.setAttribute(
        "aria-hidden",
        "false"
    );

    const sessionKey =
        `weddingInvitationOpened:${currentLocation}`;

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

    let isOpening =
        false;

    function finishOpening() {
        document.documentElement.classList.remove(
            "show-invitation-gate"
        );

        gate.hidden =
            true;

        gate.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow =
            "";

        const weddingContent =
            getElement(
                "wedding-content"
            );

        if (weddingContent) {
            weddingContent.focus({
                preventScroll: true
            });
        }

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto"
        });
    }

    function openInvitation() {
        if (isOpening) {
            return;
        }

        isOpening =
            true;

        envelopeButton.disabled =
            true;

        try {
            window.sessionStorage.setItem(
                sessionKey,
                "true"
            );
        } catch (error) {
            console.warn(
                "無法使用 sessionStorage：",
                error
            );
        }

        gate.classList.add(
            "is-opening"
        );

        if (reducedMotion) {
            window.setTimeout(
                () => {
                    gate.classList.add(
                        "is-leaving"
                    );
                },
                80
            );

            window.setTimeout(
                finishOpening,
                180
            );

            return;
        }

        window.setTimeout(
            () => {
                gate.classList.add(
                    "is-leaving"
                );
            },
            1550
        );

        window.setTimeout(
            finishOpening,
            2150
        );
    }

    envelopeButton.addEventListener(
        "click",
        openInvitation
    );
}

/* =========================================================
   Our Moments 圖片燈箱
========================================================= */

function setupLightbox() {
    const lightbox =
        getElement("lightbox");

    const lightboxImage =
        getElement("lightbox-img");

    const closeButton =
        getElement("close-lightbox");

    if (
        !lightbox ||
        !lightboxImage ||
        !closeButton
    ) {
        return null;
    }

    function openImage(
        source,
        alternativeText
    ) {
        lightboxImage.src =
            source;

        lightboxImage.alt =
            alternativeText;

        lightbox.hidden =
            false;

        document.body.style.overflow =
            "hidden";

        closeButton.focus();
    }

    function closeImage() {
        lightbox.hidden =
            true;

        lightboxImage.src =
            "";

        document.body.style.overflow =
            "";
    }

    closeButton.addEventListener(
        "click",
        closeImage
    );

    lightbox.addEventListener(
        "click",
        (event) => {
            if (
                event.target ===
                lightbox
            ) {
                closeImage();
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
                closeImage();
            }
        }
    );

    return {
        openImage
    };
}

/* =========================================================
   頁面顯示
========================================================= */

function renderPage(
    config,
    currentLocation,
    lightboxController
) {
    document.title =
        config.browserTitle;

    setHtml(
        "page-title",
        "Kevin <em>&amp;</em> Coco"
    );

    setText(
        "wedding-date",
        config.heroDate
    );

    setText(
        "wedding-location",
        `${config.venueName} · ${config.venueAddress}`
    );

    setText(
        "event-date",
        config.dateZh
    );

    setText(
        "event-date-en",
        config.dateEn
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

    setText(
        "footer-date",
        config.dateEn
    );

    const hero =
        getElement("hero-bg");

    if (hero) {
        hero.style.backgroundImage =
            `url("${sharedImages.hero}")`;
    }

    const locationInput =
        getElement(
            "form-wedding-location"
        );

    if (locationInput) {
        locationInput.value =
            currentLocation;
    }

    const mapLink =
        getElement(
            "google-map-link"
        );

    if (mapLink) {
        mapLink.href =
            config.googleMapUrl;
    }

    const mapIframe =
        getElement(
            "map-iframe"
        );

    if (mapIframe) {
        mapIframe.src =
            config.mapEmbedSrc;

        mapIframe.title =
            `${config.venueName} Google Maps`;
    }

    renderNotice(
        config
    );

    renderEventImage(
        config
    );

    renderTimeline(
        config
    );

    renderMoments(
        lightboxController
    );
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

    if (
        config.noticeZh ||
        config.noticeEn
    ) {
        setText(
            "notice-zh",
            config.noticeZh
        );

        setText(
            "notice-en",
            config.noticeEn
        );

        noticeSection.hidden =
            false;
    } else {
        noticeSection.hidden =
            true;
    }
}

/* =========================================================
   婚禮資訊圖片
========================================================= */

function renderEventImage(config) {
    const image =
        getElement(
            "event-image"
        );

    const errorMessage =
        getElement(
            "event-image-error"
        );

    if (
        !image ||
        !errorMessage
    ) {
        return;
    }

    image.alt =
        config.eventImageAlt;

    image.onload = () => {
        image.hidden =
            false;

        errorMessage.hidden =
            true;
    };

    image.onerror = () => {
        image.hidden =
            true;

        errorMessage.hidden =
            false;

        console.error(
            `婚禮資訊圖片載入失敗：${config.eventImage}`
        );
    };

    image.src =
        config.eventImage;
}

/* =========================================================
   婚禮時程圖片
========================================================= */

function renderTimeline(config) {
    const image =
        getElement(
            "timeline-image"
        );

    const errorMessage =
        getElement(
            "timeline-image-error"
        );

    if (
        !image ||
        !errorMessage
    ) {
        return;
    }

    image.alt =
        config.timelineAlt;

    image.onload = () => {
        image.hidden =
            false;

        errorMessage.hidden =
            true;
    };

    image.onerror = () => {
        image.hidden =
            true;

        errorMessage.hidden =
            false;

        console.error(
            `婚禮時程圖片載入失敗：${config.timelineImage}`
        );
    };

    image.src =
        config.timelineImage;
}

/* =========================================================
   Our Moments
========================================================= */

function renderMoments(
    lightboxController
) {
    const photoGrid =
        getElement(
            "photo-grid"
        );

    if (!photoGrid) {
        return;
    }

    photoGrid.innerHTML =
        "";

    sharedImages.moments.forEach(
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
                `Kevin and Coco moment ${index + 1} · 拾光片刻 ${index + 1}`;

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
                    if (
                        lightboxController
                    ) {
                        lightboxController.openImage(
                            image.src,
                            image.alt
                        );
                    }
                }
            );

            image.addEventListener(
                "keydown",
                (event) => {
                    if (
                        event.key ===
                            "Enter" ||
                        event.key ===
                            " "
                    ) {
                        event.preventDefault();

                        if (
                            lightboxController
                        ) {
                            lightboxController.openImage(
                                image.src,
                                image.alt
                            );
                        }
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
                }
            );

            photoGrid.appendChild(
                image
            );
        }
    );
}

/* =========================================================
   婚禮倒數
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
                婚禮日期設定錯誤<br>
                Invalid wedding date
            </div>
        `;

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
                    婚禮已經開始囉！<br>
                    The celebration has begun!
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

        daysElement.textContent =
            String(
                Math.floor(
                    remainingTime /
                    oneDay
                )
            ).padStart(
                2,
                "0"
            );

        hoursElement.textContent =
            String(
                Math.floor(
                    (
                        remainingTime %
                        oneDay
                    ) /
                    oneHour
                )
            ).padStart(
                2,
                "0"
            );

        minutesElement.textContent =
            String(
                Math.floor(
                    (
                        remainingTime %
                        oneHour
                    ) /
                    oneMinute
                )
            ).padStart(
                2,
                "0"
            );

        secondsElement.textContent =
            String(
                Math.floor(
                    (
                        remainingTime %
                        oneMinute
                    ) /
                    oneSecond
                )
            ).padStart(
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
   RSVP 截止時間
========================================================= */

function setupRsvpDeadline(config) {
    const formWrapper =
        getElement(
            "rsvp-form-wrapper"
        );

    const deadlineNotice =
        getElement(
            "deadline-notice"
        );

    const deadlineDisplay =
        getElement(
            "rsvp-deadline-display"
        );

    const deadlineTimestamp =
        new Date(
            config.rsvpDeadline
        ).getTime();

    if (deadlineDisplay) {
        deadlineDisplay.innerHTML = `
            回覆截止：${config.rsvpDeadlineZh}<br>
            RSVP Deadline: ${config.rsvpDeadlineEn}
        `;
    }

    if (
        !Number.isFinite(
            deadlineTimestamp
        )
    ) {
        console.error(
            `無效的 RSVP 截止時間：${config.rsvpDeadline}`
        );

        return false;
    }

    const deadlinePassed =
        Date.now() >
        deadlineTimestamp;

    if (deadlinePassed) {
        if (formWrapper) {
            formWrapper.hidden =
                true;
        }

        if (deadlineNotice) {
            deadlineNotice.hidden =
                false;
        }

        return true;
    }

    if (formWrapper) {
        formWrapper.hidden =
            false;
    }

    if (deadlineNotice) {
        deadlineNotice.hidden =
            true;
    }

    return false;
}

/* =========================================================
   動態表單欄位
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

    element
        .querySelectorAll(
            "input, select, textarea"
        )
        .forEach(
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

    const dietaryOtherHelp =
        getElement(
            "dietary-other-help"
        );

    const foodAllergyInput =
        getElement(
            "food-allergy"
        );

    if (
        !form ||
        !attendanceSelect ||
        !attendanceDetails ||
        !ceremonyField ||
        !dietarySelect ||
        !vegetarianCountField ||
        !vegetarianCountInput ||
        !dietaryOtherHelp ||
        !foodAllergyInput
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

    function updateDietaryFields() {
        const isAttending =
            attendanceSelect.value ===
            "yes";

        const dietaryType =
            dietarySelect.value;

        const showVegetarianCount =
            isAttending &&
            dietaryType ===
            "all_veg";

        const showOtherHelp =
            isAttending &&
            dietaryType ===
            "other";

        setFieldVisibility(
            vegetarianCountField,
            showVegetarianCount
        );

        dietaryOtherHelp.hidden =
            !showOtherHelp;

        foodAllergyInput.required =
            showOtherHelp;

        if (!showVegetarianCount) {
            vegetarianCountInput.value =
                "0";
        }
    }

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

        updateDietaryFields();
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
            updateDietaryFields
        );

        dietarySelect.dataset
            .listenerBound =
            "true";
    }

    updateAttendanceFields();
}

/* =========================================================
   餐點文字
========================================================= */

function getDietaryTypeLabel(
    dietaryType
) {
    const labels = {
        all_meat:
            "全葷 / Regular Meals",

        all_veg:
            "全素 / All Vegetarian",

        other:
            "其他 / Other",

        not_applicable:
            "不適用 / Not Applicable"
    };

    return (
        labels[dietaryType] ||
        dietaryType ||
        ""
    );
}

/* =========================================================
   整理 RSVP
========================================================= */

function buildRsvpData(
    form,
    currentLocation,
    config
) {
    const formData =
        new FormData(
            form
        );

    const isAttending =
        formData.get(
            "isAttending"
        ) ===
        "yes";

    const dietaryType =
        isAttending
            ? String(
                formData.get(
                    "dietaryType"
                ) || ""
            )
            : "not_applicable";

    return {
        weddingLocation:
            currentLocation,

        weddingVenue:
            config.venueName,

        weddingDate:
            config.dateZh,

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
                ? "是 / Attending"
                : "否 / Not Attending",

        attendCeremony:
            isAttending &&
            config.formToggles
                .showCeremony
                ? (
                    formData.get(
                        "attendCeremony"
                    ) ===
                    "yes"
                        ? "是 / Attending"
                        : "否，僅參加午宴 / Luncheon Only"
                )
                : "不適用 / Not Applicable",

        attendCount:
            isAttending
                ? Number(
                    formData.get(
                        "attendCount"
                    ) || 0
                )
                : 0,

        childSetCount:
            isAttending
                ? Number(
                    formData.get(
                        "childSetCount"
                    ) || 0
                )
                : 0,

        dietaryType:
            dietaryType,

        dietaryTypeLabel:
            getDietaryTypeLabel(
                dietaryType
            ),

        vegetarianCount:
            isAttending &&
            dietaryType ===
                "all_veg"
                ? Number(
                    formData.get(
                        "vegCount"
                    ) || 0
                )
                : 0,

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
            "20260805-02"
    };
}

/* =========================================================
   RSVP 驗證
========================================================= */

function validateRsvpData(data) {
    if (!data.guestName) {
        return (
            "請填寫姓名。 " +
            "Please enter your name."
        );
    }

    if (!data.relation) {
        return (
            "請選擇與新人的關係。 " +
            "Please select your relationship."
        );
    }

    if (!data.phone) {
        return (
            "請填寫聯絡電話。 " +
            "Please enter your phone number."
        );
    }

    const phoneDigits =
        data.phone.replace(
            /\D/g,
            ""
        );

    if (
        phoneDigits.length < 8 ||
        phoneDigits.length > 15
    ) {
        return (
            "請確認聯絡電話格式，例如 0912345678。 " +
            "Please check the phone number format."
        );
    }

    const isAttending =
        data.isAttending.startsWith(
            "是"
        );

    if (
        isAttending &&
        (
            !Number.isInteger(
                data.attendCount
            ) ||
            data.attendCount < 1 ||
            data.attendCount > 20
        )
    ) {
        return (
            "總出席人數需為 1 至 20 人，並包含所有兒童。 " +
            "Guest count must include all adults and children."
        );
    }

    if (
        isAttending &&
        (
            !Number.isInteger(
                data.childSetCount
            ) ||
            data.childSetCount < 0 ||
            data.childSetCount >
                data.attendCount
        )
    ) {
        return (
            "兒童座椅及餐具組數量不可大於總出席人數。 " +
            "Child set count cannot exceed total guest count."
        );
    }

    if (
        isAttending &&
        data.dietaryType ===
            "all_veg" &&
        (
            !Number.isInteger(
                data.vegetarianCount
            ) ||
            data.vegetarianCount < 1 ||
            data.vegetarianCount >
                data.attendCount
        )
    ) {
        return (
            "全素餐點的素食人數需為 1 人以上，且不可大於總出席人數。 " +
            "Vegetarian count must be between 1 and the total guest count."
        );
    }

    if (
        isAttending &&
        data.dietaryType ===
            "other" &&
        !data.foodAllergy
    ) {
        return (
            "選擇其他餐點需求時，請於食物過敏或特殊需求欄位註明。 " +
            "Please describe your meal requirements."
        );
    }

    return "";
}

/* =========================================================
   Firebase 寫入
========================================================= */

async function submitToFirebase(data) {
    if (!database) {
        throw new Error(
            "Firebase Realtime Database 尚未初始化。"
        );
    }

    if (
        data.weddingLocation !==
            "tainan" &&
        data.weddingLocation !==
            "nantou"
    ) {
        throw new Error(
            "無效的婚禮場次。"
        );
    }

    const responseReference =
        database.ref(
            `rsvpResponses/${data.weddingLocation}`
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
   Google Form 寫入
========================================================= */

async function submitToGoogleForm(data) {
    const googleFormData =
        new URLSearchParams();

    googleFormData.append(
        GOOGLE_FORM_ENTRY
            .weddingLocation,
        data.weddingLocation
    );

    googleFormData.append(
        GOOGLE_FORM_ENTRY
            .weddingVenue,
        data.weddingVenue
    );

    googleFormData.append(
        GOOGLE_FORM_ENTRY
            .weddingDate,
        data.weddingDate
    );

    googleFormData.append(
        GOOGLE_FORM_ENTRY
            .guestName,
        data.guestName
    );

    googleFormData.append(
        GOOGLE_FORM_ENTRY
            .relation,
        data.relation
    );

    googleFormData.append(
        GOOGLE_FORM_ENTRY
            .phone,
        data.phone
    );

    googleFormData.append(
        GOOGLE_FORM_ENTRY
            .isAttending,
        data.isAttending
    );

    googleFormData.append(
        GOOGLE_FORM_ENTRY
            .attendCeremony,
        data.attendCeremony
    );

    googleFormData.append(
        GOOGLE_FORM_ENTRY
            .attendCount,
        String(
            data.attendCount
        )
    );

    googleFormData.append(
        GOOGLE_FORM_ENTRY
            .childSetCount,
        String(
            data.childSetCount
        )
    );

    googleFormData.append(
        GOOGLE_FORM_ENTRY
            .dietaryType,
        data.dietaryTypeLabel
    );

    googleFormData.append(
        GOOGLE_FORM_ENTRY
            .vegetarianCount,
        String(
            data.vegetarianCount
        )
    );

    googleFormData.append(
        GOOGLE_FORM_ENTRY
            .foodAllergy,
        data.foodAllergy
    );

    googleFormData.append(
        GOOGLE_FORM_ENTRY
            .message,
        data.message
    );

    googleFormData.append(
        GOOGLE_FORM_ENTRY
            .formVersion,
        data.formVersion
    );

    await fetch(
        GOOGLE_FORM_URL,
        {
            method:
                "POST",

            mode:
                "no-cors",

            headers: {
                "Content-Type":
                    "application/x-www-form-urlencoded;charset=UTF-8"
            },

            body:
                googleFormData.toString()
        }
    );

    return {
        success:
            true
    };
}

/* =========================================================
   Firebase 與 Google Form 雙重寫入
========================================================= */

async function submitRsvpData(data) {
    const firebaseResult =
        await submitToFirebase(
            data
        );

    let googleFormSynced =
        false;

    try {
        await submitToGoogleForm(
            data
        );

        googleFormSynced =
            true;

        console.log(
            "Google Form / Google Sheet 同步請求已送出。"
        );
    } catch (error) {
        console.error(
            "Google Form / Google Sheet 同步失敗：",
            error
        );
    }

    return {
        success:
            true,

        firebaseResponseId:
            firebaseResult.responseId,

        googleFormSynced:
            googleFormSynced
    };
}

/* =========================================================
   RSVP 送出
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

            const deadlineTimestamp =
                new Date(
                    config.rsvpDeadline
                ).getTime();

            if (
                Number.isFinite(
                    deadlineTimestamp
                ) &&
                Date.now() >
                    deadlineTimestamp
            ) {
                setupRsvpDeadline(
                    config
                );

                return;
            }

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

            submitButton.disabled =
                true;

            submitButton.innerHTML = `
                <span>Submitting</span>
                送出中
            `;

            try {
                const result =
                    await submitRsvpData(
                        data
                    );

                console.log(
                    "RSVP 寫入結果：",
                    result
                );

                statusElement.textContent =
                    "✓ 回覆已成功送出 · RSVP submitted successfully";

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
                    "✕ 資料送出失敗，請稍後再試。 Submission failed. Please try again.";

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
                        "✕ 資料庫拒絕寫入，請直接與新人聯絡。 Database permission denied.";
                } else if (
                    !database
                ) {
                    errorMessage =
                        "✕ 資料庫尚未完成連線，請稍後再試。 Database connection is unavailable.";
                }

                statusElement.textContent =
                    errorMessage;

                statusElement.className =
                    "form-status error";
            } finally {
                submitButton.disabled =
                    false;

                submitButton.innerHTML = `
                    <span>Submit RSVP</span>
                    送出回覆
                `;
            }
        }
    );
}

/* =========================================================
   初始化
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

        setupInvitationGate(
            currentLocation
        );

        const lightboxController =
            setupLightbox();

        renderPage(
            config,
            currentLocation,
            lightboxController
        );

        startCountdown(
            config
        );

        const deadlinePassed =
            setupRsvpDeadline(
                config
            );

        if (!deadlinePassed) {
            prepareFormControls(
                config
            );

            setupRsvpForm(
                currentLocation,
                config
            );
        }
    }
);

