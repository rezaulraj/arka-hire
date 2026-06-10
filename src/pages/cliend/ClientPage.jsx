import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { Helmet } from "react-helmet-async";

import CliendHero from "./CliendHero";
import LetsTalk from "../home/LetsTalk";

const ClientPage = () => {
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
          Client Consultation | Arka Hire – Strategic Workforce Solutions
        </title>
        <meta
          name="description"
          content="Arka Hire offers tailored client consultation services to address your business challenges. Our expert consultants provide strategic guidance and workforce solutions across multiple sectors."
        />
        <meta
          name="keywords"
          content="Client Consultation, Arka Hire, Workforce Solutions, Skilled Workers, Recruitment, HR Consulting, Global Staffing"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://arkahire.com/our-approach/client-consultation"
        />
        <meta
          property="og:title"
          content="Client Consultation | Arka Hire – Strategic Workforce Solutions"
        />
        <meta
          property="og:description"
          content="Get expert client consultation from Arka Hire to streamline your workforce acquisition, strategic planning, and talent management."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://arkahire.com/our-approach/client-consultation"
        />
      </Helmet>
      <CliendHero />
      <LetsTalk />
    </div>
  );
};

export default ClientPage;
