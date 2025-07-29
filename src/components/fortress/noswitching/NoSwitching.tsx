import Heading from "@/components/common/Heading";

const logos = ["aws","microsoft","openai","google"]

export default function NoSwitching() {
    return (
        <div className="px-[20px] sm:px-[80px] pt-[60px] sm:pt-[120px] pb-[20px] sm:pb-[120px] bg-white">
            <Heading className="font-regular text-h4 leading-h4 sm:text-h3 sm:leading-h3 xl:text-h2 xl:leading-h2 text-neutral-800 mb-[64px]">No Switching<br></br>Stay on your same cloud provider</Heading>

            <div className="w-full">
                <p className="font-medium text-neutral-800 text-sm mb-[24px]">FORTUNE 500 ENTERPRISES</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[8px]">
                    {logos.map((logo, i) => (
                        <div className="h-[144px] w-full bg-[#F2F2F2] p-[8px] flex justify-center items-center" key={i}>
                            <img src={`logos/${logo}.svg`} className={`${i === 0 || i === 3 ? "h-[60px]" : "h-[40px]"}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}