import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const desTL = gsap.timeline();

desTL.from("#des",{duration:2, x:150});

export function desAnimation(){
    ScrollTrigger.create({
        // markers: true,
        animation:  desTL,
        // toggleActions: "play none none none",
        trigger: "#des",
        start:"top, 100%",
        end: "bottom 60%",
        scrub: 2
    });
}  
const macTL = gsap.timeline();

macTL.from("#macaroon",{duration:2, x:-80, alpha:.1, scale:2});

export function macAnimation(){
    ScrollTrigger.create({
        // markers: true,
        animation:  macTL,
        // toggleActions: "play none none none",
        trigger: "#macaroon",
        start:"top, 100%",
        end: "bottom 80%",
        scrub: 2
    });
}  