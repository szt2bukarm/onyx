"use client"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import SplitText from "gsap/src/SplitText"
import { useRef } from "react";
gsap.registerPlugin(SplitText);

export default function Head({label,subtext,children} : {label: string, subtext: string, children?: React.ReactNode}) {
    const textRef = useRef<HTMLDivElement>(null)
    const labelRef = useRef<HTMLDivElement>(null)
    const subtextRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        let split = new SplitText(textRef.current, { type: "lines" });

        split.lines.forEach((line) => {
            const wrapper = document.createElement("div");
            wrapper.style.overflow = "hidden";
            line.parentNode?.insertBefore(wrapper, line);
            wrapper.appendChild(line);
        });
        
        gsap.set(split.lines, { y: 100 });
        gsap.set(labelRef.current, { opacity: 0, scale: 0 });
        gsap.set(subtextRef.current, { opacity: 0 });
        gsap.to(split.lines, { y: 0, duration: 1.5, stagger: 0.1, ease: "out" })
        gsap.to(labelRef.current, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.1)" })
        gsap.to(subtextRef.current, { opacity: 1, duration: 0.1,delay:1 })

        let lastWidth = window.innerWidth;
        const handleResize = () => {
            if (lastWidth == window.innerWidth) return;
            lastWidth = window.innerWidth;
            split.revert(); 
            requestAnimationFrame(() => {
              split = new SplitText("[data-gsap='hero-text']", { type: "lines" });
            });
          };
        
          window.addEventListener("resize", handleResize);
        
          return () => {
            window.removeEventListener("resize", handleResize);
            split.revert();
          };
    },[])


    return (
        <div className="p-[24px] sm:px-[80px] flex flex-col gap-[24px] xl:gap-[200px] xl:flex-row sm:pb-[80px] pb-[24px] pt-[148px] justify-between bg-neutral-800">

        {/* left */}
        <div className="lg:w-[70%] xl:min-w-[55%]">
            {/* label */}
            <div ref={labelRef} className="flex items-center justify-center p-[10px] bg-onyx-500 mb-[32px] md:mb-[16px] w-fit">
                <p className="font-medium text-sm leading-sm text-neutral-800 translate-y-[2px] translate-x-[1px]">{label}</p>
            </div>

            {/* text */}
            <div ref={textRef} className="flex flex-col font-regular text-mobileheading leading-mobileheading sm:text-h3 sm:leading-h3 md:text-h2 md:leading-h2 xl:text-[3vw] xl:leading-[3.5vw] text-white tracking-[-1px]">{children}</div>
        </div>

        {/* right */}
        {subtext != "" && (
        <p ref={subtextRef} className="font-regular text-md leading-md xl:text-sm text-neutral-100 mt-auto">{subtext}</p>
        )}

        </div>
    )
}