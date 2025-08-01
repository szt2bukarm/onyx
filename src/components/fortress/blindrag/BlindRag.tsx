import Heading from "@/components/common/Heading";
import InlineLink from "@/components/common/InlineLink";
import { useFadeInStagger } from "@/hooks/useFadeInStagger";
import { useRef } from "react";

const links = ["See the research", "See the security proofs"]

export default function BlindRag() {
    const cardsRef = useRef<HTMLDivElement[]>([])
    useFadeInStagger(cardsRef);

    return (
        <div className="px-[20px] sm:px-[80px] pt-[60px] md:pt-[120px] pb-[20px] sm:pb-[120px] bg-neutral-800 flex flex-col gap-[40px]">

            {/* header */}
            <div className="flex flex-col gap-[8px] lg:flex-row lg:gap-0 justify-between">
                <Heading className="font-regular text-h4 leading-h4 sm:text-h3 sm:leading-h3 xl:text-h2 xl:leading-h2 text-white">Blind Rag</Heading>
                <p className="font-regular text-lg leading-lg text-neutral-100 lg:w-[600px]">Onyx Fortress maintains all RAG insertions after inference under the same end-to-end cloak of encryption.</p>
            </div>

            {/* screenshots */}
            <div className="flex flex-col lg:flex-row gap-[20px]">
                <img src="blindragScreenshots/1.png" className="w-full lg:w-[calc(50%-10px)] rounded-[16px] border-1 border-[#2D2D2D]" />
                <img src="blindragScreenshots/2.png" className="w-full lg:w-[calc(50%-10px)] rounded-[16px] border-1 border-[#2D2D2D]" />
            </div>

            {/* logos */}
            <div className="w-full">
                <p className="font-medium text-white text-sm mb-[24px]">FORTUNE 500 ENTERPRISES</p>
                <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-[8px]">
                    {Array.from({length: 8}).map((_, i) => (
                        <div ref={el => cardsRef.current[i] = el} className="h-[144px] w-full bg-neutral-700 p-[8px] flex justify-center items-center" key={i}>
                            <img src={`placeholdertrusted1.png`} className="h-[30px]"/>
                        </div>
                    ))}
                </div>
            </div>

            {/* text */}
            <p className="font-medium text-lg leading-lg text-neutral-100">RAG remains encrypted across all cloud stores, for blanket privacy of our retrieval augmented generation and datalakes.</p>


            {/* links */}
            <div className="w-full border-t-1 border-neutral-600 flex gap-[24px] sm:gap-[48px] pt-[32px] flex-wrap">
                {links.map((link,i) => (
                    <div key={i} className="flex items-center gap-[24px]">
                        <div className="h-[52px] w-[52px] flex items-center justify-center bg-onyx-500">
                            <img src="logoletters/o-black.svg" alt="letter o from ONYX logo" className="h-[24px]" />
                        </div>
                        <InlineLink black={false}>{link}</InlineLink>
                    </div>
                ))}
            </div>

        </div>
    )
}