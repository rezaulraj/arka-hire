import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";

import whyarka from "../../assets/whyarka.gif";
import work1 from "../../assets/rec1.webp";
import work2 from "../../assets/rec2.webp";
import work3 from "../../assets/rec3.webp";

gsap.registerPlugin(ScrollTrigger);

const TemporaryAdvantage = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef([]);

  const basePath = "employers.temporaryRecruitmentPage.temporaryAdvantage";

  const heading = t(`${basePath}.heading`, { returnObjects: true });
  const cards = t(`${basePath}.cards`, { returnObjects: true });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".adv-word", { yPercent: 110, opacity: 0 });
      gsap.set(imageRef.current, {
        x: -60,
        opacity: 0,
        scale: 0.92,
        filter: "blur(10px)",
      });
      gsap.set(textRef.current, { x: 60, opacity: 0, filter: "blur(10px)" });
      gsap.set(cardsRef.current, {
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

      tl.to(imageRef.current, {
        x: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.9,
        ease: "power4.out",
      })
        .to(
          textRef.current,
          {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.85,
            ease: "power3.out",
          },
          "-=0.65",
        )
        .to(
          ".adv-word",
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.06,
            ease: "power4.out",
          },
          "-=0.35",
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
            ease: "back.out(1.35)",
          },
          "-=0.45",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#071b0c] via-[#2f7f35] to-[#071b0c] px-4 py-20 font-montserrat text-white sm:px-6 lg:px-10"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Top section */}
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div
            ref={imageRef}
            className="group relative mx-auto w-full max-w-[520px] overflow-hidden rounded-[16px] border border-white/15 bg-white p-5 shadow-[0_28px_80px_rgba(0,0,0,0.28)]"
          >
            <img
              src={whyarka}
              alt={t(`${basePath}.imageAlt`)}
              className="h-[210px] w-full rounded-[10px] object-contain transition duration-700 group-hover:scale-105 sm:h-[260px]"
            />
            <div className="pointer-events-none absolute inset-0 rounded-[16px] bg-gradient-to-br from-transparent via-transparent to-[#2f7f35]/10" />
          </div>

          <div ref={textRef}>
            <p className="mb-3 text-[13px] font-black uppercase tracking-[0.2em] text-[#ff3030]">
              {t(`${basePath}.topBadge`)}
            </p>
            <h2 className="max-w-xl text-[32px] font-black leading-[1.05] tracking-tight text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.4)] sm:text-[44px] lg:text-[54px]">
              {t(`${basePath}.topTitle`)}
            </h2>
            <p className="mt-5 max-w-xl text-[14px] font-bold leading-7 text-white/82">
              {t(`${basePath}.topDescription`)}
            </p>
            <Link
              to={t(`${basePath}.button.path`)}
              className="group relative mt-7 inline-flex overflow-hidden rounded-sm bg-[#e60000] px-7 py-3 text-[13px] font-black text-white shadow-[0_18px_45px_rgba(230,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#c90000]"
            >
              <span className="relative z-10">
                {t(`${basePath}.button.text`)}
              </span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition duration-500 group-hover:translate-x-full" />
            </Link>
          </div>
        </div>

        {/* Bottom cards */}
        <div className="mt-24 text-center">
          <h2 className="text-[34px] font-black leading-tight tracking-wide text-white sm:text-[46px] lg:text-[56px]">
            {heading.map((word, index) => (
              <span
                key={index}
                className="mr-3 inline-block overflow-hidden align-bottom"
              >
                <span
                  className={`adv-word inline-block ${index === heading.length - 1 ? "text-[#d8ffd8]" : "text-white"} drop-shadow-[0_10px_25px_rgba(0,0,0,0.45)]`}
                >
                  {word}
                </span>
              </span>
            ))}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-[14px] font-semibold leading-7 text-white/78">
            {t(`${basePath}.description`)}
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-7 md:grid-cols-3">
          {cards.map((item, index) => (
            <div
              key={item.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative overflow-hidden rounded-[22px] border border-white/18 bg-white/8 p-6 text-center shadow-[0_24px_70px_rgba(0,0,0,0.26)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-[#d8ffd8]/60 hover:bg-white/12 hover:shadow-[0_34px_90px_rgba(0,0,0,0.38)]"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#d8ffd8]/16 blur-2xl transition duration-500 group-hover:bg-[#d8ffd8]/28" />
              <div className="relative z-10 mx-auto mb-5 h-[118px] w-[170px] overflow-hidden rounded-full border border-white/25 bg-white/90 p-2 shadow-[0_18px_45px_rgba(0,0,0,0.24)] transition duration-500 group-hover:scale-105 group-hover:-rotate-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <h3 className="relative z-10 mb-3 text-[20px] font-black leading-tight text-white drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)]">
                {item.title}
              </h3>
              <p className="relative z-10 text-[13px] font-bold leading-6 text-white/78">
                {item.description}
              </p>
              <span className="pointer-events-none absolute bottom-2 right-4 text-[64px] font-black leading-none text-white/[0.05]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="mx-auto mt-5 h-[2px] w-14 rounded-full bg-[#d8ffd8]/70 transition-all duration-500 group-hover:w-28" />
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/18 to-transparent transition duration-700 group-hover:translate-x-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemporaryAdvantage;
