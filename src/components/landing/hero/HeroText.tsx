"use client"
import CTAButton from "../../common/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/src/SplitText";
import TransitionLink from "@/components/TransitionLink";
import Button from "../../common/Button";
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
        const revealEls = ["[data-gsap='hero-logo-tm']","[data-gsap='hero-subtext']","[data-gsap='hero-cta']","[data-gsap='nesa-text']","[data-gsap='hero-testimonial']"]
        gsap.set(revealEls, {opacity: 0})
        gsap.to(
            revealEls,
            {opacity: 1, duration: 0.15,delay:1.05 }
        )
      })

    return (
        <div className="w-full mb-[80px] sm:pr-0">
            <h1 data-gsap="hero-text" className="font-regular text-white mb-[24px] md:mb-[32px] xl:text-h1 xl:leading-h1 w-full lg:text-h1 lg:leading-h1 md:text-h2 md:leading-h2 text-mobileheading leading-mobileheading uppercase">Your own<br></br>sovereign AI<br></br>with full privacy</h1>
            <p data-gsap="hero-subtext" className="font-regular text-md leading-md text-neutral-100 mb-[24px] lg:w-[50%] xl:w-[90%]">Onyx is the first AI that works on encrypted data - blind even to your cloud provider - for complete privacy without any special hardware.</p>
            <div data-gsap="hero-cta" className="w-fit flex flex-wrap gap-[16px] flex-col xs:flex-row mb-[80px]">
                <TransitionLink href="/veil">
                <Button variant="primary">TRY IT NOW</Button>
                </TransitionLink>
                <TransitionLink href="/fortress">
                <Button variant="secondary">GET THE API</Button>
                </TransitionLink>
            </div>

            <div className="flex flex-col w-fit">
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
                <p data-gsap="nesa-text" className="font-bold text-neutral-100 text-sm text-right mr-5 mt-2">POWERED BY NESA</p>
            </div>

        </div>
    )
}