import Encrypt from "@/components/landing/encrypt/Encrypt";
import Explore from "@/components/landing/explore/Explore";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/landing/hero/Hero";
import Highlights from "@/components/landing/highlights/Highlights";
import Privacy from "@/components/landing/privacy/Privacy";
import Saygoodbye from "@/components/landing/saygoodbye/Saygoodbye";
import Testiomonials from "@/components/landing/testimonials/Testimonials";
import TrustedBy from "@/components/landing/trustedby/TrustedBy";
import ZeroSwitch from "@/components/landing/zeroswitch/ZeroSwitch";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <main className="w-full h-full">
      <Hero />
      <TrustedBy />
      <Saygoodbye />
      <Highlights />
      <ZeroSwitch />
      <Encrypt />
      <Privacy />
      <Explore />
      <Testiomonials />
    </main>
    <Footer />
    </>
  );
}
