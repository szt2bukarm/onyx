import Button from "../common/Button";

export default function FooterLinkCard({image,text,button} : {image: string, text: string, button: string}) {
    return (
        <div className="flex flex-col w-full h-full p-[24px] md:p-[48px] bg-neutral-700">
            <div className="h-[60px] w-[60px] bg-onyx-500 flex justify-center items-center mb-[24px]">
                <img src="logoletters/o-black.svg" alt="letter o from ONYX logo" className="h-[28px]" />
            </div>
            <div className="flex flex-col items-start justify-start xl:flex-row xl:justify-between xl:items-center">
                <p className="text-regular text-white text-h4 leading-h4 mb-5 xl:mb-0">{text}</p>
                <Button variant="white">{button}</Button>
            </div>
        </div>
    )
}