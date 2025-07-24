"use client"
import { useRef } from "react";
import Video from "../../common/Video";
import SaygoodbyeText from "./SaygoodbyeText";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

export default function Saygoodbye() {
    const videoRef = useRef<HTMLDivElement>(null);

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
            markers: true
          }
        });

        gsap.to(videoRef.current, {
          width: 300,
          height: 250,
          ease: "none",
          scrollTrigger: {
            trigger: videoRef.current,
            start: "top 30%",
            end: "35% 30%",
            scrub: true,
            markers: true
          }
        })
      }, []);

    return (
        <div className="relative sm:px-[80px] px-[20px] pb-[120px] bg-onyx-500">
            <div className="absolute top-0 left-0 w-full h-[100px] bg-white z-0"></div>
            <div className="h-[600px] mb-[80px]" ref={videoRef}>
                <Video name="Guy Guy" role="Co-Founder and CEO, Hume Health" video="" showWatchVideo={false} buttonSize="large" buttonColor="primary"/>
            </div>
            <SaygoodbyeText />
        </div>
    )
}