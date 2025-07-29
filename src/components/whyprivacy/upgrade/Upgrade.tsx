import Heading from "@/components/common/Heading";

export default function Upgrade() {
    return (
        <div className="px-[20px] sm:px-[80px] pt-[60px] sm:pt-[120px] pb-[20px] sm:pb-[120px] flex flex-col xl:flex-row gap-[48px] xl:gap-[120px]">
            <Heading className="font-regular text-h4 leading-h4 sm:text-h3 sm:leading-h3 xl:text-h2 xl:leading-h2 text-neutral-800 xl:min-w-[464px] xl:max-w-[464px]">A Non-Negotiable Upgrade:</Heading>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[8px]">

                <div className="p-[24px] flex sm:flex-col items-center sm:items-start bg-creambg sm:min-h-[196px] gap-[24px] sm:gap-0">
                    <img src="upgrade_shield.svg" className="h-[40px] mb-[8px]" />
                    <p className="font-medium text-md leading-md text-neutral-700 sm:mt-auto">Drastically reduce risk of fines and legal ramifications.</p>
                </div>

                <div className="p-[24px] flex sm:flex-col items-center sm:items-start bg-creambg sm:min-h-[196px] gap-[24px] sm:gap-0">
                    <img src="upgrade_shield.svg" className="h-[40px] mb-[8px]" />
                    <p className="font-medium text-md leading-md text-neutral-700 sm:mt-auto">Build public trust and reinforce compliance posture.</p>
                </div>

                <div className="p-[24px] flex sm:flex-col items-center sm:items-start bg-creambg sm:min-h-[196px] gap-[24px] sm:gap-0">
                    <img src="upgrade_shield.svg" className="h-[40px] mb-[8px]" />
                    <p className="font-medium text-md leading-md text-neutral-700 sm:mt-auto">Safeguard intellectual property and valauble data assets.</p>
                </div>

                <div className="p-[24px] flex sm:flex-col items-center sm:items-start bg-creambg sm:min-h-[196px] gap-[24px] sm:gap-0">
                    <img src="upgrade_shield.svg" className="h-[40px] mb-[8px]" />
                    <p className="font-medium text-md leading-md text-neutral-700 sm:mt-auto">Eliminate costly data leaks.</p>
                </div>

            </div>
        </div>
    )
}