$(document).ready(function () {
    updateColor();
    paintBlock();
    colorPick();

    // 取得隨機色碼
    function getRandomColor() {
        let color = '#';
        let color2 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
        for (let i = 0; i < 6; i++) {
            color += color2[parseInt(Math.random() * color2.length)]
        }
        return color;
    }
    // 產生選色盤
    function updateColor() {
        let colorBlock = $('.color-block');
        colorBlock.empty();
        for (let i = 0; i < 5; i++) {
            let randomColor = getRandomColor();
            colorBlock.append('<li class="colorBox"></li>')
            $('.colorBox').eq(i).css('backgroundColor', randomColor);
        }
    }

    // 產生填色盤
    function paintBlock() {
        for (let i = 0; i < 12; i++) {
            $('.paint-block').append('<li class="paint"></li>')
        }
    }

    //填色機制
    function colorPick() {
        let paint;
        $('.colorBox').on('click', function () {
            paint = this.style.backgroundColor;
        })
        $('.paint').on('click', function () {
            this.style.backgroundColor = paint;
        })
    }

    $('#btn').on('click', function () {
        updateColor();
        colorPick()
    })

})