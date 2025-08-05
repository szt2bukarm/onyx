import Heading from "@/components/common/Heading"

const data = [
    {
        name: "Dr. Harry Yang",
        title: "Founder",
        image: "drharryyang.webp"
    },
    {
        name: "Dr. Yue Zhao",
        title: "Founder",
        image: "dryuezhao.webp"
    },
    {
        name: "Dr. Claudio Angione",
        title: "Chief of Research",
        image: "drclaudioangione.webp"
    },
    {
        name: "Dr. Marco Di Maggio",
        title: "Founder",
        image: "drmarcodimaggio.webp"
    },
    {
        name: "Patrick Colangelo",
        title: "Founder",
        image: "patrickcolangelo.webp"
    },
    {
        name: "Dr. Xiaofan Liu",
        title: "Founder",
        image: "drxiaofanliu.webp"
    },
    {
        name: "Dr. Hongyang Zhang",
        title: "Chief of Security",
        image: "drhongyangzhang.webp"
    },
    {
        name: "Alan Boehme",
        title: "Chief of Platform",
        image: "alanboehme.webp"
    },
    {
        name: "Fielding Johnston",
        title: "VP of Engineering",
        image: "fieldingjohnston.webp"
    },
    {
        name: "Dr. James Buban",
        title: null,
        image: "drjamesbuban.webp"
    },
    {
        name: "Dr. Jason Chen",
        title: null,
        image: "drjasonchen.webp"
    },
    {
        name: "Ahmad Farhan",
        title: null,
        image: "ahmadfarhan.webp"
    },
    {
        name: "Dr. Elvin Yao",
        title: null,
        image: "drelvinyao.webp"
    },
    {
        name: "Dr. Xiaofeng Liu",
        title: null,
        image: "drxiaofengliu.webp"
    },
]

export default function LeadershipTeam() {
    return (

        <div className="px-[20px] sm:px-[80px] py-[60px] flex flex-col bg-creambg">

        <Heading className="font-regular text-h4 leading-h4 sm:text-h3 sm:leading-h3 xl:text-h2 xl:leading-h2 text-neutral-800 mb-[8px]">Leadership Team</Heading>
        <p className="font-regular text-lg leading-lg text-neutral-700 mb-[48px]">Real AI meets cryptography. Our team is a hybrid of leaders from both industries.</p>


        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-[44px] sm:gap-x-[24px] sm:gap-y-[32px] xl:gap-x-[44px] xl:gap-y-[32px] flex-wrap">
        {data.map((person, index) => (
            <div key={index} className="flex flex-col items-start">
                <img src={`about/${person.image}`} className=" mb-[20px]" />
                <p className="text-h5 leading-h5 text-neutral-800 font-regular mb-auto">{person.name}</p>
                {person.title && <p className="text-md leading-md text-onyx-500 font-regular">{person.title}</p>}
            </div>
        ))}
        </div>

    </div>
    )
}