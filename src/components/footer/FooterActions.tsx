import InlineLink from "../common/InlineLink";

export default function FooterActions() {
    return (
        <div className="flex flex-col md:flex-row md:gap-0 gap-[64px] justify-between pb-[32px] mb-[48px] border-b border-white/10">
            <div className="flex flex-col lg:flex-row gap-[48px]">
                <div className="flex items-center gap-[24px]">
                    <div className="h-[52px] w-[52px] flex items-center justify-center bg-onyx-500">
                        <img src="logoletters/o-black.svg" alt="letter o from ONYX logo" className="h-[24px]" />
                    </div>
                    <InlineLink black={false}>Try Onyx Web</InlineLink>
                </div>
                <div className="flex items-center gap-[24px]">
                    <div className="h-[52px] w-[52px] flex items-center justify-center bg-onyx-500">
                        <img src="logoletters/o-black.svg" alt="letter o from ONYX logo" className="h-[24px]" />
                    </div>
                    <InlineLink black={false}>Try Onyx Api</InlineLink>
                </div>
            </div>
            <div className="flex items-center gap-[32px]">
                <a className="hover:opacity-50 cursor-pointer transition duration-150">
                    <img src="footer/git.svg" alt="GitHub" className="w-[20px] h-[20px]" />
                </a>
                <a className="hover:opacity-50 cursor-pointer transition duration-150">
                    <img src="footer/vector.svg" className="w-[20px] h-[20px]" />
                </a>
                <a className="hover:opacity-50 cursor-pointer transition duration-150">
                    <img src="footer/x.svg" alt="x" className="w-[20px] h-[20px]" />
                </a>
                <a className="hover:opacity-50 cursor-pointer transition duration-150">
                    <img src="footer/dc.svg" alt="Discord" className="w-[20px] h-[20px]" />
                </a>
            </div>
        </div>
    )
}