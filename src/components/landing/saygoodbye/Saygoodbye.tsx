"use client"
import { useRef } from "react";
import Video from "../../common/Video";
import SaygoodbyeText from "./SaygoodbyeText";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import PlayVideoButton from "@/components/common/PlayVideoButton";
gsap.registerPlugin(ScrollTrigger);

export default function Saygoodbye({setStickyKey}: {setStickyKey: any}) {
    const videoRef = useRef<HTMLDivElement>(null);
    const smallPlayBtnRef = useRef<HTMLDivElement>(null);
    const largePlayBtnRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to(videoRef.current, {
          ease: "none",
          position: "sticky",
          top: "150",
          scrollTrigger: {
            trigger: videoRef.current,
            start: "top 30%",
            end: "bottom 30%",
            // scrub: true,
            // markers: true
          }
        });

        gsap.to(videoRef.current, {
          width: 300,
          height: 180,
          ease: "none",
          scrollTrigger: {
            trigger: videoRef.current,
            start: "15% 30%",
            end: "35% 30%",
            scrub: true,
            // markers: true
          },
          onComplete: () => {
            setStickyKey(1);
          }
        })

        gsap.to(largePlayBtnRef.current, {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: videoRef.current,
            start: "20% 30%",
            end: "22% 30%",
            scrub: true,
            // markers: true
          }
        })

        gsap.to(smallPlayBtnRef.current, {
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: videoRef.current,
            start: "20% 30%",
            end: "22% 30%",
            scrub: true,
            // markers: true
          }
        })

      }, []);

    return (
        <div className="relative sm:px-[80px] px-[20px] pb-[120px] bg-onyx-500">
            <div className="absolute top-0 left-0 w-full h-[100px] bg-white z-0"></div>

              <div className="h-[600px] mb-[80px]" ref={videoRef}>
                <div className="min-h-full w-full bg-[url('/videoplaceholder.png')] bg-cover bg-center relative">

                <div ref={largePlayBtnRef} className="absolute bottom-0 p-[40px] w-full flex justify-between">
                    <div className="mr-0 md:mr-[24px]">
                        <PlayVideoButton size={"large"} color={"primary"} />
                    </div>
                    <div className="flex items-center gap-[16px]">
                        <img src="3.png" className="w-[48px] h-[48px]" />
                        <div className="flex flex-col">
                            <p className="text-md leading-md text-white font-medium">Guy Guy</p>
                            <p className="text-sm leading-sm text-neutral-100 font-regular">Head of Global Technology, Procter and Gamble</p>
                        </div>
                    </div>
                </div>

                <div ref={smallPlayBtnRef} className="opacity-0 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                  <PlayVideoButton size={"large"} color={"primary"} />
                </div>

            </div>


            </div>
            <SaygoodbyeText />
        </div>
    )
}