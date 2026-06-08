import React, { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LetsTalk from "../home/LetsTalk";

gsap.registerPlugin(ScrollTrigger);

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  const sectionRef = useRef(null);
  const textRefs = useRef([]);

  const basePath = "privacyPolicy";

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
      <section
        ref={sectionRef}
        className="relative min-h-screen w-full bg-gradient-to-r from-[#0C1A0E] via-[#2f7f35] to-[#0C1A0E] px-6 py-20 font-montserrat text-white sm:px-10 lg:px-24"
      >
        <h1
          ref={(el) => {
            textRefs.current[0] = el;
          }}
          className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl md:text-5xl"
        >
          {t(`${basePath}.title`)}
        </h1>

        <div className="mx-auto flex max-w-5xl flex-col gap-8">
          {sections.map((section, index) => (
            <div
              key={`${section.title}-${index}`}
              ref={(el) => {
                textRefs.current[index + 1] = el;
              }}
              className="rounded-xl border border-white/10 bg-[#194524]/50 p-6 shadow-lg sm:p-8"
            >
              <h2 className="mb-2 text-xl font-semibold text-white sm:text-2xl">
                {section.title}
              </h2>

              <p className="leading-relaxed text-white/90">{section.content}</p>
            </div>
          ))}
        </div>
      </section>

      <LetsTalk />
    </>
  );
};

export default PrivacyPolicy;
