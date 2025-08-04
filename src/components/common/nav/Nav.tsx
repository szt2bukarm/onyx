"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TransitionLink from "../../TransitionLink";
import NavMenu from "./NavMenu";
import NavMenuMobile from "./NavMenuMobile";
import Button from "../Button";
import ScrollTrigger from "gsap/src/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Nav() {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        if (!open) openNav();
        else closeNav();
    }

    const openNav = () => {
        gsap.to("[data-gsap='nav-closed-1'], [data-gsap='nav-closed-2'], [data-gsap='nav-closed-3']", {width: 0, duration: 0.15, ease: "out", stagger: 0.1})

        gsap.to("[data-gsap='nav-open-1'], [data-gsap='nav-open-2']", {width: "50%", duration: 0.15, ease: "out", stagger: 0.1,delay: 0.2})

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

        gsap.to("[data-gsap='page']", {
            opacity: 0.1,
            y: "20vh",
            duration: 0.5,
            ease: "out"
        })
    }

    const closeNav = () => {
        gsap.to("[data-gsap='nav-closed-1'], [data-gsap='nav-closed-2'], [data-gsap='nav-closed-3']", {width: "50%", duration: 0.15, ease: "out", stagger: 0.1,delay: 0.2})

        gsap.to("[data-gsap='nav-open-1'], [data-gsap='nav-open-2']", {width: 0, duration: 0.15, ease: "out", stagger: 0.1})

        gsap.to("[data-gsap='nav-list']", {
            css: {
                clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)"
            },
            duration: 0.3,
            delay: 0.1,
            // ease: "out",
            onComplete: () => {
                setOpen(false)
            }
        })
        
        gsap.to("[data-gsap='page']", {
            opacity: 1,
            y: 0,
            duration: 0.3,
            onComplete: () => {
                ScrollTrigger.refresh()
            }
        })
    }

    useEffect(() => {
        document.documentElement.style.overflowY = open ? "hidden" : "auto";
    },[open])

    useGSAP(() => {
        gsap.fromTo("[data-gsap='nav']", {y: -100, opacity: 0}, {y: 0, opacity: 1, duration: 1,delay: 0.5, ease: "out"})
    },[])

    return (
        <>
        <nav data-gsap="nav" className="z-100 bg-neutral-800 w-screen fixed" style={{viewTransitionName: "nav"}}>
            <div className="relative w-full flex justify-between items-center md:px-[80px] px-[20px] py-[24px]">

            <div className="z-100 w-full lg:w-auto items-center flex flex-row justify-between lg:justify-start gap-0  lg:gap-[32px]">
                <button className="z-1 relative w-[40px] h-[40px] bg-onyx-500 cursor-pointer" onClick={handleToggle}>
                    {/* closed */}
                    <div>
                        <div data-gsap="nav-closed-1" className="w-[50%] h-[1px] bg-black absolute top-[35%] left-1/2 translate-x-[-47%] translate-y-[-50%]"></div>
                        <div data-gsap="nav-closed-2" className="w-[50%] h-[1px] bg-black absolute top-[50%] left-1/2 translate-x-[-47%] translate-y-[-50%]"></div>
                        <div data-gsap="nav-closed-3" className="w-[50%] h-[1px] bg-black absolute top-[65%] left-1/2 translate-x-[-47%] translate-y-[-50%]"></div>
                    </div>

                    {/* open */}
                    <div>
                        <div data-gsap="nav-open-1" className="w-0 h-[1px] origin-left rotate-45 bg-black absolute top-[30%] left-[33.5%] "></div>
                        <div data-gsap="nav-open-2" className="w-0 h-[1px] origin-left -rotate-45 bg-black absolute top-[65%] left-[33.5%] "></div>
                    </div>
                </button>

                <TransitionLink href={"/"}>
                    <img src="logo.svg" alt="logo" className="z-1 w-[132px] md:w-[160px] cursor-pointer"/>
                </TransitionLink>
            </div>

            <div className="z-1 hidden lg:flex items-center">
                <div className="space-x-[8px] mr-[32px]">
                    <a className="cursor-pointer px-[8px] py-[16px] text-white hover:opacity-50 transition duration-150">RESEARCH</a>
                    <a className="cursor-pointer px-[8px] py-[16px] text-white hover:opacity-50 transition duration-150">TEAM</a>
                    <a className="cursor-pointer px-[8px] py-[16px] text-white hover:opacity-50 transition duration-150">GITHUB</a>
                </div>
                <div className="hidden md:block">
                    <Button variant="primary">TRY IT</Button>
                </div>
            </div>

            <div data-gsap="nav-list" className="absolute top-0 left-0 w-screen min-h-screen pt-[100px] bg-neutral-800 [clip-path:polygon(0_0,100%_0,100%_0,0_0)] overflow-y-scroll">
                <NavMenu setOpen={handleToggle} />
                <NavMenuMobile setOpen={handleToggle} />
            </div>

            </div>
        </nav>
        </>
    )
}