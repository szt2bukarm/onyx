"use client"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);
const logos = [
    "placeholdertrusted1.png",
    "placeholdertrusted2.png",
    "placeholdertrusted3.png",
    "placeholdertrusted4.png",
    "placeholdertrusted5.png",
  ];
  
export default function TrustedSection() {
    const totalLogos = 20;

    const randomLogoReveal = () => {
        const revealedLogos: number[] = [];
        const timeline = gsap.timeline();
      
        // randomize logo order
        while (revealedLogos.length < totalLogos) {
          const rnd = Math.floor(Math.random() * totalLogos);
          if (!revealedLogos.includes(rnd)) {
            revealedLogos.push(rnd);
          }
        }
      
        // 30ms delay
        revealedLogos.forEach((logoIndex, i) => {
          timeline.to(`[data-gsap='logo-${logoIndex + 1}']`, {
            opacity: 1,
            duration: 0.3,
          }, i * 0.03);
        });
    }

    useGSAP(() => {
        // hide all logos 
        for (let i = 1; i <= totalLogos; i++) {
            gsap.set(`[data-gsap='logo-${i}']`, { opacity: 0 });
        }
        ScrollTrigger.create({
            trigger: "[data-gsap='trusted']",
            start: "top 60%",
            onEnter: randomLogoReveal,

        })
    }, []);

    return (
      <div data-gsap="trusted" className="bg-white min-w-full py-[48px] md:py-[120px] px-[24px] flex flex-col items-center text-center md:px-[80px]">
        <h5 className="text-h5 leading-h5 font-regular mb-[32px]">Trusted and used by the best</h5>
        <div className="flex flex-wrap items-center justify-center gap-x-[40px] gap-y-[16px]">
          {Array.from({ length: 20 }).map((_, i) => {
            const imgSrc = logos[i % logos.length];
            return (
              <div
                key={i}
                className="w-[124px] h-[48px] p-[8px] flex align-center justify-center"
                data-gsap={`logo-${i + 1}`}
              >
                <img src={imgSrc} alt="logo" className="object-contain h-full w-full" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }