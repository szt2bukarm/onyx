import Heading from "@/components/common/Heading";

export default function CryptographicProofs() {
    return (
        <div className="px-[20px] sm:px-[80px] py-[120px] bg-white">
            <Heading className="font-regular text-h4 leading-h4 sm:text-h3 sm:leading-h3 xl:text-h2 xl:leading-h2 text-neutral-800 mb-[48px]">Onyx Cryptographic Proofs</Heading>

            <div className="flex flex-col lg:flex-row gap-[16px] min-h-auto md:min-h-[640px] mb-[48px]">
                <div className="flex flex-col gap-[48px] font-regular border border-black w-full">
                    <div className="bg-gray-200 min-h-[200px] sm:min-h-[308px]"></div>
                    <div className="flex flex-col h-full px-[24px] pb-[24px] sm:px-[48px] sm:pb-[48px]">

                        <div className="flex items-center justify-center px-[10px] py-[8px] bg-onyx-500 mb-[32px] md:mb-[16px] w-fit">
                            <p className="font-medium text-sm leading-sm text-neutral-800 translate-y-[2px] translate-x-[1px]">
                            ONYX Firewall
                            </p>
                        </div>

                        <p className="text-h4 leading-h4 text-neutral-800 mb-[32px]">Equivariant Encryption (EE)</p>
                        <button className="group cursor-pointer font-medium transition duration-150 w-fit flex items-center gap-[24px] px-[24px] py-[12px] border border-black/100 text-black hover:bg-black hover:text-white mt-auto">
                            LEARN MORE
                            <img src="arrow.svg" className="w-[27px] invert transition duration-150 group-hover:invert-0"/>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-[48px] font-regular border border-black w-full">
                    <div className="bg-gray-200 min-h-[200px] sm:min-h-[308px]"></div>
                    <div className="flex flex-col h-full px-[24px] pb-[24px] sm:px-[48px] sm:pb-[48px]">

                        <div className="flex items-center justify-center px-[10px] py-[8px] bg-onyx-500 mb-[32px] md:mb-[16px] w-fit">
                            <p className="font-medium text-sm leading-sm text-neutral-800 translate-y-[2px] translate-x-[1px]">
                            ONYX Fortress
                            </p>
                        </div>

                        <p className="text-h4 leading-h4  text-neutral-800 mb-[32px]">Homomorphic Secret Sharing Equivariant Encryption (HSS-EE)</p>
                        <button className="group cursor-pointer font-medium transition duration-150 w-fit flex items-center gap-[24px] px-[24px] py-[12px] border border-black/100 text-black hover:bg-black hover:text-white mt-auto">
                            LEARN MORE
                            <img src="arrow.svg" className="w-[27px] invert transition duration-150 group-hover:invert-0"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}