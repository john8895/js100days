(function ($) {
    'use strict';

    /*======== 1. PREELOADER ========*/
    $(window).on('load', function () {
        $('#preloader').fadeOut(1000);
    });

    /*======== 2. NAVBAR ========*/

    $(window).on('load', function () {

        var header_area = $('.header');
        var main_area = header_area.find('.navbar');
        var zero = 0;
        var navbarSticky = $('.navbar-sticky');

        $(window).scroll(function () {
            var st = $(this).scrollTop();
            if (st > zero) {
                navbarSticky.addClass('navbar-scrollUp');
            } else {
                navbarSticky.removeClass('navbar-scrollUp');
            }
            zero = st;

            if (main_area.hasClass('navbar-sticky') && ($(this).scrollTop() <= 600 || $(this).width() <= 300)) {
                main_area.removeClass('navbar-scrollUp');
                main_area.removeClass('navbar-sticky').appendTo(header_area);
                header_area.css('height', 'auto');
            } else if (!main_area.hasClass('navbar-sticky') && $(this).width() > 300 && $(this).scrollTop() > 600) {
                header_area.css('height', header_area.height());
                main_area.addClass('navbar-scrollUp');
                main_area.css({'opacity': '0'}).addClass('navbar-sticky');
                main_area.appendTo($('body')).animate({'opacity': 1});
            }
        });

        $(window).trigger('resize');
        $(window).trigger('scroll');
    });

    /* ======== ALL DROPDOWN ON HOVER======== */
    if ($(window).width() > 991) {
        $('.navbar-expand-lg .navbar-nav .dropdown').hover(function () {
            $(this).addClass('').find('.dropdown-menu').addClass('show');
        }, function () {
            $(this).find('.dropdown-menu').removeClass('show');
        });
    }

    if ($(window).width() > 767) {
        $('.navbar-expand-md .navbar-nav .dropdown').hover(function () {
            $(this).addClass('').find('.dropdown-menu').addClass('show');
        }, function () {
            $(this).find('.dropdown-menu').removeClass('show');
        });
    }

    /*======== RS-SLIDER ========*/
    jQuery('#rev_slider_1').show().revolution({
        delay: 5000,
        sliderLayout: 'fullwidth',
        sliderType: 'standard',
        responsiveLevels: [1171, 1025, 769, 480],
        gridwidth: [1171, 1025, 769, 480],
        gridheight: [560, 500, 450, 350],

        /* basic navigation arrows and bullets */
        navigation: {
            arrows: {
                enable: true,
                style: 'hesperiden',
                hide_onleave: false
            },

            bullets: {
                enable: false,
                style: 'hesperiden',
                hide_onleave: false,
                h_align: 'center',
                v_align: 'bottom',
                h_offset: 0,
                v_offset: 20,
                space: 5
            }
        },
        disableProgressBar: 'on'
    });

    jQuery('#rev_slider_custom_2').show().revolution({
        delay: 5000,
        sliderLayout: 'fullwidth',
        sliderType: 'standard',
        responsiveLevels: [1171, 1025, 769, 480],
        gridwidth: [1171, 1025, 769, 480],
        gridheight: [655, 605, 555, 450],
        navigation: {
            arrows: {
                enable: true,
                style: 'hesperiden',
                hide_onleave: false
            },
            bullets: {
                enable: false,
                style: 'hesperiden',
                hide_onleave: false,
                h_align: 'center',
                v_align: 'bottom',
                h_offset: 0,
                v_offset: 20,
                space: 15
            }
        },
        disableProgressBar: 'on'
    });

    jQuery('#rev_slider_custom_3').show().revolution({
        delay: 5000,
        sliderLayout: 'fullscreen',
        sliderType: 'standard',
        responsiveLevels: [1171, 1025, 769, 480],
        gridwidth: [1171, 1025, 769, 480],
        gridheight: [655, 605, 555, 450],
        navigation: {
            arrows: {
                enable: true,
                style: 'hesperiden',
                hide_onleave: false
            },
            bullets: {
                enable: false,
                style: 'hesperiden',
                hide_onleave: false,
                h_align: 'center',
                v_align: 'bottom',
                h_offset: 0,
                v_offset: 20,
                space: 15
            }
        },
        disableProgressBar: 'on'
    });

    jQuery('#rev_slider_custom_4').show().revolution({
        delay: 5000,
        sliderLayout: 'fullwidth',
        sliderType: 'standard',
        responsiveLevels: [1171, 1025, 769, 480],
        gridwidth: [1171, 1025, 769, 480],
        gridheight: [655, 605, 555, 450],
        navigation: {
            arrows: {
                enable: true,
                style: 'hesperiden',
                hide_onleave: false
            },
            bullets: {
                enable: false,
                style: 'hesperiden',
                hide_onleave: false,
                h_align: 'center',
                v_align: 'bottom',
                h_offset: 0,
                v_offset: 20,
                space: 15
            }
        },
        disableProgressBar: 'on'
    });

    //============================== Topbar Cart Icon =========================

    $('.cart-dropdown a').on('click', function () {
        $('.cart-dropdown a .icon-small').toggleClass('d-none');
    });


    //============================== BRAND SLIDER =========================
    $('#brands').owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: false,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 5
            }
        }
    });
    //============================== testimonial =========================
    $('#testimonial').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa fa-arrow-right"></i>'],
        items: 1
    });
    //============================== categories =========================
    $('.categories-slider').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: false,
        nav: true,
        navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa fa-arrow-right"></i>'],
        dots: false,
        autoplayTimeout: 1000,
        items: 1,
        center: true
    });
