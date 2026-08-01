// 1. 雙場次動態設定檔 (設定中心)
const weddingConfig = {
    // 取得當前網址參數 ?loc=... (預設為 tainan)
    getCurrentLocation: function() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('loc') || 'tainan';
    },

    events: {
        tainan: {
            title: "Kevin & Coco's Wedding - 台南場",
            date: "2027年01月10日 (日) 12:00",
            location: "台南晶英酒店 (台南市中西區和意路1號)",
            noticeText: "", // 台南場無特殊宣告
            formToggles: {
                showCeremony: false, // 台南場不顯示證婚儀式
            }
        },
        nantou: {
            title: "Kevin & Coco's Wedding - 南投場",
            date: "2027年01月16日 (六) 17:30",
            location: "南投涵碧樓 (南投縣魚池鄉中興路142號)",
            noticeText: "溫馨提醒：本場次謝絕禮金，您的到來就是最好的祝福！",
            formToggles: {
                showCeremony: true, // 南投場顯示證婚儀式
            }
        }
    }
};

// 2. 網頁載入後執行的初始化邏輯
document.addEventListener("DOMContentLoaded", () => {
    const currentLoc = weddingConfig.getCurrentLocation();
    const config = weddingConfig.events[currentLoc];

    // 若網址亂打找不到場次，防呆跳回預設台南場
    if (!config) {
        window.location.href = "?loc=tainan";
        return;
    }

    // 替換標題與資訊
    document.getElementById("page-title").textContent = config.title;
    document.getElementById("wedding-date").textContent = config.date;
    document.getElementById("wedding-location").textContent = config.location;
    document.title = config.title; // 更改瀏覽器分頁名稱

    // 處理系統宣告 (謝絕禮金)
    const noticeSection = document.getElementById("notice-section");
    if (config.noticeText !== "") {
        noticeSection.textContent = config.noticeText;
        noticeSection.style.display = "block";
    }

    // 動態開關表單欄位
    const toggleField = (fieldId, show) => {
        const element = document.getElementById(fieldId);
        if (element) {
            element.style.display = show ? "block" : "none";
            // 如果隱藏了，順便把必填屬性移除，避免表單無法送出
            if (!show) {
                const inputs = element.querySelectorAll('input, select');
                inputs.forEach(input => input.removeAttribute('required'));
            }
        }
    };

    const toggles = config.formToggles;
    toggleField("field-ceremony", toggles.showCeremony);

    // 3. 表單送出攔截 (目前先做本機端測試，下一步串 Firebase)
    document.getElementById("rsvp-form").addEventListener("submit", (e) => {
        e.preventDefault(); // 阻止網頁重新整理
        
        // 收集表單資料
        const formData = new FormData(e.target);
        const dataObj = Object.fromEntries(formData.entries());
        
        // 加入場次標記
        dataObj.weddingLocation = currentLoc;
        dataObj.timestamp = new Date().toISOString();

        console.log("準備送出到資料庫的資料：", dataObj);
        alert("【前端測試成功】\n資料結構已準備就緒，下一步我們將把資料寫入 Firebase 的 " + currentLoc + "_guests 節點！");
    });
});