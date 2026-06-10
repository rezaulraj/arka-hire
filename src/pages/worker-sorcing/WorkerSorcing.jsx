import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

import HeroWorkerSorcing from "./HeroWorkerSorcing";
import Sorceing from "./Sorceing";
import OurStrategies from "./OurStrategies";
import LetsTalk from "../home/LetsTalk";
import { Helmet } from "react-helmet-async";

const WorkerSorcing = () => {
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
        <title>Worker Sourcing | Arka Hire – Expert Workforce Solutions</title>
        <meta
          name="description"
          content="Arka Hire provides expert worker sourcing solutions. Connect with skilled professionals, temporary staff, and strategic workforce support tailored for your business."
        />
        <meta
          name="keywords"
          content="Worker Sourcing, Arka Hire, Skilled Workers, Workforce Solutions, Recruitment, Temporary Staff, HR Solutions"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://arkahire.com/our-approach/worker-sourcing"
        />
        <meta
          property="og:title"
          content="Worker Sourcing | Arka Hire – Expert Workforce Solutions"
        />
        <meta
          property="og:description"
          content="Find top talent and strategic workforce solutions with Arka Hire's worker sourcing services."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://arkahire.com/our-approach/worker-sourcing"
        />
      </Helmet>

      <HeroWorkerSorcing />
      <Sorceing />
      <OurStrategies />
      <LetsTalk />
    </div>
  );
};

export default WorkerSorcing;
