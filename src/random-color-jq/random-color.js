$(document).ready(function () {
    function getRandomColor() {
        let color = '#';
        let color2 = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        for (var j = 0; j < 6; j++) {
            color += color2[parseInt(Math.random() * color2.length)]
        }
        return color;
    }

    $('#btn').on('click',function () {
        let color = getRandomColor();
        $('body').css('backgroundColor',color)
        $('#colorCode').val(color);
    })

    $('#btn2').on('click',function () {
        let colorBox = $('#colorBox');
        colorBox.empty();
        let colorLen = $('#colorLength').val();
        for(let j=0;j<colorLen;j++){
            $('#colorBox').append('<li class="color"></li>');
        }

        for (let i=0;i<colorBox.children().length;i++){
            let color=getRandomColor();
            // 這裡要怎麼遍歷 colorBox 的每一個子元素，使其套用不同的顏色？
            //
            $('.color').eq(i).css({backgroundColor:color})
            // colorBox.children[i].style.backgroundColor = color;
            // colorBox.children[i].innerHTML = `<span>${color}</span>`;
            // document.body.style.backgroundColor = color;
        }
    })
})

let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2');
let oputput = document.getElementById('colorCode');
let colorBox = document.getElementById('colorBox');
// btn.onclick = function () {
//     let color = getRandomColor();
//     document.body.style.backgroundColor = color;
//     oputput.value = color;
//     console.log(color);
//
// };
// btn2.onclick = function () {
//     let colorLen = document.getElementById('colorLength').value;
//     colorBox.innerText = '';
//     for(let j=0;j<colorLen;j++){
//         let colorLi = document.createElement('li');
//         colorLi.classList.add('color');
//         colorBox.appendChild(colorLi);
//     }
//     let len = colorBox.children.length;
//     for (let i=0;i<len;i++){
//         let color=getRandomColor()
//         colorBox.children[i].style.backgroundColor = color;
//         colorBox.children[i].innerHTML = `<span>${color}</span>`;
//         document.body.style.backgroundColor = color;
//     }
// };
// function getRandomColor() {
//     let color = '#';
//     let color2 = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//     for (var j = 0; j < 6; j++) {
//         color += color2[parseInt(Math.random() * color2.length)]
//     }
//     return color;
// }