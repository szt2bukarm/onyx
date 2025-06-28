"use client"
import InlineLink from "../common/InlineLink";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function HighlightsCard({icon,text,links,index}: {icon: string, text: string, links: {linktext: string, url: string}[], index: number}) {
    const imgRef = useRef<HTMLImageElement>(null)
    const textRef = useRef<HTMLParagraphElement>(null)
    const linksRef = useRef<HTMLAnchorElement[]>([]);

    useGSAP(() => {
        gsap.set([imgRef.current, textRef.current, ...linksRef.current], {opacity: 0})
        ScrollTrigger.create({
            trigger: "[data-gsap='highlight']",
            start: "top 50%",
            onEnter: () => {
                flicker();
                gsap.to([imgRef.current, textRef.current, ...linksRef.current], {opacity: 1, duration: 0, delay: 1.5}  )
            }
        })
    }, []);

    const flicker = () => {
    const targets = [imgRef.current, textRef.current, ...linksRef.current];
    const totalFlashes = 10;
    let delay = 0;
    
    for (let i = 0; i < totalFlashes; i++) {
        const target = gsap.utils.random(targets);
        const duration = 0.01;
    
        const wait = gsap.utils.interpolate(0.01, 0.25, Math.random() ** 1.5); 
        delay += wait;
    
        gsap.set(target, { opacity: 0, delay });
        gsap.set(target, { opacity: 1, delay: delay + duration + wait });
    }
    }

    return (
        <div data-gsap="highlight" className={`flex flex-col gap-[48px] p-[48px] ${index < 2 ? "border-b border-neutral-800 lg:border-b-0" : ""}`}>
            <img ref={imgRef} src={icon} alt="icon" className="w-[125px] h-[125px]" />
            <p ref={textRef} className="font-regular text-neutral-800 text-h4 leading-h4 xl:text-h3 xl:leading-h3">{text}</p>
            <div className="flex flex-col gap-[16px]">
                {links.map((link,i) => (
                    <div key={i} ref={el => linksRef.current[i] = el}>
                        <InlineLink key={link.linktext}>{link.linktext}</InlineLink>
                    </div>
                ))}
            </div>
        </div>
    )
}