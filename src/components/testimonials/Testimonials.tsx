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

export default function Testiomonials() {
    return (
        <div className="px-[20px] sm:px-[80px] py-[120px] bg-neutral-800">
            <h2 className="font-regular text-h4 leading-h4 sm:text-h3 sm:leading-h3 xl:text-h2 xl:leading-h2 text-white mb-[48px]">What our users say</h2>

            <div className="flex flex-col lg:flex-row min-h-[290px] mb-[24px]">
                {data.map((item,index) => (
                    <TestimonialCard key={index} scaled={true} thickBorder={true} text={item.text} name={item.name} image={item.image} role={item.role} index={index}/>
                ))}
            </div>
            <div className="flex justify-between">
                <button className="group cursor-pointer h-[36px] transition duration-150 w-fit flex items-center px-[16px] py-[8px] border border-white/50 hover:bg-white">
                    <img src="arrow.svg" alt="arrow" className="w-[27px] rotate-180 transition duration-150 group-hover:invert"/>
                </button>
                <button className="group cursor-pointer h-[36px] transition duration-150 w-fit flex items-center px-[16px] py-[8px] border border-white/50 hover:bg-white">
                    <img src="arrow.svg" alt="arrow" className="w-[27px] transition duration-150 group-hover:invert"/>
                </button>
            </div>
        </div>
    )
}