"use client"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);

export default function FooterLogo() {

    useGSAP(() => {
        gsap.set("[data-gsap='footer-logo-o'], [data-gsap='footer-logo-n'], [data-gsap='footer-logo-y'], [data-gsap='footer-logo-x']", {
            y: "150%"
        })
        gsap.set("[data-gsap='footer-logo-tm']", {opacity:0})
        let trigger = ScrollTrigger.create({
            trigger: "[data-gsap='footer-logo-o']",
            start: "-500px 70%",
            end: "-500px 70%",
            onEnter: () => {
                gsap.to("[data-gsap='footer-logo-tm']", {opacity:1, duration: 0.1,delay:0.8})
                gsap.to("[data-gsap='footer-logo-o'], [data-gsap='footer-logo-n'], [data-gsap='footer-logo-y'], [data-gsap='footer-logo-x'], [data-gsap='footer-logo-tm']", {
                    y: 0,
                    duration: 1,
                    ease: "out",
                    stagger: 0.1
                })
            }
        })
        
        const handleResize = () => {
            trigger.refresh();
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    })

    return (
        <div data-gsap="footer-logo" className="w-screen -translate-x-[20px] sm:-translate-x-[80px] h-fit flex justify-center items-start overflow-hidden overflow-x-visible">
            <img data-gsap="footer-logo-o"
                src="logoletters/o.svg" 
                alt="letter o from ONYX logo" 
                className="h-[18.4vw] w-auto" 
            />
            <img data-gsap="footer-logo-n"
                src="logoletters/n.svg" 
                alt="letter n from ONYX logo" 
                className="h-[18.4vw] w-auto" 
            />
            <div className="-translate-x-1 sm:-translate-x-2 md:-translate-x-3">
            <img data-gsap="footer-logo-y"
                src="logoletters/y.svg" 
                alt="letter y from ONYX logo" 
                className="h-[18.4vw] w-auto" 
            />
            </div>
            <img data-gsap="footer-logo-x"
                src="logoletters/x.svg" 
                alt="letter x from ONYX logo" 
                className="h-[18.4vw] w-auto" 
            />
            <img data-gsap="footer-logo-tm"
                src="logoletters/tm.svg" 
                alt="trademark symbol" 
                className="h-[2vw] w-auto ml-[0.5vw]" 
            />
        </div>
    )
}