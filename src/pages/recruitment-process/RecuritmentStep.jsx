import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import recruitmentstep from "../../assets/recruitmentfach.avif";

gsap.registerPlugin(ScrollTrigger);

const RecuritmentStep = () => {
  const { t } = useTranslation();

  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const listRef = useRef([]);
  const buttonRef = useRef(null);

  const headingData = t("employers.recruitmentPage.recruitmentSteps.heading", {
    returnObjects: true,
  });

  const stepsData = t("employers.recruitmentPage.recruitmentSteps.steps", {
    returnObjects: true,
  });

  const heading = Array.isArray(headingData)
    ? headingData
    : typeof headingData === "string"
      ? headingData.split(" ")
      : [];

  const steps = Array.isArray(stepsData) ? stepsData : [];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".step-word", {
        yPercent: 110,
        opacity: 0,
      });

      gsap.set(contentRef.current, {
        y: 35,
        opacity: 0,
        filter: "blur(8px)",
      });

      gsap.set(listRef.current, {
        y: 24,
        opacity: 0,
        filter: "blur(6px)",
      });

      gsap.set(buttonRef.current, {
        y: 24,
        opacity: 0,
        scale: 0.92,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.to(".step-word", {
        yPercent: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.08,
        ease: "power4.out",
      })
        .to(
          contentRef.current,
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
          listRef.current,
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.55,
            stagger: 0.09,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .to(
          buttonRef.current,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.65,
            ease: "back.out(1.5)",
          },
          "-=0.3",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [steps.length]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[520px] w-full items-center justify-center overflow-hidden bg-black px-4 py-20 font-montserrat text-white sm:px-6 lg:min-h-[620px] lg:px-10"
    >
      {/* Background image */}
      <img
        src={recruitmentstep}
        alt={t("employers.recruitmentPage.recruitmentSteps.imageAlt")}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071b0c]/80 via-transparent to-[#071b0c]/40" />

      {/* Decorative blur */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2f7f35]/25 blur-[120px]" />

      {/* Center content */}
      <div
        ref={contentRef}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <p className="mb-4 text-[13px] font-black uppercase tracking-[0.3em] text-[#ff3030]">
          {t("employers.recruitmentPage.recruitmentSteps.badge")}
        </p>

        <h2 className="text-[42px] font-black leading-tight tracking-[0.06em] text-white drop-shadow-[0_12px_30px_rgba(0,0,0,0.55)] sm:text-[58px] lg:text-[76px]">
          {heading.map((word, index) => (
            <span
              key={`${word}-${index}`}
              className="mr-4 inline-block overflow-hidden align-bottom"
            >
              <span
                className={`step-word inline-block ${
                  index === heading.length - 1 ? "text-[#d8ffd8]" : "text-white"
                }`}
              >
                {word}
              </span>
            </span>
          ))}
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-[15px] font-semibold leading-7 text-white/82 sm:text-[16px]">
          {t("employers.recruitmentPage.recruitmentSteps.description")}
        </p>

        {/* Steps */}
        <div className="mx-auto mt-9 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
          {steps.map((step, index) => (
            <div
              key={`${step}-${index}`}
              ref={(el) => {
                listRef.current[index] = el;
              }}
              className="group flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-left shadow-[0_12px_35px_rgba(0,0,0,0.22)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#d8ffd8]/50 hover:bg-white/15"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e60000] text-[11px] font-black text-white shadow-[0_0_18px_rgba(230,0,0,0.45)]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="text-[13px] font-bold text-white/90 sm:text-[14px]">
                {step}
              </span>
            </div>
          ))}
        </div>

        <Link
          ref={buttonRef}
          to={t("employers.recruitmentPage.recruitmentSteps.button.path")}
          className="group relative mt-9 inline-flex overflow-hidden rounded-md bg-[#e60000] px-8 py-3.5 text-[13px] font-black uppercase tracking-[0.1em] text-white shadow-[0_18px_45px_rgba(230,0,0,0.3)] transition duration-300 hover:-translate-y-1 hover:bg-[#c90000]"
        >
          <span className="relative z-10">
            {t("employers.recruitmentPage.recruitmentSteps.button.text")}
          </span>

          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition duration-500 group-hover:translate-x-full" />
        </Link>
      </div>
    </section>
  );
};

export default RecuritmentStep;
