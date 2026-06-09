import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

import HeroImmigration from "./HeroImmigration";
import AssistanceProcess from "./AssistanceProcess";
import ArkaHireAdvantage from "./ArkaHireAdvantage";
import WhyWorkArka from "./WhyWorkArka";
import LetsTalk from "../home/LetsTalk";

const ImmigrationAssistance = () => {
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
      <HeroImmigration />
      <AssistanceProcess />
      <ArkaHireAdvantage />
      <WhyWorkArka />
      <LetsTalk />
    </div>
  );
};

export default ImmigrationAssistance;