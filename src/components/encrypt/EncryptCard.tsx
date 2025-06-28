export default function EncryptCard({header,headerColor,illustration,text}: {header: string, headerColor: string, illustration: string, text: string}) {
    return (
        <div className="h-[360px] lg:h-auto bg-white flex flex-col p-[24px] w-full">
            <div className="flex items-center h-[36px] w-fit uppercase px-[16px] py-[8px] text-white" style={{background: headerColor}}>{header}</div>
            <p className="my-auto text-center">illustration</p>
            <p className="sm:w-[314px] font-regular text-sm text-neutral-700">{text}</p>
        </div>
    )
}