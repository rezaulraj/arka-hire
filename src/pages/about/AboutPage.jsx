import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>About Us | Arka Hire – Global Workforce Solutions</title>
        <meta
          name="description"
          content="Arka Hire is a leading manpower outsourcing company headquartered in London, UK. Learn about our journey, HR expertise, workforce solutions, and global recruitment experience."
        />
        <meta
          name="keywords"
          content="Arka Hire, About Us, Workforce Solutions, Skilled Workers, HR Experts, Recruitment, Temporary Staff, Global Hiring"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://arkahire.com/about-us" />
        <meta property="og:title" content="About Us | Arka Hire – Global Workforce Solutions" />
        <meta
          property="og:description"
          content="Discover Arka Hire's journey, expertise, and services in global manpower solutions. Connect with skilled workers and recruitment support worldwide."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arkahire.com/about-us" />
      </Helmet>
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