import React, { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import icon1 from "../../assets/icons/exclusive.webp";
import icon2 from "../../assets/icons/network.webp";
import icon3 from "../../assets/icons/growth.webp";

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  icon1,
  icon2,
  icon3,
};

const ArkaHireAdvantage = () => {
  const { t } = useTranslation();

  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const basePath = "workerandagencies.agencyPartnerPage.arkaHireAdvantage";

  const headingData = t(`${basePath}.heading`, {
    returnObjects: true,
  });

  const cardsData = t(`${basePath}.cards`, {
    returnObjects: true,
  });

  const heading = Array.isArray(headingData) ? headingData : [];
  const advantages = Array.isArray(cardsData) ? cardsData : [];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".adv-word", {
        yPercent: 110,
        opacity: 0,
      });

      gsap.set(".adv-subtitle", {
        y: 24,
        opacity: 0,
        filter: "blur(8px)",
      });

      gsap.set(cardsRef.current.filter(Boolean), {
        y: 70,
        opacity: 0,
        scale: 0.9,
        filter: "blur(10px)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.to(".adv-word", {
        yPercent: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.07,
        ease: "power4.out",
      })
        .to(
          ".adv-subtitle",
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.45",
        )
        .to(
          cardsRef.current.filter(Boolean),
          {
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.85,
            stagger: 0.15,
            ease: "back.out(1.35)",
          },
          "-=0.35",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [heading.length, advantages.length]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#071b0c] via-[#2f7f35] to-[#071b0c] px-4 py-16 font-montserrat text-white sm:px-6 lg:px-10 lg:py-20"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-5xl text-center">
          <h2 className="text-[34px] font-black leading-tight tracking-[0.08em] text-white sm:text-[48px] lg:text-[64px]">
            {heading.map((word, index) => (
              <span
                key={`${word}-${index}`}
                className="mr-3 inline-block overflow-hidden align-bottom"
              >
                <span
                  className={`adv-word inline-block ${
                    index === heading.length - 1
                      ? "text-[#d8ffd8]"
                      : "text-white"
                  } drop-shadow-[0_10px_25px_rgba(0,0,0,0.45)]`}
                >
                  {word}
                </span>
              </span>
            ))}
          </h2>

          <p className="adv-subtitle mx-auto mt-5 max-w-6xl text-[14px] font-bold leading-7 text-white/88 sm:text-[15px]">
            {t(`${basePath}.subtitle`)}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {advantages.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group relative flex min-h-[320px] flex-col items-center justify-center overflow-hidden rounded-[10px] border border-[#0d2b18] bg-[#2f6f38]/35 px-7 py-10 text-center shadow-[0_24px_70px_rgba(0,0,0,0.22)] transition-all duration-500 hover:-translate-y-3 hover:border-[#d8ffd8]/50 hover:bg-[#3b8844]/45 hover:shadow-[0_34px_90px_rgba(0,0,0,0.34)]"
            >
              <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#d8ffd8]/12 blur-2xl transition duration-500 group-hover:bg-[#d8ffd8]/22" />

              <div className="relative z-10 mb-8 flex h-28 w-28 items-center justify-center transition duration-500 group-hover:scale-110 group-hover:-rotate-3">
                <img
                  src={iconMap[item.icon]}
                  alt={item.title}
                  className="h-full w-full object-contain"
                />
              </div>

              <h3 className="relative z-10 mb-3 text-[22px] font-black leading-tight text-white drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)] sm:text-[24px]">
                {item.title}
              </h3>

              <p className="relative z-10 max-w-[320px] text-[14px] font-bold leading-7 text-white/88">
                {item.description}
              </p>

              <span className="pointer-events-none absolute bottom-3 right-5 text-[70px] font-black leading-none text-white/[0.04]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/14 to-transparent transition duration-700 group-hover:translate-x-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArkaHireAdvantage;
