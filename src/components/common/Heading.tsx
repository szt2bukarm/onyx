"use client"
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react"
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);


export default function Heading({className,children}: {className: string, children?: React.ReactNode}) {
    const textRef = useRef<HTMLHeadingElement>(null)

    useGSAP(() => {
        let split = new SplitText(textRef.current, { type: "words" });
        gsap.set(split.words, { y: 100 });
        let trigger;

        split.words.forEach((line) => {
            const wrapper = document.createElement("span");
            wrapper.style.display = "inline-block";
            wrapper.style.overflow = "hidden";
            wrapper.style.verticalAlign = "top";
            line.parentNode?.insertBefore(wrapper, line);
            wrapper.appendChild(line);
        });

        trigger = ScrollTrigger.create({
            trigger: textRef.current,
            start: "top bottom",
            onEnter: () => {
                gsap.to(
                    [split.words],
                    { y: 0, duration: 1, stagger: 0.035, ease: "out" }
                );
            }
        })
      
        let lastWidth = window.innerWidth;
        const handleResize = () => {
            lastWidth = window.innerWidth;
            if (lastWidth === window.innerWidth) return;
          split.revert(); 
          requestAnimationFrame(() => {
            trigger.refresh();
            split = new SplitText(textRef.current, { type: "words" });
            split.words.forEach((line) => {
                const wrapper = document.createElement("span");
                wrapper.style.display = "inline-block";
                wrapper.style.overflow = "hidden";
                wrapper.style.verticalAlign = "top";
                line.parentNode?.insertBefore(wrapper, line);
                wrapper.appendChild(line);
            });
          });
        };
      
        window.addEventListener("resize", handleResize);
      
        return () => {
          window.removeEventListener("resize", handleResize);
          split.revert();
        };
      }, []);
    
    return (
        <h2 ref={textRef} className={className}>{children}</h2>
    )
}