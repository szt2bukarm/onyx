import Video from "../common/Video";

export default function PrivacyVideo() {
    return (
        <div className="flex h-auto lg:h-[600px] flex-col lg:flex-row">

            {/* left text */}
            <div className="px-[20px] sm:px-[80px] py-[120px] bg-onyx-500 flex flex-col w-full lg:w-[50%]">
                <h2 className="font-regular text-h3 leading-h3 xl:text-h2 xl:leading-h2 w-auto xl:w-[600px] text-neutral-700 mb-[24px]">Why Privacy is so critical today</h2>
                <p className="font-regular text-md leading-md text-neutral-700 mb-[120px]">Leaks, hacks, abuse, mistakes. Errors both internal and external. Data is your competitive advantage. Privacy is a right.</p>
                <p className="font-regular text-h4 leading-h4 text-neutral-700">The big picture, in statics</p>
            </div>

            {/* video */}
            <div className="w-full h-[600px] lg:w-[50%]">
                <Video name="Nina Shayk" role="AI leader" video="" showWatchVideo={true}/>
            </div>

        </div>
    )
}