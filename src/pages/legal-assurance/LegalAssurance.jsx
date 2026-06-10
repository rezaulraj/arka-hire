import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

import HeroLegalAssurance from "./HeroLegalAssurance";
import LegalProcess from "./LegalProcess";
import ArkaAdvanced from "./ArkaAdvanced";
import LetsTalk from "../home/LetsTalk";
import { Helmet } from "react-helmet-async";

const LegalAssurance = () => {
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
        <title>Legal Assurance | Arka Hire – Workforce Compliance & Solutions</title>
        <meta
          name="description"
          content="Arka Hire provides legal assurance services to ensure compliance and safe recruitment practices. Learn how we protect your workforce and business."
        />
        <meta
          name="keywords"
          content="Legal Assurance, Arka Hire, Workforce Compliance, HR Solutions, Recruitment, Skilled Workers, Temporary Staff"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.arkahire.com/employers/legal-assurance" />
        <meta property="og:title" content="Legal Assurance | Arka Hire – Workforce Compliance & Solutions" />
        <meta
          property="og:description"
          content="Ensure compliant and secure recruitment practices with Arka Hire's legal assurance services for your workforce."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.arkahire.com/employers/legal-assurance" />
      </Helmet>

      <HeroLegalAssurance />
      <LegalProcess />
      <ArkaAdvanced />
      <LetsTalk />
    </div>
  );
};

export default LegalAssurance;