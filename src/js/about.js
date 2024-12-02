import gsap from "gsap";

export function about() {
    // const sideElements = document.querySelectorAll(".side");
    // const topElements = document.querySelectorAll(".top");
    // const bottomElements = document.querySelectorAll(".bottom");

    // function animateOnScroll() {
    //     animateElements(sideElements, { x: -100 }); // .side 애니메이션
    //     animateElements(topElements, { y: 100 });  // .top 애니메이션
    //     animateElements(bottomElements, { y: -100 }); // .bottom 애니메이션
    // }

    // function animateElements(elements, animationProps) {
    //     const rect = elements[0]?.getBoundingClientRect();
    //     const windowHeight = window.innerHeight;

    //     if (rect && rect.top < windowHeight && rect.bottom > 0) {
    //         // 요소들이 화면 안에 들어왔을 때 애니메이션 실행
    //         gsap.to(elements, {
    //             ...animationProps,
    //             opacity: 1,
    //             duration: 1,
    //             stagger: {from:'random',each:0.5}, // 요소 간 간격 조정
    //         });
    //     } else {
    //         // 요소들이 화면을 벗어났을 때 초기화
    //         gsap.to(elements, {
    //             ...animationProps,
    //             opacity: 0,
    //             duration: 1,
    //         });
    //     }
    // }

    // // 스크롤 이벤트 감지
    // window.addEventListener("scroll", animateOnScroll);

    // // 초기 실행
    // animateOnScroll();


    const splide2 = new Splide('#about .splide', {
        type: 'loop',
        drag: false,
        gap: 30,
        autoWidth: true,
        arrows: false,
        pagination: false,
        autoScroll: {
            speed: -1,
            pauseOnHover: true,
            rewind: false,
        },
        breakpoints: {
            1200: { perPage: 3 },
            640: { perPage: 2 }
        }
    })
    splide2.mount(window.splide.Extensions)

}
