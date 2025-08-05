import Nav from "../../common/nav/Nav";
import HeroTestimonial from "./HeroTestimonial";
import HeroText from "./HeroText";

export default function Hero() {
    return (
        <div className="min-h-screen min-w-screen bg-neutral-800 sm:p-[80px] p-[24px] pb-[48px] sm:pt-[160px] pt-[120px] xl:grid xl:grid-cols-2 lg:flex lg:flex-col overflow-x-hidden">
            <HeroText />
            <HeroTestimonial />
        </div>
    )
}