var box = document.getElementById('box');
var imgObj = document.getElementById('imgs');
var imgWidth = imgObj.children[0].offsetWidth;
var arrow = document.getElementById('focusD');

//顯示左右箭頭
box.onmouseover = function () {
    arrow.style.display = "block";
    slideShowStop();
};
box.onmouseout = function () {
    arrow.style.display = "none";
    slideShow();
};
//點選按鈕移動相框
var index = 0;
document.getElementById('right').onclick = function () {
    if (index < imgObj.children.length - 1) {
        index++;
        animate(imgObj, -index * imgWidth)
    } else { //輪播到最後一張，自動回到第一張
        index = 0;
        animate(imgObj, -index * imgWidth)
    }
};
document.getElementById('left').onclick = function () {
    if (index > 0) {
        index--;
        animate(imgObj, -index * imgWidth)
    }
};
var slideTimeId;
slideShow();

//當滑鼠移入時，停止輪播
function slideShowStop() {
    clearInterval(slideTimeId)
}
//增加可設置輪播圖停留時間，及回到第一張的移動速度（預設50，速度太慢會回不了第一張，太快就沒有動畫效果）
function slideShow(delay = 3000, repeatSpeed = 5000) {
    slideTimeId = setInterval(function () {
        if (index < imgObj.children.length - 1) {
            index++;
            animate(imgObj, -index * imgWidth);
        } else {
            index = 0;
            animate(imgObj, -index * imgWidth, repeatSpeed)
        }
    }, delay)
}

//主要動畫函數
function animate(element, target, speed = 10) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        var current = element.offsetLeft;
        var step = speed;
        step = current < target ? step : -step;
        current += step;
        if (Math.abs(target - current) > Math.abs(step)) {
            element.style.left = current + "px";
        } else {
            clearInterval(element.timeId);
            element.style.left = target + "px";
        }
    }, 20)
}

