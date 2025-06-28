export default function InlineLink({black = true,children}: {black: boolean,children: React.ReactNode}) {
    return (
        <a className="group cursor-pointer flex gap-[24px] hover:opacity-50 transition duration-150">
            <p className={`font-regular ${black ? "text-neutral-800" : "text-white"} text-lg leading-lg underline`}>{children}</p>
            <div className="flex max-w-[27px] gap-[12px] overflow-hidden">
                <img src="arrow.svg" alt="arrow" className={`transition duration-300 ease-in-out -translate-x-[39px] group-hover:translate-x-0 w-[27px] ${black ? "invert" : ""}`}/>
                <img src="arrow.svg" alt="arrow" className={`transition duration-300 ease-in-out -translate-x-[39px] group-hover:translate-x-0 w-[27px] ${black ? "invert" : ""}`}/>
            </div>
        </a>
    )
}