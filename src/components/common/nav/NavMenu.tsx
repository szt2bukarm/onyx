import NavLink from "@/components/footer/NavLink"
import TransitionLink from "@/components/TransitionLink"
import { useEffect, useRef } from "react";

export default function NavMenu({setOpen} : {setOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
    const navMenu = useRef<HTMLDivElement>(null);
    const handleWheel = (e: WheelEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (navMenu) {
            navMenu.current.addEventListener("wheel", handleWheel, { passive: false });
        }

        return () => {
            if (navMenu) {
                navMenu.current.removeEventListener("wheel", handleWheel);
            }
        };
    }, [setOpen]);

    return (
        <div ref={navMenu} className="hidden flex-col gap-[48px] lg:flex overflow-y-auto max-h-[calc(100vh-100px)] overscroll-contain">

            {/* nav cards */}
            <div className="grid grid-cols-3 h-[45vh] [@media(max-height:670px)]:h-full">

                <TransitionLink href="/firewall" setNavOpen={setOpen}>
                <div className="min-h-full cursor-pointer transition duration-100 hover:bg-onyx-500 active:bg-onyx-500 flex flex-col gap-[24px] p-[48px] border-1 border-[#B4B4B41F]">

                    <p className="text-regular text-h2 leading-h2 text-white mt-auto">Firewall</p>
                    <p className="text-regular text-sm leading-sm text-neutral-100">Onyx Firewall, powered by the breakthrough privacy technology Equivariant Encryption,  gives you total peace of mind.</p>

                    </div>
                </TransitionLink>

                <TransitionLink href="/fortress" setNavOpen={setOpen}>
                <div className="min-h-full cursor-pointer transition duration-100 hover:bg-onyx-500 active:bg-onyx-500 flex flex-col gap-[24px] p-[48px] border-1 border-[#B4B4B41F]">

                    <p className="text-regular text-h2 leading-h2 text-white mt-auto">Fortress</p>
                    <p className="text-regular text-sm leading-sm text-neutral-100">Onyx Fortress is the first cloud API that keeps your data and queries fully blind to anyone outside of your organization - even to your cloud provider.</p>

                </div>
                </TransitionLink>


                <TransitionLink href="/veil" setNavOpen={setOpen}>
                <div className="min-h-full cursor-pointer transition duration-100 hover:bg-onyx-500 active:bg-onyx-500 flex flex-col gap-[24px] p-[48px] border-1 border-[#B4B4B41F]">

                    <p className="text-regular text-h2 leading-h2 text-white mt-auto">Veil</p>
                    <p className="text-regular text-sm leading-sm text-neutral-100">Onyx Veil prevents threats and transforms identifying information from your prompts before sending them to centralized AI’s like ChatGPT.</p>

                </div>
                </TransitionLink>

            </div>

            {/* nav links */}
            <div className="grid grid-cols-3 px-[80px]">
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

        </div>
    )
}