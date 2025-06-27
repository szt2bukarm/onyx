export default function PrivacyCard({image,header,subheader,text,button}: {image: string, header: string, subheader: string, text: string, button: string}) {
    return (
        <div className="flex flex-col gap-[48px] font-regular border border-black w-full">
            <div className="bg-gray-200 min-h-[308px]"></div>
            <div className="px-[48px] pb-[48px]">
                <p className="text-h4 leading-h4  text-neutral-800 mb-[16px]">{header}</p>
                <p className="text-h5 leading-h5 text-neutral-800">{subheader}</p>
                <p className="text-md leading-md text-neutral-700 my-[32px]">{text}</p>
                <button className="group cursor-pointer font-medium transition duration-150 w-fit flex items-center gap-[24px] px-[24px] py-[12px] border border-black/100 text-black hover:bg-black hover:text-white">
                    {button}
                    <img src="arrow.svg" className="w-[27px] invert transition duration-150 group-hover:invert-0"/>
                </button>
            </div>
        </div>
    )
}