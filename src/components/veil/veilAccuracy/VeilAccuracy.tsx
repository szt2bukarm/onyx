import Heading from "@/components/common/Heading";
import InlineLink from "@/components/common/InlineLink";

export default function VeilAccuracy() {
    return (
        <div className="px-[24px] py-[48px] sm:px-[80px] sm:pt-[60px] sm:pb-[120px] flex flex-col gap-[96px] xl:gap-[120px] bg-creambg">

            {/* exact same accuracy */}
            <div className="flex flex-col gap-[48px]">
                <div>
                <Heading className="font-regular text-mobileheading leading-mobileheading sm:text-h3 sm:leading-h3 xl:text-h2 xl:leading-h2 text-neutral-800 mb-[16px]">Get the exact same accuracy of response</Heading>
                <p className="font-regular text-lg leading-lg text-neutral-700">Veil ensures that responses remain accurate without any critical data leaks by transforming and then mapping back tokens in the prompt.</p>
                </div>
                <img src="veil/veilFlow.png" className="w-full" />
            </div>

            {/* exact same accuracy */}
            <div className="flex flex-col xl:flex-row gap-[10px]">
                <div className="flex flex-col gap-[24px] xl:w-[70%]">
                    <Heading className="font-regular text-mobileheading leading-mobileheading sm:text-h3 sm:leading-h3 xl:text-h2 xl:leading-h2 text-neutral-800 xl:mb-auto">Ensure the most reliable AI responses</Heading>

                    <div className="flex flex-wrap gap-[8px] mb-[40px] xl:mb-0">
                        <p className="text-black bg-onyx-500 p-[10px] uppercase">Toxicity</p>
                        <p className="text-black bg-onyx-500 p-[10px] uppercase">Hallucinations</p>
                        <p className="text-black bg-onyx-500 p-[10px] uppercase">bias</p>
                        <p className="text-black bg-onyx-500 p-[10px] uppercase">prompt injections</p>
                        <p className="text-black bg-onyx-500 p-[10px] uppercase">harmful content</p>
                    </div>

                </div>

                <div className="flex flex-col xl:w-[30%] xl:pl-[100px]">
                    <p className="font-regular text-lg leading-lg xl:mb-auto text-neutral-700">On every response back, Onyx Veil checks against thousands of risk points through advanced Red Teaming so you can build with GenAI without worrying about LLM risks.</p>
                    <div className="mt-[24px]">
                    <InlineLink>Learn more about Onyx Red Teaming</InlineLink>
                    </div>
                </div>
            </div>
        </div>
    )
}