import gsap from 'gsap';

export function about() {

    gsap.from('.word .side', { opacity: 0, x: -100 , duration: 1 })
    gsap.from('.word .top', { opacity: 0, y: 100 , duration: 1})
    gsap.from('.word .bottom', { opacity: 0, y: -100 , duration: 1 })

}