import React, { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import stategie1 from "../../assets/icons/seamless1.webp";
import stategie2 from "../../assets/icons/seamless2.webp";
import stategie3 from "../../assets/icons/seamless3.webp";
import stategie4 from "../../assets/icons/seamless4.webp";

gsap.registerPlugin(ScrollTrigger);

const icons = [stategie1, stategie2, stategie3, stategie4];

const SeamlessStategies = () => {
  const { t } = useTranslation();

  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const lineRef = useRef(null);

  const headingData = t("ourApproach.seamlessStrategies.heading", {
    returnObjects: true,
  });

  const cardsData = t("ourApproach.seamlessStrategies.cards", {
    returnObjects: true,
  });

  const heading = Array.isArray(headingData) ? headingData : [];
  const strategies = Array.isArray(cardsData)
    ? cardsData.map((item, index) => ({
        ...item,
        icon: icons[index],
      }))
    : [];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".seamless-word", {
        yPercent: 110,
        opacity: 0,
      });

      gsap.set(".seamless-subtitle", {
        y: 25,
        opacity: 0,
        filter: "blur(8px)",
      });

      gsap.set(cardsRef.current, {
        y: 80,
        opacity: 0,
        scale: 0.82,
        rotateX: 16,
        filter: "blur(12px)",
      });

      gsap.set(".seamless-icon", {
        scale: 0,
        rotate: -25,
        opacity: 0,
      });

      if (lineRef.current) {
        gsap.set(lineRef.current, {
          scaleX: 0,
          transformOrigin: "left center",
        });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      tl.to(".seamless-word", {
        yPercent: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.08,
        ease: "power4.out",
      })
        .to(
          ".seamless-subtitle",
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
          lineRef.current,
          {
            scaleX: 1,
            duration: 1.1,
            ease: "power3.out",
          },
          "-=0.35",
        )
        .to(
          cardsRef.current,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 0.85,
            stagger: 0.14,
            ease: "back.out(1.35)",
          },
          "-=0.75",
        )
        .to(
          ".seamless-icon",
          {
            scale: 1,
            rotate: 0,
            opacity: 1,
            duration: 0.55,
            stagger: 0.12,
            ease: "back.out(1.8)",
          },
          "-=0.7",
        )
        .from(
          ".seamless-title",
          {
            y: 18,
            opacity: 0,
            duration: 0.45,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.55",
        )
        .from(
          ".seamless-desc",
          {
            y: 18,
            opacity: 0,
            duration: 0.45,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.48",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [strategies.length]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#071b0c] via-[#2f7f35] to-[#071b0c] px-4 py-20 font-montserrat text-white sm:px-6 lg:px-10"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="text-[42px] font-black leading-tight tracking-[0.08em] text-white sm:text-[56px] lg:text-[72px]">
            {heading.map((word, index) => (
              <span
                key={`${word}-${index}`}
                className="mr-4 inline-block overflow-hidden align-bottom"
              >
                <span
                  className={`seamless-word inline-block ${
                    index === heading.length - 1
                      ? "text-[#8bea8f]"
                      : "text-white"
                  } drop-shadow-[0_10px_25px_rgba(0,0,0,0.45)]`}
                >
                  {word}
                </span>
              </span>
            ))}
          </h2>

          <p className="seamless-subtitle mx-auto mt-5 max-w-2xl text-[15px] font-semibold leading-7 text-white/75 sm:text-[16px]">
            {t("ourApproach.seamlessStrategies.tagline")}
          </p>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute left-[8%] right-[8%] top-[92px] h-[3px] rounded-full bg-white/15">
            <div
              ref={lineRef}
              className="h-full w-full rounded-full bg-gradient-to-r from-[#d8ffd8] via-white/80 to-[#d8ffd8] shadow-[0_0_25px_rgba(216,255,216,0.45)]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {strategies.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`group relative ${
                index % 2 === 0 ? "lg:mt-0" : "lg:mt-16"
              }`}
            >
              <div className="absolute left-1/2 top-[-26px] z-20 hidden h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-[5px] border-[#123817] bg-[#d8ffd8] text-[10px] font-black text-[#123817] shadow-[0_0_25px_rgba(216,255,216,0.55)] lg:flex">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="relative min-h-[315px] overflow-hidden rounded-[30px] border border-white/20 bg-white/12 p-6 text-center shadow-[0_28px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 hover:border-[#d8ffd8]/70 hover:bg-white/18 hover:shadow-[0_35px_95px_rgba(0,0,0,0.38)]">
                <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#d8ffd8]/18 blur-2xl transition duration-500 group-hover:bg-[#d8ffd8]/30" />
                <div className="pointer-events-none absolute inset-0 rounded-[30px] bg-gradient-to-br from-white/12 via-transparent to-black/12" />

                <span className="pointer-events-none absolute bottom-2 right-4 text-[70px] font-black leading-none text-white/[0.06]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="seamless-icon relative z-10 mx-auto -mt-2 mb-5 flex h-24 w-24 items-center justify-center rounded-[28px] border border-white/25 bg-[#d8ffd8]/12 shadow-[0_20px_45px_rgba(0,0,0,0.22)] transition duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-[#d8ffd8]/22">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="h-16 w-16 object-contain"
                  />
                </div>

                <h3 className="seamless-title relative z-10 mx-auto mb-3 max-w-[230px] text-[23px] font-black leading-snug text-white drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)]">
                  {item.title}
                </h3>

                <p className="seamless-desc relative z-10 mx-auto max-w-[260px] text-[14px] font-semibold leading-7 text-white/78">
                  {item.description}
                </p>

                <div className="absolute left-6 top-6 h-2 w-2 rounded-full bg-[#d8ffd8] shadow-[0_0_14px_rgba(216,255,216,0.8)]" />

                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/18 to-transparent transition duration-700 group-hover:translate-x-full" />
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 h-[3px] max-w-[260px] rounded-full bg-gradient-to-r from-transparent via-[#d8ffd8] to-transparent lg:hidden" />
      </div>
    </section>
  );
};

export default SeamlessStategies;
