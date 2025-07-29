import InlineLink from "../common/InlineLink";

export default function ResearchBigLinks() {
    return (
        <div className="px-[20px] sm:px-[80px] pt-[60px] sm:pt-[80px] pb-[60px] flex flex-col gap-[32px] bg-creambg">

            <div className="flex flex-col lg:flex-row justify-between">

                <div className="flex flex-col gap-[8px] lg:pr-[120px]">
                    <div className="flex items-center justify-center p-[10px] bg-onyx-500 mb-[16px] w-fit">
                        <p className="font-medium text-sm leading-sm text-neutral-800 translate-y-[2px] translate-x-[1px]">CORE TECHNOLOGY OVERVIEW</p>
                    </div>
                    <h3 className="font-regular text-h4 leading-h4 lg:text-h3 lg:leading-h3 text-neutral-800 mb-[32px] lg:mb-0">Onyx Protocol whitepaper</h3>
                </div>

                <div className="flex items-center gap-[24px]">
                    <div className="h-[52px] min-w-[52px] flex items-center justify-center bg-onyx-500">
                        <img src="logoletters/o-black.svg" alt="letter o from ONYX logo" className="h-[24px]" />
                    </div>
                    <InlineLink black={true}>Protocol Whitepaper</InlineLink>
                </div>
            </div>

            <div className="h-[1px] w-full bg-black"></div>

            <div className="flex flex-col lg:flex-row justify-between">

                <div className="flex flex-col gap-[8px] lg:pr-[120px]">
                    <div className="flex items-center justify-center p-[10px] bg-onyx-500 mb-[16px] w-fit">
                        <p className="font-medium text-sm leading-sm text-neutral-800 translate-y-[2px] translate-x-[1px]">CORE TECHNOLOGY OVERVIEW</p>
                    </div>
                    <h3 className="font-regular text-h4 leading-h4 lg:text-h3 lg:leading-h3 text-neutral-800 mb-[32px] lg:mb-0">Onyx Security Whitepaper</h3>
                </div>

                <div className="flex items-center gap-[24px]">
                    <div className="h-[52px] min-w-[52px] flex items-center justify-center bg-onyx-500">
                        <img src="logoletters/o-black.svg" alt="letter o from ONYX logo" className="h-[24px]" />
                    </div>
                    <InlineLink black={true}>Security Whitepaper</InlineLink>
                </div>
            </div>

            </div>

    )
}