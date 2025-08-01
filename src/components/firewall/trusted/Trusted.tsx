import Heading from "@/components/common/Heading";
import { useFadeInStagger } from "@/hooks/useFadeInStagger";
import { useRef } from "react";

export default function Trusted() {
    const cardsRef = useRef<HTMLDivElement[]>([])
    useFadeInStagger(cardsRef);

    return (
        <div className="px-[20px] sm:px-[80px] lg:pt-[120px] pb-[60px] sm:pb-[120px] bg-white">
            <Heading className="font-regular text-h4 leading-h4 sm:text-h3 sm:leading-h3 xl:text-h2 xl:leading-h2 text-neutral-800 mb-[32px]">Trusted by</Heading>

            <div className="flex flex-col lg:flex-row gap-[32px]">

                <div className="flex flex-col gap-[24px] w-full">
                    <p className="font-medium text-neutral-800 text-sm">FORTUNE 500 ENTERPRISES</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-[8px]">

                        {Array.from({length: 4}, (_, i) => (
                            <div ref={el => cardsRef.current[i] = el} className="h-[144px] w-full bg-[#F2F2F2] p-[8px] flex justify-center items-center" key={i}>
                                <img src="placeholdertrusted1.png" className="h-[30px]" />
                            </div>
                        ))}

                    </div>
                </div>

                <div className="flex flex-col gap-[24px] w-full">
                    <p className="font-medium text-neutral-800 text-sm">THE WORLD'S LARGEST GOVERNMENTS</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-[8px]">

                        {Array.from({length: 4}, (_, i) => (
                            <div ref={el => cardsRef.current[i+4] = el} className="h-[144px] w-full bg-[#F2F2F2] p-[8px] flex justify-center items-center" key={i}>
                                <img src="placeholdertrusted1.png" className="h-[30px]" />
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </div>
    )
}