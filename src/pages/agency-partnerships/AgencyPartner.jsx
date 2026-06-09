import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

import HeroAgencyPartner from "./HeroAgencyPartner";
import PartnershipBenefits from "./PartnershipBenefits";
import PartnerCollaboration from "./PartnerCollaboration";
import Faqs from "./Faqs";
import ArkaHireAdvantage from "./ArkaHireAdvantage";
import LetsTalk from "../home/LetsTalk";

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