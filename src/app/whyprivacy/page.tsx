import Head from "@/components/common/Head";
import Heading from "@/components/common/Heading";
import JoinOnyx from "@/components/common/joinonyx/JoinOnyx";
import Footer from "@/components/footer/Footer";
import Defend from "@/components/whyprivacy/defend/Defend";
import FeatureListWhyPrivacy from "@/components/whyprivacy/featurelistwhyprivacy/FeatureListWhyPrivacy";
import RecentBreaches from "@/components/whyprivacy/recentbreaches/RecentBreaches";
import OnyxEliminates from "@/components/whyprivacy/risk/OnyxEliminates";
import RiskCard from "@/components/whyprivacy/risk/RIskCard";
import Streamline from "@/components/whyprivacy/streamline/Streamline";
import Upgrade from "@/components/whyprivacy/upgrade/Upgrade";
import WhyPrivacyStockVideo from "@/components/whyprivacy/whyprivacystockvideo/WhyPrivacyStockVideo";

export default function WhyPrivacy() {
    return (
        <>
        
        <main className="w-full h-full bg-white">
            <Head label="PRIVACY OVER EVERYTHING" subtext="AI privacy keeps your business and customers safe.">
                <span>Privacy of your data is a critical part of your AI stack. Protect your most valuable resource.</span>
            </Head>

            <FeatureListWhyPrivacy />

            <div className="px-[20px] sm:px-[80px] py-[120px] bg-creambg">
                <Heading className="font-regular text-h4 leading-h4 sm:text-h3 sm:leading-h3 xl:text-h2 xl:leading-h2 text-neutral-800 mb-[48px]">Minimize the Risk of Plaintext Exposure</Heading>

                <div className="flex flex-col xl:flex-row justify-between gap-[24px] xl:gap-[80px]">

                    <div className="flex flex-col gap-[8px] flex-1">
                        <RiskCard text="Beyond Standard TLS:" subtext="HTTPS/TLS protects data in transit but not during point of inference." />
                        <RiskCard text="Host-Level & Administrative Threats:" subtext="Host-level compromises or admin abuse can occur on the server-side plaintext steps at any time." />
                        <RiskCard text="IAM & VPN Vulnerabilities:" subtext="Attacks that rely on privileged credentials or misconfigurations can happen at any time." />
                        <RiskCard text="Side-Channel Attacks:" subtext="Advanced cryptographic side-channel attacks that rely on analyzing data in memory can happen any time." />
                    </div>

                    <OnyxEliminates />
                </div>
            </div>

            <Upgrade />
            <WhyPrivacyStockVideo />
            <Streamline />

            <div className="px-[20px] sm:px-[80px] py-[120px] bg-creambg">
                <Heading className="font-regular text-h4 leading-h4 sm:text-h3 sm:leading-h3 xl:text-h2 xl:leading-h2 text-neutral-800 mb-[48px]">Mitigate Insider Threats and Misconfigurations</Heading>

                <div className="flex flex-col xl:flex-row justify-between gap-[24px] xl:gap-[80px]">

                    <div className="flex flex-col gap-[8px] flex-1">
                        <RiskCard text="Concerns/ Reliance on “Trusted” Zones:" subtext="Your network boundaries, IAM permissions, or VPN setups can be compromised at any time." />
                        <RiskCard text="Plaintext Attack Surfaces:" subtext="The plaintext storage and processing phase opens a window where mistakes (e.g., misconfigured S3 buckets) can lead to damaging data exposure. " />
                    </div>

                    <OnyxEliminates />
                </div>
            </div>

            <Defend />
            <RecentBreaches />

            <JoinOnyx />
        </main>
        
        <Footer />
        </>
    )
}