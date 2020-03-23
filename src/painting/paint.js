$(document).ready(function () {




    let paint;
    $('.color').on('click',function () {
        paint = this.style.backgroundColor;
    })
    $('.paint').on('click',function () {
        this.style.backgroundColor = paint;
    })





})