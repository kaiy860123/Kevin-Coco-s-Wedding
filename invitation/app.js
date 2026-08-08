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
        typeof firebase.initializeApp !==
            "function"
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

}
catch (error) {

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
   婚禮設定
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
            this.events[
                requestedLocation
            ]
        ) {

            return requestedLocation;

        }


        return this.defaultLocation;

    },


    events: {

        /* =================================================
           台南
        ================================================= */

        tainan: {

            browserTitle:
                "周愷元 & 陳佳惠 婚禮邀請函 - 台南",


            dateZh:
                "2027 年 1 月 17 日（星期日）",


            dateEn:
                "Sunday, January 17, 2027",


            heroDateLine1:
                "JANUARY 17 2027",


            heroDateLine2:
                "TAINAN",


            countdownImage:
                "./images/countdown-tainan.jpg",


            countdownImageAlt:
                "台南場婚禮倒數 Wedding Countdown",


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
                    Ballroom:
                    2F Minglun & Rende Ballroom
                </p>
            `,


            noticeZh:
                "",


            noticeEn:
                "",


            eventImage:
                "./images/event-tainan.jpg",


            eventImageAlt:
                "台南婚禮資訊",


            timelineItems: [

                {
                    time:
                        "11:30",

                    icon:
                        "❀",

                    titleZh:
                        "賓客入場、迎賓簽到",

                    titleEn:
                        "Guest Arrival",

                    note:
                        ""
                },

                {
                    time:
                        "12:00",

                    icon:
                        "♢",

                    titleZh:
                        "婚宴午宴開始",

                    titleEn:
                        "Wedding Luncheon Begins",

                    note:
                        "2F 明倫＋仁德廳"
                }

            ],


            googleMapUrl:
                "https://www.google.com/maps/search/?api=1&query=%E5%8F%B0%E5%8D%97%E6%99%B6%E8%8B%B1%E9%85%92%E5%BA%97",


            mapEmbedSrc:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.9815295554013!2d120.19685391161538!3d22.987706679111458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e767c77f6350f%3A0x802cfbc73a87af85!2z5Y-w5Y2X5pm26Iux6YWS5bqXIChTaWxrcyBQbGFjZSBUYWluYW4p!5e0!3m2!1szh-TW!2stw!4v1785570947869!5m2!1szh-TW!2stw",


            trafficInfo: `
                <p>
                    <strong>高鐵：</strong>
                    搭乘高鐵至高鐵台南站，
                    可轉乘高鐵快捷公車 H31，
                    於「小西門站」下車。

                    <span class="en-line">
                        HSR:
                        Take the H31 shuttle bus
                        from Tainan HSR Station
                        and get off at Xiaoximen Station.
                    </span>
                </p>

                <p>
                    <strong>台鐵：</strong>
                    抵達台南火車站後，
                    可轉乘計程車前往，
                    車程約 10 分鐘。

                    <span class="en-line">
                        TRA:
                        A taxi ride from Tainan Railway Station
                        takes approximately 10 minutes.
                    </span>
                </p>

                <p>
                    <strong>自行開車：</strong>
                    可使用上方 Google Maps
                    導航至台南晶英酒店。

                    <span class="en-line">
                        Driving:
                        Use Google Maps
                        for directions to Silks Place Tainan.
                    </span>
                </p>
            `,


            parkingInfo: `
                <p>
                    餐會提供每台車至多
                    4 小時停車折抵。

                    <span class="en-line">
                        Wedding guests may receive
                        up to four hours of parking validation
                        per vehicle.
                    </span>
                </p>

                <p>
                    請於離場前依飯店
                    現場指示辦理停車折抵。

                    <span class="en-line">
                        Please follow the hotel's
                        on-site instructions before departure.
                    </span>
                </p>
            `,


            formToggles: {

                showCeremony:
                    false

            }

        },


        /* =================================================
           南投
        ================================================= */

        nantou: {

            browserTitle:
                "周愷元 & 陳佳惠 婚禮邀請函 - 日月潭",


            dateZh:
                "2027 年 1 月 24 日（星期日）",


            dateEn:
                "Sunday, January 24, 2027",


            heroDateLine1:
                "JANUARY 24 2027",


            heroDateLine2:
                "SUN MOON LAKE",


            countdownImage:
                "./images/countdown-nantou.jpg",


            countdownImageAlt:
                "南投場婚禮倒數 Wedding Countdown",


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
                    Ceremony:
                    8F Starlight Terrace
                </p>

                <p>
                    <strong>用餐地點：</strong>
                    7F 湖光軒
                </p>

                <p class="en-line">
                    Luncheon:
                    7F Lakeview Pavilion
                </p>
            `,


            noticeZh:
                "溫馨提醒：本場次謝絕禮金，您的到來就是最好的祝福！",


            noticeEn:
                "No gifts or cash gifts, please. Your presence is the greatest blessing to us.",


            eventImage:
                "./images/event-nantou.jpg",


            eventImageAlt:
                "南投婚禮資訊",


            timelineItems: [

                {
                    time:
                        "10:30",

                    icon:
                        "♡",

                    titleZh:
                        "證婚儀式",

                    titleEn:
                        "Wedding Ceremony",

                    note:
                        "8F 星光露台 · Starlight Terrace"
                },

                {
                    time:
                        "11:30",

                    icon:
                        "❀",

                    titleZh:
                        "午宴入席",

                    titleEn:
                        "Guest Seating",

                    note:
                        "7F 湖光軒 · Lakeview Pavilion"
                },

                {
                    time:
                        "12:15",

                    icon:
                        "♢",

                    titleZh:
                        "婚宴開席",

                    titleEn:
                        "Wedding Luncheon Begins",

                    note:
                        "7F 湖光軒 · Lakeview Pavilion"
                }

            ],


            googleMapUrl:
                "https://www.google.com/maps/search/?api=1&query=%E6%97%A5%E6%9C%88%E6%BD%AD%E6%B6%B5%E7%A2%A7%E6%A8%93",


            mapEmbedSrc:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.750948355145!2d120.90602371163745!3d23.862975978504466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468d60f0d7e1f0b%3A0xa748afffa2011207!2z5pel5pyI5r2t5ra156Kn5qiT!5e0!3m2!1szh-TW!2stw!4v1785571059341!5m2!1szh-TW!2stw",


            trafficInfo: `
                <p>
                    <strong>南投客運：</strong>
                    搭乘南投客運由台中干城車站發車，
                    經台中火車站、高鐵台中烏日站、
                    埔里至日月潭，
                    約每小時一班車。

                    <span class="en-line">
                        Nantou Bus departs from
                        Taichung Gancheng Station
                        via Taichung Railway Station,
                        Taichung HSR Station and Puli
                        to Sun Moon Lake.
                    </span>
                </p>

                <p>
                    詳細時刻表請聯絡
                    南投客運埔里站：
                    <a href="tel:0492984031">
                        049-2984031
                    </a>。

                    <span class="en-line">
                        For the detailed timetable,
                        contact Nantou Bus Puli Station.
                    </span>
                </p>

                <p>
                    抵達日月潭車站終點後
                    （即水社遊客中心），
                    步行約 15 分鐘即可抵達涵碧樓。

                    <span class="en-line">
                        From Shuishe Visitor Center,
                        The Lalu is approximately
                        a 15-minute walk.
                    </span>
                </p>
            `,


            parkingInfo: `
                <p>
                    抵達涵碧樓飯店入口後，
                    請依現場服務人員指示
                    辦理停車或代客泊車。

                    <span class="en-line">
                        Upon arrival,
                        please follow staff instructions
                        for parking or valet service.
                    </span>
                </p>

                <p>
                    婚宴賓客的停車安排及費用，
                    請以婚宴當日飯店現場公告為準。

                    <span class="en-line">
                        Parking arrangements and fees
                        are subject to event-day instructions.
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
   DOM
========================================================= */

function getElement(id) {

    return document.getElementById(
        id
    );

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
   Music
========================================================= */

function setupBackgroundMusic() {

    const audio =
        getElement(
            "bg-music"
        );


    if (!audio) {

        return {

            play() {},

            pause() {},

            tryAutoPlay() {}

        };

    }


    audio.volume =
        0.42;


    async function playMusic() {

        try {

            await audio.play();


            return true;

        }
        catch (error) {

            console.log(
                "瀏覽器暫時阻擋背景音樂播放。"
            );


            return false;

        }

    }


    function pauseMusic() {

        audio.pause();

    }


    async function tryAutoPlay() {

        const success =
            await playMusic();


        if (success) {

            return;

        }


        const startOnInteraction =
            async () => {

                const played =
                    await playMusic();


                if (played) {

                    document.removeEventListener(
                        "pointerdown",
                        startOnInteraction
                    );


                    document.removeEventListener(
                        "keydown",
                        startOnInteraction
                    );

                }

            };


        document.addEventListener(
            "pointerdown",
            startOnInteraction
        );


        document.addEventListener(
            "keydown",
            startOnInteraction
        );

    }


    return {

        play:
            playMusic,

        pause:
            pauseMusic,

        tryAutoPlay:
            tryAutoPlay

    };

}


/* =========================================================
   Invitation Gate
========================================================= */

function setupInvitationGate(
    currentLocation,
    musicController
) {

    const gate =
        getElement(
            "invitation-gate"
        );


    const envelopeButton =
        getElement(
            "envelope-button"
        );


    if (
        !gate ||
        !envelopeButton
    ) {

        document.documentElement
            .classList
            .remove(
                "show-invitation-gate"
            );


        return null;

    }


    const sessionKey =
        `weddingInvitationOpened:${currentLocation}`;


    let isOpening =
        false;


    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    function resetGateVisual() {

        isOpening =
            false;


        gate.classList.remove(
            "is-opening"
        );


        gate.classList.remove(
            "is-leaving"
        );


        envelopeButton.disabled =
            false;

    }


    function finishOpening() {

        document.documentElement
            .classList
            .remove(
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


        window.scrollTo({

            top:
                0,

            left:
                0,

            behavior:
                "auto"

        });

    }


    async function openInvitation() {

        if (isOpening) {

            return;

        }


        isOpening =
            true;


        envelopeButton.disabled =
            true;


        try {

            window.sessionStorage
                .setItem(
                    sessionKey,
                    "true"
                );

        }
        catch (error) {

            console.warn(
                "sessionStorage 無法寫入。",
                error
            );

        }


        /*
            點擊信封本身就是使用者操作，
            在這裡播放音樂最穩定。
        */

        if (
            musicController &&
            typeof musicController.play ===
                "function"
        ) {

            musicController.play();

        }


        gate.classList.add(
            "is-opening"
        );


        /*
            Reduced motion
        */

        if (reducedMotion) {

            window.setTimeout(
                () => {

                    gate.classList.add(
                        "is-leaving"
                    );

                },
                250
            );


            window.setTimeout(
                finishOpening,
                650
            );


            return;

        }


        /*
            正常動畫流程：

            0.0 秒：信封開啟
            約 1 秒：邀請卡升起完成
            1～4.8 秒：邀請卡停留
            4.8 秒：入口淡出
            5.5 秒：正式進入網站
        */

        window.setTimeout(
            () => {

                gate.classList.add(
                    "is-leaving"
                );

            },
            4800
        );


        window.setTimeout(
            finishOpening,
            5500
        );

    }


    function showInvitation() {

        resetGateVisual();


        gate.hidden =
            false;


        gate.setAttribute(
            "aria-hidden",
            "false"
        );


        document.documentElement
            .classList
            .add(
                "show-invitation-gate"
            );


        window.scrollTo({

            top:
                0,

            left:
                0,

            behavior:
                "auto"

        });


        try {

            window.sessionStorage
                .removeItem(
                    sessionKey
                );

        }
        catch (error) {

            console.warn(
                error
            );

        }

    }


    envelopeButton.addEventListener(
        "click",
        openInvitation
    );


    const shouldShow =
        document.documentElement
            .classList
            .contains(
                "show-invitation-gate"
            );


    if (shouldShow) {

        gate.hidden =
            false;


        gate.setAttribute(
            "aria-hidden",
            "false"
        );

    }
    else {

        gate.hidden =
            true;


        gate.setAttribute(
            "aria-hidden",
            "true"
        );


        if (
            musicController &&
            typeof musicController.tryAutoPlay ===
                "function"
        ) {

            musicController.tryAutoPlay();

        }

    }


    return {

        showInvitation

    };

}


/* =========================================================
   Back to Invitation
========================================================= */

function setupBackToInvitation(
    invitationGateController
) {

    const button =
        getElement(
            "back-to-invitation"
        );


    if (
        !button ||
        !invitationGateController
    ) {

        return;

    }


    button.addEventListener(
        "click",
        () => {

            invitationGateController
                .showInvitation();

        }
    );

}


/* =========================================================
   Lightbox
========================================================= */

function setupLightbox() {

    const lightbox =
        getElement(
            "lightbox"
        );


    const image =
        getElement(
            "lightbox-img"
        );


    const closeButton =
        getElement(
            "close-lightbox"
        );


    if (
        !lightbox ||
        !image ||
        !closeButton
    ) {

        return null;

    }


    function openImage(
        source,
        alt
    ) {

        image.src =
            source;


        image.alt =
            alt;


        lightbox.hidden =
            false;


        document.body.style.overflow =
            "hidden";

    }


    function closeImage() {

        lightbox.hidden =
            true;


        image.src =
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
        event => {

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
        event => {

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
   Render Page
========================================================= */

function renderPage(
    config,
    currentLocation,
    lightboxController
) {

    document.title =
        config.browserTitle;


    setText(
        "wedding-date-line1",
        config.heroDateLine1
    );


    setText(
        "wedding-date-line2",
        config.heroDateLine2
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
        getElement(
            "hero-bg"
        );


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

    }


    renderNotice(
        config
    );


    renderCountdownImage(
        config
    );


    renderEventImage(
        config
    );


    renderTimelineItems(
        config
    );


    renderMoments(
        lightboxController
    );

}


/* =========================================================
   Notice
========================================================= */

function renderNotice(
    config
) {

    const section =
        getElement(
            "notice-section"
        );


    if (!section) {

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


        section.hidden =
            false;

    }
    else {

        section.hidden =
            true;

    }

}


/* =========================================================
   Countdown Image
========================================================= */

function renderCountdownImage(
    config
) {

    const image =
        getElement(
            "countdown-image"
        );


    const error =
        getElement(
            "countdown-image-error"
        );


    if (
        !image ||
        !error
    ) {

        return;

    }


    image.alt =
        config.countdownImageAlt;


    image.onload =
        () => {

            image.hidden =
                false;


            error.hidden =
                true;

        };


    image.onerror =
        () => {

            image.hidden =
                true;


            error.hidden =
                false;

        };


    image.src =
        config.countdownImage;

}


/* =========================================================
   Event Image
========================================================= */

function renderEventImage(
    config
) {

    const image =
        getElement(
            "event-image"
        );


    const error =
        getElement(
            "event-image-error"
        );


    if (
        !image ||
        !error
    ) {

        return;

    }


    image.alt =
        config.eventImageAlt;


    image.onload =
        () => {

            image.hidden =
                false;


            error.hidden =
                true;

        };


    image.onerror =
        () => {

            image.hidden =
                true;


            error.hidden =
                false;

        };


    image.src =
        config.eventImage;

}


/* =========================================================
   Timeline
========================================================= */

function renderTimelineItems(
    config
) {

    const list =
        getElement(
            "timeline-list"
        );


    if (!list) {

        return;

    }


    list.innerHTML =
        "";


    config.timelineItems.forEach(
        item => {

            const element =
                document.createElement(
                    "div"
                );


            element.className =
                "timeline-item";


            element.innerHTML = `

                <div class="timeline-marker">

                    <div class="timeline-dot">
                        ${item.icon}
                    </div>

                    <div class="timeline-line"></div>

                </div>


                <div class="timeline-content-box">

                    <p class="timeline-time">
                        ${item.time}
                    </p>

                    <p class="timeline-title">
                        ${item.titleZh}
                    </p>

                    <p class="timeline-subtitle">
                        ${item.titleEn}
                    </p>

                    ${
                        item.note
                            ?
                            `
                                <p class="timeline-note">
                                    ${item.note}
                                </p>
                            `
                            :
                            ""
                    }

                </div>

            `;


            list.appendChild(
                element
            );

        }
    );

}


/* =========================================================
   Moments
========================================================= */

function renderMoments(
    lightboxController
) {

    const grid =
        getElement(
            "photo-grid"
        );


    if (!grid) {

        return;

    }


    grid.innerHTML =
        "";


    sharedImages.moments.forEach(
        (
            source,
            index
        ) => {

            const image =
                document.createElement(
                    "img"
                );


            image.src =
                source;


            image.alt =
                `Wedding Moment ${index + 1}`;


            image.className =
                "photo-item";


            image.loading =
                "lazy";


            image.addEventListener(
                "click",
                () => {

                    if (
                        lightboxController
                    ) {

                        lightboxController
                            .openImage(
                                image.src,
                                image.alt
                            );

                    }

                }
            );


            image.addEventListener(
                "error",
                () => {

                    image.remove();

                }
            );


            grid.appendChild(
                image
            );

        }
    );

}


/* =========================================================
   RSVP Deadline
========================================================= */

function setupRsvpDeadline(
    config
) {

    const wrapper =
        getElement(
            "rsvp-form-wrapper"
        );


    const notice =
        getElement(
            "deadline-notice"
        );


    const display =
        getElement(
            "rsvp-deadline-display"
        );


    const timestamp =
        new Date(
            config.rsvpDeadline
        ).getTime();


    if (display) {

        display.innerHTML = `
            回覆截止：
            ${config.rsvpDeadlineZh}
            <br>
            RSVP Deadline:
            ${config.rsvpDeadlineEn}
        `;

    }


    if (
        !Number.isFinite(
            timestamp
        )
    ) {

        return false;

    }


    const expired =
        Date.now() >
        timestamp;


    if (wrapper) {

        wrapper.hidden =
            expired;

    }


    if (notice) {

        notice.hidden =
            !expired;

    }


    return expired;

}


/* =========================================================
   Form Dynamic
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
            control => {

                if (visible) {

                    if (
                        control.dataset
                            .originallyRequired ===
                        "true"
                    ) {

                        control.required =
                            true;

                    }

                }
                else {

                    control.required =
                        false;

                }

            }
        );

}


function prepareFormControls(
    config
) {

    const form =
        getElement(
            "rsvp-form"
        );


    const attendance =
        getElement(
            "attendance"
        );


    const details =
        getElement(
            "attendance-detail-fields"
        );


    const ceremony =
        getElement(
            "field-ceremony"
        );


    const dietary =
        getElement(
            "dietary-type"
        );


    const vegField =
        getElement(
            "field-veg-count"
        );


    const vegCount =
        getElement(
            "veg-count"
        );


    const otherHelp =
        getElement(
            "dietary-other-help"
        );


    const allergy =
        getElement(
            "food-allergy"
        );


    if (
        !form ||
        !attendance ||
        !details ||
        !ceremony ||
        !dietary ||
        !vegField ||
        !vegCount ||
        !otherHelp ||
        !allergy
    ) {

        return;

    }


    form
        .querySelectorAll(
            "input, select, textarea"
        )
        .forEach(
            control => {

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


    function updateDietary() {

        const attending =
            attendance.value ===
            "yes";


        const type =
            dietary.value;


        const showVeg =
            attending &&
            type ===
                "all_veg";


        const showOther =
            attending &&
            type ===
                "other";


        setFieldVisibility(
            vegField,
            showVeg
        );


        otherHelp.hidden =
            !showOther;


        allergy.required =
            showOther;


        if (!showVeg) {

            vegCount.value =
                "0";

        }

    }


    function updateAttendance() {

        const attending =
            attendance.value ===
            "yes";


        setFieldVisibility(
            details,
            attending
        );


        if (attending) {

            setFieldVisibility(
                ceremony,
                config
                    .formToggles
                    .showCeremony
            );

        }


        updateDietary();

    }


    if (
        attendance.dataset
            .listenerBound !==
        "true"
    ) {

        attendance.addEventListener(
            "change",
            updateAttendance
        );


        attendance.dataset
            .listenerBound =
            "true";

    }


    if (
        dietary.dataset
            .listenerBound !==
        "true"
    ) {

        dietary.addEventListener(
            "change",
            updateDietary
        );


        dietary.dataset
            .listenerBound =
            "true";

    }


    updateAttendance();

}


/* =========================================================
   Dietary Labels
========================================================= */

function getDietaryTypeLabel(
    type
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
        labels[type] ||
        type ||
        ""
    );

}


/* =========================================================
   Build RSVP
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


    const attending =
        formData.get(
            "isAttending"
        ) === "yes";


    const dietaryType =
        attending
            ?
            String(
                formData.get(
                    "dietaryType"
                ) || ""
            )
            :
            "not_applicable";


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
            attending
                ?
                "是 / Attending"
                :
                "否 / Not Attending",


        attendCeremony:
            attending &&
            config
                .formToggles
                .showCeremony
                ?
                (
                    formData.get(
                        "attendCeremony"
                    ) === "yes"
                        ?
                        "是 / Attending"
                        :
                        "否，僅參加午宴 / Luncheon Only"
                )
                :
                "不適用 / Not Applicable",


        attendCount:
            attending
                ?
                Number(
                    formData.get(
                        "attendCount"
                    ) || 0
                )
                :
                0,


        childSetCount:
            attending
                ?
                Number(
                    formData.get(
                        "childSetCount"
                    ) || 0
                )
                :
                0,


        dietaryType:
            dietaryType,


        dietaryTypeLabel:
            getDietaryTypeLabel(
                dietaryType
            ),


        vegetarianCount:
            attending &&
            dietaryType ===
                "all_veg"
                ?
                Number(
                    formData.get(
                        "vegCount"
                    ) || 0
                )
                :
                0,


        foodAllergy:
            attending
                ?
                String(
                    formData.get(
                        "foodAllergy"
                    ) || ""
                ).trim()
                :
                "",


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
            "20260808-02"

    };

}


/* =========================================================
   Validate RSVP
========================================================= */

function validateRsvpData(
    data
) {

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


    const digits =
        data.phone.replace(
            /\D/g,
            ""
        );


    if (
        digits.length < 8 ||
        digits.length > 15
    ) {

        return (
            "請確認聯絡電話格式，例如 0912345678。"
        );

    }


    const attending =
        data.isAttending.startsWith(
            "是"
        );


    if (
        attending &&
        (
            !Number.isInteger(
                data.attendCount
            ) ||
            data.attendCount < 1 ||
            data.attendCount > 20
        )
    ) {

        return (
            "總出席人數需為 1 至 20 人，並包含所有兒童。"
        );

    }


    if (
        attending &&
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
            "兒童座椅及餐具組數量不可大於總出席人數。"
        );

    }


    if (
        attending &&
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
            "素食人數不可大於總出席人數。"
        );

    }


    if (
        attending &&
        data.dietaryType ===
            "other" &&
        !data.foodAllergy
    ) {

        return (
            "選擇其他餐點需求時，請於食物過敏或特殊需求欄位註明。"
        );

    }


    return "";

}


/* =========================================================
   Firebase Submit
========================================================= */

async function submitToFirebase(
    data
) {

    if (!database) {

        throw new Error(
            "Firebase 尚未初始化。"
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


    const reference =
        database.ref(
            `rsvpResponses/${data.weddingLocation}`
        );


    const newReference =
        reference.push();


    await newReference.set(
        data
    );


    return {

        success:
            true,


        responseId:
            newReference.key

    };

}


/* =========================================================
   Google Form Submit
========================================================= */

async function submitToGoogleForm(
    data
) {

    const params =
        new URLSearchParams();


    params.append(
        GOOGLE_FORM_ENTRY
            .weddingLocation,
        data.weddingLocation
    );


    params.append(
        GOOGLE_FORM_ENTRY
            .weddingVenue,
        data.weddingVenue
    );


    params.append(
        GOOGLE_FORM_ENTRY
            .weddingDate,
        data.weddingDate
    );


    params.append(
        GOOGLE_FORM_ENTRY
            .guestName,
        data.guestName
    );


    params.append(
        GOOGLE_FORM_ENTRY
            .relation,
        data.relation
    );


    params.append(
        GOOGLE_FORM_ENTRY
            .phone,
        data.phone
    );


    params.append(
        GOOGLE_FORM_ENTRY
            .isAttending,
        data.isAttending
    );


    params.append(
        GOOGLE_FORM_ENTRY
            .attendCeremony,
        data.attendCeremony
    );


    params.append(
        GOOGLE_FORM_ENTRY
            .attendCount,
        String(
            data.attendCount
        )
    );


    params.append(
        GOOGLE_FORM_ENTRY
            .childSetCount,
        String(
            data.childSetCount
        )
    );


    params.append(
        GOOGLE_FORM_ENTRY
            .dietaryType,
        data.dietaryTypeLabel
    );


    params.append(
        GOOGLE_FORM_ENTRY
            .vegetarianCount,
        String(
            data.vegetarianCount
        )
    );


    params.append(
        GOOGLE_FORM_ENTRY
            .foodAllergy,
        data.foodAllergy
    );


    params.append(
        GOOGLE_FORM_ENTRY
            .message,
        data.message
    );


    params.append(
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
                params.toString()

        }
    );


    return {

        success:
            true

    };

}


/* =========================================================
   Submit Both
========================================================= */

async function submitRsvpData(
    data
) {

    const firebaseResult =
        await submitToFirebase(
            data
        );


    try {

        await submitToGoogleForm(
            data
        );

    }
    catch (error) {

        console.error(
            "Google Form 同步失敗：",
            error
        );

    }


    return {

        success:
            true,


        firebaseResponseId:
            firebaseResult.responseId

    };

}


/* =========================================================
   RSVP Form
========================================================= */

function setupRsvpForm(
    currentLocation,
    config
) {

    const form =
        getElement(
            "rsvp-form"
        );


    const button =
        getElement(
            "submit-button"
        );


    const status =
        getElement(
            "form-status"
        );


    if (
        !form ||
        !button ||
        !status
    ) {

        return;

    }


    form.addEventListener(
        "submit",
        async event => {

            event.preventDefault();


            const deadline =
                new Date(
                    config.rsvpDeadline
                ).getTime();


            if (
                Number.isFinite(
                    deadline
                ) &&
                Date.now() >
                    deadline
            ) {

                setupRsvpDeadline(
                    config
                );


                return;

            }


            status.textContent =
                "";


            status.className =
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


            const errorMessage =
                validateRsvpData(
                    data
                );


            if (errorMessage) {

                status.textContent =
                    errorMessage;


                status.className =
                    "form-status error";


                return;

            }


            button.disabled =
                true;


            button.innerHTML = `

                <span>
                    Submitting
                </span>

                送出中

            `;


            try {

                await submitRsvpData(
                    data
                );


                status.textContent =
                    "✓ 回覆已成功送出 · RSVP submitted successfully";


                status.className =
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

            }
            catch (error) {

                console.error(
                    "RSVP 送出失敗：",
                    error
                );


                let message =
                    "✕ 資料送出失敗，請稍後再試。";


                const code =
                    String(
                        error?.code || ""
                    ).toLowerCase();


                const errorText =
                    String(
                        error?.message || ""
                    ).toLowerCase();


                if (
                    code.includes(
                        "permission"
                    ) ||
                    errorText.includes(
                        "permission_denied"
                    ) ||
                    errorText.includes(
                        "permission denied"
                    )
                ) {

                    message =
                        "✕ 資料庫拒絕寫入，請直接與新人聯絡。";

                }


                status.textContent =
                    message;


                status.className =
                    "form-status error";

            }
            finally {

                button.disabled =
                    false;


                button.innerHTML = `

                    <span>
                        Submit RSVP
                    </span>

                    送出回覆

                `;

            }

        }
    );

}


/* =========================================================
   Initialize
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


        const musicController =
            setupBackgroundMusic();


        const invitationGateController =
            setupInvitationGate(
                currentLocation,
                musicController
            );


        setupBackToInvitation(
            invitationGateController
        );


        const lightboxController =
            setupLightbox();


        renderPage(
            config,
            currentLocation,
            lightboxController
        );


        const expired =
            setupRsvpDeadline(
                config
            );


        if (!expired) {

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