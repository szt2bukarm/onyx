import Video from "../common/Video";
import SaygoodbyeText from "./SaygoodbyeText";

export default function Saygoodbye() {
    return (
        <div className="relative sm:px-[80px] px-[20px] pb-[120px] bg-onyx-500">
            <div className="absolute top-0 left-0 w-full h-[100px] bg-white z-0"></div>
            <div className="h-[600px] mb-[80px]">
                <Video name="Guy Guy" role="Co-Founder and CEO, Hume Health" video="" showWatchVideo={false} buttonSize="large" buttonColor="primary"/>
            </div>
            <SaygoodbyeText />
        </div>
    )
}