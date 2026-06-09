import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

import HeroLegalAssurance from "./HeroLegalAssurance";
import LegalProcess from "./LegalProcess";
import ArkaAdvanced from "./ArkaAdvanced";
import LetsTalk from "../home/LetsTalk";

const LegalAssurance = () => {
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
      <HeroLegalAssurance />
      <LegalProcess />
      <ArkaAdvanced />
      <LetsTalk />
    </div>
  );
};

export default LegalAssurance;