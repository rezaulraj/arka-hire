import React, { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Terms = () => {
  const { t } = useTranslation();

  const sectionRef = useRef(null);
  const textRefs = useRef([]);

  const basePath = "termsPage";

  const sectionsData = t(`${basePath}.sections`, {
    returnObjects: true,
  });

  const sections = Array.isArray(sectionsData) ? sectionsData : [];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(textRefs.current.filter(Boolean), {
        y: 30,
        opacity: 0,
        filter: "blur(6px)",
      });

      gsap.to(textRefs.current.filter(Boolean), {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.8,
        stagger: 0.08,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [sections.length]);

  return (
    <>
      <div
        ref={sectionRef}
        className="relative min-h-screen w-full bg-gradient-to-r from-[#0C1A0E] via-[#2f7f35] to-[#0C1A0E] px-6 py-20 font-montserrat text-white sm:px-10 lg:px-24"
      >
        <h1
          ref={(el) => {
            textRefs.current[0] = el;
          }}
          className="mb-6 text-center text-3xl font-bold text-white sm:text-4xl md:text-5xl"
        >
          {t(`${basePath}.title`)}
        </h1>

        <div className="mx-auto flex max-w-5xl flex-col gap-6 text-sm leading-7 sm:text-base">
          {sections.map((section, index) => (
            <div
              key={`${section.title}-${index}`}
              ref={(el) => {
                textRefs.current[index + 1] = el;
              }}
              className="rounded-lg border border-white/10 bg-[#194524]/50 p-4 shadow-lg sm:p-6"
            >
              <h2 className="mb-2 text-xl font-semibold text-[#f1f1f1] sm:text-2xl">
                {section.title}
              </h2>

              <p className="text-white/90">{section.content}</p>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default Terms;
