import Button from "@/components/common/Button";

export default function NoSwitchingCostCard({title,subtitle,subtext,button} : {title: string, subtitle: string, subtext: string, button: string}) {
    return (
        <div className="flex flex-col w-full min-h-full p-[24px] lg:p-[48px] gap-[32px] border border-black">

            <div>
                <p className="font-medium text-md leading-md sm:text-lg sm:leading-lg text-neutral-800 mb-[8px]">How it works</p>
                <p className="font-bold text-h4 leading-h4 sm:text-h3 sm:leading-h3 text-neutral-800 mb-[16px]">{title}</p>
                <p className="font-regular text-lg leading-lg sm:text-h5 sm:leading-h5 text-neutral-800">{subtitle}</p>
            </div>

            <p className="font-regular  sm:text-md sm:leading-md text-neutral-700">{subtext}</p>

            {/* <button className="mt-auto group cursor-pointer font-medium transition duration-150 w-fit flex items-center gap-[24px] px-[24px] py-[12px] border border-black/100 text-black hover:bg-black hover:text-white">
                {button}
                <img src="arrow.svg" className="w-[27px] invert transition duration-150 group-hover:invert-0"/>
            </button> */}
            <Button variant="black">{button}</Button>

        </div>
    )
}