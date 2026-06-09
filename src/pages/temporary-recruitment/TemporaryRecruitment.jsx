import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

import HeroTemporary from "./HeroTemporary";
import TempProcess from "./TempProcess";
import TemporaryAdvantage from "./TemporaryAdvantage";
import LetsTalk from "../home/LetsTalk";

const TemporaryRecruitment = () => {
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
      <HeroTemporary />
      <TempProcess />
      <TemporaryAdvantage />
      <LetsTalk />
    </div>
  );
};

export default TemporaryRecruitment;