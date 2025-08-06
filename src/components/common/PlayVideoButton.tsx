export default function PlayVideoButton({size,color} : {size: string, color: string}) {
    return (
    <div className={`group cursor-pointer flex items-center justify-center transition duration-150
        ${size === 'small' ? 'min-h-[64px] min-w-[64px]':''}
        ${size === 'large' ? 'min-h-[80px] min-w-[80px]':''}
        ${color === 'primary' ? 'bg-onyx-500 border border-onyx-500':''}
        ${color === 'cream' ? 'bg-creambg border border-creambg':''}
        hover:bg-black hover:border-white active:bg-black active:border-white`}>
        <img src="videostart.svg" alt="play video" className="translate-x-0.5 group-hover:invert group-active:invert transition duration-150" />
    </div>
    )
}