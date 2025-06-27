export default function FooterLinkCard({image,text,button} : {image: string, text: string, button: string}) {
    return (
        <div className="flex flex-col w-full h-full p-[48px] bg-neutral-700">
            <div className="h-[240px] bg-gray-200 mb-[32px]"></div>
            <div className="flex flex-col items-start justify-start xl:flex-row xl:justify-between xl:items-center">
                <p className="text-regular text-white text-h4 leading-h4 mb-5 xl:mb-0">{text}</p>
                <button className="group cursor-pointer font-medium transition duration-150 w-fit flex items-center gap-[24px] px-[24px] py-[12px] border border-white/100 text-white hover:bg-white hover:text-black">
                    {button}
                    <img src="arrow.svg" className="w-[27px] invert-0 transition duration-150 group-hover:invert"/>
                </button>
            </div>
        </div>
    )
}