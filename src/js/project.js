export function project() {
    var LslideSwiper = new Swiper("#project .project_slide_l", {
        effect: 'fade',
        loop: true,
        speed: 1000,
        slideActiveClass: 'on',
        allowTouchMove: false,
        autoplay: {
            delay: 3200,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '#project .slide_arrow .next',
            prevEl: '#project .slide_arrow .prev',
        },
    });

    var RslideSwiper = new Swiper("#project .project_slide_r", {
        loop: true,
        speed: 1000,
        slidesPerView: '3',
        spaceBetween: 40,
        allowTouchMove: false,
        autoplay: {
            delay: 3200,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '#project .slide_arrow .next',
            prevEl: '#project .slide_arrow .prev',
        },
    });

    $('.project-mainmenu').click(function () {
    $('.project-submenu').stop().slideDown()
})
$('.project-mainmenu ').click(function () {
    $('.project-submenu').stop().slideUp()
    $(this).addClass('on')
})
}

