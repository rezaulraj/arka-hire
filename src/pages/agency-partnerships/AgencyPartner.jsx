import React from "react";
import HeroAgencyPartner from "./HeroAgencyPartner";
import PartnershipBenefits from "./PartnershipBenefits";
import PartnerCollaboration from "./PartnerCollaboration";
import Faqs from "./Faqs";
import ArkaHireAdvantage from "./ArkaHireAdvantage";
import LetsTalk from "../home/LetsTalk";

const AgencyPartner = () => {
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
