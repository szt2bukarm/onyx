import OurMissionNumbers from "./OurMissionNumbers";

export default function OurMission() {
    return (
        <div className="section-padding sm:!pb-[60px] flex flex-col gap-[64px]">

            {/* Our mission image + text */}
            <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[80px] h-fit overflow-hidden">
                
                <div className="lg:min-w-[35%] min-h-[500px] lg:min-h-fit bg-neutral-800 bg-cover bg-[url('/ourmission-bgimage.jpg')] bg-center">
                </div>

                <div className="flex flex-col gap-[56px]">

                    <div className="w-full">
                        <p className="font-regular text-h3 leading-h3 tracking-[-1px] text-neutral-800 mb-[32px]">Our Mission</p>
                        <p className="font-regular text-md leading-md text-neutral-700">Nesa is putting AI on-chain for our future. With AI on-chain, for the first time its performance can be legitimately tracked, verified and shared by all, and its output can be easily monitored, evaluated, and controlled.<br></br><br></br>People, companies, and the world need AI that is open and decentralized. Nesa merges privacy, security, verification and consensus via a proprietary end-to-end system that is simple to integrate into and lightning fast to query from. Nesa is the world's answer as AI grows ever ubiquitous in all of our lives.<br></br><br></br>Nesa means miracle. Our name is a tribute to the golden age of AI that we are living in. The logo of NES token is symbolic of the miracles that trusted AI will deliver for humanity, and a reminder of how advanced technology is truly indistinguishable to magic.</p>
                    </div>

                    <div className="w-full">
                        <p className="font-regular text-h3 leading-h3 tracking-[-1px] text-neutral-800 mb-[32px]">About Nesa</p>
                        <p className="font-regular text-md leading-md text-neutral-700">Nesa was created when a group of friends were working on a project that was using the industry's top centralized LLM to run their queries. Each day, this best-in-class black box LLM was performing differently for the very same prompt. Over time it seemed to be regressing. It was positively vexing!<br></br><br></br>There was no visibility into why its performance was inconsistent, no one to talk to, and no freedom or real control with this centralized model. The friends were powerless and at its mercy. This was impacting their research, their time, and their business. And so together  they recruited a world class engineering team and built the first decentralized, open, trustless AI network to solve this problem.</p>
                    </div>

                </div>


            </div>

            <OurMissionNumbers />
        </div>
    )
}