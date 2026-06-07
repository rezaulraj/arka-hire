import React from "react";
import HeroHome from "./HeroHome";
import Services from "./Services";
import OurProcess from "./OurProcess";
import WorkerCollaboration from "./WorkerCollaboration";
import WhyArkaHire from "./WhyArkaHire";
import ServicesOverView from "./ServicesOverView";
import Glance from "./Glance";
import CountrySendWorker from "./CountrySendWorker";
import LetsTalk from "./LetsTalk";

const HomePage = () => {
  return (
    <div>
      <HeroHome />
      <Services />
      <OurProcess />
      <WorkerCollaboration />
      <WhyArkaHire />
      <ServicesOverView />
      <Glance />
      <CountrySendWorker />
      <LetsTalk/>
    </div>
  );
};

export default HomePage;
