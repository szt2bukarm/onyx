"use client"
import PrivacyCard from "./PrivacyCard"
import PrivacyVideo from "./PrivacyVideo"
import PrivacyVideoInline from "./PrivacyVideoInline"
import Heading from "../common/Heading";


const cards = [
    {
        header: "Onyx Fortress",
        subheader: "If you trust your cloud provider",
        text: "Full privacy protection from any third party, internal and external. Near zero latency.",
        button: "EE"
    },
    {
        header: "Onyx Cloud Wall",
        subheader: "If you don’t trust your cloud provider",
        text: "Full privacy protection from everyone, even your cloud provider. Minor latency.",
        button: "HSS-EE"
    },
]

export default function Privacy() {

    return (
        <>
        <div className="px-[20px] sm:px-[80px] py-[120px] bg-white ">
            <Heading className="font-regular text-h4 leading-h4 sm:text-h3 sm:leading-h3 xl:text-h2 xl:leading-h2 text-neutral-800 mb-[48px]">Introducing your AI privacy Wall</Heading>
            <div className="flex flex-col lg:flex-row gap-[16px] min-h-auto md:min-h-[640px] mb-[48px]">
                {cards.map((card, index) => (
                    <PrivacyCard key={index} header={card.header} subheader={card.subheader} text={card.text} button={card.button} />
                ))}
            </div>
            <PrivacyVideoInline image="3.png" name="Guy Guy" role="Governement security" />
        </div>
        <PrivacyVideo />
        </>
    )
}