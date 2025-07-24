import Heading from "@/components/common/Heading"

const data = [
    {
        name: "Dr. Harry Yang",
        title: "Founder",
        image: "drharryyang.png"
    },
    {
        name: "Dr. Yue Zhao",
        title: "Founder",
        image: "dryuezhao.png"
    },
    {
        name: "Dr. Claudio Angione",
        title: "Chief of Research",
        image: "drclaudioangione.png"
    },
    {
        name: "Dr. Marco Di Maggio",
        title: "Founder",
        image: "drmarcodimaggio.png"
    },
    {
        name: "Patrick Colangelo",
        title: "Founder",
        image: "patrickcolangelo.png"
    },
    {
        name: "Dr. Xiaofan Liu",
        title: "Founder",
        image: "drxiaofanliu.png"
    },
    {
        name: "Dr. Hongyang Zhang",
        title: "Chief of Security",
        image: "drhongyangzhang.png"
    },
    {
        name: "Alan Boehme",
        title: "Chief of Platform",
        image: "alanboehme.png"
    },
    {
        name: "Fielding Johnston",
        title: "VP of Engineering",
        image: "fieldingjohnston.png"
    },
    {
        name: "Dr. James Buban",
        title: null,
        image: "drjamesbuban.png"
    },
    {
        name: "Dr. Jason Chen",
        title: null,
        image: "drjasonchen.png"
    },
    {
        name: "Ahmad Farhan",
        title: null,
        image: "ahmadfarhan.png"
    },
    {
        name: "Dr. Elvin Yao",
        title: null,
        image: "drelvinyao.png"
    },
    {
        name: "Dr. Xiaofeng Liu",
        title: null,
        image: "drxiaofengliu.png"
    },
]

export default function LeadershipTeam() {
    return (

        <div className="px-[20px] sm:px-[80px] py-[60px] flex flex-col bg-creambg">

        <Heading className="font-regular text-h4 leading-h4 sm:text-h3 sm:leading-h3 xl:text-h2 xl:leading-h2 text-neutral-800 mb-[8px]">Leadership Team</Heading>
        <p className="font-regular text-lg leading-lg text-neutral-700 mb-[48px]">Real AI meets cryptography. Our team is a hybrid of leaders from both industries.</p>


        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-[24px] gap-y-[32px] xl:gap-x-[44px] xl:gap-y-[32px] flex-wrap">
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