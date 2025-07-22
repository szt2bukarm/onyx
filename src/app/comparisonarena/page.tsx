import Head from "@/components/common/Head";
import JoinOnyx from "@/components/common/joinonyx/JoinOnyx";
import AttackVectors from "@/components/comparisonarena/attackvectors/AttackVectors";
import Comparison from "@/components/comparisonarena/comparison/Comparison";
import ComparisonHeaderCards from "@/components/comparisonarena/comparisonheadercards/ComparisonHeaderCards";
import CryptographicProofs from "@/components/comparisonarena/cryptographicproofs/CryptographicProofs";
import Footer from "@/components/footer/Footer";

export default function Page() {
    return (
        <>
        <div className="w-full h-full bg-white">
            <Head label="Comparison Arena" subtext="Onyx is the most performant and most complete solution for practical and scalable privacy-preserving AI inference.">
                <span>How Onyx stacks up against the top privacy solutions</span>
            </Head>

            <ComparisonHeaderCards />
            <Comparison />
            <CryptographicProofs />
            <AttackVectors />
            <JoinOnyx />
        </div>
        <Footer />
        </>
    )
}