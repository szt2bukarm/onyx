import Button from "@/components/common/Button";

export default function ExploreCard({icon,header,text,button} : {icon: string, header: string, text: string, button: string}) {
    return (
        <div className="bg-creambg p-[24px] sm:p-[48px] flex flex-col items-start w-full">
            <img src={icon} alt={`icon for ${header}`} className="h-[80px] mb-[24px] xl:mb-[48px]" />
            <div className="font-regular mt-auto">
                <div>
                    <p className="text-h4 leading-h4 text-neutral-800 mb-[16px]">{header}</p>
                    <p className="text-md leading-md text-neutral-700 mb-[32px]">{text}</p>
                </div>

                <Button variant="black">{button}</Button>
            </div>
        </div>
    )
}