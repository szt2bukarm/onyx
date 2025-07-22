export default function RecentBreachesCards() {
    return (
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-[8px]">

        <div className="flex flex-col sm:min-h-[240px] p-[24px] bg-neutral-700">
            <p className="font-medium text-lg leading-lg text-white">Dangerous Plaintext Liabilities</p>
            <p className="font-regular text-sm leading-sm text-neutral-100 sm:mt-auto">Most breaches from moments where data was held or transferred in plaintext—such as databases, in-memory processes, or misconfigured cloud storage.</p>
        </div>

        <div className="flex flex-col sm:min-h-[240px] p-[24px] bg-neutral-700">
            <p className="font-medium text-lg leading-lg text-white">Regulatory and Legal Ramifications</p>
            <p className="font-regular text-sm leading-sm text-neutral-100 sm:mt-auto">Regulators respond aggressively to data leaks. Reduce the scope of personal data exposure and eliminate the severity of penalties.</p>
        </div>

        <div className="flex flex-col sm:min-h-[240px] p-[24px] bg-neutral-700">
            <p className="font-medium text-lg leading-lg text-white">Executive Personal Liability</p>
            <p className="font-regular text-sm leading-sm text-neutral-100 sm:mt-auto">Cases like Uber’s CSO highlight the personal risk for security leaders who fail to prevent or report breaches properly.</p>
        </div>

        <div className="flex flex-col sm:min-h-[240px] p-[24px] bg-neutral-700">
            <p className="font-medium text-lg leading-lg text-white">AI Pipeline Exposure</p>
            <p className="font-regular text-sm leading-sm text-neutral-100 sm:mt-auto">Standard encryption (VPN/TLS) still leaves data briefly decrypted in a cloud or server environment, opening it up to be exploited in many cases above.</p>
        </div>

    </div>
)
}