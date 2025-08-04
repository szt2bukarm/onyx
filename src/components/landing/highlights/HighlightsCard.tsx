"use client"
import InlineLink from "../../common/InlineLink";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function HighlightsCard({icon,text,links,index}: {icon: string, text: string, links: {linktext: string, url: string}[], index: number}) {
    return (
        <div data-gsap="highlight" className={`flex flex-col gap-[48px] p-[24px] md:p-[48px] ${index < 2 ? "border-b border-neutral-800 lg:border-b-0" : ""}`}>
            <img src={icon} alt="icon" className="w-[125px] h-[125px]" />
            <p className="font-regular text-neutral-800 text-h4 leading-h4 xl:text-h3 xl:leading-h3">{text}</p>
            <div className="flex flex-col gap-[16px]">
                {links.map((link,i) => (
                    <InlineLink key={link.linktext}>{link.linktext}</InlineLink>
                ))}
            </div>
        </div>
    )
}