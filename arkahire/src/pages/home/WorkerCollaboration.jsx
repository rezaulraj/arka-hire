import React, { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import colabortion from "../../assets/consulting.webp";

gsap.registerPlugin(ScrollTrigger);

const WorkerCollaboration = () => {
  const { t } = useTranslation();

  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const cardsRef = useRef([]);
  const buttonsRef = useRef([]);

  const title = t("home.workerCollaboration.title").split(" ");

  const paragraphs = t("home.workerCollaboration.paragraphs", {
    returnObjects: true,
  });

  const buttons = t("home.workerCollaboration.buttons", {
    returnObjects: true,
  });

  const floatingCards = t("home.workerCollaboration.floatingCards", {
    returnObjects: true,
  });

  const cardPositions = [
    "lg:right-4 lg:top-5 xl:-right-25 xl:top-2",
    "lg:right-16 lg:top-[145px] xl:-right-10 xl:top-[165px]",
    "lg:right-4 lg:bottom-8 xl:-right-25 xl:bottom-2",
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".wc-word", {
        yPercent: 110,
        opacity: 0,
      });

      gsap.set(".wc-text", {
        y: 22,
        opacity: 0,
        filter: "blur(8px)",
      });

      gsap.set(imageRef.current, {
        x: 80,
        opacity: 0,
        scale: 0.92,
        filter: "blur(10px)",
      });

      gsap.set(cardsRef.current, {
        x: 60,
        opacity: 0,
        scale: 0.9,
        filter: "blur(8px)",
      });

      gsap.set(buttonsRef.current, {
        y: 24,
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      tl.to(".wc-word", {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.045,
        ease: "power4.out",
      })
        .to(
          ".wc-text",
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.45",
        )
        .to(
          buttonsRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.35",
        )
        .to(
          imageRef.current,
          {
            x: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power4.out",
          },
          "-=0.8",
        )
        .to(
          cardsRef.current,
          {
            x: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.75,
            stagger: 0.16,
            ease: "back.out(1.4)",
          },
          "-=0.45",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-linear-to-r from-[#0C1A0E] via-[#2f7f35] to-[#0C1A0E] px-4 py-16 font-montserrat sm:px-6 lg:px-10 lg:py-20"
    >
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.88fr_1.12fr]">
        {/* Left content */}
        <div>
          <h2 className="mb-5 max-w-2xl text-[28px] font-black leading-tight text-white sm:text-[38px] lg:text-[46px]">
            {title.map((word, index) => (
              <span
                key={index}
                className="mr-2 inline-block overflow-hidden align-bottom"
              >
                <span
                  className={`wc-word inline-block ${
                    index === 0
                      ? "bg-[#8bea8f] bg-clip-text text-transparent"
                      : ""
                  }`}
                >
                  {word}
                </span>
              </span>
            ))}
          </h2>

          <div className="space-y-4 text-[15px] font-medium leading-7 text-white/90 sm:text-[16px]">
            {Array.isArray(paragraphs) &&
              paragraphs.map((text, index) => (
                <p key={index} className="wc-text">
                  {text}
                </p>
              ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              ref={(el) => (buttonsRef.current[0] = el)}
              href="/workers-and-agencies/open-job"
              className="group relative inline-flex justify-center overflow-hidden rounded-md bg-[#0b6b16] px-7 py-3 text-[14px] font-semibold text-white shadow-[0_14px_35px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-[#0d7a1a]"
            >
              <span className="relative z-10">{buttons.jobSeekers}</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-500 group-hover:translate-x-full" />
            </a>

            <a
              ref={(el) => (buttonsRef.current[1] = el)}
              href="/contact-us"
              className="group relative inline-flex justify-center overflow-hidden rounded-md border border-white/15 bg-[#0d5c16] px-7 py-3 text-[14px] font-semibold text-white shadow-[0_14px_35px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-white/35 hover:bg-[#0b6b16]"
            >
              <span className="relative z-10">{buttons.agents}</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-500 group-hover:translate-x-full" />
            </a>
          </div>
        </div>

        {/* Right image */}
        <div className="relative">
          <div
            ref={imageRef}
            className="relative overflow-hidden rounded-[14px] border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.35)]"
          >
            <img
              src={colabortion}
              alt={t("home.workerCollaboration.imageAlt")}
              className="h-[360px] w-full object-cover sm:h-[430px] lg:h-[390px] xl:h-[420px]"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#153f1f]/20 via-transparent to-[#153f1f]/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          </div>

          {/* Floating cards desktop */}
          <div className="hidden lg:block">
            {Array.isArray(floatingCards) &&
              floatingCards.map((card, index) => (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className={`absolute w-[350px] rounded-xl border-[6px] border-white/35 bg-[#096111]/50 p-4 text-white shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-[#0b7415] ${cardPositions[index]}`}
                >
                  <h3 className="mb-2 text-[15px] font-extrabold leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-[13px] font-semibold leading-6 text-white/95">
                    {card.desc}
                  </p>
                </div>
              ))}
          </div>

          {/* Floating cards mobile */}
          <div className="mt-5 grid gap-4 lg:hidden">
            {Array.isArray(floatingCards) &&
              floatingCards.map((card, index) => (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="rounded-xl border border-white/15 bg-[#096111] p-4 text-white shadow-xl"
                >
                  <h3 className="mb-2 text-[15px] font-extrabold leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-[13px] font-semibold leading-6 text-white/90">
                    {card.desc}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkerCollaboration;
