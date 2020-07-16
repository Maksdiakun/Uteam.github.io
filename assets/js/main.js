// jQuery(document).ready(function ($) {
//     "use strict";

//     // Platform Detection
//     const IOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
//         Android = navigator.userAgent.toLowerCase().indexOf("android") > -1,
//         Firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1,
//         Edge = navigator.userAgent.toLowerCase().indexOf('edge') > -1,
//         IE = navigator.userAgent.toLowerCase().indexOf('msie ') > -1;

//     // Browser Windows Sizes
//     const browser = {
//         w: document.documentElement.clientWidth,
//         h: document.documentElement.clientHeight,
//     };


//     let vh = window.innerHeight * 0.01;
//     document.documentElement.style.setProperty('--vh', `${vh}px`);

//     $(window).on('resize orientationchange', () => {
//         browser.w = document.documentElement.clientWidth;
//         browser.h = document.documentElement.clientHeight;

//         let vh = window.innerHeight * 0.01;
//         document.documentElement.style.setProperty('--vh', `${vh}px`);
//     });

//     /* ----------------------------------- Scrollbar CSS Variable ------------------------------------ */
//     {
//         const getScrollbarWidth = () => {
//             let outer = document.createElement("div");
//             outer.style.visibility = "hidden";
//             outer.style.width = "100px";
//             outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

//             document.body.appendChild(outer);

//             let widthNoScroll = outer.offsetWidth;
//             // force scrollbars
//             outer.style.overflow = "scroll";

//             // add innerdiv
//             let inner = document.createElement("div");
//             inner.style.width = "100%";
//             outer.appendChild(inner);

//             let widthWithScroll = inner.offsetWidth;

//             // remove divs
//             outer.parentNode.removeChild(outer);

//             return widthNoScroll - widthWithScroll;
//         }

//         if ($('body').outerHeight() <= document.documentElement.clientHeight) {
//             document.documentElement.style.setProperty('--scroll-width', 0);
//         } else {
//             if ($('html').hasClass('cssscrollbar') && !(Android || IOS || document.documentElement.clientWidth <= 991)) {
//                 document.documentElement.style.setProperty('--scroll-width', getComputedStyle(document.documentElement).getPropertyValue('--scrollbar-width'));
//             } else {
//                 document.documentElement.style.setProperty('--scroll-width', getScrollbarWidth() + 'px');
//             }
//         }
//     }


// });
function setMargin() {
    if ($(window).width() < 1200) {
        var margin = $('.container').css('margin-left');
        var width = $('.container').css('width');
        var sum = parseInt(margin) + parseInt(width) - 15;
        $('.home_page .secvices_section .my_row').css('width', sum);
    }
};


$(document).ready(function () {
    setMargin();
    $('select , input[type="file"]').styler();
    var mySwiper = new Swiper('.top_banner_wrap .swiper-container', {
        speed: 400,
        disableOnInteraction: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
    var mySwiper2 = new Swiper('.trust .swiper-container', {
        speed: 1000,
        slidesPerView: 'auto',
        loop: true,
        spaceBetween: 70,
        centeredSlides: true,
        autoplay: {
            delay: 0,
        },
    });

    $('.select_tabs').change(function (e) {
        $(e.target).parent().next().children().removeClass('show').removeClass('active');
        $(`#${e.target.value}`).addClass('active');
        setTimeout(function () {
            $(`#${e.target.value}`).addClass('show');
        }, 10);
    });




    // dropdown buttons
    $('.drop_down_control').click(function (e) {
        if ($(e.currentTarget).hasClass('drop_down_control')) {
            $(e.currentTarget).toggleClass('active_down');
            $(e.currentTarget).next('ul').slideToggle(300);
        }
    })
    $('.menu_inf_btn').click(function (e) {
        $(e.currentTarget).toggleClass('menu_inf_btn_active');
        console.log($(window).width)
        if ($(window).width() > 991.9) {
            $(e.currentTarget).next('ul').slideToggle(300);
        } else {
            $('.mobile_menu_wrap').slideToggle(400);
            $('body').toggleClass('scrollbody')
        }
    });
    $('.top_banner').click(function (e) {
        if ($(e.target).parent().is('form')) {
            e.preventDefault()
        }
    });


    // faq
    $('.faq_item_header').click(function (e) {
        $(e.currentTarget).next().slideToggle(300);
        $(e.currentTarget).toggleClass('faq_header_active');
    });
    $('.jq-file__name').html(' Файл не вибрано');
    $('.delete_file').click(function (e) {
        $('.input_file_wrap input').val('');
        $('.jq-file__name').html(' Файл не вибрано');
        $(e.currentTarget).css('display', 'none');
        $('.input_file_wrap').css('padding-right', '0');

    });
    $('.input_file_wrap input').change(function (e) {
        if (e.target.value == false || e.target.value == ' Файл не вибрано') {
            $('.delete_file').css('display', 'none');
            $('.input_file_wrap').css('padding-right', '0');
        }
        else {
            $('.delete_file').css('display', 'block');
            $('.input_file_wrap').css('padding-right', '35px');
        }
    });
});
$(window).resize(function () {
    setMargin();
})
