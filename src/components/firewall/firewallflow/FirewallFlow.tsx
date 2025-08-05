import Button from "@/components/common/Button";

export default function FirewallFlow() {
    return (
        <div className="section-padding bg-creambg">

            <img src="firewall/firewall-flow.webp" className="w-full mb-[16px]" />

            <div className="grid lg:grid-cols-2 gap-[16px]">

                <div className="flex flex-col items-start p-[24px] sm:p-[48px] bg-white">
                    <img src="iconplaceholder2.svg" className="h-[55px] lg:h-[110px] mb-[32px]" />
                    <p className="font-regular text-h4 leading-h4 text-neutral-800 mb-[24px]">Get responses at the same speed.</p>
                    <div className="mt-auto">
                        <Button variant="black">See speed benchmarks</Button>
                    </div>
                </div>

                <div className="flex flex-col items-start p-[24px] sm:p-[48px] bg-white">
                    <img src="iconplaceholder2.svg" className="h-[55px] lg:h-[110px] mb-[32px]" />
                    <p className="font-regular text-h4 leading-h4 text-neutral-800 mb-[24px]">Use your same AI models.</p>
                    <div className="mt-auto">
                        <Button variant="black">See speed benchmarks</Button>
                    </div>
                </div>

            </div>

        </div>
    )
}