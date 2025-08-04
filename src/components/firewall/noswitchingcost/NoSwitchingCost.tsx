import Heading from "@/components/common/Heading";
import NoSwitchingCostCard from "./NoSwitchingCostCard";
import VideoInline from "@/components/common/VideoInline";

const cards = [
    {
        text: "ON PREM",
        subtitle: "Use any model you want on your same infrastructure.",
        subtext: "Protection against unauthorized internal users, personnel turnover, data storage access mistakes, third party attackers.",
        button: "EE"
    },
    {
        text: "IN CLOUD",
        subtitle: "Use your same cloud provider and same model.",
        subtext: "Protection against model developer access, third party hacks, TLS exploits, listening over the wire, and internal data breaches.",
        button: "HSS-EE"
    }
]

export default function NoSwitchingCost() {
    return (
        <div className="section-padding bg-white flex flex-col gap-[24px] sm:gap-[48px]">

            <Heading className="font-regular text-mobileheading leading-mobiletext-mobileheading sm:text-h3 sm:leading-h3 xl:text-h2 xl:leading-h2 text-neutral-800">No switching cost:</Heading>

            <div className="flex flex-col lg:flex-row gap-[16px]">
                {cards.map((card, index) => (
                    <NoSwitchingCostCard key={index} title={card.text} subtitle={card.subtitle} subtext={card.subtext} button={card.button} />
                ))}
            </div>

            <VideoInline image="3.png" name="Guy Guy" role="Governement security" />

        </div>
    )
}