import TestimonialCard from "../common/TestimonialCard"

const data = [
    {
        text: "With Onyx, we now have peace of mind across the company with full AI privacy for the millions of people who we serve monthly.",
        name: "Jeffrey Lee",
        image: "2.png",
        role: "CEO of Hume Health"
    },
    {
        text: "Onyx is the gold standard for privacy in AI. We are encrypting all of our AI inference to ensure the highest level of security and privacy.",
        name: "Bob Gourley",
        image: "1.png",
        role: "Former CTO of the US Defense Intelligence Agency"
    },
    {
        text: "We are very impressed with Equivariant Encryption at Google. Onyx has the potential to reinvent how companies handle their AI infrastructure.",
        name: "Dr. Jay Tu",
        image: "3.png",
        role: "Scientist at Google Research"
    }
]

export default function HeroTestimonial() {
    return (
        <div className="xl:grid xl:grid-cols-2 xl:grid-rows-2 xl:w-[700px] xl:h-[650px] xl:ml-auto lg:flex">
            <div></div>
            {data.map((item,index) => (
                <TestimonialCard key={index} transform={true} text={item.text} name={item.name} image={item.image} role={item.role} index={index}/>
            ))}
        </div>
    )
}