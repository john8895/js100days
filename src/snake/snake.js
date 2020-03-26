var BLOCK_SIZE = 20;
var BLOCK_COUNT = 20;

var gameInterval;
var snake;
var apple;
var score;

// 畫布重繪
function gameStart() {
    snake = { // 宣告蛇的初始狀態
        body: [
            { x:BLOCK_COUNT / 2, y: BLOCK_COUNT / 2}
        ],
        size: 5,
        direction: { x:0, y: -1}
    }

    putApple()
    updateScore(0)
    gameInterval = setInterval(gameRoutine, 300);
}

function updateScore(newScore) {
    score = newScore;
    document.getElementById('score_id').innerHTML = score;
}

function putApple() {
    apple = {
        x: Math.floor(Math.random() * BLOCK_COUNT),
        y: Math.floor(Math.random() * BLOCK_COUNT)
    }

    for( var i=0;i<snake.body.length;i++){
        if(snake.body[i].x === apple.x &&
        snake.body[i].y === apple.y){
            putApple()
            break;
        }
    }
}

function gameRoutine() {
    moveSnake();

    if(snakeIsDead()){ // 蛇死掉
        ggler();
        return;
    }

    if(snake.body[0].x === apple.x &&
    snake.body[0].y === apple.y){
        eatApple()
    }
    updateCanvas();
}

function eatApple() {
    snake.size +=1;
    putApple()
    updateScore(score +1)
}


function snakeIsDead() {
    // hit walls
    if(snake.body[0].x <0){
        return true;
    }else if(snake.body[0].x >= BLOCK_COUNT){
        return true;
    }else if(snake.body[0].y < 0){
        return true;
    }else if (snake.body[0].y >= BLOCK_COUNT){
        return true;
    }
    // hit body
    for (var i=1;i<snake.body.length;i++){
        if(snake.body[0].x === snake.body[i].x &&
            snake.body[0].y === snake.body[i].y){
            return true;
        }
    }
    return false;
}

// 遊戲結束
function ggler() {
    clearInterval(gameInterval);
}

function moveSnake() {
    var newBlock = {
        x: snake.body[0].x + snake.direction.x,
        y: snake.body[0].y + snake.direction.y
    }

    snake.body.unshift(newBlock);

    while (snake.body.length > snake.size){
        snake.body.pop()
    }
}

function updateCanvas() {
    var canvas=document.getElementById('canvas_id');
    var context = canvas.getContext('2d');

    context.fillStyle = 'black';
    context.fillRect(0,0,canvas.width, canvas.height);

    context.fillStyle = 'lime';
    for (var i=0;i<snake.body.length;i++){
        context.fillRect(
            snake.body[i].x * BLOCK_SIZE + 1,
            snake.body[i].y * BLOCK_SIZE + 1,
            BLOCK_SIZE -1,
            BLOCK_SIZE -1
        )
    }

    context.fillStyle = 'red'
    context.fillRect(
        apple.x * BLOCK_SIZE +1,
        apple.y * BLOCK_SIZE +1,
        BLOCK_SIZE -1,
        BLOCK_SIZE -1

    )
}

window.onload = onPageLoaded;

function onPageLoaded() {
    document.addEventListener('keydown', handleKeyDown)
}

// 按下左、右鍵控制蛇轉向
function handleKeyDown(event) {
    var originX = snake.direction.x;
    var originY = snake.direction.y;

    if(event.keyCode ===37){
        snake.direction.x = originY;
        snake.direction.y = -originX;
    }
    else if (event.keyCode ===39){
        snake.direction.x = -originY;
        snake.direction.y = originX;
    }
}