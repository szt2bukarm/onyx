"use client"
import ExploreCard from "./ExploreCard"
import Heading from "../../common/Heading";

const cards = [
    {
        header: "ChatGPT Veil",
        text: "All sensitive + identifying prompt information and terminology data is stripped, transformed and mapped, for full privacy to ChatGPT and Claude.",
        image: "icons/chatgpt-veil.svg",
        button: "TRY NOW"
    },
    {
        header: "Blind RAG",
        text: "RAG data insertions remain fully encrypted across all cloud environments, with the ability for firm-wide access to all datastores thanks to blanket encryption.",
        image: "icons/blind-rag.svg",
        button: "BLIND RAG"
    },
    {
        header: "Blind Search",
        text: "External AI searches remain fully encrypted across all search engines and search destinations, where input is scrambled for the search provider.",
        image: "icons/blind-search.svg",
        button: "BLIND SEARCH"
    }
]

export default function Explore() {

    return (
        <div className="bg-white section-padding">
            <Heading className="font-regular text-mobileheading leading-mobileheading sm:text-h3 sm:leading-h3 xl:text-h2 xl:leading-h2 text-neutral-800 mb-[48px]">Other Onyx products to explore</Heading>
            <div className="flex flex-col xl:flex-row gap-[16px] min-h-[450px]">
            {cards.map((card, index) => (
                <ExploreCard key={index} icon={card.image} header={card.header} text={card.text} button={card.button} />
            ))}
            </div>
        </div>
    )
}