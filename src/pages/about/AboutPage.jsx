import React from "react";
import HeroAbout from "./HeroAbout";
import AboutStats from "./AboutStats";
import HrExpart from "./HrExpart";
import WorkforseSolution from "./WorkforseSolution";
import CompanyTimeline from "./CompanyTimeline";
import LetsTalk from "../home/LetsTalk";

const AboutPage = () => {
  return (
    <div>
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
