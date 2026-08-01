// 1. 雙場次動態設定檔 (強大的大腦)
const weddingConfig = {
    getCurrentLocation: function() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('loc') || 'tainan';
    },

    events: {
        tainan: {
            title: "Kevin & Coco's Wedding - 台南場",
            date: "2027年01月10日 (日) 12:00",
            countdownTarget: "2027-01-10T12:00:00", // 倒數目標時間
            location: "台南晶英酒店 (台南市中西區和意路1號)",
            noticeText: "", // 無特殊宣告
            // ★ 請替換以下圖片網址為真實照片 ★
            coverImage: "https://picsum.photos/id/1005/1920/1080", // 首圖背景
            galleryImages: [
                "https://picsum.photos/id/1011/600/800",
                "https://picsum.photos/id/1012/800/600",
                "https://picsum.photos/id/1025/600/600"
            ],
            // ★ 請替換為 Google Maps 的「嵌入地圖」網址 ★
            mapEmbedSrc: "<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.9815295554013!2d120.19685391161538!3d22.987706679111458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e767c77f6350f%3A0x802cfbc73a87af85!2z5Y-w5Y2X5pm26Iux6YWS5bqXIChTaWxrcyBQbGFjZSBUYWluYW4p!5e0!3m2!1szh-TW!2stw!4v1785570947869!5m2!1szh-TW!2stw",
            trafficInfo: "【高鐵】搭乘至台南站，轉乘高鐵快捷公車H31至「小西門站」下車。<br>【火車】台南火車站轉乘計程車約10分鐘。",
            parkingInfo: "飯店提供地下停車場，賓客可免費停車。結帳時請向櫃台索取停車券。",
            formToggles: { showCeremony: false }
        },
        nantou: {
            title: "Kevin & Coco's Wedding - 南投場",
            date: "2027年01月16日 (六) 17:30",
            countdownTarget: "2027-01-16T17:30:00",
            location: "南投涵碧樓 (南投縣魚池鄉中興路142號)",
            noticeText: "溫馨提醒：本場次謝絕禮金，您的到來就是最好的祝福！",
            coverImage: "https://picsum.photos/id/1043/1920/1080",
            galleryImages: [
                "https://picsum.photos/id/1035/600/800",
                "https://picsum.photos/id/1036/800/600",
                "https://picsum.photos/id/1037/600/600",
                "https://picsum.photos/id/1039/600/600"
            ],
            mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.750948355145!2d120.90602371163745!3d23.862975978504466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468d60f0d7e1f0b%3A0xa748afffa2011207!2z5pel5pyI5r2t5ra156Kn5qiT!5e0!3m2!1szh-TW!2stw!4v1785571059341!5m2!1szh-TW!2stw",
            trafficInfo: "【高鐵】搭乘至台中站，可預約飯店接駁車。<br>【自行開車】國道六號愛蘭交流道下，往日月潭方向行駛。",
            parkingInfo: "抵達飯店門口將有專人為您代客泊車，免收停車費。",
            formToggles: { showCeremony: true }
        }
    }
};

// --- 初始化執行區 ---
document.addEventListener("DOMContentLoaded", () => {
    const currentLoc = weddingConfig.getCurrentLocation();
    const config = weddingConfig.events[currentLoc];
    if (!config) { window.location.href = "?loc=tainan"; return; }

    // 1. 注入文字資訊
    document.title = config.title;
    document.getElementById("page-title").textContent = config.title;
    document.getElementById("wedding-date").textContent = config.date;
    document.getElementById("wedding-location").textContent = config.location;
    document.getElementById("traffic-info").innerHTML = config.trafficInfo;
    document.getElementById("parking-info").innerHTML = config.parkingInfo;
    document.getElementById("map-iframe").src = config.mapEmbedSrc;

    // 2. 注入首圖背景
    document.getElementById("hero-bg").style.backgroundImage = `url('${config.coverImage}')`;

    // 3. 處理公告與表單開關
    const noticeSection = document.getElementById("notice-section");
    if (config.noticeText !== "") {
        noticeSection.textContent = config.noticeText;
        noticeSection.style.display = "block";
    }
    const toggleField = (fieldId, show) => {
        const el = document.getElementById(fieldId);
        if (el) {
            el.style.display = show ? "block" : "none";
            if (!show) el.querySelectorAll('input, select').forEach(i => i.removeAttribute('required'));
        }
    };
    toggleField("field-ceremony", config.formToggles.showCeremony);

    // 4. 動態生成相片藝廊與燈箱效果
    const photoGrid = document.getElementById("photo-grid");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    config.galleryImages.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.className = "photo-item";
        img.onclick = () => {
            lightbox.style.display = "flex";
            lightboxImg.src = src;
        };
        photoGrid.appendChild(img);
    });

    document.getElementById("close-lightbox").onclick = () => lightbox.style.display = "none";
    lightbox.onclick = (e) => { if(e.target === lightbox) lightbox.style.display = "none"; };

    // 5. 倒數計時器邏輯
    const countDownDate = new Date(config.countdownTarget).getTime();
    const timerInterval = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        if (distance < 0) {
            clearInterval(timerInterval);
            document.querySelector(".countdown-container").innerHTML = "<b>婚禮已經開始囉！</b>";
            return;
        }

        document.getElementById("cd-days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
        document.getElementById("cd-hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
        document.getElementById("cd-mins").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
        document.getElementById("cd-secs").innerText = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');
    }, 1000);

    // 6. 表單送出攔截 (待後續接入 Firebase)
    document.getElementById("rsvp-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const dataObj = Object.fromEntries(new FormData(e.target).entries());
        dataObj.weddingLocation = currentLoc;
        dataObj.timestamp = new Date().toISOString();
        console.log("表單資料：", dataObj);
        alert("資料已攔截！即將送往 Firebase。");
    });
});