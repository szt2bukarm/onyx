"use client"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"
import NavLink from "./NavLink";
gsap.registerPlugin(ScrollTrigger);

export default function FooterNav() {

    useGSAP(() => {
        gsap.set("[data-gsap='footer-nav-1'], [data-gsap='footer-nav-2'], [data-gsap='footer-nav-3'], [data-gsap='footer-nav-4'],[data-gsap='footer-nav-5']", {opacity: 0})
        let trigger = ScrollTrigger.create({
            trigger: "[data-gsap='footer-nav-1']",
            start: "top 70%",
            onEnter: () => {
                gsap.to("[data-gsap='footer-nav-1'], [data-gsap='footer-nav-2'], [data-gsap='footer-nav-3'], [data-gsap='footer-nav-4'],[data-gsap='footer-nav-5']", {opacity: 1, duration: 0.3,stagger: 0.1})
            }
        })

        const handleResize = () => {
            trigger.refresh();
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    },[])

    return (
        <div className="font-regular mb-[48px] grid gap-y-[48px] grid-cols-1 sm:grid-cols-2 sm:grid-rows-1 lg:grid-cols-4 lg:grid-rows-1 xl:grid-cols-5 xl:grid-rows-1">
            <div data-gsap="footer-nav-1">
                <p className="text-md leading-md lg:text-sm lg:leading-sm text-white mb-[24px]">TRY NOW</p>
                <div className="flex flex-col gap-[12px] text-md leading-md lg:text-sm lg:leading-sm text-neutral-100">
                    <NavLink href="#">Try Onyx Web</NavLink>
                    <NavLink href="#">Try Onyx Api</NavLink>
                </div>
            </div>
            <div data-gsap="footer-nav-2">
                <p className="text-md leading-md lg:text-sm lg:leading-sm text-white mb-[24px]">PRODUCTS</p>
                <div className="flex flex-col gap-[12px] text-md leading-md lg:text-sm lg:leading-sm text-neutral-100">
                    <NavLink href="/fortress">Onyx Fortress</NavLink>
                    <NavLink href="#">Onyx Cloud Wall</NavLink>
                    <NavLink href="/veil">ChatGPT Veil</NavLink>
                    <NavLink href="#">Onyx Blind RAG</NavLink>
                    <NavLink href="#">Onyx Blind Search</NavLink>
                    <NavLink href="#">Onyx Custom AI</NavLink>
                </div>
            </div>
            <div data-gsap="footer-nav-3">
                <p className="text-md leading-md lg:text-sm lg:leading-sm text-white mb-[24px]">INFORMATION</p>
                <div className="flex flex-col gap-[12px] text-md leading-md lg:text-sm lg:leading-sm text-neutral-100">
                    <NavLink href="/whyprivacy">Why Privacy</NavLink>
                    <NavLink href="#">Supported Models</NavLink>
                    <NavLink href="/usecases">Work Use Cases</NavLink>
                    <NavLink href="#">Attack Vectors</NavLink>
                    <NavLink href="#">Video Center</NavLink>
                    <NavLink href="#">Tutorials</NavLink>
               </div>
            </div>
            <div data-gsap="footer-nav-4">
                <p className="text-md leading-md lg:text-sm lg:leading-sm text-white mb-[24px]">COMPANY</p>
                <div className="flex flex-col gap-[12px] text-md leading-md lg:text-sm lg:leading-sm text-neutral-100 ">
                    <NavLink href="/contact">Talk to us</NavLink>
                    <NavLink href="/research">Research</NavLink>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="#">Support</NavLink>
                    <NavLink href="#">Media Kit</NavLink>
                    <NavLink href="#">Blog</NavLink>
                    <NavLink href="#">Safety</NavLink>
               </div>
            </div>
            <div data-gsap="footer-nav-5" className="flex flex-wrap gap-[24px] sm:col-span-2 lg:col-span-4 xl:col-span-1 xl:mt-0">
                <img className="w-[60px] h-[60px] md:w-[96px] md:h-[96px]" src="badges/ISO 27001.png" alt="ISO 27001" />
                <img className="w-[60px] h-[60px] md:w-[96px] md:h-[96px]" src="badges/SOC2 Type 2.png" alt="SOC2 Type 2" />
                <img className="w-[60px] h-[60px] md:w-[96px] md:h-[96px]" src="badges/GDPR.png" alt="GDPR" />
                <img className="w-[60px] h-[60px] md:w-[96px] md:h-[96px]" src="badges/CSA STAR.png" alt="CSA STAR" />
                <img className="w-[60px] h-[60px] md:w-[96px] md:h-[96px]" src="badges/HIPPAA.png" alt="HIPPAA" />
            </div>
        </div>
    )
}