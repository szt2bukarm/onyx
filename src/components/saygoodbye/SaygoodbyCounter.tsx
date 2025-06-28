"use client"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useEffect, useState } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function SaygoodbyCounter() {

    useGSAP(() => {
        let trigger = ScrollTrigger.create({
            trigger: "[data-gsap='saygoodbye']",
            start: "top bottom",
            once: true,
            onEnter: () => {
                spinNumber(1,0);
                spinNumber(2,0.1);
            }
        })

        const handleResize = () => {
            trigger.refresh();
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])

    const spinNumber = (el:number,delay:number) => {
        gsap.set(`[data-gsap='saygoodbye-counter-${el}']`, {
            filter: "blur(20px)",
        })
        gsap.to(`[data-gsap='saygoodbye-counter-${el}']`, {
            filter: "blur(0px)",
            duration: 2,
            ease: "power3.out",
        })

        const numberHeight = document.querySelector(`[data-gsap='saygoodbye-counter-${el}']`)?.children[0].getBoundingClientRect().height
        gsap.to(`[data-gsap='saygoodbye-counter-${el}']`, {
            y: -numberHeight*9,
            ease: "linear",
            // repeat: 2,
            delay: delay,
            onComplete: () => {
                gsap.set(`[data-gsap='saygoodbye-counter-${el}']`, {y: 0})
                gsap.to(`[data-gsap='saygoodbye-counter-${el}']`, {
                    y: -numberHeight*9,
                    duration: 1.5,
                    ease: "power3.out",
                })
            }
        })
    }

    useEffect(() => {
        const handleResize = () => {
            gsap.set("[data-gsap='saygoodbye-counter-1'], [data-gsap='saygoodbye-counter-2']", {
                y: 0
            })
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])

    return (
        <div data-gsap="saygoodbye" className="flex overflow-hidden font-regular text-[45vw] leading-[45vw] md:text-[320px] md:leading-[250px] text-white mb-10 xl:mb-0">
            <div className="flex overflow-hidden max-h-[45vw] md:max-h-[250px] pt-3">
            <div data-gsap="saygoodbye-counter-1" className="flex flex-col">
                <p>9</p>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
            </div> 
            <div data-gsap="saygoodbye-counter-2" className="flex flex-col">
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
            </div> 
            <p>%</p>
        </div>
    </div>
    )
}