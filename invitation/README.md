Pages deployment reset: 2026-08-06

sessionStorage.removeItem("weddingInvitationOpened:tainan");
sessionStorage.removeItem("weddingInvitationOpened:nantou");
location.reload();


婚禮時程改為文字版

現在不用再上傳 timeline-tainan.jpg、timeline-nantou.jpg。
若你要改時程內容，直接改 app.js 內的：

timelineItems: [ ... ]
