"use client"
import Head from "@/components/common/Head";
import JoinOnyx from "@/components/common/joinonyx/JoinOnyx";
import ContactForm from "@/components/contact/ContactForm";
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
        
        <main className="w-full h-full bg-white">
            <Head label="CONTACT" subtext="">
                <span>Get in Touch</span>
            </Head>

            <div className="px-[24px] sm:px-[80px] py-[48px]">
                
                <div className="flex flex-col lg:flex-row lg:justify-between mb-[32px]">

                    <a className="group cursor-pointer flex gap-[24px] hover:opacity-50 transition-colors duration-150">
                        <p className={`font-regular text-neutral-800  text-h5 leading-h5 sm:text-h4 sm:leading-h4 xl:text-h3 xl:leading-h3 underline`}>onyx@protocol.com</p>
                        <div className="sm:scale-150 xl:scale-220 sm:translate-x-5 flex min-w-[27px] max-w-[27px] gap-[12px] overflow-hidden">
                            <img src="arrow.svg" alt="arrow" className={`transition duration-300 ease-in-out -translate-x-[39px] group-hover:translate-x-0 min-w-[27px] invert`}/>
                            <img src="arrow.svg" alt="arrow" className={`transition duration-300 ease-in-out -translate-x-[39px] group-hover:translate-x-0 min-w-[27px] invert`}/>
                        </div>
                    </a>

                    <a className="group lg:-translate-x-7 xl:-translate-x-11 cursor-pointer flex gap-[24px] hover:opacity-50 transition-colors duration-150">
                        <p className={`font-regular text-neutral-800 text-h5 leading-h5 sm:text-h4 sm:leading-h4 xl:text-h3 xl:leading-h3 underline`}>Follow us on X</p>
                        <div className="sm:scale-150 xl:scale-220 sm:translate-x-5 flex min-w-[27px] max-w-[27px] gap-[12px] overflow-hidden">
                            <img src="arrow.svg" alt="arrow" className={`transition duration-300 ease-in-out -translate-x-[39px] group-hover:translate-x-0 min-w-[27px] invert`}/>
                            <img src="arrow.svg" alt="arrow" className={`transition duration-300 ease-in-out -translate-x-[39px] group-hover:translate-x-0 min-w-[27px] invert`}/>
                        </div>
                    </a>

                </div>

                <ContactForm />
            </div>

            <JoinOnyx />
        </main>
        <Footer />
        </>
    )
}