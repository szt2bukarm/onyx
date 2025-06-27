export default function InlineLink({black = true,children}: {black: boolean,children: React.ReactNode}) {
    return (
        <a className="cursor-pointer flex gap-[24px]">
            <p className={`font-regular ${black ? "text-neutral-800" : "text-white"} text-lg leading-lg underline`}>{children}</p>
            <img src="arrow.svg" alt="arrow" className={`w-[27px] ${black ? "invert" : ""}`}/>
        </a>
    )
}