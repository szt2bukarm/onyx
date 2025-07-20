import Head from "@/components/common/Head";
import LargeTextBox from "@/components/common/LargeTextBox";
import DataLeaks from "@/components/firewall/dataleaks/DataLeaks";
import NoSwitchingCost from "@/components/firewall/noswitchingcost/NoSwitchingCost";
import Trusted from "@/components/firewall/trusted/Trusted";
import Footer from "@/components/footer/Footer";

export default function Page() {
    return (
        <>
        <main className="w-full h-full bg-white">
            <Head label="ONYX FIREWALL" subtext="Onyx Firewall, powered by the breakthrough privacy technology Equivariant Encryption, gives you total peace of mind.">
                <span>Keep your AI queries encrypted.</span>
                <span className="text-onyx-500">Protect your data.</span>
            </Head>
            <DataLeaks />
            <NoSwitchingCost />
            <div className="px-[20px] sm:px-[80px] pb-[120px]">
                <LargeTextBox label="FOR LARGE TEAMS" links={["See the research", "See the security proofs"]}>

                    <p className="mb-[40px]"><span className="text-onyx-500">Onyx Firewall</span> also greatly simplifies your AI/ML team’s internal access headaches. Forget about complex access controls for your personnel across many different cloud accounts.
                    </p>

                    <b>Keep your data private company-wide and still query it.</b>
        
                </LargeTextBox>
            </div>
            <Trusted />
        </main>

        <div className="pt-[80px] px-[20px] sm:px-[80px] bg-neutral-800">
            <p className="font-regular text-h4 leading-h4 sm:text-h2 sm:leading-h2 text-white tracking-[-1px] pb-[48px]">Get Onyx Firewall now</p>
        </div>
        <Footer />
        </>
    )
}