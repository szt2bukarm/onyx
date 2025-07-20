import Head from "@/components/common/Head";
import Footer from "@/components/footer/Footer";
import EarlyAccessForm from "@/components/veil/earlyaccessform/EarlyAccessForm";
import FeatureList from "@/components/veil/featurelist/FeatureList";
import Guardrails from "@/components/veil/guardrails/Guardrails";
import Protects from "@/components/veil/protects/protects";
import SecureAI from "@/components/veil/secureai/SecureAI";

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

            <div className="px-[20px] sm:pl-[80px] sm:pr-[80px] xl:pr-[128px] bg-neutral-800 flex flex-col xl:flex-row justify-between">
                <SecureAI />
                <EarlyAccessForm />
            </div>
        </main>

        <div className="pt-[80px] px-[20px] sm:px-[80px] bg-neutral-800">
            <p className="font-regular text-h4 leading-h4 sm:text-h2 sm:leading-h2 text-white tracking-[-1px] pb-[48px]">Get Onyx Veil now</p>
        </div>
        <Footer />
    </>
    )
}