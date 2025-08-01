import Heading from "@/components/common/Heading";
import { useFadeInStagger } from "@/hooks/useFadeInStagger";
import { useRef } from "react";

const models = [
    {
        name: "ChatGPT",
        file: "chatgpt.png"
    },
    {
        name: "Claude",
        file: "claude.svg"
    },
    {
        name: "Gemini",
        file: "gemini.svg"
    },
    {
        name: "Microsoft Copilot",
        file: "copilot.png"
    },
    {
        name: "Grok",
        file: "grok.png"
    },
    {
        name: "Deepseek",
        file: "Deepseek.png"
    }
]

export default function Protects() {
    const cardsRef = useRef<HTMLDivElement[]>([])
    useFadeInStagger(cardsRef);

    return (
        <div className="px-[20px] sm:px-[80px] py-[120px] bg-white flex flex-col gap-[40px] lg:gap-0 lg:flex-row lg:justify-between">

            {/* left */}
            <div className="flex flex-col lg:w-[50%] lg:pr-[100px]">
                {/* header */}
                <Heading className="font-regular text-h4 leading-h4 sm:text-h3 sm:leading-h3 xl:text-h2 xl:leading-h2 text-neutral-800 mb-[24px] lg:mb-auto">Veil protects your data on:</Heading>

                {/* bottom text with logo */}
                <div className="flex items-center gap-[24px]">
                    <div className="min-h-[52px] min-w-[52px] flex items-center justify-center bg-neutral-800">
                        <img src="logoletters/o-white.svg" alt="letter o from ONYX logo" className="h-[24px]" />
                    </div>
                    <p className="font-medium text-lg leading-lg text-neutral-700">Billions of AI requests protected by Veil to date.</p>
                </div>
            </div>

            {/* model logos - right */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[8px] lg:w-[50%]">
                {models.map((model, index) => (
                    <div ref={el => cardsRef.current[index] = el} key={index} className="min-h-[140px] flex flex-col justify-between items-start p-[24px] bg-[#F2F2F2]">
                        <div className="flex items-center justify-center w-[44px] h-[44px] overflow-hidden p-[2px] rounded-[12px] shadow-[0px_16px_32px_-4px_rgba(0,0,0,0.15)] border-1 border-[#EDE6DF] mb-3">
                            <img src={`models/${model.file}`} className="h-full w-full object-contain rounded-[12px] bg-white"/>
                        </div>
                        <p className="font-medium text-lg leading-lg text-neutral-700 word-break">{model.name}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}