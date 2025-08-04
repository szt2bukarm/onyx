import Heading from "@/components/common/Heading";
import InlineLink from "@/components/common/InlineLink";

export default function Latency() {
    return (
        <div className="flex flex-col lg:flex-row w-full">

            {/* left */}
            <div className="p-[24px] py-[48px] sm:px-[80px] sm:py-[120px] flex flex-col gap-[40px] lg:w-[50%] bg-onyx-500">
                <Heading className="font-regular text-mobileheading leading-mobileheading md:text-h3 md:leading-h3 xl:text-h2 xl:leading-h2 w-auto text-neutral-700 ">Trade slight latency on your AI responses for the most bulletproof data privacy in the world</Heading>
                <InlineLink black>See speed benchmarks</InlineLink>
            </div>

            {/* right */}
            <div className="p-[24px] py-[48px] sm:p-[80px] flex flex-col gap-[40px] lg:w-[50%] bg-creambg">
                <p className="font-medium tracking-[-8px] text-onyx-500 text-[25vw] leading-[25vw] lg:text-[12vw] lg:leading-[12vw] xl:text-[13vw] xl:leading-[13vw] mb-auto">1,000x</p>

                <div className="flex flex-col gap-[16px]">
                    <div className="flex items-center gap-[12px]">
                        <img src="union.svg" className="h-[18px]"></img>
                        <p className="font-medium text-md leading-md sm:text-lg sm:leading-lg text-neutral-700">Faster than Homomorphic Encryption (FHE)</p>
                    </div>
                    <div className="flex items-center gap-[12px]">
                        <img src="union.svg" className="h-[18px]"></img>
                        <p className="font-medium text-md leading-md sm:text-lg sm:leading-lg text-neutral-700">Faster than Multi-Party Computation (MPC)</p>
                    </div>
                    <div className="flex items-center gap-[12px]">
                        <img src="union.svg" className="h-[18px]"></img>
                        <p className="font-medium text-md leading-md sm:text-lg sm:leading-lg text-neutral-700">Faster than Zero Knowledge Proof (ZK)</p>
                    </div>
                </div>
            </div>

        </div>
    )
}