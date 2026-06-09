import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

import HeroRecruitment from "./HeroRecruitment";
import RecuritmentStep from "./RecuritmentStep";
import WhyArka from "./WhyArka";
import WhyWorkUs from "./WhyWorkUs";
import LetsTalk from "../home/LetsTalk";

const RecruitmentProcess = () => {
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
      <HeroRecruitment />
      <RecuritmentStep />
      <WhyArka />
      <WhyWorkUs />
      <LetsTalk />
    </div>
  );
};

export default RecruitmentProcess;