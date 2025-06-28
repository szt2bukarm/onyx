import Heading from "../common/Heading";
import Video from "../common/Video";

export default function PrivacyVideo() {
    return (
        <div className="flex h-auto lg:h-[600px] flex-col lg:flex-row">

            {/* left text */}
            <div className="px-[20px] sm:px-[80px] py-[120px] pb-[60px] lg:pb-[120px] bg-onyx-500 flex flex-col w-full lg:w-[50%]">
                <Heading className="font-regular text-h3 leading-h3 xl:text-h2 xl:leading-h2 w-auto xl:w-[600px] text-neutral-700 mb-[24px]">Why Privacy is so critical today</Heading>
                <p className="font-regular text-md leading-md text-neutral-700 mb-[120px]">Leaks, hacks, abuse, mistakes. Errors both internal and external. Data is your competitive advantage. Privacy is a right.</p>
                <p className="font-regular text-h4 leading-h4 text-neutral-700">The big picture, in statics</p>
            </div>

            {/* video */}
            <div className="w-full h-[400px] bg-onyx-500 lg:w-[50%] p-[10px] lg:p-0 lg:h-[600px]">
                <Video name="Nina Shayk" role="AI leader" video="" showWatchVideo={true} buttonColor="primary" buttonSize="small"/>
            </div>

        </div>
    )
}