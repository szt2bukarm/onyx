import Heading from "@/components/common/Heading";

const cards = [
    {
        icon: "crossed-eye.svg",
        label: "End to End encrypted AI",
        text: "The most complete data protection, keeping your queries and output private even at point of inference."
    },
    {
        icon: "boxes.svg",
        label: "Zero additional latency",
        text: "Onyx’s breaktrough Equivariant Encryption is a derivation of HomomorphicEncryption but without the latency cost."
    },
    {
        icon: "stack.svg",
        label: "Zero loss in model accuracy",
        text: "Equivariant Encryption offers no loss in accuracy for AI model outputs."
    }
]

export default function SecureAI() {
    return (
        <div className="py-[104px] flex flex-col gap-[80px] xl:w-[50%]">

            <div>
                <Heading className="font-regular text-h4 leading-h4 sm:text-h3 sm:leading-h3 xl:text-h2 xl:leading-h2 text-white mb-[24px]">Your invisible privacy companion that’s your last line of defense.</Heading>
            <p className="font-regular text-h5 leading-h5 sm:text-h4 sm:leading-h4 text-onyx-500">Secure AI without compromise</p>

            </div>

            <div className="flex flex-col gap-[48px]">

                {cards.map((card, index) => (
                    <div key={index} className="flex gap-[32px] items-start">

                        <div className="min-w-[60px] min-h-[60px] bg-creambg flex items-center justify-center">
                            <img src={card.icon} className=" h-[24px]" />
                        </div>

                        <div className="flex flex-col gap-[8px]">
                            <p className="font-regular text-h6 leading-h6 text-white">{card.label}</p>
                            <p className="font-regular text-sm leading-sm text-neutral-100">{card.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}