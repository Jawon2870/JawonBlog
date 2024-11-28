
// 如果是手机端就提示使用电脑浏览
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
if (isMobile) {
    document.body.innerHTML = "<span id='errorTip'>抱歉！此视频仅支持电脑浏览。</span>";
}
