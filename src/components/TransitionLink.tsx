"use client"
import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";
import gsap from 'gsap'
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLenis } from "@studio-freight/react-lenis";
gsap.registerPlugin(ScrollTrigger);

export default function TransitionLink({ href,setNavOpen, children, className }) {
    const Router = useTransitionRouter();
    const pathname = usePathname();
    const lenis = useLenis();

    const animation = () => {
            document.documentElement.animate([
                { 
                    transform: "scale(1)",
                    filter: "blur(0px)",
                    opacity: 1
                },
                { 
                    transform: "scale(0.8)",
                    filter: "blur(5px)",
                    opacity: 0
                }
            ], {
                duration: 800,
                easing: "cubic-bezier(0.76, 0, 0.24, 1)",
                fill: "forwards",
                pseudoElement: "::view-transition-old(root)",
            });
        
            document.documentElement.animate([
                {
                    transform: `translateY(${window.innerHeight * 2}px) scale(2)`,
                    filter: "blur(5px)",
                }
            ], {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition-new(root)",
            });
        
            document.documentElement.animate([
                {
                    transform: `translateY(${window.innerHeight * 2}px) scale(2)`,
                    filter: "blur(5px)",
                },
                {
                    transform: "translate(0, 0) scale(1)",
                    filter: "blur(0px)",
                }
            ], {
                duration: 800,
                easing: "cubic-bezier(0.22, 1, 0.36, 1)",
                fill: "forwards",
                pseudoElement: "::view-transition-new(root)",
                delay: 300, 
            }); 
            setTimeout(() => {
                lenis?.stop();
                setTimeout(() => {
                    window.scrollTo(0, 0);
                    lenis?.start();
                },1)
            }, 100);
            setTimeout(() => {
                ScrollTrigger.refresh();
            }, 1500);  
    };
    
    return (
        <Link href={href} onClick={(e) => {
            e.preventDefault();
            if (pathname === href) return;
            if (setNavOpen) setNavOpen(false);
            setTimeout(() => {
                Router.push(href, {
                    onTransitionReady: animation
                });
            }, 1);
        }} className={className}>
            {children}
        </Link>
    );
}
