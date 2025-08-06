import Button from "@/components/common/Button";

export default function PrivacyCard({image,header,subheader,text,button}: {image: string, header: string, subheader: string, text: string, button: string}) {
    return (
        <div className="flex flex-col gap-[48px] font-regular border border-black w-full">
            <div className="bg-gray-200 min-h-[308px]"></div>
            <div className="flex flex-col h-full px-[24px] pb-[24px] sm:px-[48px] sm:pb-[48px]">
                <p className="text-h4 leading-h4 sm:text-h3 sm:leading-h3 text-neutral-800 mb-[16px]">{header}</p>
                <p className="text-h5 leading-h5 text-neutral-800">{subheader}</p>
                <p className="text-md leading-md sm:text-lg sm:leading-lg text-neutral-700 my-[32px]">{text}</p>

                <Button variant="black">{button}</Button>
            </div>
        </div>
    )
}