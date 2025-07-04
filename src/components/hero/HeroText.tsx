"use client"
import CTAButton from "../common/CTAButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/src/SplitText";
gsap.registerPlugin(SplitText);

export default function HeroText() {

    useGSAP(() => {
        let split = new SplitText("[data-gsap='hero-text']", { type: "lines" });
      
        split.lines.forEach((line) => {
            const wrapper = document.createElement("div");
            wrapper.style.overflow = "hidden";
            line.parentNode?.insertBefore(wrapper, line);
            wrapper.appendChild(line);
        });

        gsap.fromTo(
          [split.lines],
          { y: 300 },
          { y: 0, duration: 1.5, stagger: 0.1, ease: "out" }
        );
      
        const handleResize = () => {
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
      }, []);

      useGSAP(() => {
        const letters = ["[data-gsap='hero-logo-o']", "[data-gsap='hero-logo-n']", "[data-gsap='hero-logo-y']", "[data-gsap='hero-logo-x']"]
        gsap.fromTo(
          letters,
          { y: 350 },
          { y: 0, duration: 1.5, stagger: 0.1, ease: "out",},
        )
      },[])

      useGSAP(() => {
        const revealEls = ["[data-gsap='hero-logo-tm']","[data-gsap='hero-subtext']","[data-gsap='hero-cta']","[data-gsap='hero-testimonial']"]
        gsap.set(revealEls, {opacity: 0})
        gsap.to(
            revealEls,
            {opacity: 1, duration: 0.15,delay:1.05 }
        )
      })

    return (
        <div className="xl:pr-[180px] w-full max-xl:mb-20">
            <h1 data-gsap="hero-text" className="font-regular text-white mb-[32px] xl:text-[4.2vw] xl:leading-[4.2vw] xl:w-full lg:w-[80%] lg:text-h1 lg:leading-h1 md:text-h2 md:leading-h2 text-h3 leading-h3">RUN AI MODELS WITH YOUR DATA PRIVATELY</h1>
            <p data-gsap="hero-subtext" className="text-lg font-regular leading-lg text-neutral-100 mb-[18px] xl:w-full lg:w-[50%]">Onyx is the first API for AI with your data that is end-to-end encrypted - blind for the first time even to your cloud provider - for complete privacy without any special hardware.</p>
            <div data-gsap="hero-cta" className="w-fit flex gap-[16px] flex-col xs:flex-row mb-[80px]">
                <CTAButton variant="primary">TRY IT NOW</CTAButton>
                <CTAButton variant="secondary">GET THE API</CTAButton>
            </div>
            <div className="flex">
                <div className="overflow-hidden md:h-[110px] h-[15.3vw]">
                    <img src="logoletters/o.svg" alt="letter o from ONYX logo" className="h-full" data-gsap="hero-logo-o" />
                </div>
                <div className="overflow-hidden md:h-[110px] h-[15.3vw]">
                    <img src="logoletters/n.svg" alt="letter n from ONYX logo" className="h-full" data-gsap="hero-logo-n" />
                </div>
                <div className="overflow-hidden md:h-[110px] h-[15.3vw] -translate-x-1.5">
                    <img src="logoletters/y.svg" alt="letter y from ONYX logo" className="h-full" data-gsap="hero-logo-y" />
                </div>
                <div className="overflow-hidden md:h-[110px] h-[15.3vw] -translate-x-1">
                    <img src="logoletters/x.svg" alt="letter x from ONYX logo" className="h-full" data-gsap="hero-logo-x" />
                </div>
                <img src="logoletters/tm.svg" alt="Registered Trademark" className="h-[15px] -translate-y-3" data-gsap="hero-logo-tm" />
            </div>
        </div>
    )
}