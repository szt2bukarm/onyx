import InlineLink from "../common/InlineLink";

export default function HighlightsCard({icon,text,links,index}: {icon: string, text: string, links: {linktext: string, url: string}[], index: number}) {
    return (
        <div className={`flex flex-col gap-[48px] p-[48px] ${index < 2 ? "border-b border-neutral-800" : ""}`}>
            <img src={icon} alt="icon" className="w-[125px] h-[125px]" />
            <p className="font-regular text-neutral-800 text-h4 leading-h4 xl:text-h3 xl:leading-h3">{text}</p>
            <div className="flex flex-col gap-[16px]">
                {links.map((link) => (
                    <InlineLink key={link.linktext}>{link.linktext}</InlineLink>
                ))}
            </div>
        </div>
    )
}