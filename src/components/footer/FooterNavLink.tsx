import TransitionLink from "../TransitionLink";

export default function FooterNavLink({href,children} : {href: string, children: React.ReactNode}) {
    return (
        <TransitionLink href={href} className="hover:opacity-50 transition duration-150">{children}</TransitionLink>
    )
}