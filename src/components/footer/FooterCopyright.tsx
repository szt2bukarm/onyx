export default function FooterCopyright() {
    return (
        <div className="flex justify-between font-regular py-[24px] w-full flex-col lg:flex-row gap-[16px] lg:gap-0 mb-[16px]">
            <p className="text-sm leading-sm text-white">Copyright 2025 Onyx Techologies Inc.</p>
            <div className="flex flex-wrap flex-col lg:flex-row gap-[18px] lg:items-center">
                <a className="underline text-white text-sm leading-sm">Privacy Policy</a>
                <a className="underline text-white text-sm leading-sm">Service Terms</a>
                <a className="underline text-white text-sm leading-sm">Risks</a>
                <a className="underline text-white text-sm leading-sm">Data Use</a>
                <a className="underline text-white text-sm leading-sm">Usage Policy</a>
            </div>
        </div>
    )
}