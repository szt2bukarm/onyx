"use client"
import { useRef, useState } from "react";
import {useLenis} from '@studio-freight/react-lenis'
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const data = [
    {
        image: "",
        text: "Make-a-video: Text-to-video generation without text-video data",
        subtext: "CORE RESEARCH - HARRY YANG, YUHANG SONG",
        tag: "Core Research",
        url: ""
    },
    {
        image: "",
        text: "Contextual-based image inpainting: Infer, match, and translate",
        subtext: "CORE RESEARCH - HARRY YANG, YUHANG SONG",
        tag: "",
        url: ""
    },
    {
        image: "",
        text: "Long video generation with time-agnostic vqgan and time-sensitive transformer",
        subtext: "CORE RESEARCH - HARRY YANG",
        tag: "",
        url: ""
    },
    {
        image: "",
        text: "Fintech borrowers: Lax screening or cream-skimming",
        subtext: "MACRO RESEARCH - MARCO DI MAGGIO",
        tag: "",
        url: ""
    },
    {
        image: "",
        text: "High-resolution image inpainting using multi-scale neural patch synthesis",
        subtext: "CORE RESEARCH - HARRY YANG",
        tag: "",
        url: ""
    },
    {
        image: "",
        text: "Invisible primes: Fintech lending with alternative data",
        subtext: "MACRO RESEARCH - MARCO DI MAGGIO",
        tag: "",
        url: ""
    },
    {
        image: "",
        text: "Spg-net: Segmentation prediction and guidance network for image inpainting",
        subtext: "CORE RESEARCH - HARRY YANG, YUHANG SONG",
        tag: "",
        url: ""
    },
    {
        image: "",
        text: "Latent-shift: Latent diffusion with temporal shift for efficient text-to-video generation",
        subtext: "CORE RESEARCH - HARRY YANG",
        tag: "",
        url: ""
    },
    {
        image: "",
        text: "Helix-1: The Large Language Model for Companion Intelligence",
        subtext: "CORE TECHNOLOGY OVERVIEW",
        tag: "Core Research",
        url: ""
    },
    {
        image: "",
        text: "Credit-induced boom and bust",
        subtext: "MACRO RESEARCH - MARCO DI MAGGIO",
        tag: "Core Research",
        url: ""
    },
    {
        image: "",
        text: "Shape inpainting using 3d generative adversarial network and recurrent convolutional networks",
        subtext: "CORE RESEARCH - HARRY YANG",
        tag: "Core Research",
        url: ""
    },
    {
        image: "",
        text: "Interest rate pass-through",
        subtext: "MACRO RESEARCH - MARCO DI MAGGIO",
        tag: "Core Research",
        url: ""
    },
    {
        image: "",
        text: "Realistic dynamic facial textures from a single image using gans",
        subtext: "CORE RESEARCH - HARRY YANG",
        tag: "Core Research",
        url: ""
    },
    {
        image: "",
        text: "The unintended consequences of the zero lower bound policy",
        subtext: "MACRO RESEARCH - MARCO DI MAGGIO",
        tag: "Core Research",
        url: ""
    },
    {
        image: "",
        text: "Ordinal regression with neuron stick-breaking",
        subtext: "CORE RESEARCH - HARRY YANG",
        tag: "Core Research",
        url: ""
    }
]

const tags = ["All","Core Research"]

export default function ResearchGridLinks({selectedTag,setSelectedTag} : {any}) {
    const cardsRef = useRef<HTMLDivElement[]>([])
    const scrollTargetRef = useRef<HTMLDivElement>(null)
    const lenis = useLenis();
    const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);
    const [mounted, setMounted] = useState(false); // needed to prevent automatic scrolling on inital render

    useGSAP(() => {
        if (!mounted) {
            setMounted(true);
            return;
        }

        if (scrollTargetRef.current && window.scrollY > scrollTargetRef.current.offsetTop) {
            lenis?.stop();
            setTimeout(() => {
                window.scrollTo(0, scrollTargetRef.current.offsetTop - (windowWidth > 768 ? 200 : 150))
                lenis?.start();
            }, 1);
        }

        try {
            gsap.set(cardsRef.current, {
                y: 50,
                opacity: 0
            })
    
            gsap.to(cardsRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.3,
                ease: "back.out(1.5)",
                stagger: 0.03,
                onComplete: () => {
                    requestAnimationFrame(() => {
                        ScrollTrigger.refresh();
                    })
                }
            })
        } catch (error) {
            
        }

    }, [selectedTag,mounted])



    return (
        <div className=" lg:px-[80px] pt-[48px] pb-[48px] sm:pb-[120px]">

            {/* tabs */}
            <div className="z-10 px-[20px] flex overflow-x-auto flex-wrap gap-[6px] h-min sticky top-[85px] lg:top-[95px] py-[20px] bg-white xl:top-[95px] mb-[32px]">
                {tags.map((tag, index) => (
                    <div 
                        key={index} 
                        className={`group transition duration-150 flex items-center cursor-pointer p-[12px] min-w-fit xl:w-fit ${tag === selectedTag ? "bg-onyx-500" : "bg-creambg hover:bg-black"} `} 
                        onClick={() => setSelectedTag(tag)}
                    >
                        <p className={`group-hover:text-white transition duration-150 font-regular text-sm leading-sm ${tag === selectedTag ? "text-white" : "text-neutral-700"}`}>
                            {tag}
                        </p>
                    </div>
                ))}
            </div>

            <div ref={scrollTargetRef}></div>

            {/* cards */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 ">

                {
                data
                .filter(card => selectedTag === "All" || card.tag === selectedTag)
                .map((card, index) => (                
                    <div key={`${index}-${selectedTag}`} ref={el => cardsRef.current[index] = el} className="group flex flex-col transition-colors duration-150 hover:bg-neutral-700 p-[20px] cursor-pointer">
                        <div className="h-[320px] bg-gray-500 mb-[20px]"></div>
                        <p className="group-hover:text-white transition duration-150 text-h5 leading-h5 text-neutral-800 font-regular mb-[8px]">{card.text}</p>
                        <p className="text-md leading-md text-onyx-500 font-regular">{card.subtext}</p>
                    </div>
                ))}

            </div>

        </div>

    )
}