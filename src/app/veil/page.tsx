import Head from "@/components/common/Head";
import Footer from "@/components/footer/Footer";
import EarlyAccessForm from "@/components/common/joinonyx/EarlyAccessForm";
import FeatureList from "@/components/veil/featurelistveil/FeatureListVeil";
import Guardrails from "@/components/veil/guardrails/Guardrails";
import Protects from "@/components/veil/protects/protects";
import SecureAI from "@/components/common/joinonyx/SecureAI";
import JoinOnyx from "@/components/common/joinonyx/JoinOnyx";

export default function Page() {
    return (
    <>
        <main className="w-full h-full bg-white">
            <Head label="ONYX VEIL" subtext="Onyx Veil prevents threats and transforms identifying information from your prompts before sending them to centralized AI’s like ChatGPT.">
                <span>If you use centralized AI, stay protected with Veil.</span>
            </Head>

            <Protects />
            <FeatureList />
            <Guardrails />

            <JoinOnyx />
        </main>

        <div className="pt-[80px] px-[20px] sm:px-[80px] bg-neutral-800">
            <p className="font-regular text-h4 leading-h4 sm:text-h2 sm:leading-h2 text-white tracking-[-1px] pb-[48px]">Get Onyx Veil now</p>
        </div>
        <Footer />
    </>
    )
}