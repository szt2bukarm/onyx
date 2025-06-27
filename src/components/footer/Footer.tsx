import FooterActions from "./FooterActions";
import FooterCopyright from "./FooterCopyright";
import FooterLinks from "./FooterLinks";
import FooterLogo from "./FooterLogo";
import FooterNav from "./FooterNav";

export default function Footer() {
    return (
        <footer className="px-[20px] sm:px-[80px] bg-neutral-800">
            <FooterLinks />
            <FooterActions />
            <FooterNav />
            <FooterCopyright />
            <FooterLogo />
        </footer>
    )
}