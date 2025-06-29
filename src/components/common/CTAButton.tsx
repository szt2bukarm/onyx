export default function CTAButton({variant,children}: {variant: string, children: React.ReactNode}) {
    return (
        <button className={`group transition duration-150 cursor-pointer flex items-center gap-[24px] px-[24px] py-[12px] font-medium ${variant === "primary" ? "bg-onyx-500 text-neutral-800 border border-onyx-500 hover:bg-neutral-800 hover:text-white hover:border-white" : "border-white border text-white hover:bg-onyx-500 hover:border-onyx-500 hover:text-neutral-800"}`}>
            {children}
            <img src="arrow.svg" alt="arrow" className={`transition duration-150 ${variant === "primary" ? "invert group-hover:invert-0" : "group-hover:invert"}`}/>
        </button>
    )

}