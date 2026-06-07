import React, { useRef, useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsFillPinAngleFill } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

const AboutStats = () => {
  const { t } = useTranslation();

  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  const statsData = t("aboutUs.aboutStats.stats.items", {
    returnObjects: true,
  });

  const stats = Array.isArray(statsData) ? statsData : [];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([headingRef.current, textRef.current, buttonRef.current], {
        y: 40,
        opacity: 0,
        filter: "blur(6px)",
      });

      gsap.set(cardsRef.current, {
        y: 50,
        opacity: 0,
        scale: 0.9,
        filter: "blur(6px)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.to(headingRef.current, {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.8,
      })
        .to(
          textRef.current,
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.7,
          },
          "-=0.5",
        )
        .to(
          cardsRef.current,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.85,
            stagger: 0.15,
          },
          "-=0.6",
        )
        .to(
          buttonRef.current,
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.75,
            ease: "back.out(1.5)",
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
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1.9fr]">
        {/* Left stats cards */}
        <div className="flex flex-col gap-6">
          {stats.map((stat, idx) => (
            <div
              key={`${stat.number}-${idx}`}
              ref={(el) => {
                cardsRef.current[idx] = el;
              }}
              className="relative overflow-hidden rounded-xl bg-red-600 p-6 shadow-lg"
            >
              <h3 className="mb-2 text-[28px] font-extrabold text-white">
                {stat.number}
              </h3>

              <p className="text-[14px] font-semibold text-white/90">
                {stat.label}
              </p>

              <span className="absolute right-2 top-2 text-[28px] text-white animate-bounce">
                <BsFillPinAngleFill />
              </span>
            </div>
          ))}
        </div>

        {/* Right content */}
        <div className="flex flex-col gap-6">
          <h2
            ref={headingRef}
            className="text-[28px] font-extrabold leading-snug sm:text-[34px] lg:text-[38px]"
          >
            {t("aboutUs.aboutStats.stats.title")}
          </h2>

          <p
            ref={textRef}
            className="text-[14px] leading-relaxed text-white/90 sm:text-[15px]"
          >
            {t("aboutUs.aboutStats.stats.description")}
          </p>

          <a
            href="contact-us"
            ref={buttonRef}
            className="mt-4 w-[200px] rounded-md bg-red-600 px-6 py-3 font-bold text-white shadow-lg transition duration-300 hover:bg-red-700"
          >
            {t("aboutUs.aboutStats.stats.button")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
