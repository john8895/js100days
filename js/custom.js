$(document).ready(function () {
    // Dropdown Menu
    let dorpdownItem = $('.navbar.navbar-menu>li');
    dorpdownItem.mouseover(function () {
            console.log(this);

            $(this).children('.dropdown-menu').show()
        }
    )
    dorpdownItem.mouseout(function () {
        console.log('mouseout');

            $(this).children('.dropdown-menu').hide()
        }
    )


    $('.slide-show').slick({
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: '<div class="chevron-container slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></span><span class="sr-only">Next</span></div>',
        prevArrow: '<div class="chevron-container slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></span><span class="sr-only">Previous</span></div>'
    });

})

