import CTAButton from "./common/CTAButton";

export default function Nav() {
    return (
        <nav className="z-100 bg-neutral-800 sm:px-[80px] px-[20px] w-screen fixed top-0 flex justify-between items-center py-[24px]">
            <img src="logo.svg" alt="logo" className="w-[160px]"/>
            <div className="flex items-center">
                <div className="space-x-[8px] mr-[32px]">
                    <a className="px-[8px] py-[16px] text-white">RESEARCH</a>
                    <a className="px-[8px] py-[16px] text-white">TEAM</a>
                    <a className="px-[8px] py-[16px] text-white">GITHUB</a>
                </div>
                <CTAButton variant="primary">TRY IT</CTAButton>
            </div>
        </nav>
    )
}