//============================== TEAM SLIDER =========================
//     let noclone = false;
//     console.log($('.team-slider .slide-item').length);
//     if ($('.team-slider .owl-item').length > 4) {
//         noclone = true
//     }
    $('.team-slider').owlCarousel({
        margin: 30,
        dots: false,
        nav: true,
        loop: false,
        navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa fa-arrow-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    /*======== 9. BACK TO TOP ========*/
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-to-top').css('opacity', 1);
            } else {
                $('#back-to-top').css('opacity', 0);
            }
        });
    });

    //============================== ISOTOPE =========================
    // init Isotope
    // var $grid = $('.grid').isotope({
    //     itemSelector: '.element-item',
    //     layoutMode: 'fitRows'
    // });

    // filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function () {
            var number = $(this).find('.number').text();
            return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium: function () {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };

    // bind filter button click
    $('#filters').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({filter: filterValue});
    });

    // bind sort button click
    $('#sorts').on('click', 'button', function () {
        var sortByValue = $(this).attr('data-sort-by');
        $grid.isotope({sortBy: sortByValue});
    });

    // change is-checked class on buttons
    $('.button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });


    //============================== VIDEOBOX =========================
    var videoBox = $('.video-box i');
    videoBox.on('click', function () {
        var video = '<iframe class="embed-responsive-item"  allowfullscreen src="' + $(this).attr('data-video') + '"></iframe>';
        $(this).replaceWith(video);
    });

    //============================== SELECT 2 =========================
    // $('.select2-select').select2({
    //     minimumResultsForSearch: -1
    // });

    //============================== VIDEO BOX =========================
    $('.box-video').click(function () {
        $('iframe', this)[0].src += '&amp;autoplay=1';
        $(this).addClass('open');
    });

    //============================== COUNDOWN =========================
    // $('#courseTimer').syotimer({
    //   //   year: 2019,
    //   //   month: 11,
    //   //   day: 9,
    //   //   hour: 20,
    //   //   minute: 30
    //   // });


    /*======== 18. COUNTER-UP ========*/
    var counter = $('#counter');
    if (counter.length) {
        var a = 0;
        $(window).scroll(function () {
            var oTop = counter.offset().top - window.innerHeight;
            if (a === 0 && $(window).scrollTop() > oTop) {
                $('.counter-value').each(function () {
                    var $this = $(this),
                        countTo = $this.attr('data-count');
                    $({
                        countNum: $this.text()
                    }).animate({
                            countNum: countTo
                        },
                        {
                            duration: 5000,
                            easing: 'swing',
                            step: function () {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function () {
                                $this.text(this.countNum);
                                //alert('finished');
                            }

                        });
                });
                a = 1;
            }
        });
    }

// scrollup
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $('html, body').animate({scrollTop: 0}, 500);
        return false;
    });


    // element-right-sidebar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('.element-right-sidebar').addClass('sidebar-fixed');
        } else {
            $('.element-right-sidebar').removeClass('sidebar-fixed');
        }

        if ($(window).scrollTop() + $(window).height() > $(document).height() - 590) {
            $('.element-right-sidebar').addClass('right-sidebar-absolute').removeClass('sidebar-fixed');
        } else {
            $('.element-right-sidebar').removeClass('right-sidebar-absolute');
        }
    });

    /*======== 12. MAP ========*/
    function initialize() {
        var myLatLng = {lat: 53.385873, lng: -1.471471};

        //Custom Style
        var styles = [
            {
                featureType: 'landscape',
                stylers: [
                    {color: '#eeddee'}
                ]
            }, {
                featureType: 'natural',
                stylers: [
                    {hue: '#ff0000'}
                ]
            }, {
                featureType: 'road',
                stylers: [
                    {hue: '#5500aa'},
                    {saturation: -70}
                ]
            }, {
                featureType: 'building',
                elementType: 'labels',
                stylers: [
                    {hue: '#000066'}
                ]
            }, {
                featureType: 'poi', //points of interest
                stylers: [
                    {hue: '#0044ff'}
                ]
            }
        ];
        var mapOptions = {
            zoom: 14,
            scrollwheel: false,
            center: new google.maps.LatLng(53.385873, -1.471471),
            styles: styles

        };
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var image = 'assets/img/marker.png';
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: image
        });
    }

    var mapId = $('#map');
    if (mapId.length) {
        google.maps.event.addDomListener(window, 'load', initialize);
    }

    //============================== ANIMATION =========================
    var $animation_elements = $('.animated');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function () {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);
            var animationType = $(this).attr('data-animation');

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
                $element.addClass(animationType);
            } else {
                $element.removeClass(animationType);
            }
        });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');

    /*======== COUNT INPUT (Quantity) ========*/
    $('.incr-btn').on('click', function (e) {
        var $button = $(this);
        var oldValue = $button.parent().find('.quantity').val();
        $button.parent().find('.incr-btn[data-action="decrease"]').removeClass('inactive');
        if ($button.data('action') === 'increase') {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below 1
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
                $button.addClass('inactive');
            }
        }
        $button.parent().find('.quantity').val(newVal);
        e.preventDefault();
    });

    /*======== 11.PRICE SLIDER RANGER  ========*/
    $('[data-toggle="tooltip"]').tooltip();

    /*======== 10. SMOOTH SCROLLING TO SECTION ========*/
    $('.scrolling  a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var target = $(this).attr('href');

        function customVeocity(set_offset) {
            $(target).velocity('scroll', {
                duration: 800,
                offset: set_offset,
                easing: 'easeOutExpo',
                mobileHA: false
            });
        }

        if ($('#body').hasClass('up-scroll') || $('#body').hasClass('static')) {
            customVeocity(2);
        } else {
            customVeocity(-90);
        }

    });

    /*======== 11.PRICE SLIDER RANGER  ========*/
    var nonLinearStepSlider = document.getElementById('slider-non-linear-step');
    if (nonLinearStepSlider) {
        noUiSlider.create(nonLinearStepSlider, {
            connect: true,
            start: [125, 750],
            range: {
                'min': [0],
                'max': [1000]
            }
        });
    }

    var sliderValue = [
        document.getElementById('lower-value'), // 0
        document.getElementById('upper-value')  // 1
    ];

    // Display the slider value and how far the handle moved
    // from the left edge of the slider.
    var priceRange = document.getElementById('price-range');
    if (priceRange) {
        nonLinearStepSlider.noUiSlider.on('update', function (values, handle) {
            sliderValue[handle].innerHTML = '$' + Math.floor(values[handle]);
        });
    }

    /*======== 11.Wow Js  ========*/
    // new WOW().init();

})(jQuery);


