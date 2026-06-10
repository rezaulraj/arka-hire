import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

import HeroSereeningProcess from "./HeroSereeningProcess";
import OurStrategiesSereening from "./OurStrategiesSereening";
import LetsTalk from "../home/LetsTalk";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>Screening Process | Arka Hire – Workforce Solutions</title>
        <meta
          name="description"
          content="Arka Hire provides a thorough screening process for sourcing and hiring skilled workers. Learn how we ensure qualified talent and efficient workforce solutions."
        />
        <meta
          name="keywords"
          content="Screening Process, Worker Screening, Arka Hire, Skilled Workers, Workforce Solutions, Recruitment, HR Solutions"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://arkahire.com/our-approach/screening-process"
        />
        <meta
          property="og:title"
          content="Screening Process | Arka Hire – Workforce Solutions"
        />
        <meta
          property="og:description"
          content="Discover Arka Hire's expert worker screening process to ensure top talent and efficient recruitment."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://arkahire.com/our-approach/screening-process"
        />
      </Helmet>

      <HeroSereeningProcess />
      <OurStrategiesSereening />
      <LetsTalk />
    </div>
  );
};

export default ScreeningProcess;
