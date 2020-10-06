import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const snacksTL = gsap.timeline();

snacksTL.from("#snacks",{duration:3.5, x:-500});

export function snacksAnimation(){
    ScrollTrigger.create({
        markers: true,
        animation:  snacksTL,
        // toggleActions: "play none none none",
        trigger: "#snacks",
        start:"top, 80%",
        end: "bottom 60%",
        scrub: 2
    });
}  