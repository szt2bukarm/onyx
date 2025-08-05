"use client"
import Head from "@/components/common/Head";
import JoinOnyx from "@/components/common/joinonyx/JoinOnyx";
import Footer from "@/components/footer/Footer";
import ResearchBigLinks from "@/components/research/ResearchBigLinks";
import ResearchGridLinks from "@/components/research/ResearchGridLinks";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Page() {
    const [selectedTag,setSelectedTag] = useState("All")
    
    useEffect(() => {
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 200);
    }, []);

    return (
        <>
            <main className="w-full h-full bg-white">
        
                <Head label="TECH RESEARCH" subtext="Our proprietary research in cryptography and AI. A small selection of papers authored by Nesa's founders.">
                    <span>Onyx Research</span>
                </Head>

                <ResearchBigLinks />
                <ResearchGridLinks selectedTag={selectedTag} setSelectedTag={setSelectedTag}/>
                <JoinOnyx />
            </main>

            <div key={selectedTag}>
                <Footer />
            </div>
        </>
    )
}