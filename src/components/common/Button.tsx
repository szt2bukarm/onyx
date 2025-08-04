export default function Button({variant,fitWidth = true,center,children}: {variant: string,fitWidth?: boolean,center?: boolean, children: React.ReactNode}) {
    return (
        <button className={`group ${fitWidth ? "w-fit" : "w-full"} transition duration-150 cursor-pointer flex items-center gap-[24px] px-[24px] py-[12px] font-medium ${center ? "justify-center" : ""}
        ${variant === "primary" ? "bg-onyx-500 text-neutral-800 border border-onyx-500 hover:bg-neutral-800 hover:text-white hover:border-white" : ""}
        ${variant === "secondary" ? "border-white border text-white hover:bg-onyx-500 hover:border-onyx-500 hover:text-neutral-800" : ""}
        ${variant === "white" ? "border-white/75 border text-white hover:bg-white hover:border-white hover:text-black" : ""}
        ${variant === "black" ? "border-black border text-black hover:bg-black hover:border-black hover:text-white" : ""}
        `}>
        
            {children}
            <img src="arrow.svg" alt="arrow" className={`transition duration-150 ${variant === "primary" || variant === "black" ? "invert group-hover:invert-0" : "group-hover:invert"}`}/>
        </button>
    )

}