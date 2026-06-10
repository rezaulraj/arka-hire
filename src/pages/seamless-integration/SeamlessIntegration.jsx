import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

import HeroSeamless from "./HeroSeamless";
import SeamlessStategies from "./SeamlessStategies";
import LetsTalk from "../home/LetsTalk";
import { Helmet } from "react-helmet-async";

const SeamlessIntegration = () => {
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
        <title>Seamless Integration | Arka Hire – Workforce Solutions</title>
        <meta
          name="description"
          content="Arka Hire provides seamless integration services to connect businesses with skilled workers efficiently. Learn how we streamline workforce management and recruitment."
        />
        <meta
          name="keywords"
          content="Seamless Integration, Arka Hire, Workforce Solutions, Recruitment, Skilled Workers, HR Solutions"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://arkahire.com/our-approach/seamless-integration"
        />
        <meta
          property="og:title"
          content="Seamless Integration | Arka Hire – Workforce Solutions"
        />
        <meta
          property="og:description"
          content="Discover Arka Hire's seamless integration services for efficient workforce management and recruitment."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://arkahire.com/our-approach/seamless-integration"
        />
      </Helmet>
      <HeroSeamless />
      <SeamlessStategies />
      <LetsTalk />
    </div>
  );
};

export default SeamlessIntegration;
