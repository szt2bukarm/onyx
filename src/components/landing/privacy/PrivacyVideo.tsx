import Heading from "../../common/Heading";
import Video from "../../common/Video";

export default function PrivacyVideo() {
    return (
        <div className="flex h-auto lg:h-[600px] flex-col lg:flex-row">

            {/* left text */}
            <div className="section-padding bg-onyx-500 flex flex-col w-full lg:w-[50%]">
                <Heading className="font-regular text-mobileheading leading-mobileheading xl:text-h2 xl:leading-h2 w-auto xl:w-[600px] text-neutral-700 mb-[24px]">Why Privacy is so critical today</Heading>
                <p className="font-regular text-lg leading-lg text-neutral-700 mb-[32px] sm:mb-[120px]">Leaks, hacks, abuse, mistakes. Errors both internal and external. Data is your competitive advantage. Privacy is a right.</p>
                <p className="font-regular text-h4 leading-h4 text-neutral-700">The big picture, in statistics</p>
            </div>

            {/* video */}
            <div className="w-full h-[400px] bg-onyx-500 lg:w-[50%] h-[600px]">
                <Video name="Nina Shayk" role="AI leader" video="" showWatchVideo={true} buttonColor="primary" buttonSize="small"/>
            </div>

        </div>
    )
}