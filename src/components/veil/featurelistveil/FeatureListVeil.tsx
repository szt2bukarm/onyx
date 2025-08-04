export default function FeatureListVeil() {
    return (
        <div className="section-padding !pt-0 bg-creambg flex flex-col gap-[48px]">

            <div className="flex flex-col gap-[48px]">
                <div className="flex flex-col lg:flex-row justify-between">
                    <h3 className="font-regular text-h4 lg:text-h3 lg:leading-h3 text-neutral-800 mb-[24px] lg:mb-0">Safeguard your data from ChatGPT</h3>
                    
                    <div className="flex flex-col gap-[24px] lg:max-w-[400px] xl:max-w-[530px] lg:pl-[100px]">
                        <p className="font-regular text-md leading-md text-neutral-700 ">Veil ensures your sensitive data, source code, and IP stays protected in every prompt, eliminating anything that puts you at risk.</p>
                        <p className="font-bold text-lg leading-lg text-neutral-700">Over 1,000 topics, terms, categories, checks.</p>
                    </div>
                </div>

                <div className="h-[1px] w-full bg-black"></div>
            </div>

            <div className="flex flex-col gap-[48px]">
                <div className="flex flex-col lg:flex-row justify-between">
                    <h3 className="font-regular text-h4 lg:text-h3 lg:leading-h3 text-neutral-800 mb-[24px] lg:mb-0">Stay compliant with your use of AI</h3>
                    <div className="flex flex-col gap-[24px] lg:max-w-[400px] xl:max-w-[530px] lg:pl-[100px]">
                        <p className="font-regular text-md leading-md text-neutral-700 ">Veil ensures you stay compliant across all AI sessions for GDPR, HIPAA, CCPA, and data residency laws.</p>
                        <p className="font-bold text-lg leading-lg text-neutral-700">With detailed logging across the organization.</p>
                    </div>
                </div>

                <div className="h-[1px] w-full bg-black"></div>
            </div>

            <div className="flex flex-col gap-[48px]">
                <div className="flex flex-col lg:flex-row justify-between">
                    <h3 className="font-regular text-h4 lg:text-h3 lg:leading-h3 text-neutral-800 mb-[24px] lg:mb-0">Prevent zero day AI threats</h3>
                    <div className="flex flex-col gap-[24px] lg:max-w-[400px] xl:max-w-[530px] lg:pl-[100px]">
                        <p className="font-regular text-md leading-md text-neutral-700 ">Veil ensures your sensitive data, source code, and IP stays protected in every prompt, eliminating anything that puts you at risk.</p>
                        <p className="font-bold text-lg leading-lg text-neutral-700">Immediate warnings, assisted deletions and prevention.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}