
"use client"
import { useEffect, useRef, useState } from "react";
import Video from "../../common/Video";
import SaygoodbyeText from "./SaygoodbyeText";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import PlayVideoButton from "@/components/common/PlayVideoButton";
gsap.registerPlugin(ScrollTrigger);

export default function Saygoodbye({setStickyKey}: {setStickyKey: any}) {
    const videoRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const smallPlayBtnRef = useRef<HTMLDivElement>(null);
    const largePlayBtnRef = useRef<HTMLDivElement>(null);
    const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    const createSizeTimeline = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "10% 30%",
          end: "35% 30%",
          scrub: true,
        }
      });

      tl.fromTo(videoRef.current, {
        width: "100%",
        height: 600
      },{
        width: 300,
        height: 200,
        ease: "power4.out",
        duration: 1,
        onComplete: () => {
          setStickyKey(1);
        }
      }, 0)

      return tl
    }

    const createButtonTimeline = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "15% 30%",
          end: "20% 30%",
          scrub: true,
        }
      });

      tl.fromTo(smallPlayBtnRef.current, {
        opacity: 0,
      },{
        opacity: 1,
        ease: "power4.out",
        duration: 0.01,
      }, 0)

      tl.fromTo(largePlayBtnRef.current, {
        opacity: 1,
      },{
        opacity: 0,
        ease: "power4.out",
        duration: 0.01,
      }, 0)

      return tl
    }
    
      

    useGSAP(() => {
        let tl = createSizeTimeline();
        let btnTl = createButtonTimeline();

        let resizeTimeout: ReturnType<typeof setTimeout> | null = null;

        const handleResize = () => {
          if (resizeTimeout) clearTimeout(resizeTimeout);

          resizeTimeout = setTimeout(() => {
            tl.revert();
            btnTl.revert();
            requestAnimationFrame(() => {
              videoRef.current.style.height = "600px"
              ScrollTrigger.refresh();
              tl = createSizeTimeline();
              btnTl = createButtonTimeline();
            });
          }, 100);
        };


        window.addEventListener("resize", handleResize);

        return () => {
          window.removeEventListener("resize", handleResize);
        }

      }, [windowWidth]);

    return (
        <div ref={wrapperRef} className="relative md:px-[80px] px-[20px] pb-[120px] bg-onyx-500">
            <div className="absolute top-0 left-0 w-full h-[100px] bg-white z-0"></div>

              <div className="block xxl:hidden h-[460px] md:h-[600px] w-full mb-[80px]">
                <Video name="Guy Guy" role="Head of Global Technology, Procter and Gamble" showWatchVideo={false} buttonColor="primary" buttonSize="large"/>
              </div>

              <div className="hidden xxl:block h-[600px] w-full mb-[80px] xxl:sticky xxl:top-[150px]" ref={videoRef}>
                <div className="min-h-full w-[100%] bg-[url('/videoplaceholder.png')] bg-cover bg-center relative">

                 {/* big player */}
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

                {/* small player */}
                <div ref={smallPlayBtnRef} className="opacity-0 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                  <PlayVideoButton size={"large"} color={"primary"} />
                </div>

            </div>


            </div>
            <SaygoodbyeText />
        </div>
    )
}