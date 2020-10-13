import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const bitesTL = gsap.timeline();

bitesTL.from("#bites",{duration:3.5, x:-500});

export function bitesAnimation(){
    ScrollTrigger.create({
        // markers: true,
        animation:  bitesTL,
        // toggleActions: "play none none none",
        trigger: "#bites",
        start:"top, 70%",
        end: "bottom 60%",
        scrub: 2
    });
}  
const ImgTL3 = gsap.timeline();

// gsap.set("#intro",{transformOrigin: "center"});

ImgTL3.from(".img3",{duration:2, x:-80, alpha:0.1});

export function imgAnimation3(){
    ScrollTrigger.create({
        // markers: true,
        animation: ImgTL3,
        // toggleActions: "play none none none",
        trigger: ".img3",
        start:"top, 80%",
        end: "bottom, 30%",
        scrub: 2
    });
}