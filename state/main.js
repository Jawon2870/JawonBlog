document.addEventListener('DOMContentLoaded', function() {

    // xxxx年 按钮事件，点击切换到该年的动态
    var years = document.querySelectorAll('.year');
    var ifm = document.querySelector('iframe');
    for (let i = 0; i < years.length; i++) {
        years[i].addEventListener('click',()=>{
            ifm.src = years[i].innerText;
        });
    }

    // 全屏按钮事件
    var fullScreenBtn = document.querySelector("#fullScreenBtn");
    if(fullScreenBtn){
        fullScreenBtn.addEventListener("click",()=>{
            var iframe = document.querySelector('iframe');
            if (iframe.requestFullscreen) {
                iframe.requestFullscreen();
            } else if (iframe.mozRequestFullScreen) {
                iframe.mozRequestFullScreen();
            } else if (iframe.webkitRequestFullscreen) {
                iframe.webkitRequestFullscreen();
            } else if (iframe.msRequestFullscreen) {
                iframe.msRequestFullscreen();
            }
        });
    }

    // 重写亮暗主题切换函数
    window.switchNightMode = ()=> {
        // 切换页面亮暗
        var ifm = document.querySelector('iframe');
        if($('body').hasClass('DarkMode')){
            $('body').removeClass('DarkMode'), localStorage.setItem('isDark', '0'), $('#sum-moon-icon').removeClass("fa-sun").addClass('fa-moon')
            // 同时切换iframe内的亮暗
            if(ifm.contentWindow.$('body').hasClass('DarkMode')){
                ifm.contentWindow.switchNightMode();
            }
        }else{
            $('body').addClass('DarkMode'), localStorage.setItem('isDark', '1'), $('#sum-moon-icon').addClass("fa-sun").removeClass('fa-moon')
            // 同时切换iframe内的亮暗
            if(!(ifm.contentWindow.$('body').hasClass('DarkMode'))){
                ifm.contentWindow.switchNightMode();
            }
        }
    }

    // 点击评论按钮显示评论区，否则只显示动态，这样做是为了防止点击iframe内的目录时屏幕乱滚动
    var fixScroll = true;
    document.querySelector('.card.comments').addEventListener('click',()=>{
        fixScroll = false;
        // 显示评论
        document.querySelector(".twikoo-card").style.cssText = "display: block;"
        document.querySelector("footer").style.cssText = "height: auto;width: auto;"
        document.querySelector("main.container.content").style.cssText = "height: auto;"
        // 滚动到评论
        window.scrollTo({
            top: 550,
            behavior: "smooth"
        });
        setTimeout(() => {
            fixScroll = true;
        }, 1000);
    });
    // 
    window.addEventListener('scroll', ()=>{
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        // 回到顶部后隐藏评论
        if (fixScroll && scrollTop < 10) {
            document.querySelector(".twikoo-card").style.cssText = "display: none;"
            document.querySelector("footer").style.cssText = "height: 0;width: 0;"
            document.querySelector("main.container.content").style.cssText = "height: 0;"
        }
    });   
});