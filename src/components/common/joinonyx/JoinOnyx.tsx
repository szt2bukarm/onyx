import EarlyAccessForm from "./EarlyAccessForm";
import SecureAI from "./SecureAI";

export default function JoinOnyx() {
    return (
        <div className="px-[20px] sm:px-[80px] pt-[60px] sm:pt-[120px] pb-[48px] bg-neutral-800 flex flex-col xl:flex-row justify-between">
            <SecureAI />
            <EarlyAccessForm />
        </div>
    )
}