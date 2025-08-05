import Heading from "@/components/common/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


export default function KeepsYouSafe() {
    return (
        <div className="section-padding bg-white sm:!pb-[80px] flex flex-col gap-[40px] sm:gap-[80px]">

        <div className="flex flex-col lg:flex-row justify-between">
            <Heading className="font-regular text-mobileheading leading-mobileheading sm:text-h3 sm:leading-h3 xl:text-h2 xl:leading-h2 text-neutral-800 mb-[8px] lg:mb-0 ">How Onyx Firewall keeps you safe</Heading>
            <p className="font-regular text-lg leading-lg text-neutral-700 lg:w-[640px] lg:pl-[100px]">Onyx Firewall encrypts your inputs before they ever reach the server. Once they arrive, your data stays encrypted the entire time - even during AI model inference.<br></br><br></br>
            <span className="underline font-bold">You receive an encrypted response back, and only you can see your data.</span></p>
        </div>

        <img src="firewall/firewall-stages.webp" className="w-full" />

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
                <Zoom classDialog="custom-zoom">
                    <div className="rounded-[8px] md:rounded-[16px] overflow-hidden">
                        <img
                        src="fortress/fortressScreenshots/1.png"
                        className="w-full object-cover"
                        />
                    </div>
                </Zoom>
                </SwiperSlide>
            <SwiperSlide>
                <Zoom classDialog="custom-zoom">
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

    )
}