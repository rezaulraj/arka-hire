import React, { useRef, useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import worker1 from "../../assets/icons/worker-1.webp";
import worker2 from "../../assets/icons/workforce.webp";
import worker3 from "../../assets/icons/data.webp";
import worker4 from "../../assets/icons/planning.webp";
import worker5 from "../../assets/icons/background-check.webp";
import worker6 from "../../assets/icons/legal-1.webp";

gsap.registerPlugin(ScrollTrigger);

const WorkforseSolution = () => {
  const { t } = useTranslation();

  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const titleRef = useRef(null);

  const icons = [worker1, worker2, worker3, worker4, worker5, worker6];

  const servicesData = t("aboutUs.workforceSolution.services", {
    returnObjects: true,
  });

  const services = Array.isArray(servicesData)
    ? servicesData.map((item, index) => ({
        ...item,
        icon: icons[index],
      }))
    : [];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(titleRef.current, {
        y: 40,
        opacity: 0,
        textShadow: "0px 0px 0px rgba(0,0,0,0)",
      });

      gsap.set(cardRefs.current, {
        y: 50,
        opacity: 0,
        scale: 0.9,
        filter: "blur(8px)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.to(titleRef.current, {
        y: 0,
        opacity: 1,
        textShadow: "2px 2px 10px rgba(0,0,0,0.4)",
        duration: 0.8,
        ease: "power4.out",
      }).to(
        cardRefs.current,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
        },
        "-=0.5",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-r from-[#0C1A0E] via-[#2f7f35] to-[#0C1A0E] px-4 py-20 font-montserrat text-white sm:px-6 lg:px-16"
    >
      <h2
        ref={titleRef}
        className="mb-16 text-center text-[28px] font-extrabold leading-snug tracking-tight sm:text-[34px] lg:text-[38px]"
      >
        {t("aboutUs.workforceSolution.title")}
      </h2>

      <div className="grid grid-cols-1 items-start gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <div
            key={`${service.title}-${idx}`}
            ref={(el) => {
              cardRefs.current[idx] = el;
            }}
            className="group flex flex-col items-center rounded-xl bg-[#3a6b3d]/80 p-6 text-center shadow-xl transition-transform duration-500 hover:scale-105"
          >
            <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-2xl bg-white p-4 shadow-lg">
              <img
                src={service.icon}
                alt={service.title}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>

            <h3 className="mb-2 text-[16px] font-bold text-white">
              {service.title}
            </h3>

            <p className="text-[13px] leading-relaxed text-white/85">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkforseSolution;
