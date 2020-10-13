import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const recTL = gsap.timeline();

recTL.from("#rec",{duration:2, x:100});

export function recAnimation(){
    ScrollTrigger.create({
        // markers: true,
        animation:  recTL,
        // toggleActions: "play none none none",
        trigger: "#rec",
        start:"top, 100%",
        end: "bottom 60%",
        scrub: 2
    });
}  





const videoTL = gsap.timeline();

videoTL.from("#video",{duration:2, x:-80, alpha:.1});

export function videoAnimation(){
    ScrollTrigger.create({
        //    markers: true,
        animation:  videoTL,
        // toggleActions: "play none none none",
        trigger: "#video",
        start:"top, 80%",
        end: "bottom 50%",
        scrub: 2
    });
}  
