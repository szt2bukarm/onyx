import Video from "../common/Video";

export default function ZeroSwitch() {
    return (
        <div className="h-[600px] relative">
            <Video name="Guy Guy" role="2022-2024 Minister of Govenrment of Ontario" video="" showWatchVideo={true} buttonColor="primary" buttonSize="small">
                <div className="absolute top-0 left-0 md:relative flex flex-col p-[24px] md:p-0 md:flex-row justify-between gap-[12px] md:gap-[32px] text-white w-full">
                    <p className="font-regular w-full md:w-[346px] text-h4 leading-h4 md:text-h2 md:leading-h2">Onyx is Zero Switch Cost</p>
                    <div className="font-regular w-full md:w-[400px] text-md leading-md flex flex-col md:gap-[16px]">
                        <p>Use it in your same cloud environment and with your same model.</p>
                        <p>
                        One-click installation and go, with your encrypted model in minutes.
                        </p>
                    </div>
                </div>
            </Video>
        </div>
    )
}