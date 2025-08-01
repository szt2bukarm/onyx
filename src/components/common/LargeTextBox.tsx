"use client"
import InlineLink from "./InlineLink";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

export default function LargeTextBox({label,links,children} : {label: string, links: string[], children: React.ReactNode}) {
    const textRef = useRef<HTMLDivElement>(null)
    const labelRef = useRef<HTMLDivElement>(null)
    
    useGSAP(() => {
        let split = new SplitText(textRef.current, { type: "words" });
        // hide text
        gsap.set(split.words, { opacity: 0 });

        // hide/transform label
        gsap.set(labelRef.current, {opacity: 0, y: 25})

        let trigger = ScrollTrigger.create({
            trigger: textRef.current,
            start: "50% bottom",
            onEnter: () => {
                gsap.to(
                    [split.words],
                    { opacity: 1, duration: 1, stagger: 0.03, ease: "power4.out" }
                );
                gsap.to(labelRef.current, {opacity: 1, y: 2, duration: 0.5, ease: "back.out(3)"})
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
    <div className="flex flex-col lg:flex-row gap-[40px] items-start">

        {/* label */}
        <div ref={labelRef} className="flex items-center justify-center p-[10px] translate-y-1 bg-onyx-500 md:mb-[16px] min-w-fit">
            <p className="font-medium text-sm leading-sm text-neutral-800 translate-y-[2px] translate-x-[1px]">{label}</p>
        </div>

        <div className="flex flex-col">
            <div ref={textRef} className="font-regular text-h5 leading-h5 sm:text-h4 sm:leading-h4 lg:text-h3 lg:leading-h3">{children}</div>

            {links && (
                <div className="w-full border-t-1 border-neutral-200 flex gap-[24px] sm:gap-[48px] pt-[32px] mt-[40px] flex-wrap">
                    {links.map((link,i) => (
                        <div key={i} className="flex items-center gap-[24px]">
                            <div className="h-[52px] w-[52px] flex items-center justify-center bg-onyx-500">
                                <img src="logoletters/o-black.svg" alt="letter o from ONYX logo" className="h-[24px]" />
                            </div>
                            <InlineLink black={true}>{link}</InlineLink>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </div>
    )
}