/*
 * 步驟：
 * 繪製畫布
 * 蛇
 *  1.位置
 *  2.長度
 *  3.
 * 蛇移動
 * 蛇死掉
 * 吃蘋果
 */

function gameStart() {
    //定時器，每秒重繪畫布
    setInterval(gameRoutine, 1000)
}

function gameRoutine() {

    //繪製畫布
    updateCanvas();
}

function updateCanvas() {
    var canvas = document.getElementById('canvas_id');
    var context = canvas.getContext('2d');

    context.fillStyle = 'red'; //填充黑色
    context.fillRect(0, 0, canvas.width, canvas.height); //繪製「已填色」的矩形，默認黑色
}