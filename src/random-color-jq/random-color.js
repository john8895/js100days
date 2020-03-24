$(document).ready(function () {
    function getRandomColor() {
        let color = '#';
        let color2 = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        for (var j = 0; j < 6; j++) {
            color += color2[parseInt(Math.random() * color2.length)]
        }
        return color;
    }

    $('#btn').on('click', function () {
        let color = getRandomColor();
        $('body').css('backgroundColor', color)
        $('#colorCode').val(color);
    })

    $('#btn2').on('click', function () {
        $('#colorBox').empty()
        let colorLen = $('#colorLength').val();
        for (let j = 0; j < colorLen; j++) {
            $('#colorBox').append('<li class="color"></li>');
        }

        for (let i = 0; i < $('#colorBox').children().length; i++) {
            let color = getRandomColor();
            let colorBox = $('.color');
            colorBox.eq(i).css({backgroundColor: color}).append(`<span>${color}</span>`)
            $('body').css('backgroundColor', color)
        }
    })
})