import Encrypt from "@/components/encrypt/Encrypt";
import Explore from "@/components/explore/Explore";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Highlights from "@/components/highlights/Highlights";
import Privacy from "@/components/privacy/Privacy";
import Saygoodbye from "@/components/saygoodbye/Saygoodbye";
import Testiomonials from "@/components/testimonials/Testimonials";
import TrustedBy from "@/components/trustedby/TrustedBy";
import ZeroSwitch from "@/components/zeroswitch/ZeroSwitch";
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
