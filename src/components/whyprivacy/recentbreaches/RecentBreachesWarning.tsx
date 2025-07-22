"use client"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/src/ScrollTrigger"
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function RecentBreachesWarning() {
    const textRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.set(textRef.current, {opacity: 0})
        let trigger = ScrollTrigger.create({
            trigger: textRef.current,
            start: "bottom bottom",
            onEnter: () => {
                gsap.to(textRef.current, {opacity: 1,delay: 0.3, duration: 1, ease: "power4.out"})
            }
        })
    })

    return (
        <div className="py-[56px] px-[20px]">
            <p className="text-center font-regular text-h4 leading-h4  xl:text-h3 xl:leading-h3 text-white mb-[8px]">The data breaches of the AI era will be invariably larger.</p>
            <p ref={textRef} className="text-center font-regular text-h4 leading-h4 xl:text-h3 xl:leading-h3 text-onyx-500">Be protected.</p>
        </div>
    )
}