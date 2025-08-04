"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Heading from "../../common/Heading"
import TestimonialCard from "../../common/TestimonialCard"

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
    },
    {
        text: "We are very impressed with Equivariant Encryption at Google. Onyx has the potential to reinvent how companies handle their AI infrastructure.",
        name: "Dr. Jay Tu",
        image: "3.png",
        role: "Scientist at Google Research"
    }
]

export default function Testimonials() {
    return (
        <div className="section-padding bg-neutral-800">
            <Heading className="font-regular text-mobileheading leading-mobileheading sm:text-h3 sm:leading-h3 xl:text-h2 xl:leading-h2 text-white mb-[48px]">
                What our users say
            </Heading>

            <div className="min-h-[290px] mb-[24px]">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    slidesPerView={1}
                    loop
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false
                    }}
                    breakpoints={{
                        1440: {
                            slidesPerView: 3,
                        },
                        974: {
                            slidesPerView: 2,
                        },
                    }}
                    navigation={{
                        nextEl: ".swiper-next",
                        prevEl: ".swiper-prev"
                    }}
                    className="!min-h-full mb-[24px]"
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index} className="!h-auto">
                            <div className="!h-full w-full">
                                <TestimonialCard
                                    scaled
                                    thickBorder
                                    text={item.text}
                                    name={item.name}
                                    image={item.image}
                                    role={item.role}
                                    index={index}
                                    border
                                    theme="black"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="flex justify-between">
                <button className="swiper-prev group cursor-pointer h-[36px] transition duration-150 w-fit flex items-center px-[16px] py-[8px] border border-white/50 hover:bg-white">
                    <img src="arrow.svg" alt="arrow" className="w-[27px] rotate-180 transition duration-150 group-hover:invert" />
                </button>
                <button className="swiper-next group cursor-pointer h-[36px] transition duration-150 w-fit flex items-center px-[16px] py-[8px] border border-white/50 hover:bg-white">
                    <img src="arrow.svg" alt="arrow" className="w-[27px] transition duration-150 group-hover:invert" />
                </button>
            </div>
        </div>
    )
}
