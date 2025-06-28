"use client"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"
import FooterNavLink from "./FooterNavLink";
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
                    <FooterNavLink href="#">Try Onyx Web</FooterNavLink>
                    <FooterNavLink href="#">Try Onyx Api</FooterNavLink>
                </div>
            </div>
            <div data-gsap="footer-nav-2">
                <p className="text-md leading-md lg:text-sm lg:leading-sm text-white mb-[24px]">PRODUCTS</p>
                <div className="flex flex-col gap-[12px] text-md leading-md lg:text-sm lg:leading-sm text-neutral-100">
                    <FooterNavLink href="#">Onyx Fortress</FooterNavLink>
                    <FooterNavLink href="#">Onyx Cloud Wall</FooterNavLink>
                    <FooterNavLink href="#">ChatGPT Veil</FooterNavLink>
                    <FooterNavLink href="#">Onyx Blind RAG</FooterNavLink>
                    <FooterNavLink href="#">Onyx Blind Search</FooterNavLink>
                    <FooterNavLink href="#">Onyx Custom AI</FooterNavLink>
                </div>
            </div>
            <div data-gsap="footer-nav-3">
                <p className="text-md leading-md lg:text-sm lg:leading-sm text-white mb-[24px]">INFORMATION</p>
                <div className="flex flex-col gap-[12px] text-md leading-md lg:text-sm lg:leading-sm text-neutral-100">
                    <FooterNavLink href="#">Why Privacy</FooterNavLink>
                    <FooterNavLink href="#">Supported Models</FooterNavLink>
                    <FooterNavLink href="#">Work Use Cases</FooterNavLink>
                    <FooterNavLink href="#">Attack Vectors</FooterNavLink>
                    <FooterNavLink href="#">Video Center</FooterNavLink>
                    <FooterNavLink href="#">Tutorials</FooterNavLink>
               </div>
            </div>
            <div data-gsap="footer-nav-4">
                <p className="text-md leading-md lg:text-sm lg:leading-sm text-white mb-[24px]">COMPANY</p>
                <div className="flex flex-col gap-[12px] text-md leading-md lg:text-sm lg:leading-sm text-neutral-100 ">
                    <FooterNavLink href="#">Talk to us</FooterNavLink>
                    <FooterNavLink href="#">Research</FooterNavLink>
                    <FooterNavLink href="#">About</FooterNavLink>
                    <FooterNavLink href="#">Support</FooterNavLink>
                    <FooterNavLink href="#">Media Kit</FooterNavLink>
                    <FooterNavLink href="#">Blog</FooterNavLink>
                    <FooterNavLink href="#">Safety</FooterNavLink>
               </div>
            </div>
            <div data-gsap="footer-nav-5" className="flex flex-wrap gap-[24px] sm:col-span-2 lg:col-span-4 xl:col-span-1 xl:mt-0">
                <img className="w-[92px] h-[92px]" src="badges/ISO 27001.png" alt="ISO 27001" />
                <img className="w-[92px] h-[92px]" src="badges/SOC2 Type 2.png" alt="SOC2 Type 2" />
                <img className="w-[92px] h-[92px]" src="badges/GDPR.png" alt="GDPR" />
                <img className="w-[92px] h-[92px]" src="badges/CSA STAR.png" alt="CSA STAR" />
                <img className="w-[92px] h-[92px]" src="badges/HIPPAA.png" alt="HIPPAA" />
            </div>
        </div>
    )
}