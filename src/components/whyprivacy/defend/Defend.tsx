import Heading from "@/components/common/Heading";

export default function Defend() {
    return (
        <div className="px-[20px] sm:px-[80px] pt-[60px] sm:pt-[120px] pb-[20px] sm:pb-[120px] bg-white">
            <Heading className="font-regular text-h4 leading-h4 sm:text-h3 sm:leading-h3 xl:text-h2 xl:leading-h2 text-neutral-800 mb-[48px]">Defend Against AI-Specific Risks</Heading>


            <div className="grid lg:grid-cols-3 gap-[8px]">
                
                <div className=" flex flex-col items-start p-[24px] sm:p-[48px] bg-creambg">
                    <img src="defend1.svg" className="h-[80px] mb-[24px] lg:mb-[100px]" />

                    <div className="lg:min-h-[216px]">
                    <p className="font-regular text-h4 leading-h4 text-neutral-800 mb-[16px]">Model Extraction and IP Protection</p>
                    <p className="font-regular text-md leading-md text-neutral-700">Onyx obscures both the input data and model itself, making it nearly impossible for attackers to systematically query and replicate a model’s behavior.</p>
                    </div>
                </div>

                <div className=" flex flex-col items-start p-[24px] sm:p-[48px] bg-creambg">
                    <img src="defend2.svg" className="h-[80px] mb-[24px] lg:mb-[100px]" />

                    <div className="lg:min-h-[216px]">
                    <p className="font-regular text-h4 leading-h4 text-neutral-800 mb-[16px]">Fully Private Inference</p>
                    <p className="font-regular text-md leading-md text-neutral-700">With Onyx, sensitive data (e.g., user information, financial details) can be fed into models fully encrypted without revealing their content to cloud providers or unauthorized parties.</p>
                    </div>
                </div>

                <div className=" flex flex-col items-start p-[24px] sm:p-[48px] bg-creambg">
                    <img src="defend3.svg" className="h-[80px] mb-[24px] lg:mb-[100px]" />

                    <div className="lg:min-h-[216px]">
                    <p className="font-regular text-h4 leading-h4 text-neutral-800 mb-[16px]">Guard Against Data Leakage</p>
                    <p className="font-regular text-md leading-md text-neutral-700">With Onyx, since the AI model never processes decrypted data in memory, it becomes nearly impossible for an attacker to craft queries that force the model to leak original training data or confidential records.</p>
                    </div>
                </div>

            </div>

        </div>
    )
}