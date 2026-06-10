import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

import HeroMedition from "./HeroMedition";
import MediationSteps from "./MediationSteps";
import WhyArkaMediation from "./WhyArkaMediation";
import LetsTalk from "../home/LetsTalk";
import { Helmet } from "react-helmet-async";

const MediationEmployment = () => {
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
      <Helmet>
        <title>Mediation Employment | Arka Hire – Workforce Solutions</title>
        <meta
          name="description"
          content="Arka Hire offers professional mediation services for employment disputes and workforce management. Resolve conflicts efficiently with our HR mediation experts."
        />
        <meta
          name="keywords"
          content="Mediation Employment, Arka Hire, HR Mediation, Workforce Solutions, Skilled Workers, Employee Conflict Resolution, Recruitment"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://arkahire.com/employers/mediation-in-employment"
        />
        <meta
          property="og:title"
          content="Mediation Employment | Arka Hire – Workforce Solutions"
        />
        <meta
          property="og:description"
          content="Professional mediation services from Arka Hire for resolving employment disputes and managing workforce efficiently."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://arkahire.com/employers/mediation-in-employment"
        />
      </Helmet>

      <HeroMedition />
      <MediationSteps />
      <WhyArkaMediation />
      <LetsTalk />
    </div>
  );
};

export default MediationEmployment;
