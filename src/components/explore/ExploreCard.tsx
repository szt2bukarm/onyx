export default function ExploreCard({icon,header,text,button} : {icon: string, header: string, text: string, button: string}) {
    return (
        <div className="bg-creambg p-[48px] flex flex-col w-full">
            <img src="iconplaceholder.png" alt="icon" className="w-[125px] h-[125px] mb-5" />
            <div className="font-regular mt-auto">
                <div>
                    <p className="text-h4 leading-h4 text-neutral-800 mb-[16px]">{header}</p>
                    <p className="text-md leading-md text-neutral-700 mb-[32px]">{text}</p>
                </div>
                <button className="group cursor-pointer font-medium transition duration-150 w-fit flex items-center gap-[24px] px-[24px] py-[12px] border border-black/100 text-black hover:bg-black hover:text-white">
                    {button}
                    <img src="arrow.svg" className="w-[27px] invert transition duration-150 group-hover:invert-0"/>
                </button>
            </div>
        </div>
    )
}