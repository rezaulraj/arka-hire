import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { Helmet } from "react-helmet-async";

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
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <Helmet>
        <title>Arka Hire | Grobal Workforce Solutions</title>
        <meta
          name="description"
          content="Arka Hire provides global skilled workers and workforce solutions. Connect with professionals, temporary staff, and recruitment services tailored for your business."
        />
        <meta
          name="keywords"
          content="Skilled Workers, Workforce Solutions, Recruitment, Temporary Staff, Arka Hire, Global Employment, Worker Sourcing, HR Solutions"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.arkahire.com/" />
        <meta property="og:title" content="Arka Hire | Grobal Workforce Solutions" />
        <meta
          property="og:description"
          content="Find top global talent and efficient workforce solutions for your business with Arka Hire."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arkahire.com/" />
      </Helmet>

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