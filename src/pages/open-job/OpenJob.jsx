import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

import HeroOpenJob from "./HeroOpenJob";
import LetsTalk from "../home/LetsTalk";
import { Helmet } from "react-helmet-async";

const OpenJob = () => {
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
        <title>Open Job Opportunities | Arka Hire – Skilled Workforce</title>
        <meta
          name="description"
          content="Explore current open job opportunities with Arka Hire. Find skilled workers or available positions and connect with top global talent."
        />
        <meta
          name="keywords"
          content="Open Jobs, Arka Hire, Skilled Workers, Job Opportunities, Workforce Solutions, Recruitment, Temporary Staff"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://arkahire.com/workers-and-agencies/open-job"
        />
        <meta
          property="og:title"
          content="Open Job Opportunities | Arka Hire – Skilled Workforce"
        />
        <meta
          property="og:description"
          content="Check out Arka Hire's current open job opportunities and connect with skilled workers worldwide."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://arkahire.com/workers-and-agencies/open-job"
        />
      </Helmet>

      <HeroOpenJob />
      <LetsTalk />
    </div>
  );
};

export default OpenJob;
