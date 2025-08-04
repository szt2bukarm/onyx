import TransitionLink from "../TransitionLink";

export default function NavLink({href,setNavOpen, children} : {href: string,setNavOpen: React.Dispatch<React.SetStateAction<boolean>>, children: React.ReactNode}) {
    return (
        <TransitionLink setNavOpen={setNavOpen} href={href} className="hover:opacity-50 transition duration-150 ">{children}</TransitionLink>
    )
}