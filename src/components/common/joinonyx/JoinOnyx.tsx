import EarlyAccessForm from "./EarlyAccessForm";
import SecureAI from "./SecureAI";

export default function JoinOnyx() {
    return (
        <div className="section-padding !pb-[48px] bg-neutral-800 flex flex-col xl:flex-row justify-between">
            <SecureAI />
            <EarlyAccessForm />
        </div>
    )
}