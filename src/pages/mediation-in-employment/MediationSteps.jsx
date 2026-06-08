import React, { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bgImage from "../../assets/medi.webp";

gsap.registerPlugin(ScrollTrigger);

const MediationSteps = () => {
  const { t } = useTranslation();

  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const stepsRef = useRef([]);

  const basePath = "employers.mediationEmploymentPage.mediationSteps";

  const benefitsData = t(`${basePath}.benefits`, {
    returnObjects: true,
  });

  const stepsData = t(`${basePath}.steps`, {
    returnObjects: true,
  });

  const benefits = Array.isArray(benefitsData) ? benefitsData : [];
  const steps = Array.isArray(stepsData) ? stepsData : [];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(leftRef.current, {
        x: -50,
        opacity: 0,
        filter: "blur(8px)",
      });

      gsap.set(stepsRef.current.filter(Boolean), {
        x: 50,
        opacity: 0,
        filter: "blur(8px)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.to(leftRef.current, {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.85,
        ease: "power4.out",
      }).to(
        stepsRef.current.filter(Boolean),
        {
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.75,
          stagger: 0.16,
          ease: "power3.out",
        },
        "-=0.45",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [steps.length]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-cover bg-center font-montserrat text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#4b5425]/75" />
      <div className="absolute inset-0 bg-black/25" />

      {/* Red top / bottom line */}
      <div className="absolute left-0 top-0 z-10 h-[8px] w-full bg-[#b94425]/70" />
      <div className="absolute bottom-0 left-0 z-10 h-[18px] w-full bg-[#b94425]/60" />

      <div className="relative z-20 mx-auto grid min-h-[390px] max-w-7xl grid-cols-1 items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-16">
        {/* Left */}
        <div ref={leftRef} className="lg:pl-14">
          <p className="mb-3 text-[13px] font-black text-[#ff2d18]">
            {t(`${basePath}.badge`)}
          </p>

          <h2 className="max-w-[320px] text-[34px] font-black leading-[0.95] text-white drop-shadow-[0_8px_18px_rgba(0,0,0,0.5)] sm:text-[44px]">
            {t(`${basePath}.heading`)}
          </h2>

          <ul className="mt-5 space-y-2">
            {benefits.map((item, index) => (
              <li
                key={`${item}-${index}`}
                className="flex items-center gap-2 text-[12px] font-bold text-white/90"
              >
                <span className="text-[#ff2d18]">»</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Timeline */}
        <div className="relative max-w-3xl">
          <div className="absolute left-0 top-2 hidden h-[calc(100%-20px)] w-[2px] bg-[#ff2d18]/75 md:block" />

          <div className="space-y-7 md:pl-10">
            {steps.map((step, index) => (
              <div
                key={`${step.title}-${index}`}
                ref={(el) => {
                  stepsRef.current[index] = el;
                }}
                className="relative"
              >
                <span className="absolute -left-[47px] top-1 hidden h-3 w-3 rounded-full bg-[#ff2d18] shadow-[0_0_14px_rgba(255,45,24,0.7)] md:block" />

                <h3 className="mb-1 text-[16px] font-black text-white">
                  {step.title}
                </h3>

                <p className="max-w-[680px] text-[11px] font-bold leading-5 text-white/88 sm:text-[12px]">
                  {step.description}
                </p>

                {step.note && (
                  <p className="mt-2 max-w-[680px] text-[11px] font-bold leading-5 text-white/88 sm:text-[12px]">
                    {step.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediationSteps;
