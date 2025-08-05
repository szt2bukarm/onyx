"use client"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import PlayVideoButton from "./PlayVideoButton";
gsap.registerPlugin(ScrollTrigger);

export default function Video({name,role,video,showWatchVideo,buttonColor,buttonSize,children} : {name: string, role: string, video: string, showWatchVideo: boolean, buttonColor: string, buttonSize: string, children?: React.ReactNode}) {

    return (
        <div className={`flex flex-col min-h-full w-full bg-[url('/videoplaceholder.png')] bg-cover bg-center relative p-[20px] ${showWatchVideo ? 'items-center md:pb-[48px] md:px-[80px] pt-[120px]' : 'md:p-[40px] items-end'}`}>
            {children}
            <div className={`w-full flex justify-between mt-auto ${showWatchVideo ? 'items-center' : 'items-end'}`}>
                <div className="flex items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:translate-x-0 md:translate-y-0 md:top-0 md:left-0 md:relative">
                    <div className="mr-[24px]">
                        <PlayVideoButton size={buttonSize} color={buttonColor} />
                    </div>
                    {showWatchVideo && 
                        <p className="block font-regular text-white text-h5 leading-h5 md:mr-[24px]">Watch video</p>
                    }
                </div>
                <div className="flex items-center gap-[16px]">
                    <img src="3.png" className="w-[48px] h-[48px]" />
                    <div className="flex flex-col">
                        <p className="text-md leading-md text-white font-medium">{name}</p>
                        <p className="text-sm leading-sm text-neutral-100 font-regular">{role}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}