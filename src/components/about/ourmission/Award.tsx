export default function Award({placement,text,subtext,image}: {placement: string, text: string, subtext: string, image: string}) {
    return (
        // <div className="relative w-[12vw] h-[120px] p-[24px] flex flex-col items-center justify-center ">
        //     <img className="absolute top-0 left-0 w-full h-full pointer-events-none" src={`award.svg`} alt="award border"/>

        //     <p className="font-regular text-[1vw] leading-[15px] text-[#787878] text-center -translate-y-2">{placement}</p>
        //     <p className="font-medium text-[1.2vw] w-[200%] leading-mg text-[#787878] text-center">{text}</p>
        //     <p className="font-regular text-[0.7vw] leading-sm text-[#787878] text-center" dangerouslySetInnerHTML={{__html: subtext}}></p>
        // </div>

        <img src={`awards/${image}`} alt={`award: ${placement} - ${text} - ${subtext}`} className="w-[40%] sm:w-[205px] xl:w-[11vw] xl:h-[6.5vw]"></img>
    )
}