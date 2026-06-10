import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

import HeroImmigration from "./HeroImmigration";
import AssistanceProcess from "./AssistanceProcess";
import ArkaHireAdvantage from "./ArkaHireAdvantage";
import WhyWorkArka from "./WhyWorkArka";
import LetsTalk from "../home/LetsTalk";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>
          Immigration Assistance | Arka Hire – Global Workforce Solutions
        </title>
        <meta
          name="description"
          content="Arka Hire provides expert immigration assistance for businesses and workers. Streamline global hiring, visa support, and workforce management with our professional services."
        />
        <meta
          name="keywords"
          content="Immigration Assistance, Arka Hire, Workforce Solutions, Visa Support, Skilled Workers, Global Employment, Recruitment"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://arkahire.com/employers/immigration-assistance"
        />
        <meta
          property="og:title"
          content="Immigration Assistance | Arka Hire – Global Workforce Solutions"
        />
        <meta
          property="og:description"
          content="Get professional immigration assistance with Arka Hire for smooth global hiring and workforce management."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://arkahire.com/employers/immigration-assistance"
        />
      </Helmet>

      <HeroImmigration />
      <AssistanceProcess />
      <ArkaHireAdvantage />
      <WhyWorkArka />
      <LetsTalk />
    </div>
  );
};

export default ImmigrationAssistance;
