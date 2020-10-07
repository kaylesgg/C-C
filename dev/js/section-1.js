import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const snacksTL = gsap.timeline();

snacksTL.from("#snacks",{duration:4, x:-500});

export function snacksAnimation(){
    ScrollTrigger.create({
        markers: true,
        animation:  snacksTL,
        // toggleActions: "play none none none",
        trigger: "#snacks",
        start:"top, 100%",
        end: "bottom 50%",
        scrub: 2
    });
}  
const ImgTL = gsap.timeline();

// gsap.set("#intro",{transformOrigin: "center"});

ImgTL.from(".img",{duration:2, x:-80, alpha:0.1});

export function imgAnimation(){
    ScrollTrigger.create({
        // markers: true,
        animation: ImgTL,
        // toggleActions: "play none none none",
        trigger: ".img",
        start:"top, 100%",
        end: "bottom, 40%",
        scrub: 2
    });
}