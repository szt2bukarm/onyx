"use client"
import { useGSAP } from "@gsap/react";
import CTAButton from "./common/CTAButton";
import gsap from "gsap";

export default function Nav() {

    useGSAP(() => {
        gsap.fromTo("[data-gsap='nav']", {y: -100, opacity: 0}, {y: 0, opacity: 1, duration: 1,delay: 0.5, ease: "out"})
    },[])

    return (
        <nav data-gsap="nav" className="z-100 bg-neutral-800 md:px-[80px] px-[20px] w-screen fixed top-0 flex justify-between items-center py-[24px]">
            <img src="logo.svg" alt="logo" className="w-[90px] md:w-[160px]"/>
            <div className="hidden md:flex items-center">
                <div className="space-x-[8px] mr-[32px]">
                    <a className="px-[8px] py-[16px] text-white">RESEARCH</a>
                    <a className="px-[8px] py-[16px] text-white">TEAM</a>
                    <a className="px-[8px] py-[16px] text-white">GITHUB</a>
                </div>
                <div className="hidden md:block">
                    <CTAButton variant="primary">TRY IT</CTAButton>
                </div>
            </div>
        </nav>
    )
}