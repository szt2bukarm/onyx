export default function FooterNavLink({href,children} : {href: string, children: React.ReactNode}) {
    return (
        <a href={href} className="hover:opacity-50 transition duration-150">{children}</a>
    )
}