import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const bbTL = gsap.timeline();

bbTL.from("#bb",{duration:2, x:100});

export function bbAnimation(){
    ScrollTrigger.create({
        // markers: true,
        animation:  bbTL,
        // toggleActions: "play none none none",
        trigger: "#bb",
        start:"top, 100%",
        end: "bottom 60%",
        scrub: 2
    });
}  
const toastTL = gsap.timeline();

toastTL.from("#toast",{duration:2, x:-80, alpha:.1});

export function toastAnimation(){
    ScrollTrigger.create({
        // markers: true,
        animation:  toastTL,
        // toggleActions: "play none none none",
        trigger: "#toast",
        start:"top, 80%",
        end: "bottom 60%",
        scrub: 2
    });
}  