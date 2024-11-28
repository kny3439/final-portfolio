

export function work() {
    const list = gsap.utils.toArray('.work-list li')
    gsap.to(list, {
        xPercent: -100 * (list.length - 1),
        ease: 'none',
        scrollTrigger: {
            trigger: '#work',
            start: 'top top',
            end: '+=8000',
            pin: true,
            scrub: 1,
            snap: 'none',
        }
    })

    const splide = new Splide('.splide', {
        type: 'loop',
        drag: false,
        gap: 30,
        autoWidth: true,
        arrows: false,
        pagination: false,
        autoScroll: {
            speed: .7, // '-' 로 하면 반대로 감
            pauseOnHover: true,// hover하면 멈춤
            rewind: false, //serinterval 할 때 나갔다 들어오면 빨라지는거 조절
        },
        breakpoints: {
            1200: { perPage: 3 },
            640: { perPage: 2 }
        }
    })
    splide.mount(window.splide.Extensions)



    $('.work-list li').mouseenter(function () {
        $(this).children('a').addClass('on')
        let idx=$(this).index()
        $('.desc-index li').removeClass('on')
        $('.desc-index li').eq(idx).addClass('on')
    })
    $('.work-list li').mouseleave(function () {
        $(this).children('a').removeClass('on')
        $('.desc-index li').removeClass('on')
    })

}

