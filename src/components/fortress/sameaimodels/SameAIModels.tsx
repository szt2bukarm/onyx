"use client"
import Heading from "@/components/common/Heading";
import InlineLink from "@/components/common/InlineLink";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const models = ["llama","Deepseek","Gemini","Alphafold","Mistral","Stable Diffusion"]

export default function SameAIModels() {
    const cardsRef = useRef<HTMLDivElement[]>([])

    useGSAP(() => {
        gsap.set(cardsRef.current, {opacity: 0,y: 20})

        let trigger = ScrollTrigger.create({
            trigger: cardsRef.current[0],
            start: "80% bottom",
            onEnter: () => {
                gsap.to(cardsRef.current, {opacity: 1,y: 0, duration: 0.5, stagger: 0.1, ease: "power4.out"})
            }
        })

        const handleResize = () => {
            trigger.refresh();
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    })

    return (
        <div className="px-[20px] sm:px-[80px] py-[120px] bg-creambg">
            <Heading className="font-regular text-h4 leading-h4 sm:text-h3 sm:leading-h3 xl:text-h2 xl:leading-h2 text-neutral-800 mb-[16px]">Use your same AI models</Heading>

            <div className="flex flex-col lg:flex-row justify-between mb-[48px]">
                <p className="font-regular text-lg leading-lg text-neutral-700">Onyx Fortress supports all major models and modalities.</p>
                <InlineLink black>See all models supported</InlineLink>
            </div>

            <div className="grid gap-[8px] grid-cols-2 sm:grid-cols-3  lg:grid-cols-6">
                {models.map((model, index) => (
                    <div ref={el => cardsRef.current[index] = el!} key={index} className="min-w-[140px] min-h-[140px] flex flex-col justify-between items-start p-[24px] bg-white flex-1">
                        <div className="flex items-center justify-center w-[44px] h-[44px] overflow-hidden p-[2px] rounded-[12px] shadow-[0px_16px_32px_-4px_rgba(0,0,0,0.15)] border-1 border-[#EDE6DF] mb-3">
                            <img src={`models/${model}.png`} className="h-full w-full object-contain rounded-[12px] bg-white"/>
                        </div>
                        <p className="font-medium text-lg leading-lg text-neutral-700 word-break">{model}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}