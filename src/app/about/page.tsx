"use client"
import Awards from "@/components/about/Awards";
import LeadershipTeam from "@/components/about/LeadershipTeam";
import OurMission from "@/components/about/ourmission/OurMission";
import Head from "@/components/common/Head";
import JoinOnyx from "@/components/common/joinonyx/JoinOnyx";
import Footer from "@/components/footer/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Page() {
    
    useEffect(() => {
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 200);
    }, []);

    return (
        <>
            <main className="w-full h-full bg-white overflow-x-hidden">

                <Head label="OUR STORY" subtext="">
                    <span>The Nesa Team</span>
                </Head>

                <OurMission />
                <LeadershipTeam />
                <Awards />
                <JoinOnyx />
            </main>
            <Footer />
        </>
    )
}