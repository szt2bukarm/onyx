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
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Testimonials from "@/components/common/Testimonials";
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
            <Head label="ONYX FORTRESS" subtext="Onyx Fortress is the first cloud API that keeps your data and queries fully blind to anyone outside of your organization - even to your cloud provider.">
                <span>The most complete privacy in the world for your AI activity.</span>
                <span className="text-onyx-500">Your cloud provider sees nothing.</span>
            </Head>

            <div className="flex flex-col gap-[80px] section-padding !overflow-visible">
                <img src="fortress/fortress-flow.webp" className="w-full" />
                <LargeTextBox label="WHAT IS FORTRESS">
                    <p className="mb-[40px]"><span className="text-onyx-500">Onyx Fortress</span> is end-to-end encryption of your AI activity, visible to no one but you.</p>
                    <br></br>
                    <p>Powered by a breakthrough technology <b>Homomorphic Secret Sharing Equivariant Encryption (HSS-EE)</b></p>
                </LargeTextBox>
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={1}
                    breakpoints={{
                        1440: {
                          slidesPerView: 2,
                          spaceBetween: 26,
                        },
                        0: {
                          slidesPerView: 1.03,
                          spaceBetween: 10,
                        },
                      }}
                    spaceBetween={20}
                    className="lg:!h-auto !w-full !overflow-visible"
                    wrapperClass="!overflow-visible"
                    >
                    <SwiperSlide>
                        <Zoom classDialog='custom-zoom'>
                            <div className="rounded-[8px] md:rounded-[16px] overflow-hidden">
                                <img
                                src="fortress/fortressScreenshots/1.png"
                                className="w-full object-cover"
                                />
                            </div>
                        </Zoom>
                      </SwiperSlide>
                    <SwiperSlide>
                        <Zoom classDialog='custom-zoom'>
                            <div className="rounded-[8px] md:rounded-[16px] overflow-hidden">
                                <img
                                src="fortress/fortressScreenshots/2.png"
                                className="w-full object-cover"
                                />
                            </div>
                        </Zoom>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="section-padding sm:!pt-[80px]"><Testimonials color="white" /></div>

            <Latency />

            <div className="h-[600px] w-full">
                <Video name="Guy Guy" role="2022-2024 Minister of Govenrment of Ontario" showWatchVideo buttonColor="primary" buttonSize="small">
                <div className="absolute top-0 left-0 md:relative p-[24px] md:p-0 text-white w-full">
                    <p className="font-regular xl:w-[50%] text-mobileheading leading-mobileheading md:text-h2 md:leading-h2">Why HSS-EE, the technology behind Onyx Fortress is a revolution</p>
                </div>
                </Video>
            </div>

            <SameAIModels />
            <NoSwitching />
            <BlindRag />
        </main>

        <div className="sm:pt-[80px] px-[20px] sm:px-[80px] bg-neutral-800">
            <p className="font-regular text-h4 leading-h4 sm:text-h2 sm:leading-h2 text-white tracking-[-1px] pb-[48px]">Get Onyx Fortress now</p>
        </div>
        <Footer />
    </>
    )
}