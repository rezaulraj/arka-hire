import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaChartLine,
  FaUsersCog,
  FaHandshake,
  FaClipboardCheck,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";

import cliendHero from "../../assets/client.webp";

gsap.registerPlugin(ScrollTrigger);

const strategyIcons = [FaChartLine, FaUsersCog, FaHandshake, FaClipboardCheck];

const CliendHero = () => {
  const { t } = useTranslation();

  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const heroTextRef = useRef(null);
  const floatingRef = useRef(null);
  const strategyRef = useRef(null);
  const cardsRef = useRef([]);

  const headingData = t("ourApproach.clientConsultation.heading", {
    returnObjects: true,
  });

  const heroTextData = t("ourApproach.clientConsultation.heroText", {
    returnObjects: true,
  });

  const pointsData = t("ourApproach.clientConsultation.points", {
    returnObjects: true,
  });

  const strategyCardsData = t(
    "ourApproach.clientConsultation.strategies.cards",
    {
      returnObjects: true,
    },
  );

  const heading = Array.isArray(headingData) ? headingData : [];
  const heroText = Array.isArray(heroTextData) ? heroTextData : [];
  const points = Array.isArray(pointsData) ? pointsData : [];
  const strategyCards = Array.isArray(strategyCardsData)
    ? strategyCardsData.map((item, index) => ({
        ...item,
        icon: strategyIcons[index],
      }))
    : [];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".client-word", {
        yPercent: 110,
        opacity: 0,
      });

      gsap.set(heroTextRef.current, {
        y: 35,
        opacity: 0,
        filter: "blur(10px)",
      });

      gsap.set(imageRef.current, {
        x: -80,
        opacity: 0,
        scale: 0.92,
        rotate: -2,
        filter: "blur(10px)",
      });

      gsap.set(floatingRef.current, {
        y: 45,
        opacity: 0,
        scale: 0.9,
        filter: "blur(8px)",
      });

      gsap.set(strategyRef.current, {
        y: 40,
        opacity: 0,
        filter: "blur(8px)",
      });

      gsap.set(cardsRef.current, {
        y: 70,
        opacity: 0,
        scale: 0.9,
        filter: "blur(10px)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      tl.to(".client-word", {
        yPercent: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.06,
        ease: "power4.out",
      })
        .to(
          heroTextRef.current,
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.45",
        )
        .to(
          imageRef.current,
          {
            x: 0,
            opacity: 1,
            scale: 1,
            rotate: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "power4.out",
          },
          "-=0.7",
        )
        .to(
          floatingRef.current,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.75,
            ease: "back.out(1.6)",
          },
          "-=0.45",
        )
        .to(
          strategyRef.current,
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.15",
        )
        .to(
          cardsRef.current,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.8,
            stagger: 0.13,
            ease: "power4.out",
          },
          "-=0.45",
        )
        .from(
          ".client-point",
          {
            x: 20,
            opacity: 0,
            duration: 0.45,
            stagger: 0.07,
            ease: "power3.out",
          },
          "-=1.4",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#0C1A0E] via-[#2f7f35] to-[#0C1A0E] px-4 py-16 font-montserrat text-white sm:px-6 lg:px-10 lg:py-20"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <h1 className="mb-6 text-center text-[38px] font-black leading-tight tracking-tight text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.35)] sm:text-[52px] lg:text-[66px]">
          {heading.map((word, index) => (
            <span
              key={`${word}-${index}`}
              className="mr-4 inline-block overflow-hidden align-bottom"
            >
              <span
                className={`client-word inline-block ${
                  word === "Consultation" ? "text-[#8bea8f]" : "text-white"
                }`}
              >
                {word}
              </span>
            </span>
          ))}
        </h1>

        {/* Hero */}
        <section className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div
              ref={imageRef}
              className="relative overflow-hidden rounded-[28px] border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.38)]"
            >
              <img
                src={cliendHero}
                alt={t("ourApproach.clientConsultation.heroImageAlt")}
                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[470px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#113719]/25 via-transparent to-[#113719]/20" />
            </div>

            <div
              ref={floatingRef}
              className="absolute -bottom-7 left-5 max-w-[330px] rounded-2xl border border-white/20 bg-white/12 p-5 shadow-[0_22px_55px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:left-8"
            >
              <p className="mb-2 text-[12px] font-black uppercase tracking-[0.25em] text-[#a9ff9d]">
                {t("ourApproach.clientConsultation.floatingCard.badge")}
              </p>

              <h3 className="text-[18px] font-black leading-tight text-white">
                {t("ourApproach.clientConsultation.floatingCard.title")}
              </h3>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <div ref={heroTextRef}>
              {heroText.map((text, index) => (
                <p
                  key={index}
                  className={`text-[15px] font-semibold leading-8 text-white/85 sm:text-[16px] ${
                    index === heroText.length - 1 ? "mb-7" : "mb-5"
                  }`}
                >
                  {text}
                </p>
              ))}

              <div className="space-y-2">
                {points.map((point, index) => (
                  <div
                    key={index}
                    className="client-point flex items-start gap-3 px-4 py-1 backdrop-blur-sm"
                  >
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e60000] text-[10px] text-white">
                      <FaCheck />
                    </span>

                    <p className="text-[13px] font-bold leading-6 text-white/88">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                to={t("ourApproach.clientConsultation.cta.link")}
                className="group relative mt-8 inline-flex overflow-hidden rounded-full bg-[#e60000] px-8 py-3.5 text-[13px] font-black uppercase tracking-[0.08em] text-white shadow-[0_18px_45px_rgba(230,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#c90000]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t("ourApproach.clientConsultation.cta.buttonText")}
                  <FaArrowRight />
                </span>

                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition duration-500 group-hover:translate-x-full" />
              </Link>
            </div>
          </div>
        </section>

        {/* Strategies */}
        <section className="mt-28">
          <div ref={strategyRef} className="mb-12 text-center">
            <p className="mb-3 text-[12px] font-black uppercase tracking-[0.35em] text-[#a9ff9d]">
              {t("ourApproach.clientConsultation.strategies.sectionBadge")}
            </p>

            <h2 className="text-[34px] font-black leading-tight text-white drop-shadow-[0_8px_18px_rgba(0,0,0,0.32)] sm:text-[46px] lg:text-[56px]">
              {t("ourApproach.clientConsultation.strategies.sectionTitle")}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {strategyCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={`${item.title}-${index}`}
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  className="group relative overflow-hidden rounded-[22px] border border-white/15 bg-white/10 p-6 shadow-[0_22px_65px_rgba(0,0,0,0.24)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#a9ff9d]/60 hover:bg-white/15"
                >
                  <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#a9ff9d]/15 blur-2xl transition duration-500 group-hover:bg-[#a9ff9d]/25" />

                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#a9ff9d]/35 bg-[#a9ff9d]/12 text-[#d8ffd8] shadow-[0_0_22px_rgba(169,255,157,0.15)] transition duration-500 group-hover:scale-110 group-hover:-rotate-6">
                    {Icon && <Icon className="text-[22px]" />}
                  </div>

                  <h3 className="mb-3 text-[17px] font-black leading-tight text-white">
                    {item.title}
                  </h3>

                  <p className="text-[13px] font-semibold leading-7 text-white/72">
                    {item.desc}
                  </p>

                  <span className="pointer-events-none absolute bottom-2 right-4 text-[54px] font-black leading-none text-white/[0.035]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
};

export default CliendHero;
