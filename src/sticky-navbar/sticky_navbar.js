//取得視窗外捲軸與上方、左方的距離
function getScroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    }
}

window.onscroll = function () {
    let headerTop = document.getElementById('header_top');
    let navbar = document.getElementById('navbar');
    let mainBody = document.getElementById('body');

    if (getScroll().top >= headerTop.offsetHeight) {
        navbar.classList.add('fixed');
        mainBody.style.marginTop = navbar.offsetHeight + "px";
    } else {
        navbar.classList.remove('fixed');
        mainBody.style.marginTop = '0';

    }
}