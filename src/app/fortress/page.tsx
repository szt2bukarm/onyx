"use client"
import Head from "@/components/common/Head";
import LargeTextBox from "@/components/common/LargeTextBox";
import Video from "@/components/common/Video";
import Footer from "@/components/footer/Footer";
import BlindRag from "@/components/fortress/blindrag/BlindRag";
import Latency from "@/components/fortress/latency/Latency";
import NoSwitching from "@/components/fortress/noswitching/NoSwitching";
import SameAIModels from "@/components/fortress/sameaimodels/SameAIModels";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Page() {
    
    useEffect(() => {
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 200);
    }, []);

    return (
    <>
        <main className="w-full h-full bg-white">
            <Head label="ONYX FORTRESS" subtext="Onyx Fortress is the first cloud API that keeps your data and queries fully blind to anyone outside of your organization - even to your cloud provider.">
                <span>The most complete privacy in the world for your AI activity.</span>
                <span className="text-onyx-500">Your cloud provider sees nothing.</span>
            </Head>

            <div className="flex flex-col gap-[80px] px-[20px] sm:px-[80px] pb-[80px] md:pb-[120px] pt-[80px] sm:pt-[120px]">
                <LargeTextBox label="WHAT IS FORTRESS">
                    <p className="mb-[40px]"><span className="text-onyx-500">Onyx Fortress</span> is end-to-end encryption of your AI activity, visible to no one but you.</p>
                    <br></br>
                    <p>Powered by a breakthrough technology <b>Homomorphic Secret Sharing Equivariant Encryption (HSS-EE)</b>.</p>
                </LargeTextBox>
                <div className="flex flex-col lg:flex-row gap-[20px]">
                    <img src="fortressScreenshots/1.png" className="w-full lg:w-[calc(50%-10px)] rounded-[16px]" />
                    <img src="fortressScreenshots/2.png" className="w-full lg:w-[calc(50%-10px)] rounded-[16px]" />
                </div>
            </div>

            <Latency />

            <div className="h-[600px] w-full">
                <Video name="Guy Guy" role="2022-2024 Minister of Govenrment of Ontario" showWatchVideo buttonColor="primary" buttonSize="small">
                <div className="absolute top-0 left-0 md:relative p-[24px] md:p-0 text-white w-full">
                    <p className="font-regular xl:w-[50%] text-h4 leading-h4 md:text-h2 md:leading-h2">Why HSS-EE, the technology behind Onyx Fortress is a revolution</p>
                </div>
                </Video>
            </div>

            <SameAIModels />
            <NoSwitching />
            <BlindRag />
        </main>

        <div className="pt-[80px] px-[20px] sm:px-[80px] bg-neutral-800">
            <p className="font-regular text-h4 leading-h4 sm:text-h2 sm:leading-h2 text-white tracking-[-1px] pb-[48px]">Get Onyx Fortress now</p>
        </div>
        <Footer />
    </>
    )
}