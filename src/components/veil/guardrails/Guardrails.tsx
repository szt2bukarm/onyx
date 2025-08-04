import Heading from "@/components/common/Heading";

export default function Guardrails() {
    return (
        <div className="section-padding !sm:pb-[80px] flex flex-col xl:flex-row gap-[40px] xl:gap-[120px]">

            <div className="flex flex-col xl:min-w-[40%]">

                <Heading className="font-regular text-mobileheading leading-mobileheading sm:text-h3 sm:leading-h3 xl:text-h2 xl:leading-h2 text-neutral-800 mb-[24px]">Guardrails for your AI Copilots</Heading>
                <p className="font-regular text-h5 leading-h5 mb-[24px] xl:mb-auto xl:text-h4 xl:leading-h4">Veil lets you safely harness the productivity gains of AI Copilots.</p>

                <p className="font-regular text-lg leading-lg text-neutral-700">Veil first runs a Copilot readiness assessment across all of your organization’s repositories to identify sensitive code and files.<br></br><br></br>
                Veil then continuously protects your data by monitoring repo’s and AI Copilot activity, preventing sensitive code and files from being shared with AI.</p>
            </div>

            <img src="readiness-assessment.png" className="shadow-[0px_24px_48px_-8px_rgba(0,0,0,0.15)] rounded-[12px]"/>
        </div>
    )
}