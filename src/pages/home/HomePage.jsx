import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

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
      lenis.destroy(); // cleanup
    };
  }, []);

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
      <LetsTalk />
    </div>
  );
};

export default HomePage;