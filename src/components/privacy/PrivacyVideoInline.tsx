export default function PrivacyVideoInline({video,name,role,image}: {video: string, name: string, role: string, image: string}) {
    return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center p-[24px] border-b border-black">
        <div className="flex items-center gap-[24px]">
            <div className="flex items-center justify-center min-h-[64px] min-w-[64px] bg-creambg">
                <img src="videostart.svg" alt="play video" />
            </div>
            <p className="font-regular text-h5 leading-h5 text-neutral-800">Watch our video about these features</p>
        </div>
        <div className="flex gap-[16px] items-center mb-5 lg:mb-0">
            <img src={image} className="w-[48px] h-[48px]" />
            <div className="flex flex-col pr-[16px]">
                <p className="text-md leading-md text-black font-medium">{name}</p>
                <p className="text-sm leading-sm text-black font-regular">{role}</p>
            </div>
        </div>
    </div>
    )
}