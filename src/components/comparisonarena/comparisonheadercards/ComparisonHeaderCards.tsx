export default function ComparisonHeaderCards() {
    return (
        <div className="bg-black grid md:grid-cols-3 md:gap-[2px]">

            <div className="flex flex-col items-start p-[24px] gap-[24px] sm:p-[48px] sm:gap-[48px] bg-white">
                <img className="h-[64px] md:h-[80px]" src="comparison-card-icon.svg"/>
                <p className="font-regular text-h5 leading-h5 sm:text-h4 sm:leading-h4 text-neutral-800">100% fidelity and model accuracy</p>
            </div>

            <div className="flex flex-col items-start p-[24px] gap-[24px] sm:p-[48px] sm:gap-[48px] bg-white">
                <img className="h-[64px] md:h-[80px]" src="comparison-card-icon.svg"/>
                <p className="font-regular text-h5 leading-h5 sm:text-h4 sm:leading-h4 text-neutral-800">Fastest AI response times with privacy</p>
            </div>

            <div className="flex flex-col items-start p-[24px] gap-[24px] sm:p-[48px] sm:gap-[48px] bg-white">
                <img className="h-[64px] md:h-[80px]" src="comparison-card-icon.svg"/>
                <p className="font-regular text-h5 leading-h5 sm:text-h4 sm:leading-h4 text-neutral-800">Zero backdoor access to data</p>
            </div>

        </div>
    )
}