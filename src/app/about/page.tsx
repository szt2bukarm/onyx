import Awards from "@/components/about/ourmission/Awards";
import LeadershipTeam from "@/components/about/ourmission/LeadershipTeam";
import OurMission from "@/components/about/ourmission/OurMission";
import Head from "@/components/common/Head";
import JoinOnyx from "@/components/common/joinonyx/JoinOnyx";
import Footer from "@/components/footer/Footer";

export default function About() {
    return (
        <>
            <main className="w-full h-full bg-white">

                <Head label="OUR STORY" subtext="">
                    <span>The Nesa Team</span>
                </Head>

                <OurMission />
                <LeadershipTeam />
                <Awards />
                <JoinOnyx />
            </main>
            <Footer />
        </>
    )
}