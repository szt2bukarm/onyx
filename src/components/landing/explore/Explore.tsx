"use client"
import ExploreCard from "./ExploreCard"
import Heading from "../../common/Heading";

const cards = [
    {
        header: "ChatGPT Veil",
        text: "All sensitive + identifying prompt information and terminology data is stripped, transformed and mapped, for full privacy to ChatGPT and Claude.",
        button: "TRY NOW"
    },
    {
        header: "Onyx Blind RAG",
        text: "RAG data insertions and external AI searches remain fully encrypted across all cloud environments.",
        button: "BLIND RAG"
    },
    {
        header: "Blind Search",
        text: "RAG data insertions and external AI searches remain fully encrypted across all cloud environments.",
        button: "BLIND SEARCH"
    }
]

export default function Explore() {

    return (
        <div className="bg-white px-[20px] sm:px-[80px] pt-[120px] pb-[60px] sm:pb-[120px]">
            <Heading className="font-regular text-h4 leading-h4 sm:text-h3 sm:leading-h3 xl:text-h2 xl:leading-h2 text-neutral-800 mb-[48px]">Other Onyx products to explore</Heading>
            <div className="flex flex-col xl:flex-row gap-[16px] min-h-[450px]">
            {cards.map((card, index) => (
                <ExploreCard key={index} icon="placeholdericon.png" header={card.header} text={card.text} button={card.button} />
            ))}
            </div>
        </div>
    )
}