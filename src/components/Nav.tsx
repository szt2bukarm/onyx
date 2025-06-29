"use client"
import { useGSAP } from "@gsap/react";
import CTAButton from "./common/CTAButton";
import gsap from "gsap";
import { useEffect, useState } from "react";

export default function Nav() {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        if (!open) openNav();
        else closeNav();
    }

    const openNav = () => {
        gsap.to("[data-gsap='nav-closed-1'], [data-gsap='nav-closed-2']", {width: 0, duration: 0.15, ease: "out", stagger: 0.1})

        gsap.to("[data-gsap='nav-open-1'], [data-gsap='nav-open-2']", {width: "100%", duration: 0.15, ease: "out", stagger: 0.1,delay: 0.2})

        gsap.to("[data-gsap='nav-list']", {
            css: {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            },
            duration: 0.5,
            ease: "out",
            onComplete: () => {
                setOpen(true)
            }
        })
    }

    const closeNav = () => {
        gsap.to("[data-gsap='nav-closed-1'], [data-gsap='nav-closed-2']", {width: "100%", duration: 0.15, ease: "out", stagger: 0.1,delay: 0.2})

        gsap.to("[data-gsap='nav-open-1'], [data-gsap='nav-open-2']", {width: 0, duration: 0.15, ease: "out", stagger: 0.1})

        gsap.to("[data-gsap='nav-list']", {
            css: {
                clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)"
            },
            duration: 0.3,
            // ease: "out",
            onComplete: () => {
                setOpen(false)
            }
        })
    }

    useGSAP(() => {
        gsap.fromTo("[data-gsap='nav']", {y: -100, opacity: 0}, {y: 0, opacity: 1, duration: 1,delay: 0.5, ease: "out"})
    },[])

    return (
        <>
        <nav data-gsap="nav" className="z-100 bg-neutral-800 w-screen fixed">
            <div className="relative w-full flex justify-between items-center md:px-[80px] px-[20px] py-[24px]">
            <img src="logo.svg" alt="logo" className="z-1 w-[90px] md:w-[160px]"/>
            <div className="z-1 hidden md:flex items-center">
                <div className="space-x-[8px] mr-[32px]">
                    <a className="cursor-pointer px-[8px] py-[16px] text-white hover:opacity-50 transition duration-150">RESEARCH</a>
                    <a className="cursor-pointer px-[8px] py-[16px] text-white hover:opacity-50 transition duration-150">TEAM</a>
                    <a className="cursor-pointer px-[8px] py-[16px] text-white hover:opacity-50 transition duration-150">GITHUB</a>
                </div>
                <div className="hidden md:block">
                    <CTAButton variant="primary">TRY IT</CTAButton>
                </div>
            </div>
            <button className="z-1 relative w-[20px] h-[20px] md:hidden cursor-pointer" onClick={handleToggle}>
                {/* closed */}
                <div>
                    <div data-gsap="nav-closed-1" className="w-full h-[1px] bg-white absolute top-[35%] left-0 translate-y-[-50%]"></div>
                    <div data-gsap="nav-closed-2" className="w-full h-[1px] bg-white absolute top-[70%] left-0 translate-y-[-50%]"></div>
                </div>

                {/* open */}
                <div>
                    <div data-gsap="nav-open-1" className="w-0 h-[1px] origin-left rotate-45 bg-white absolute top-[15%] left-[12%] translate-y-[-50%]"></div>
                    <div data-gsap="nav-open-2" className="w-0 h-[1px] origin-left -rotate-45 bg-white absolute top-[85%] left-[12%] translate-y-[-50%]"></div>
                </div>
            </button>
            <div data-gsap="nav-list" className="md:hidden absolute top-0 left-0 w-screen h-screen mt-[20px] bg-neutral-800 [clip-path:polygon(0_0,100%_0,100%_0,0_0)] pt-[60px]">
                <div className="flex flex-col px-[20px] gap-[24px]">
                    <a onClick={closeNav} className="font-medium text-h4 text-white hover:opacity-50 cursor-pointer transition duration-150">RESEARCH</a>
                    <a onClick={closeNav} className="font-medium text-h4 text-white hover:opacity-50 cursor-pointer transition duration-150">TEAM</a>
                    <a onClick={closeNav} className="font-medium text-h4 text-white hover:opacity-50 cursor-pointer transition duration-150">GITHUB</a>
                    <div>
                        <CTAButton variant="primary">TRY IT</CTAButton>
                    </div>
                </div>
            </div>
            </div>
        </nav>
        </>
    )
}