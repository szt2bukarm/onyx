export default function ComparisonHeaderCards() {
    return (
        <div className="bg-black grid md:grid-cols-3 gap-[2px]">

            <div className="flex flex-row md:flex-col items-center md:items-start p-[48px] gap-[48px] bg-white">
                <img className="h-[55px] md:h-[80px]" src="comparison-card-icon.svg"/>
                <p className="font-regular text-h5 leading-h5 md:text-h4 md:leading-h4 text-neutral-800">100% fidelity and model accuracy</p>
            </div>

            <div className="flex flex-row md:flex-col items-center md:items-start p-[48px] gap-[48px] bg-white">
                <img className="h-[55px] md:h-[80px]" src="comparison-card-icon.svg"/>
                <p className="font-regular text-h5 leading-h5 md:text-h4 md:leading-h4 text-neutral-800">Fastest AI response times with privacy</p>
            </div>

            <div className="flex flex-row md:flex-col items-center md:items-start p-[48px] gap-[48px] bg-white">
                <img className="h-[55px] md:h-[80px]" src="comparison-card-icon.svg"/>
                <p className="font-regular text-h5 leading-h5 md:text-h4 md:leading-h4 text-neutral-800">Zero backdoor access to data</p>
            </div>

        </div>
    )
}