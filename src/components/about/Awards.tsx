import Heading from "@/components/common/Heading";
import Award from "./Award";
import { useFadeInStagger } from "@/hooks/useFadeInStagger";
import { useRef } from "react";

const data = [
    {
        placement: "Winner",
        text: "Alan Turing",
        subtext: "Development Award",
        image: "alan-turing.png"
    },
    {
        placement: "1st Place",
        text: "NeurIPS",
        subtext: "Robust Model Track",
        image: "neurips1.png"
    },
    {
        placement: "1st Place",
        text: "NeurIPS",
        subtext: "Targeted Attacks Track",
        image: "neurips2.png"
    },
    {
        placement: "1st Place",
        text: "CVPR",
        subtext: "Security AI Challenge",
        image: "cvpr.png"
    },
    {
        placement: "1st Place",
        text: "Google",
        subtext: "Adversarial Challenge",
        image: "google1.png"
    },
    {
        placement: "Winner",
        text: "Google",
        subtext: "Cloud Security Award",
        image: "google2.png"
    },
    {
        placement: "Winner",
        text: "Meta’s",
        subtext: "AI4AI Award",
        image: "metas.png"
    },
    {
        placement: "10 Time+",
        text: "ICML",
        subtext: "Acceptance Submission",
        image: "icml.png"
    },
    {
        placement: "20 Time+",
        text: "IEEE",
        subtext: "Acceptance Submission",
        image: "ieee.png"
    },
    {
        placement: "15 Time+",
        text: "Area Chair",
        subtext: "for ML Committee, for TCS",
        image: "area-chair.png"
    },
    {
        placement: "3 Time",
        text: "ICLR",
        subtext: "Acceptance Submission",
        image: "iclr.png"
    },
    {
        placement: "Top 0.002%",
        text: "Github",
        subtext: "Stars Ranking for Open Source",
        image: "github.png"
    },
    {
        placement: "Winner",
        text: "Norton",
        subtext: "Fellowship Program Award",
        image: "norton.png"
    },
    {
        placement: "Winner",
        text: "WiSE Merit",
        subtext: "Postdoctural Ethereum L2s",
        image: "wise-merit.png"
    },
    {
        placement: "Accepted",
        text: "ACM CCS",
        subtext: "Zero Knowledge Deep Learning",
        image: "acm-ccs.png"
    },
    {
        placement: "Winner",
        text: "Embassy",
        subtext: "of Italy Award for Best Eng Research",
        image: "embassy.png"
    },
    {
        placement: "Winner",
        text: "Baidu",
        subtext: "PhD Scholar Award in AI",
        image: "baidu.png"
    },
    {
        placement: "Winner",
        text: "Nature Science",
        subtext: "10 Notable Advances Honor",
        image: "nature-science.png"
    },
    {
        placement: "NAMED",
        text: "MIT EECS",
        subtext: "Rising Stars Honor",
        image: "mit-eecs.png"
    },
    {
        placement: "2x",
        text: "AAAI",
        subtext: "New Faculty Highlights Honor",
        image: "aaai.png"
    },
    {
        placement: "Winner",
        text: "MIT-Takeda",
        subtext: "Fellowship PhD Award",
        image: "mit-takeda.png"
    },
    {
        placement: "Winner",
        text: "World AI WAICO",
        subtext: "Rising Stars in AI Yunfan Award",
        image: "world-ai-waico.png"
    },
]

export default function Awards() {
    const cardsRef = useRef<HTMLDivElement[]>([])
    useFadeInStagger(cardsRef);

    return (
        <div className="px-[24px] sm:px-[80px] pt-[48px] pb-[48px] sm:pb-[120px] bg-white">
            <Heading className="font-regular text-h4 leading-h4 sm:text-h3 sm:leading-h3 xl:text-h2 xl:leading-h2 text-neutral-800 mb-[50px] text-center">Award winning AI research</Heading>

            <div className="hidden w-full items-center justify-center xl:flex flex-col gap-[4vw] flex-wrap">
 
                <div ref={el => cardsRef.current[0] = el} className="flex gap-[3vw] flex-wrap items-center justify-center">
                {data.slice(0,5).map((item, index) => (
                <Award key={index} image={item.image} placement={item.placement} text={item.text} subtext={item.subtext} />
                ))}
                </div>

                <div ref={el => cardsRef.current[1] = el} className="flex gap-[3vw] flex-wrap items-center justify-center">
                {data.slice(5,11).map((item, index) => (
                <Award key={index} image={item.image} placement={item.placement} text={item.text} subtext={item.subtext} />
                ))}
                </div>

                <div ref={el => cardsRef.current[2] = el} className="flex gap-[3vw] flex-wrap items-center justify-center">
                {data.slice(11,16).map((item, index) => (
                <Award key={index} image={item.image} placement={item.placement} text={item.text} subtext={item.subtext} />
                ))}
                </div>

                <div ref={el => cardsRef.current[3] = el} className="flex gap-[3vw] flex-wrap items-center justify-center">
                {data.slice(16,22).map((item, index) => (
                <Award key={index} image={item.image} placement={item.placement} text={item.text} subtext={item.subtext} />
                ))}
                </div>
            </div>


            <div className="flex w-full items-center justify-center xl:hidden flex-row flex-wrap gap-x-[24px] gap-y-[32px] sm:gap-[48px]">
                {data.map((item, index) => (
                <Award key={index} image={item.image} placement={item.placement} text={item.text} subtext={item.subtext} />
                ))}
            </div>
        </div>
    )
}