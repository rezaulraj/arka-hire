import React, { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import stategie1 from "../../assets/icons/wel1.webp";
import stategie2 from "../../assets/icons/wel2.webp";
import stategie3 from "../../assets/icons/wel3.webp";
import stategie4 from "../../assets/icons/wel4.webp";

gsap.registerPlugin(ScrollTrigger);

const icons = [stategie1, stategie2, stategie3, stategie4];

const WelfareStrategies = () => {
  const { t } = useTranslation();

  const sectionRef = useRef(null);
  const desktopCardsRef = useRef([]);
  const mobileCardsRef = useRef([]);
  const centerRef = useRef(null);
  const lineRef = useRef(null);

  const headingData = t("ourApproach.welfareStrategies.heading", {
    returnObjects: true,
  });

  const cardsData = t("ourApproach.welfareStrategies.cards", {
    returnObjects: true,
  });

  const heading = Array.isArray(headingData)
    ? headingData
    : typeof headingData === "string"
      ? headingData.split(" ")
      : [];

  const strategies = Array.isArray(cardsData)
    ? cardsData.map((item, index) => ({
        ...item,
        icon: icons[index],
      }))
    : [];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const allCards = [
        ...desktopCardsRef.current.filter(Boolean),
        ...mobileCardsRef.current.filter(Boolean),
      ];

      gsap.set(".welfare-word", {
        yPercent: 110,
        opacity: 0,
      });

      gsap.set(".welfare-subtitle", {
        y: 24,
        opacity: 0,
        filter: "blur(8px)",
      });

      if (centerRef.current) {
        gsap.set(centerRef.current, {
          scale: 0.7,
          opacity: 0,
          rotate: -20,
          filter: "blur(10px)",
        });
      }

      gsap.set(allCards, {
        y: 80,
        opacity: 0,
        scale: 0.86,
        rotateX: 16,
        filter: "blur(12px)",
      });

      gsap.set(".welfare-icon", {
        scale: 0,
        rotate: -30,
        opacity: 0,
      });

      if (lineRef.current) {
        gsap.set(lineRef.current, {
          scaleX: 0,
          transformOrigin: "center center",
        });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      tl.to(".welfare-word", {
        yPercent: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.08,
        ease: "power4.out",
      })
        .to(
          ".welfare-subtitle",
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.45",
        )
        .to(
          centerRef.current,
          {
            scale: 1,
            opacity: 1,
            rotate: 0,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.3",
        )
        .to(
          lineRef.current,
          {
            scaleX: 1,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.45",
        )
        .to(
          allCards,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 0.85,
            stagger: 0.14,
            ease: "back.out(1.4)",
          },
          "-=0.65",
        )
        .to(
          ".welfare-icon",
          {
            scale: 1,
            rotate: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.09,
            ease: "back.out(1.9)",
          },
          "-=0.55",
        )
        .from(
          ".welfare-title",
          {
            y: 18,
            opacity: 0,
            duration: 0.45,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.45",
        )
        .from(
          ".welfare-desc",
          {
            y: 18,
            opacity: 0,
            duration: 0.45,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.42",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [strategies.length, t]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#071b0c] via-[#2f7f35] to-[#071b0c] px-4 py-20 font-montserrat text-white sm:px-6 lg:px-10"
    >

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="text-[42px] font-black leading-tight tracking-[0.08em] sm:text-[56px] lg:text-[72px]">
            {heading.map((word, index) => (
              <span
                key={`${word}-${index}`}
                className="mr-4 inline-block overflow-hidden align-bottom"
              >
                <span
                  className={`welfare-word inline-block ${
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

          <p className="welfare-subtitle mx-auto mt-5 max-w-2xl text-[15px] font-semibold leading-7 text-white/75 sm:text-[16px]">
            {t("ourApproach.welfareStrategies.subtitle")}
          </p>
        </div>

        {/* Desktop layout */}
        <div className="relative hidden min-h-[520px] lg:block">
          <div className="absolute left-[12%] right-[12%] top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-white/15">
            <div
              ref={lineRef}
              className="h-full w-full rounded-full bg-gradient-to-r from-transparent via-[#d8ffd8] to-transparent shadow-[0_0_25px_rgba(216,255,216,0.45)]"
            />
          </div>

          {/* Center badge */}
          <div
            ref={centerRef}
            className="absolute left-1/2 top-1/2 z-20 flex h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/20 bg-white/12 text-center shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          >
            <div className="absolute inset-3 rounded-full border border-[#d8ffd8]/30" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/15 via-transparent to-black/20" />

            <p className="relative z-10 text-[12px] font-black uppercase tracking-[0.25em] text-[#d8ffd8]">
              {t("ourApproach.welfareStrategies.centerBadge.label")}
            </p>

            <h3 className="relative z-10 mt-2 text-[24px] font-black leading-tight text-white">
              {t("ourApproach.welfareStrategies.centerBadge.title")}
            </h3>
          </div>

          {strategies.map((item, index) => {
            const positions = [
              "left-0 top-0",
              "right-0 top-0",
              "left-0 bottom-0",
              "right-0 bottom-0",
            ];

            return (
              <div
                key={`${item.title}-${index}`}
                ref={(el) => {
                  desktopCardsRef.current[index] = el;
                }}
                className={`group absolute ${positions[index]} w-[440px]`}
              >
                <div
                  className={`relative flex min-h-[210px] items-center gap-5 overflow-hidden rounded-[30px] border border-white/20 bg-white/12 p-6 shadow-[0_28px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-[#d8ffd8]/70 hover:bg-white/18 hover:shadow-[0_35px_95px_rgba(0,0,0,0.38)] ${
                    index % 2 === 0
                      ? "text-left"
                      : "flex-row-reverse text-right"
                  }`}
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#d8ffd8]/18 blur-2xl transition duration-500 group-hover:bg-[#d8ffd8]/30" />

                  <span className="pointer-events-none absolute bottom-2 right-4 text-[70px] font-black leading-none text-white/[0.06]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="welfare-icon relative z-10 flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-[28px] border border-white/25 bg-[#d8ffd8]/12 p-3 shadow-[0_20px_45px_rgba(0,0,0,0.22)] transition duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-[#d8ffd8]/22">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="h-16 w-16 object-contain"
                    />
                  </div>

                  <div className="relative z-10">
                    <h3 className="welfare-title mb-3 text-[24px] font-black leading-tight text-white drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)]">
                      {item.title}
                    </h3>

                    <p className="welfare-desc text-[15px] font-semibold leading-7 text-white/78">
                      {item.description}
                    </p>
                  </div>

                  <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/18 to-transparent transition duration-700 group-hover:translate-x-full" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet layout */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:hidden">
          {strategies.map((item, index) => (
            <div
              key={`${item.title}-mobile-${index}`}
              ref={(el) => {
                mobileCardsRef.current[index] = el;
              }}
              className="group relative overflow-hidden rounded-[28px] border border-white/20 bg-white/12 p-6 text-center shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-[#d8ffd8]/70 hover:bg-white/18"
            >
              <span className="pointer-events-none absolute bottom-2 right-4 text-[64px] font-black leading-none text-white/[0.06]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="welfare-icon relative z-10 mx-auto mb-5 flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-[28px] border border-white/25 bg-[#d8ffd8]/12 p-3 shadow-[0_20px_45px_rgba(0,0,0,0.22)]">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-16 w-16 object-contain"
                />
              </div>

              <h3 className="welfare-title relative z-10 mb-3 text-[23px] font-black leading-tight text-white">
                {item.title}
              </h3>

              <p className="welfare-desc relative z-10 text-[14px] font-semibold leading-7 text-white/78">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WelfareStrategies;