$(document).ready(function () {
    // $('.slider-for').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     asNavFor: '.slider-nav'
    // });
    // var infiniteScroll = true;
    // console.log($('.slick-slide').length);
    // if ($('.slick-slide').length < 5)
    // {
    //     infiniteScroll = false;
    // }
    // $('.slider-nav').slick({
    //     infinite:false,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     asNavFor: '.slider-for',
    //     dots: true,
    //     centerMode: true,
    //     focusOnSelect: true
    // });
    // // ZOOM
    // $('.zoom1').zoom();

    //header menu
    $('.dropdown-submenu-toggle').on("mouseover", function() {
        var submenu = $(this);
        $('.dropdown-menu .dropdown-submenu').removeClass('show');
        submenu.children('.dropdown-submenu').addClass('show');
    });
    $('.navbar-nav').on("mouseout", function() {
        $('.dropdown-menu .dropdown-submenu').removeClass('show');
    });




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
/*!
	Zoom 1.7.18
	Pdt-details use
	license: MIT
	http://www.jacklmoore.com/zoom
// */
// (function(o){var t={url:!1,callback:!1,target:!1,duration:120,on:"mouseover",touch:!0,onZoomIn:!1,onZoomOut:!1,magnify:1};o.zoom=function(t,n,e,i){var u,c,a,r,m,l,s,f=o(t),h=f.css("position"),d=o(n);return t.style.position=/(absolute|fixed)/.test(h)?h:"relative",t.style.overflow="hidden",e.style.width=e.style.height="",o(e).addClass("zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:e.width*i,height:e.height*i,border:"none",maxWidth:"none",maxHeight:"none"}).appendTo(t),{init:function(){c=f.outerWidth(),u=f.outerHeight(),n===t?(r=c,a=u):(r=d.outerWidth(),a=d.outerHeight()),m=(e.width-c)/r,l=(e.height-u)/a,s=d.offset()},move:function(o){var t=o.pageX-s.left,n=o.pageY-s.top;n=Math.max(Math.min(n,a),0),t=Math.max(Math.min(t,r),0),e.style.left=t*-m+"px",e.style.top=n*-l+"px"}}},o.fn.zoom=function(n){return this.each(function(){var e=o.extend({},t,n||{}),i=e.target&&o(e.target)[0]||this,u=this,c=o(u),a=document.createElement("img"),r=o(a),m="mousemove.zoom",l=!1,s=!1;if(!e.url){var f=u.querySelector("img");if(f&&(e.url=f.getAttribute("data-src")||f.currentSrc||f.src),!e.url)return}c.one("zoom.destroy",function(o,t){c.off(".zoom"),i.style.position=o,i.style.overflow=t,a.onload=null,r.remove()}.bind(this,i.style.position,i.style.overflow)),a.onload=function(){function t(t){f.init(),f.move(t),r.stop().fadeTo(o.support.opacity?e.duration:0,1,o.isFunction(e.onZoomIn)?e.onZoomIn.call(a):!1)}function n(){r.stop().fadeTo(e.duration,0,o.isFunction(e.onZoomOut)?e.onZoomOut.call(a):!1)}var f=o.zoom(i,u,a,e.magnify);"grab"===e.on?c.on("mousedown.zoom",function(e){1===e.which&&(o(document).one("mouseup.zoom",function(){n(),o(document).off(m,f.move)}),t(e),o(document).on(m,f.move),e.preventDefault())}):"click"===e.on?c.on("click.zoom",function(e){return l?void 0:(l=!0,t(e),o(document).on(m,f.move),o(document).one("click.zoom",function(){n(),l=!1,o(document).off(m,f.move)}),!1)}):"toggle"===e.on?c.on("click.zoom",function(o){l?n():t(o),l=!l}):"mouseover"===e.on&&(f.init(),c.on("mouseenter.zoom",t).on("mouseleave.zoom",n).on(m,f.move)),e.touch&&c.on("touchstart.zoom",function(o){o.preventDefault(),s?(s=!1,n()):(s=!0,t(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0]))}).on("touchmove.zoom",function(o){o.preventDefault(),f.move(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0])}).on("touchend.zoom",function(o){o.preventDefault(),s&&(s=!1,n())}),o.isFunction(e.callback)&&e.callback.call(a)},a.src=e.url})},o.fn.zoom.defaults=t})(window.jQuery);


