"use client"
import Lenis from "@studio-freight/lenis";
import React, { useEffect } from "react";
const SmoothScroll = ({ children }: { children: React.ReactNode }) => {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
      smoothWheel: true,
      smoothTouch: true,
      wheelMultiplier: 1,
      touchMultiplier: 1, // Adjusts touch scroll sensitivity (higher for more responsiveness)
      infinite: false, // Disable infinite scrolling
      direction: "vertical", // Vertical scrolling direction
    });
    lenis.on("scroll", (e: any) => {
      // Safeguard against cases where e.target is not an element
      const target = e?.target as HTMLElement | null;
      if (target && target.closest(".modal-content")) {
        return; // Ignore Lenis scrolling for modal content
      }
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };

  }, []);
  return <>{children}</>;
};

export default SmoothScroll;
