import Heading from "@/components/common/Heading"
import { useFadeInStagger } from "@/hooks/useFadeInStagger";
import { useRef } from "react";

const data = [
    {
        technologyShort: "FHE",
        technology: "Homoromorphic Encryption",
        text: "Very high latency and cost, ~1,000x slower than a non-FHE model.<br><br>Struggles with arbitrary model structures, non-linearities and complex neural network layers.",
        onyxText: "Very low latency with no cost difference.<br>Designed for modern neural architectures and non-linearities."
    },
    {
        technologyShort: "MPC",
        technology: "Multi-party Computation",
        text: "Very high latency and cost, ~200-500x slower than a non-MPC scheme.<br><br>Collusion between multiple parties threatens the system at all times.",
        onyxText: "Very low latency and cost. No collusion due to client being one party, with frequent key rotation with EE tamper detection algorithms."
    },
    {
        technologyShort: "DP",
        technology: "Differential Privacy",
        text: "Denoising is imperfect resulting in lower model fidelity and high inaccuracy in AI response.<br><br>New model coverage is slow requiring custom noise and denoise schemes for each new model.",
        onyxText: "100% fidelity and model accuracy. Large model coverage, and trivial to add new model architectures."
    },
    {
        technologyShort: "ZK",
        technology: "Zero Knowledge Proof",
        text: "Very high latency and cost, a Llama 7B parameter model takes 25 minutes to return a proof.<br><br>Low model coverage and difficult to expand coverage, each new model requires its own custom ZK scheme.",
        onyxText: "Very low latency and no cost difference. Large model coverage across thousands of models, 30+ modalities."
    },
    {
        technologyShort: "TEEs",
        technology: "Trusted Execution Environment",
        text: "Not fully private or secure. The TEE administrator maintains backdoor access to your activity and data.<br><br>Challenging to scale. Blanket privacy requires growing only with expensive specific TEE hardware.",
        onyxText: "Zero backdoor access, Onyx sees nothing. No scale bottlenecks, use any cloud provider or infrastructure with no specialized hardware required."
    },
]

export default function Comparison() {
    const cardsRef = useRef<HTMLDivElement[]>([])
    useFadeInStagger(cardsRef);

    return (
        <div className="section-padding bg-creambg">
            <Heading className="font-regular text-mobileheading leading-mobileheading sm:text-h3 sm:leading-h3 xl:text-h2 xl:leading-h2 text-neutral-800 mb-[48px]">Compare</Heading>


            <div className="flex flex-col gap-[16px] lg:gap-[8px]">
            {data.map((card, index) => (
                <div ref={el => cardsRef.current[index] = el} className="flex flex-col lg:flex-row gap-[16px] sm:gap-[48px] bg-white p-[16px] sm:p-[32px]" key={index}>

                    <div className="flex-1 flex-col md:flex-row flex gap-[24px] md:gap-[48px]">
                        <div className="flex flex-col gap-[12px] max-w-[140px] min-w-[140px]">
                            <p className="px-[16px] py-[8px] font-regular text-h5 leading-h5 text-white bg-black w-fit">{card.technologyShort}</p>
                            <p className="font-medium text-sm leading-sm text-black">{card.technology}</p>
                        </div>

                        <p className="font-regular text-md leading-md text-neutral-700" dangerouslySetInnerHTML={{__html: card.text}}></p>
                        </div>

                        <div className="hidden lg:block w-[1px] min-h-full bg-black"></div>
                        <div className="block lg:hidden min-w-full h-[1px] bg-black"></div>

                        <div className="flex-1 flex-col md:flex-row flex gap-[24px] md:gap-[48px]">
                        <div className="flex flex-col gap-[12px] max-w-[140px] min-w-[140px]">
                            <p className="px-[16px] py-[8px] font-regular text-h5 leading-h5 text-white bg-onyx-500 w-fit">ONYX</p>
                            <p className="font-medium text-sm leading-sm text-black">Onyx (EE/HSS-EE)</p>
                        </div>

                        <p className="font-medium text-md leading-md text-neutral-700" dangerouslySetInnerHTML={{__html: card.onyxText}}></p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}