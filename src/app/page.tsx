"use client"
import Encrypt from "@/components/landing/encrypt/Encrypt";
import Explore from "@/components/landing/explore/Explore";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/landing/hero/Hero";
import Highlights from "@/components/landing/highlights/Highlights";
import Privacy from "@/components/landing/privacy/Privacy";
import Saygoodbye from "@/components/landing/saygoodbye/Saygoodbye";
import Testiomonials from "@/components/common/Testimonials";
import TrustedBy from "@/components/landing/trustedby/TrustedBy";
import ZeroSwitch from "@/components/landing/zeroswitch/ZeroSwitch";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  // needed to rerender the components below the sticky section, to readjust scrolltriggers due to layout shift
  const [stickyKey, setStickyKey] = useState(0); 

  return (
    <>
    <main className="w-full h-full">
      <Hero />
      <TrustedBy />
      <Saygoodbye setStickyKey={setStickyKey}/>

      <div key={stickyKey}>
        <Highlights setStickyKey={setStickyKey}/>
        <ZeroSwitch />
        <Encrypt />
        <Privacy />
        <Explore />
        <div className="section-padding"><Testiomonials color="black" /></div>
      </div>

    </main>
    <div key={stickyKey}>
        <Footer />
    </div>
    </>
  );
}
