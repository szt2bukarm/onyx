

export default function FeatureListWhyPrivacy() {
    return (
        <div className="px-[20px] sm:px-[80px] py-[120px] flex flex-col-reverse lg:flex-row gap-[48px] lg:gap-[120px] justify-between">

            {/* left */}
            <div className="flex flex-col gap-[48px] lg:w-[75%]">

                <div className="flex gap-[48px]">
                    <div className="h-[52px] min-w-[52px] bg-onyx-500 flex items-center justify-center">
                        <p className="font-regular text-white text-h5 leading-h5">1</p>
                    </div>

                    <p className="font-regular text-lg leading-lg md:text-h5 md:leading-h5 text-neutral-800">Protect your most valuable resource. Run your organization with zero leak, zero breach comfort.</p>
                </div>

                <div className="w-full h-[1px] bg-black"></div>

                <div className="flex gap-[48px]">
                    <div className="h-[52px] min-w-[52px] bg-onyx-500 flex items-center justify-center">
                        <p className="font-regular text-white text-h5 leading-h5">2</p>
                    </div>

                    <p className="font-regular text-lg leading-lg md:text-h5 md:leading-h5 text-neutral-800">Protect your company from massive fines of GDPR and other regulatory violations.</p>
                </div>

                <div className="w-full h-[1px] bg-black"></div>

                <div className="flex gap-[48px]">
                    <div className="h-[52px] min-w-[52px] bg-onyx-500 flex items-center justify-center">
                        <p className="font-regular text-white text-h5 leading-h5">3</p>
                    </div>
                    <p className="font-regular text-lg leading-lg md:text-h5 md:leading-h5 text-neutral-800">Use and adopt AI much faster - eliminate long sales cycles and legal costs because each new model you use is fully encrypted on the same day of release.</p>
                </div>
            </div>

            {/* right */}
            <div className="flex flex-col mt-auto gap-[8px] lg:w-[25%]">
                <p className="font-medium text-lg leading-lg text-neutral-700">A massive gap in data safety coverage exists today for AI.</p>
                <p className="font-regular text-md leading-md text-neutral-700">You can keep your data private at rest and in transit, but all AI models today require data to be in plain-text at point of inference, meaning you are just giving away all of your data.</p>

            </div>


        </div>
    )
}