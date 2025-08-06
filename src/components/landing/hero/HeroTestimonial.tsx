"use client"
import TestimonialCard from "../../common/TestimonialCard"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


const data = [
    {
        text: "With Onyx, we now have peace of mind across the company with full AI privacy for the millions of people who we serve monthly.",
        name: "Jeffrey Lee",
        image: "2.png",
        role: "CEO of Hume Health"
    },
    {
        text: "Onyx is the gold standard for privacy in AI. We are encrypting all of our AI inference to ensure the highest level of security and privacy.",
        name: "Bob Gourley",
        image: "1.png",
        role: "Former CTO of the US Defense Intelligence Agency"
    },
    {
        text: "We are very impressed with Equivariant Encryption at Google. Onyx has the potential to reinvent how companies handle their AI infrastructure.",
        name: "Dr. Jay Tu",
        image: "3.png",
        role: "Scientist at Google Research"
    }
]

export default function HeroTestimonial() {
    useGSAP(() => {
        gsap.set("[data-gsap='hero-testimonial']", {opacity: 0})
    },[])

    return (
        <div data-gsap="hero-testimonial">
        <div className="hidden xl:grid xl:grid-cols-2 xl:grid-rows-2 xxl:w-[641px] xxl:h-[579px] translate-y-5">
            <div></div>
            {data.map((item,index) => (
                <TestimonialCard key={index} transform={true} text={item.text} name={item.name} image={item.image} role={item.role} index={index} border theme="black"/>
            ))}
        </div>

        <div className="block xl:hidden">
        <Swiper
                modules={[Navigation,Autoplay]}
                slidesPerView={1.1}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    1024: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                    },
                    0: {
                    slidesPerView: 1.1,
                    spaceBetween: 0,
                    },
                }}
                loop
                spaceBetween={0} 
                wrapperClass="!overflow-visible"
                className="!min-h-full !overflow-visible"
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index} className="!h-auto">
                            <div className="!h-full w-full">
                                <TestimonialCard
                                    border
                                    text={item.text}
                                    name={item.name}
                                    image={item.image}
                                    role={item.role}
                                    index={index}
                                    theme="black"
                                />
                            </div>
                        </SwiperSlide>
                    ))}

            </Swiper>     
        </div>
        </div>
    )
}