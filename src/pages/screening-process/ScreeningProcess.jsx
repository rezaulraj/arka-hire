import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

import HeroSereeningProcess from "./HeroSereeningProcess";
import OurStrategiesSereening from "./OurStrategiesSereening";
import LetsTalk from "../home/LetsTalk";

const ScreeningProcess = () => {
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
      <HeroSereeningProcess />
      <OurStrategiesSereening />
      <LetsTalk />
    </div>
  );
};

export default ScreeningProcess;