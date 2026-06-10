import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

import HeroEmploymentWelfare from "./HeroEmploymentWelfare";
import WelfareStrategies from "./WelfareStrategies";
import LetsTalk from "../home/LetsTalk";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>
          Employee Welfare Support | Arka Hire – Workforce Solutions
        </title>
        <meta
          name="description"
          content="Arka Hire provides comprehensive employee welfare support to ensure workforce satisfaction, retention, and productivity. Learn how our HR strategies benefit your business."
        />
        <meta
          name="keywords"
          content="Employee Welfare, Workforce Support, Arka Hire, HR Solutions, Skilled Workers, Recruitment, Employee Engagement"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://arkahire.com/our-approach/employee-welfare-support"
        />
        <meta
          property="og:title"
          content="Employee Welfare Support | Arka Hire – Workforce Solutions"
        />
        <meta
          property="og:description"
          content="Discover Arka Hire's employee welfare support services that enhance workforce satisfaction and productivity."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://arkahire.com/our-approach/employee-welfare-support"
        />
      </Helmet>

      <HeroEmploymentWelfare />
      <WelfareStrategies />
      <LetsTalk />
    </div>
  );
};

export default EmploymentWelfare;
