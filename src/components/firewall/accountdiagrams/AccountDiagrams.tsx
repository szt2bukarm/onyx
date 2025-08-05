export default function AccountDiagrams() {
    return (
        <div className="section-padding bg-creambg flex flex-col md:flex-row gap-[32px] xl:gap-[56px]">

            <div className="p-[24px] lg:p-[48px] bg-white flex flex-col gap-[40px]">
                <img src="firewall/one-account-diagram.webp" className="" />
                <p className="font-regular text-lg leading-lg lg:text-h5 lg:leading-h5 text-neutral-800">One account type, with the same access control company-wide</p>
            </div>

            <img src="firewall/diagram-arrow.svg" className="w-[90px] rotate-90 my-10 mx-auto md:mx-0 md:my-0 md:rotate-0 md:w-auto "/>

            <div className="p-[24px] lg:p-[48px] bg-white flex flex-col gap-[40px]">
                <img src="firewall/unified-account-diagram.webp" className="" />
                <p className="font-regular text-lg leading-lg lg:text-h5 lg:leading-h5 text-neutral-800">Many many different accounts types with different data access controls</p>
            </div>
        </div>
    )
}