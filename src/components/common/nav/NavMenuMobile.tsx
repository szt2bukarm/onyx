import NavLink from "@/components/footer/NavLink"
import TransitionLink from "@/components/TransitionLink"
import Button from "../Button"

export default function NavMenuMobile({setOpen} : {setOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
    return (
        <div className="relative flex flex-col lg:hidden overflow-y-auto max-h-[calc(100dvh-100px)] overscroll-contain">

            {/* nav cards */}
            <div className="flex flex-col">

                <TransitionLink href="/firewall" setNavOpen={setOpen}>
                <div className="cursor-pointer transition duration-100 hover:bg-onyx-500 flex justify-between items-center p-[24px] border-1 border-[#B4B4B41F]">
                    <p className="text-regular text-h2 leading-h2 text-white mt-auto">Firewall</p>
                    <img src="arrow-up-right.svg" className="h-[60px] invert" />
                </div>
                </TransitionLink>
                <TransitionLink href="/fortress" setNavOpen={setOpen}>
                <div className="cursor-pointer transition duration-100 hover:bg-onyx-500 flex justify-between items-center p-[24px] border-1 border-[#B4B4B41F]">
                    <p className="text-regular text-h2 leading-h2 text-white mt-auto">Fortress</p>
                    <img src="arrow-up-right.svg" className="h-[60px] invert" />
                </div>
                </TransitionLink>
                <TransitionLink href="/veil" setNavOpen={setOpen}>
                <div className="cursor-pointer transition duration-100 hover:bg-onyx-500 flex justify-between items-center p-[24px] border-1 border-[#B4B4B41F]">
                    <p className="text-regular text-h2 leading-h2 text-white mt-auto">Veil</p>
                    <img src="arrow-up-right.svg" className="h-[60px] invert" />
                </div>
                </TransitionLink>


            </div>

            {/* nav links */}
            <div className="flex flex-col p-[24px] gap-[24px]">
                <div>
                    <p className="text-sm leading-sm lg:leading-sm text-white mb-[24px]">PRODUCTS</p>
                    <div className="flex flex-col gap-[8px] text-sm leading-sm text-neutral-100">
                        <NavLink setNavOpen={setOpen} href="/fortress">Onyx Cloud Wall</NavLink>
                        <NavLink setNavOpen={setOpen} href="/veil">ChatGPT Veil</NavLink>
                        <NavLink setNavOpen={setOpen} href="#">Onyx Blind RAG</NavLink>
                        <NavLink setNavOpen={setOpen} href="#">Onyx Blind Search</NavLink>
                        <NavLink setNavOpen={setOpen} href="#">Onyx Custom AI</NavLink>
                    </div>
                </div>
                <div>
                    <p className="text-sm leading-sm lg:leading-sm text-white mb-[24px]">INFORMATION</p>
                    <div className="flex flex-col gap-[8px] text-sm leading-sm text-neutral-100">
                        <NavLink setNavOpen={setOpen} href="/whyprivacy">Why Privacy</NavLink>
                        <NavLink setNavOpen={setOpen} href="#">Supported Models</NavLink>
                        <NavLink setNavOpen={setOpen} href="/usecases">Work Use Cases</NavLink>
                        <NavLink setNavOpen={setOpen} href="#">Attack Vectors</NavLink>
                        <NavLink setNavOpen={setOpen} href="#">Video Center</NavLink>
                        <NavLink setNavOpen={setOpen} href="#">Tutorials</NavLink>
                    </div>
                </div>
                <div>
                    <p className="text-sm leading-sm text-white mb-[24px]">PRODUCTS</p>
                    <div className="flex flex-col gap-[8px] text-sm leading-sm text-neutral-100">
                        <NavLink setNavOpen={setOpen} href="/contact">Talk to us</NavLink>
                        <NavLink setNavOpen={setOpen} href="/about">About</NavLink>
                        <NavLink setNavOpen={setOpen} href="#">Support</NavLink>
                        <NavLink setNavOpen={setOpen} href="#">Media Kit</NavLink>
                        <NavLink setNavOpen={setOpen} href="#">Blog</NavLink>
                        <NavLink setNavOpen={setOpen} href="#">Safety</NavLink>
                    </div>
                </div>
            </div>

            <div className="p-[24px] w-full">
                <Button variant="primary" center>TRY IT</Button>
            </div>

        </div>
    )
}