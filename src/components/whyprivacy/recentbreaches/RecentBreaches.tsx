import RecentBreachesCards from "./RecentBreachesCards";
import RecentBreachesFines from "./RecentBreachesFines";
import RecentBreachesWarning from "./RecentBreachesWarning";

export default function RecentBreaches() {
    return (
        <div className="px-[24px] sm:px-[80px] bg-neutral-800">
            <RecentBreachesFines />
            <RecentBreachesCards />
            <RecentBreachesWarning />
        </div>
    )
}