$(document).ready(function () {
    /* Product2.html -  Product carousel to zoom product section */
    $('.owl-carousel.product-gallery-sm').owlCarousel({
        loop:false,
        margin:6,
        responsiveClass:true,
        nav:false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 10000,
        responsive:{
            0:{
                items:3
            },
            480: {
                items:4
            },
            768: {
                items:4
            },
            1200: {
                items:4
            }
        }
    });

    /* swap images for zoom on click event */
    $('.product-gallery').find('a').on('click', function (e) {
        var ez = $('#product-zoom').data('elevateZoom'),
            smallImg = $(this).data('image'),
            bigImg = $(this).data('zoom-image');

        ez.swaptheimage(smallImg, bigImg);
        e.preventDefault();
    });

});


$('#product-zoom').elevateZoom({
    zoomType: "inner",
    cursor: "zoom-in"
});