window.onload = () => {
    // 将"评论"改为"留言"
    var text01 = document.querySelector('div.comment_headling');
    if (text01 != undefined) {
        text01.innerHTML = text01.innerHTML.replace('评论', '留言');
    }

    var text02 = document.querySelector('#veditor');
    if (text02 != undefined) {
        text02.placeholder = "在这里编辑您的留言. . .";
    }

    var text03 = document.querySelector('#vcomments > div.vcount');
    if (text03 != undefined) {
        text03.innerHTML = text03.innerHTML.replace('评论', '留言');
    }

}