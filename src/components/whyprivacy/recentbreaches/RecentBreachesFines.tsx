"use client"
import Heading from "@/components/common/Heading";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const penalties = [
    {
        company: "Meta",
        fine: "$1.2 billion GDPR fine, 2023" 
    },
    {
        company: "Amazon",
        fine: "$1.2 billion GDPR fine, 2023" 
    },
    {
        company: "Equifax",
        fine: "$1.2 billion GDPR fine, 2023" 
    },
    {
        company: "T-Mobile",
        fine: "$1.2 billion GDPR fine, 2023" 
    },
    {
        company: "OpenAI",
        fine: "$1.2 billion GDPR fine, 2023" 
    },
    {
        company: "Uber",
        fine: "$1.2 billion GDPR fine, 2023" 
    },
    {
        company: "Mariott",
        fine: "$1.2 billion GDPR fine, 2023" 
    },
]

export default function RecentBreachesFines() {
    const scrollerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to(scrollerRef.current, {
            y: -scrollerRef.current.scrollHeight/2 - 4,
            duration: 7,
            ease: "none",
            repeat: -1
        })
    },[])

    return (
        <div className="pt-[80px] pb-[64px] flex flex-col xl:flex-row xl:items-center gap-[30px] xl:gap-[112px]">


            {/* left */}
            <div>
                {/* label */}
                <div className="flex items-center justify-center p-[10px] bg-onyx-500 mb-[24px] w-fit">
                    <p className="font-medium text-sm leading-sm text-neutral-800 translate-y-[2px] translate-x-[1px]">Zero day retention means risk for your organization</p>
                </div>
                {/* heading */}
                <Heading className="font-regular text-h4 leading-h4 sm:text-h3 sm:leading-h3 xl:text-h2 xl:leading-h2 text-white">Recent (Pre-AI) Data Breaches, Fines, Penalties</Heading>
            </div>

            {/* right */}

            <div className="relative h-[412px] w-full xl:w-[60%] overflow-hidden">

                <div className="z-10 absolute top-0 left-0 w-full h-[50px] bg-gradient-to-b from-neutral-800 to-transparent"></div>
                <div className="z-10 absolute bottom-0 left-0 w-full h-[50px] bg-gradient-to-t from-neutral-800 to-transparent"></div>

                <div ref={scrollerRef} className="flex flex-col gap-[8px] ">
                    {penalties.map((penalty, index) => (
                        <div key={index} className="flex items-center justify-between w-full bg-neutral-700 p-[16px]">
                            <p className="font-medium text-sm leading-sm text-white">{penalty.company}</p>
                            <p className="font-medium text-sm leading-sm text-neutral-100">{penalty.fine}</p>
                        </div>
                    ))}
                    {penalties.map((penalty, index) => (
                        <div key={index} className="flex items-center justify-between w-full bg-neutral-700 p-[16px]">
                            <p className="font-medium text-sm leading-sm text-white">{penalty.company}</p>
                            <p className="font-medium text-sm leading-sm text-neutral-100">{penalty.fine}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}