import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

import HeroEmploymentWelfare from "./HeroEmploymentWelfare";
import WelfareStrategies from "./WelfareStrategies";
import LetsTalk from "../home/LetsTalk";

const EmploymentWelfare = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => t,
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      wheelMultiplier: 1,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <HeroEmploymentWelfare />
      <WelfareStrategies />
      <LetsTalk />
    </div>
  );
};

export default EmploymentWelfare;