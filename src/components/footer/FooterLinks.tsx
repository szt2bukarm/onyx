import FooterLinkCard from "./FooterLinkCard"

const card = [
    {
        image: "",
        text: "Onyx as an API",
        button: "SEE DOCS"
    },
    {
        image: "",
        text: "Onyx as a web app",
        button: "TRY NOW"
    }
]

export default function FooterLinks() {
    return (
        <div className="flex flex-col lg:flex-row gap-[16px] mb-[48px]">
            {card.map((card, index) => (
                <FooterLinkCard key={index} image={card.image} text={card.text} button={card.button} />
            ))}
        </div>
    )
}