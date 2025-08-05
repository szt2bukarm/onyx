import Heading from "@/components/common/Heading";
import { useFadeInStagger } from "@/hooks/useFadeInStagger";
import { useRef } from "react";

const cards = [
    {
        image: "firewall/encryptCards/text-encryption.webp",
        text: "Text/LLM Queries",
        subtext: "Your LLM text queries remain fully encrypted, hidden from anyone outside of your organization."
    },
    {
        image: "firewall/encryptCards/image-encryption.webp",
        text: "Image/Video Queries",
        subtext: "Full encrypted inference of your image and video generations, analysis, and summarizations."
    },
    {
        image: "firewall/encryptCards/database-encryption.webp",
        text: "Database/RAG Queries",
        subtext: "Your databases, RAG and cloud data lakes are hidden from view at rest, transit, and inference."
    },
    {
        image: "firewall/encryptCards/scientificdata-encryption.webp",
        text: "Bio/Scientific Data Queries",
        subtext: "Other modalities like biological, 3D generative, and multi-modal models are fully encrypted."
    },
]

export default function EncryptsEverything() {
    const cardsRef = useRef<HTMLDivElement[]>([])
    useFadeInStagger(cardsRef);

    return (
        <div className="section-padding bg-white sm:!pb-[60px] flex flex-col gap-[40px] sm:gap-[80px]">

            <div className="flex flex-col lg:flex-row justify-between">
                <Heading className="font-regular text-mobileheading leading-mobileheading sm:text-h3 sm:leading-h3 xl:text-h2 xl:leading-h2 text-neutral-800 mb-[8px] lg:mb-0 lg:w-[70%] xl:w-[50%]">Onyx encrypts everything AI no matter the type.</Heading>
                <p className="mt-auto font-regular text-lg leading-lg text-neutral-700 w-fit lg:pl-[100px]">Any query type, simple to complex stays private, end-to-end.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-[24px] items-start">
                {cards.map((card, index) => (
                    <div key={index} ref={el => cardsRef.current[index] = el} className="p-[24px] sm:p-[48px] border-1 border-black flex flex-col gap-[36px]">
                        <img src={card.image} className="h-[100px] md:h-[145px] w-auto max-w-none object-contain object-left"/>

                        <div>
                            <p className="font-regular text-h4 leading-h4 sm:text-h3 sm:leading-h3 text-neutral-800 mb-[24px]">{card.text}</p>
                            <p className="font regular text-md leading-md sm:text-lg sm:leading-lg text-neutral-700">{card.subtext}</p>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}