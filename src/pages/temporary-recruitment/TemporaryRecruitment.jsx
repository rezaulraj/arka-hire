import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

import HeroTemporary from "./HeroTemporary";
import TempProcess from "./TempProcess";
import TemporaryAdvantage from "./TemporaryAdvantage";
import LetsTalk from "../home/LetsTalk";
import { Helmet } from "react-helmet-async";

const TemporaryRecruitment = () => {
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
          Temporary Recruitment | Arka Hire – Skilled Workforce Solutions
        </title>
        <meta
          name="description"
          content="Arka Hire offers temporary recruitment services to provide skilled workers quickly and efficiently. Learn about our process and workforce advantages."
        />
        <meta
          name="keywords"
          content="Temporary Recruitment, Arka Hire, Skilled Workers, Workforce Solutions, Recruitment, Temporary Staff, HR Solutions"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://arkahire.com/employers/temporary-recruitment"
        />
        <meta
          property="og:title"
          content="Temporary Recruitment | Arka Hire – Skilled Workforce Solutions"
        />
        <meta
          property="og:description"
          content="Find top talent quickly with Arka Hire's temporary recruitment services for businesses seeking skilled workforce."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://arkahire.com/employers/temporary-recruitment"
        />
      </Helmet>

      <HeroTemporary />
      <TempProcess />
      <TemporaryAdvantage />
      <LetsTalk />
    </div>
  );
};

export default TemporaryRecruitment;
