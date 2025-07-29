import Heading from "../../common/Heading";
import InlineLink from "../../common/InlineLink";
import SaygoodbyCounter from "./SaygoodbyCounter";

export default function SaygoodbyeText() {
    return (
        <div className="xxl:ml-[360px] xxl:mt-[160px]">
            <div className="flex flex-col xl:flex-row justify-center items-center mb-[100px] px-[20px] xl:justify-between xl:items-start text-center xl:text-left">
                <Heading className="font-regular text-h4 leading-h4 text-neutral-700 md:w-[600px] mb-5 xl:mb-0 xl:text-h2 xl:leading-h2 xl:px-0 md:text-h3 md:leading-h3">Say goodbye to all of your costs for privacy.</Heading>
                <p className="font-regular text-lg leading-lg text-neutral-700 md:w-[400px]">Forget multi-million dollar on-prem infrastructure for AI privacy, get the exact same enterprise-level privacy guarantees in the first end-to-end encrypted API.</p>
            </div>
            <div className="flex flex-col xl:flex-row justify-center mb-[64px] xl:justify-between items-center">
                <SaygoodbyCounter />
                <div className="flex mt-auto">
                    <div className="flex items-center flex-col gap-[24px] xl:items-start">
                        <button className="cursor-pointer bg-neutral-800 text-white font-regular text-h6 leading-h6 py-[12px] px-[16px] hover:bg-white hover:text-black transition duration-150">Fixed cost savings</button>
                        <p className="font-regular text-neutral-800 md:text-h3 md:leading-h3 text-h4 leading-h4">Onyx vs On-prem</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-[16px] lg:gap-[64px] justify-center items-center xl:items-start xl:justify-start lg:flex-row flex-col">
                <InlineLink>Hear about the cost savings</InlineLink>
                <InlineLink>The full cost comparison</InlineLink>
            </div>
        </div>
    )
}