"use client"
import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import navStyles from './Nav/nav.module.scss'
import { usePathname } from "next/navigation";

export default function TransitionLink({ href, children, className }) {
    const Router = useTransitionRouter();
    const pathname = usePathname();

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
                    transform: `translateY(${window.innerHeight * 1.5}px) scale(2)`,
                    filter: "blur(5px)",
                }
            ], {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition-new(root)",
            });
        
            document.documentElement.animate([
                {
                    transform: `translateY(${window.innerHeight * 1.5}px) scale(2)`,
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
    };
    
    return (
        <Link href={href} onClick={(e) => {
            e.preventDefault();
            if (pathname === href) return;
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
