"use client"
import Video from "../common/Video"
import HighlightsCard from "./HighlightsCard"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);

const cards = [
    {
        icon: "iconplaceholder.png",
        text: "Use your own data, fully private to anyone but you",
        links: [
            {
                linktext: "Connect your data seamlessly",
                url: ""
            },
            {
                linktext: "Query your data with AI easily",
                url: ""
            }
        ]
    },
    {
        icon: "iconplaceholder.png",
        text: "A blazing fast API, under 1 second speeds",
        links: [
            {
                linktext: "See how Onyx achieves this",
                url: ""
            },
            {
                linktext: "See speed benchmarks",
                url: ""
            }
        ]
    },
    {
        icon: "iconplaceholder.png",
        text: "Works with every major AI model in the world",
        links: [
            {
                linktext: "See all models supported",
                url: ""
            },
            {
                linktext: "Process for custom trained models",
                url: ""
            }
        ]
    },    
]

export default function Highlights() {
    useGSAP(() => {
        gsap.set("[data-gsap='highlight-line-1']", {height: 0})
        gsap.set("[data-gsap='highlight-line-2']", {width: 0})
        let trigger = ScrollTrigger.create({
            trigger: "[data-gsap='highlight']",
            start: "top 50%",
            once: true,
            onEnter: () => {
                gsap.to("[data-gsap='highlight-line-1']", {height: "50%", duration: 1, ease: "out"})
                gsap.to("[data-gsap='highlight-line-2']", {width: "200%", duration: 1, ease: "out"})
            }
        })

        const handleResize = () => {
            trigger.refresh();
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])

    return (
        <div className="relative bg-creambg min-w-screen grid grid-cols-1 lg:grid-cols-2">
            {cards.map((card,index) => (
                <HighlightsCard key={card.text} index={index} icon={card.icon} text={card.text} links={card.links} />
            ))}
            <div className="p-[20px] sm:p-[48px] lg:pl-[24px] h-[500px] lg:h-full">
                <Video name="Guy Guy" role="Co-Founder and CEO, Hume Health" video="" showWatchVideo={false} buttonColor="primary" buttonSize="large"/>
            </div>
            <div data-gsap="highlight-line-1" className="hidden lg:block absolute top-0 left-[50%] translate-x-[-50%] w-[1px] h-[50%] bg-neutral-800"></div>
            <div data-gsap="highlight-line-2" className="hidden lg:block absolute top-[50%] left-[0%] translate-x-[-50%] w-full h-[1px] bg-neutral-800"></div>
        </div>
    )
}