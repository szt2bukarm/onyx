export default function UseCasesCard({icon,text,subtext,links} : {icon: string, text: string, subtext: string, links: {text: string, url: string}[]}) {
    return (
        <div className="p-[24px] flex flex-col md:flex-row gap-[24px] md:gap-[56px] border-1 border-[#EDE6DF]">

            <div className="flex flex-col items-start md:w-[60%]">
                
                <img src={`usecaseicons/${icon}.svg`} alt="icon" className="max-h-[60px] max-w-[60px] mb-[24px] md:mb-auto" />
                <p className="font-regular text-h5 leading-h5 text-neutral-800 mb-[8px]">{text}</p>
                <p className="font-regular text-sm leading-sm text-neutral-800">{subtext}</p>

            </div>

            <div className="flex flex-col gap-[8px] md:w-[40%]">

                {links.map((link,i) => (
                    <button key={i} className="cursor-pointer transition duration-150 group p-[12px] bg-creambg flex justify-between items-center hover:bg-black hover:text-white">
                        <p className="group-hover:text-white transition duration-150 font-medium text-sm leading-sm text-neutral-700">{link.text}</p>
                        <img src="arrow-up-right.svg" className="transition duration-150 group-hover:invert h-[14px] w-[14px]"/>
                    </button>
                ))}

            </div>

        </div>
    )
}