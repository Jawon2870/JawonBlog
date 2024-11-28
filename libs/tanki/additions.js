(() => {
    // 第一次点击进入全屏
    function fullScreem() {
        var elem = document.documentElement;
        if (elem.requestFullscreen) elem.requestFullscreen();
        else if (elem.mozRequestFullScreen) elem.mozRequestFullScreen();/* Firefox */
        else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();/* Chrome, Safari & Opera */
        else if (elem.msRequestFullscreen) elem.msRequestFullscreen();/* IE/Edge */
        document.removeEventListener('click', fullScreem);
    }
    document.addEventListener("click", fullScreem);

    // 进入页面后自动按任意键开始
    var autoStart = setInterval(() => {
        if (document.querySelector('#root > div > div.Common-entranceGradient > div > div.EntranceComponentStyle-ContainerForm.MainEntranceComponentStyle-mainContainer > form > div > div > span')) {
            var evt = new KeyboardEvent('keydown', { 'key': '1' });
            document.dispatchEvent(evt);
            // 10秒后未进入则刷新页面
            setTimeout(() => {
                if (document.querySelector('#root > div > div.Common-entranceGradient > div > div.EntranceComponentStyle-ContainerForm.MainEntranceComponentStyle-mainContainer > form > div > img.StartScreenComponentStyle-logoTankOnline')) {
                    window.location.reload();
                }
            }, 10 * 1000);
            clearInterval(autoStart);
        }
    }, 200);

    // 进入战斗时刷新页面，这样镜头会跟着鼠标上下调整
    setTimeout(() => {
        setInterval(() => {
            var startFlag = document.querySelector('#root > div.ApplicationLoaderComponentStyle-container.Common-flexCenterAlignCenterColumn > div.ApplicationLoaderComponentStyle-promptInformation');
            if (startFlag != null) {
                window.location.reload();
            }
        }, 300);
    }, 50 * 1000);

    // 注册新号 ---
    var loop002 = setInterval(() => {
        var loginBtn = document.querySelector("#root > div.Common-container > div.Common-entranceGradient > div.Common-contentSpaceBetween > div.EntranceComponentStyle-ContainerForm.MainEntranceComponentStyle-mainContainer > form > div.MainEntranceComponentStyle-container > div > div");
        if (loginBtn == null) return;
        loginBtn.click();   // 点击登录
        // 点击注册
        setTimeout(() => {
            document.querySelector("#root > div.Common-container > div.Common-entranceGradient > div.Common-contentSpaceBetween > div.EntranceComponentStyle-ContainerForm.MainEntranceComponentStyle-mainContainer > form > div.MainEntranceComponentStyle-container > div:nth-child(1)").click();
        }, 300);
        // 自动填表，需要手动删除末尾-
        setTimeout(() => {
            var result = [];    // 生成昵称
            while (result.join(' ').length < 10) {
                var length = Math.floor(Math.random() * 10) + 10;
                var word = '';
                var characters = 'abcdefghijklmnopqrstuvwxyz';
                for (var i = 0; i < length; i++) {
                    word += characters.charAt(Math.floor(Math.random() * characters.length));
                }
                result.push(word.charAt(0).toUpperCase() + word.slice(1));
            }
            var ipts = document.querySelectorAll("input");
            ipts[0].value = result.join(' ') + "]";
            ipts[1].value = "Aa12345678]";
            ipts[2].value = "Aa12345678]";
            ipts[3].value = "徐世海]";
            ipts[4].value = "452225197404120515]";

            var loop001 = setInterval(() => {
                var cplt = document.querySelector("#root > div.Common-container > div.Common-entranceGradient > div.Common-contentSpaceBetween > div.EntranceComponentStyle-ContainerForm.Common-flexCenterAlignCenter.Common-displayFlex.Common-alignCenter > form > div > div.Common-flexCenterAlignCenter");
                if (cplt.className.includes("EntranceComponentStyle-buttonActive")) {
                    setTimeout(() => {  // 点击完成注册
                        document.querySelector("#root > div.Common-container > div.Common-entranceGradient > div.Common-contentSpaceBetween > div.EntranceComponentStyle-ContainerForm.Common-flexCenterAlignCenter.Common-displayFlex.Common-alignCenter > form > div > div.Common-flexCenterAlignCenter").click();
                    }, 300);
                    setTimeout(() => {  // 点击接受
                        document.querySelector("#root > div.Common-container > div.Common-entranceGradient > div.Common-contentSpaceBetween > div.EntranceComponentStyle-ContainerForm.MainEntranceComponentStyle-mainContainer > form > div > div:nth-child(2) > div:nth-child(2)").click();
                    }, 800);
                    clearInterval(loop001);
                }
            }, 300);

        }, 600);
        clearInterval(loop002);
    }, 300);
    setTimeout(() => {
        clearInterval(loop002);
    }, 5000);
    // 注册新号结束 ---
})();
