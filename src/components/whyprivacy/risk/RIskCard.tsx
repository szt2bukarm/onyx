export default function RiskCard({text,subtext}: {text: string, subtext: string}) {
    return (
        <div className="w-full h-full p-[24px] flex flex-col md:flex-row justify-between bg-white">
            <p className="font-medium text-lg leading-lg text-neutral-700">{text}</p>
            <p className="font-regular text-md leading-mg text-neutral-700 md:w-[35%]">{subtext}</p>
        </div>
    )
}