export default function TestimonialCard({text,name,image,role,index,transform,border,thickBorder,scaled,theme}: {text: string, name: string, image: string,role: string, index: number, transform?: boolean, border?: boolean, thickBorder?: boolean, scaled?: boolean,theme?: string}) {
    return (
        <div className={`flex flex-col justify-between 
        ${scaled ? "p-[32px]" : "p-[24px]"}
        ${border ? "border" : ""}
        ${thickBorder ? "border-white/50" : "border-neutral-600/60"}
        w-full min-h-full
        ${theme === "onyx" ? "bg-onyx-500" : ""}
        ${index === 1 && transform ? "xl:-translate-y-1/2 xl:translate-x-[1px]" : ""}`}>
            <div className="w-[80%] max-xl:mb-7">
                <img src="quote.svg" className={`w-[35px] mb-[24px] ${theme === "onyx" ? "invert" : ""}`} alt="quotion mark" />
                <p className={`${scaled ? "text-md leading-md" : "text-sm leading-sm"}
                ${theme === "black" ? "text-neutral-100" : ""}
                ${theme === "onyx" ? "text-neutral-700" : ""}
                font-regular`}>
                    {text}
                </p>
            </div>
            <div className="flex gap-[16px]">
                <img className="w-[48px] h-[48px] rounded-full" src={image} alt={`image of ${name}`} />
                <div className="flex flex-col">
                    <p className={`text-md leading-md
                        ${theme === "black" ? "text-white" : ""}
                        ${theme === "onyx" ? "text-neutral-800" : ""}1
                        font-medium`}>
                            {name}
                        </p>
                    <p className={
                        `text-sm leading-sm 
                        ${theme === "black" ? "text-neutral-300" : ""}
                        ${theme === "onyx" ? "text-neutral-700" : ""} 
                        font-regular`}>{role}</p>
                </div>
            </div>
        </div>
    )
}