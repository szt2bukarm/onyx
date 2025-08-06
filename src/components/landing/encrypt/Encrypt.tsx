"use client"
import InlineLink from "../../common/InlineLink";
import EncryptCard from "./EncryptCard";
import PlayVideoButton from "../../common/PlayVideoButton";
import Heading from "../../common/Heading";

export default function Encrypt() {

    return (
        <div className="min-w-full bg-creambg section-padding">
            <div className="flex flex-col lg:flex-row justify-between gap-[32px] lg:gap-[64px]">
                <div className="w-full lg:w-[840px] h-full">
                    <Heading className="font-regular text-mobileheading leading-mobileheading sm:text-h3 sm:leading-h3 xl:text-h2 xl:leading-h2 text-neutral-800 mb-[24px]">Understanding the breakthrough technology behind Onyx: <b>Equivariant Encryption (EE).</b></Heading>
                    <p className="font-regular text-lg leading-lg text-neutral-800">EE is a unique fusion of Homomorphic Encryption and MPC Privacy.</p>
                </div>
                <div className="w-full md:max-w-[680px] flex flex-col">
                    <div className="flex bg-white sm:h-[128px] sm:justify-between flex-col sm:flex-row p-[24px]">
                        <div className="flex gap-[16px] items-center mb-[24px] sm:mb-0 ">
                            <img src="3.png" className="w-[48px] h-[48px]" />
                            <div className="flex flex-col sm:pr-[16px] ">
                                <p className="text-md leading-md text-black font-medium">Guy Guy</p>
                                <p className="text-sm leading-sm text-black font-regular">CEO of Pinscreen, Professor MBZUAI</p>
                            </div>
                        </div>
                        <PlayVideoButton size="large" color="cream" />
                    </div>
                    <div className="mt-10 lg:mt-auto flex flex-col gap-[24px]">
                        <InlineLink>Audited by the best (Attacks)</InlineLink>
                        <InlineLink>Quantum proof (Google Willow)</InlineLink>
                    </div>
                </div>
            </div>

            <div className="flex gap-[24px] flex-col lg:flex-row mt-[80px]">
                <EncryptCard header="competition" headerColor="#000" text="Show how all others only keep data encrypted at rest and transit, but fully reveal it in plain text at point of inference." illustration="landing/vanilla-model-inference.webp"/>
                <EncryptCard header="onyx" headerColor="#FF4A40" text="Show how we keep data encrypted at points of rest, transit AND fully encrypted still at point of inference" illustration="landing/ee.webp"/>
            </div>
        </div>
    )
}