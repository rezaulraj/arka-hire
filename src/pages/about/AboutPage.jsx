import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

import HeroAbout from "./HeroAbout";
import AboutStats from "./AboutStats";
import HrExpart from "./HrExpart";
import WorkforseSolution from "./WorkforseSolution";
import CompanyTimeline from "./CompanyTimeline";
import LetsTalk from "../home/LetsTalk";

const AboutPage = () => {
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
      <HeroAbout />
      <AboutStats />
      <HrExpart />
      <WorkforseSolution />
      <CompanyTimeline />
      <LetsTalk />
    </div>
  );
};

export default AboutPage;