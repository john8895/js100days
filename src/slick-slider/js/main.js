$(document).ready(function () {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });
    // ZOOM
    $('.zoom1').zoom();

// STYLE GRAB
    //$('.ex2').zoom({ on:'grab' });

// STYLE CLICK
    //$('.ex3').zoom({ on:'click' });

// STYLE TOGGLE
    //$('.ex4').zoom({ on:'toggle' });
});