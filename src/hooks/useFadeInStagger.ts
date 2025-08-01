import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useFadeInStagger = (elements: React.MutableRefObject<HTMLElement[]>) => {
  useEffect(() => {
    if (!elements.current.length) return;

    gsap.set(elements.current, { opacity: 0, y: 20 });

    const trigger = ScrollTrigger.create({
      trigger: elements.current[0],
      start: "80% 90%",
      onEnter: () => {
        gsap.to(elements.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.10,
          ease: "power4.out",
        });
      },
    });

    const handleResize = () => trigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      trigger.kill();
    };
  }, [elements]);
};