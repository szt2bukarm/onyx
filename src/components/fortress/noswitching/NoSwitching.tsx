import Heading from "@/components/common/Heading";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useFadeInStagger } from "@/hooks/useFadeInStagger";
gsap.registerPlugin(ScrollTrigger);

const logos = ["aws","microsoft","openai","google"]

export default function NoSwitching() {
    const cardsRef = useRef<HTMLDivElement[]>([])
    useFadeInStagger(cardsRef);

    return (
        <div className="section-padding bg-white">

            <img src="fortress/fortress-flow-2.webp" className="w-full mb-[24px] sm:mb-[64px]" />

            <Heading className="font-regular text-mobileheading leading-mobileheading sm:text-h3 sm:leading-h3 xl:text-h2 xl:leading-h2 text-neutral-800 mb-[24px] sm:mb-[64px]">No Switching<br></br>Stay on your same cloud provider</Heading>

            <div className="w-full">
                <p className="font-medium text-neutral-800 text-sm mb-[24px]">FORTUNE 500 ENTERPRISES</p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-[8px]">
                    {logos.map((logo, i) => (
                        <div ref={el => cardsRef.current[i] = el} className="h-[144px] w-full bg-[#F2F2F2] p-[8px] flex justify-center items-center" key={i}>
                            <img src={`logos/${logo}.svg`} className={`${i === 0 || i === 3 ? "h-[45px] md:h-[60px]" : "h-[35px] md:h-[40px]"}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}