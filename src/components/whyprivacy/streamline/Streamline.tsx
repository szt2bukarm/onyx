import Heading from "@/components/common/Heading";

export default function Streamline() {
    return (
        <div className="px-[20px] sm:px-[80px] py-[120px] bg-white">
            <Heading className="font-regular text-h4 leading-h4 sm:text-h3 sm:leading-h3 xl:text-h2 xl:leading-h2 text-neutral-800 mb-[48px]">Streamline Regulatory Compliance</Heading>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[8px]">

                <div className="flex flex-col sm:min-h-[240px] p-[24px] bg-creambg">
                    <p className="font-medium text-lg leading-lg text-neutral-700">GDPR “Privacy by Design”</p>
                    <p className="font-regular text-sm leading-sm text-neutral-700 sm:mt-auto">Articles 25 and 32 of GDPR emphasize incorporating security measures at every stage to stay compliant.</p>
                </div>

                <div className="flex flex-col sm:min-h-[240px] p-[24px] bg-creambg">
                    <p className="font-medium text-lg leading-lg text-neutral-700">Reduce Liability</p>
                    <p className="font-regular text-sm leading-sm text-neutral-700 sm:mt-auto">If data remains encrypted during processing, the liability and scope of breach notifications under GDPR, CCPA, and PCI DSS can be significantly diminished.</p>
                </div>

                <div className="flex flex-col sm:min-h-[240px] p-[24px] bg-creambg">
                    <p className="font-medium text-lg leading-lg text-neutral-700">Future-Proof Attacks</p>
                    <p className="font-regular text-sm leading-sm text-neutral-700 sm:mt-auto">As AI-powered attacks evolve and your vulnerabilities change, an end-to-end defense posture for data security on AI activity is critical.</p>
                </div>

                <div className="flex flex-col sm:min-h-[240px] p-[24px] bg-creambg">
                    <p className="font-medium text-lg leading-lg text-neutral-700">Future-Proof Regulation</p>
                    <p className="font-regular text-sm leading-sm text-neutral-700 sm:mt-auto">As AI regulations evolve, end-to-end encryption positions your organization ahead of stricter compliance mandates.</p>
                </div>

            </div>
        </div>
    )
}