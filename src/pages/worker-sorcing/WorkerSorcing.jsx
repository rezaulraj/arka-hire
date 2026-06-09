import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

import HeroWorkerSorcing from "./HeroWorkerSorcing";
import Sorceing from "./Sorceing";
import OurStrategies from "./OurStrategies";
import LetsTalk from "../home/LetsTalk";

const WorkerSorcing = () => {
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
      <HeroWorkerSorcing />
      <Sorceing />
      <OurStrategies />
      <LetsTalk />
    </div>
  );
};

export default WorkerSorcing;