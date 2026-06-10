import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

import HeroAgencyPartner from "./HeroAgencyPartner";
import PartnershipBenefits from "./PartnershipBenefits";
import PartnerCollaboration from "./PartnerCollaboration";
import Faqs from "./Faqs";
import ArkaHireAdvantage from "./ArkaHireAdvantage";
import LetsTalk from "../home/LetsTalk";
import { Helmet } from "react-helmet-async";

const AgencyPartner = () => {
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
          Agency Partner | Arka Hire – Workforce Collaboration & Benefits
        </title>
        <meta
          name="description"
          content="Join Arka Hire as an agency partner and access strategic workforce benefits, collaboration opportunities, and support. Learn how our partner network empowers recruitment globally."
        />
        <meta
          name="keywords"
          content="Agency Partner, Arka Hire, Workforce Collaboration, Recruitment Network, Skilled Workers, HR Solutions, Partnership Benefits"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.arkahire.com/agency-partner" />
        <meta
          property="og:title"
          content="Agency Partner | Arka Hire – Workforce Collaboration & Benefits"
        />
        <meta
          property="og:description"
          content="Discover how Arka Hire’s agency partner program provides strategic recruitment collaboration and workforce solutions globally."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.arkahire.com/agency-partner"
        />
      </Helmet>

      <HeroAgencyPartner />
      <PartnershipBenefits />
      <PartnerCollaboration />
      <Faqs />
      <ArkaHireAdvantage />
      <LetsTalk />
    </div>
  );
};

export default AgencyPartner;
