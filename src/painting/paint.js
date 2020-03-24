$(document).ready(function () {

    function getRandomColor(){
        let color='#';
        let color2=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
        for(let i=0;i<7;i++){
            console.log('E');

        }
    }




    let paint;
    $('.color').on('click',function () {
        paint = this.style.backgroundColor;
    })
    $('.paint').on('click',function () {
        this.style.backgroundColor = paint;
    })

})