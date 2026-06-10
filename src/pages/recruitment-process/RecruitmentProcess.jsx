import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

import HeroRecruitment from "./HeroRecruitment";
import RecuritmentStep from "./RecuritmentStep";
import WhyArka from "./WhyArka";
import WhyWorkUs from "./WhyWorkUs";
import LetsTalk from "../home/LetsTalk";
import { Helmet } from "react-helmet-async";

const RecruitmentProcess = () => {
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
          Recruitment Process | Arka Hire – Expert Workforce Solutions
        </title>
        <meta
          name="description"
          content="Arka Hire offers a comprehensive recruitment process to help businesses hire skilled workers efficiently. Learn about our recruitment steps and workforce strategies."
        />
        <meta
          name="keywords"
          content="Recruitment Process, Arka Hire, Workforce Solutions, Skilled Workers, HR Solutions, Worker Sourcing, Temporary Staff"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://arkahire.com/employers/recruitment-process"
        />
        <meta
          property="og:title"
          content="Recruitment Process | Arka Hire – Expert Workforce Solutions"
        />
        <meta
          property="og:description"
          content="Discover Arka Hire’s recruitment process and workforce strategies for sourcing skilled workers efficiently."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://arkahire.com/employers/recruitment-process"
        />
      </Helmet>
      <HeroRecruitment />
      <RecuritmentStep />
      <WhyArka />
      <WhyWorkUs />
      <LetsTalk />
    </div>
  );
};

export default RecruitmentProcess;
