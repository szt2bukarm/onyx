import TestimonialCard from "@/components/common/TestimonialCard";

export default function DataLeaks() {
    return (
        <div className="section-padding bg-creambg flex flex-col lg:flex-row justify-between min-h-[290px]">

            {/* left */}
            <div className="flex flex-col gap-[48px] lg:pr-[80px] mb-[48px] lg:mb-0">
                <p className="font-regular text-[30vw] leading-[25vw] lg:text-[170px] lg:leading-[150px] xl:text-[240px] xl:leading-[180px] text-onyx-500 translate-y-3">99%+</p>
                <p className="font-regular text-h5 leading-h5 xl:text-h4 xl:leading-h4 text-neutral-700 ">of data leaks are socially engineered or base techonology exploits.</p>
            </div>

            <div className="lg:w-[514px]">
                <TestimonialCard text="Onyx Firewall is the first defense against both main exploit types, internal and external, in one brilliant API" name="Bob Gourley" role="Leader of enterprise" image="1.png" scaled theme="onyx"/>
            </div>
        </div>
    )
}