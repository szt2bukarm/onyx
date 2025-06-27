import CTAButton from "../common/CTAButton";

export default function HeroText() {
    return (
        <div className="xxl:pr-[180px] w-full max-xl:mb-20">
            <h1 className="font-regular text-white mb-[32px] xxl:text-h1 xxl:leading-h1 xl:text-h2 xl:leading-h2 xl:w-full lg:w-[80%] lg:text-h1 lg:leading-h1 md:text-h2 md:leading-h2 text-h3 leading-h3">RUN AI MODELS WITH YOUR DATA PRIVATELY</h1>
            <p className="text-lg font-regular leading-lg text-neutral-100 mb-[18px] xl:w-full lg:w-[50%]">Onyx is the first API for AI with your data that is end-to-end encrypted - blind for the first time even to your cloud provider - for complete privacy without any special hardware.</p>
            <div className="flex gap-[16px] mb-[80px]">
                <CTAButton variant="primary">TRY IT NOW</CTAButton>
                <CTAButton variant="secondary">GET THE API</CTAButton>
            </div>
            <div className="flex">
                <img src="logoletters/o.svg" alt="letter o from ONYX logo" className="md:h-[110px] h-[15.3vw]" />
                <img src="logoletters/n.svg" alt="letter n from ONYX logo" className="md:h-[110px] h-[15.3vw]" />
                <img src="logoletters/y.svg" alt="letter y from ONYX logo" className="md:h-[110px] h-[15.3vw] -translate-x-2" />
                <img src="logoletters/x.svg" alt="letter x from ONYX logo" className="md:h-[110px] h-[15.3vw] -translate-x-1" />
                <img src="logoletters/tm.svg" alt="Registered Trademark" className="h-[15px] -translate-y-3" />
            </div>
        </div>
    )
}