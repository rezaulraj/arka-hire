import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LetsTalk from "../home/LetsTalk";

gsap.registerPlugin(ScrollTrigger);

const IndustriePage = () => {
  const { t } = useTranslation();

  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // ✅ Correct path according to your JSON
  const basePath = "industriesPage";

  const headingData = t(`${basePath}.heading`, {
    returnObjects: true,
  });

  const industriesData = t(`${basePath}.industries`, {
    returnObjects: true,
  });

  const heading = Array.isArray(headingData) ? headingData : [];
  const industries = Array.isArray(industriesData) ? industriesData : [];

  const activeIndustry = industries[activeIndex] || industries[0];

  useLayoutEffect(() => {
    if (!industries.length) return;

    const ctx = gsap.context(() => {
      gsap.set(".industry-word", {
        yPercent: 110,
        opacity: 0,
      });

      gsap.set(".industry-subtitle", {
        y: 24,
        opacity: 0,
        filter: "blur(8px)",
      });

      gsap.set(cardsRef.current.filter(Boolean), {
        y: 80,
        opacity: 0,
        scale: 0.88,
        rotateX: 14,
        filter: "blur(12px)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.to(".industry-word", {
        yPercent: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.07,
        ease: "power4.out",
      })
        .to(
          ".industry-subtitle",
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.45"
        )
        .to(
          cardsRef.current.filter(Boolean),
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 0.85,
            stagger: 0.08,
            ease: "back.out(1.35)",
          },
          "-=0.35"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [industries.length]);

  useEffect(() => {
    if (isHovering || industries.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % industries.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovering, industries.length]);

  if (!activeIndustry) {
    return (
      <section className="bg-[#143f1f] px-4 py-20 text-center text-white">
        Industries data not found. Please check your i18n JSON path:
        <br />
        <strong>industriesPage</strong>
      </section>
    );
  }

  return (
    <>
      <section
        ref={sectionRef}
        className="relative w-full overflow-hidden bg-gradient-to-r from-[#071b0c] via-[#2f7f35] to-[#071b0c] px-4 py-20 font-montserrat text-white sm:px-6 lg:px-10"
      >
        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Heading */}
          <div className="mx-auto mb-16 max-w-5xl text-center">
            <p className="mb-4 text-[12px] font-black uppercase tracking-[0.35em] text-[#d8ffd8]">
              {t(`${basePath}.badge`)}
            </p>

            <h1 className="text-[42px] font-black leading-tight tracking-[0.07em] sm:text-[58px] lg:text-[78px]">
              {heading.map((word, index) => (
                <span
                  key={`${word}-${index}`}
                  className="mr-4 inline-block overflow-hidden align-bottom"
                >
                  <span
                    className={`industry-word inline-block ${
                      index === heading.length - 1
                        ? "text-[#d8ffd8]"
                        : "text-white"
                    } drop-shadow-[0_12px_30px_rgba(0,0,0,0.45)]`}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </h1>

            <p className="industry-subtitle mx-auto mt-5 max-w-3xl text-[15px] font-semibold leading-7 text-white/75 sm:text-[16px]">
              {t(`${basePath}.subtitle`)}
            </p>
          </div>

          {/* Featured Active Showcase */}
          <div className="mb-12 grid items-center gap-8 rounded-[34px] border border-white/15 bg-white/10 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.32)] backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
            <div className="group relative h-[340px] overflow-hidden rounded-[28px] shadow-[0_24px_70px_rgba(0,0,0,0.35)] sm:h-[430px]">
              <img
                key={activeIndustry.title}
                src={activeIndustry.image}
                alt={activeIndustry.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110 animate-[industryFade_0.7s_ease]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#2f7f35]/30 via-transparent to-black/15" />

              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="mb-2 text-[12px] font-black uppercase tracking-[0.28em] text-[#d8ffd8]">
                  {t(`${basePath}.activeIndustryLabel`)}
                </p>

                <h2 className="text-[34px] font-black leading-tight text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.45)] sm:text-[50px]">
                  {activeIndustry.title}
                </h2>
              </div>

              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-full" />
            </div>

            <div>
              <p className="mb-4 text-[13px] font-black uppercase tracking-[0.25em] text-[#d8ffd8]">
                {t(`${basePath}.badge`)}
              </p>

              <h3 className="mb-6 text-[30px] font-black leading-tight text-white sm:text-[40px]">
                {t(`${basePath}.activeWorkersTitle`)}
              </h3>

              <div className="flex flex-wrap gap-3">
                {activeIndustry.workers?.map((worker) => (
                  <span
                    key={worker}
                    className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[13px] font-bold text-white/90 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#d8ffd8]/60 hover:bg-[#d8ffd8]/15"
                  >
                    {worker}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Industry Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <button
                type="button"
                key={`${industry.title}-${index}`}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                onMouseEnter={() => {
                  setIsHovering(true);
                  setActiveIndex(index);
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                }}
                onClick={() => {
                  setActiveIndex(index);
                }}
                className={`group relative min-h-[380px] overflow-hidden rounded-[28px] border text-left shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-[#d8ffd8]/65 hover:shadow-[0_34px_90px_rgba(0,0,0,0.36)] ${
                  activeIndex === index
                    ? "border-[#d8ffd8]/80 bg-[#d8ffd8]/15"
                    : "border-white/15 bg-white/10"
                }`}
              >
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/45 to-black/15" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#2f7f35]/25 via-transparent to-black/25" />

                <span className="absolute right-5 top-5 text-[54px] font-black leading-none text-white/15">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="mb-2 text-[11px] font-black uppercase tracking-[0.25em] text-[#d8ffd8]">
                    {t(`${basePath}.badge`)}
                  </p>

                  <h3 className="mb-4 text-[25px] font-black leading-tight text-white drop-shadow-[0_8px_18px_rgba(0,0,0,0.45)]">
                    {industry.title}
                  </h3>

                  <div className="flex max-h-[92px] flex-wrap gap-2 overflow-hidden">
                    {industry.workers?.slice(0, 5).map((worker) => (
                      <span
                        key={worker}
                        className="rounded-full bg-white/12 px-3 py-1.5 text-[11px] font-bold text-white/88 backdrop-blur-md"
                      >
                        {worker}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-[12px] font-black uppercase tracking-[0.18em] text-white/60">
                      {t(`${basePath}.viewRoles`)}
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[18px] font-black text-white transition duration-300 group-hover:border-[#d8ffd8]/60 group-hover:bg-[#d8ffd8] group-hover:text-[#123817]">
                      →
                    </span>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/18 to-transparent transition duration-700 group-hover:translate-x-full" />
              </button>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes industryFade {
            from {
              opacity: 0;
              transform: scale(1.06);
              filter: blur(8px);
            }
            to {
              opacity: 1;
              transform: scale(1);
              filter: blur(0px);
            }
          }
        `}</style>
      </section>

      <LetsTalk />
    </>
  );
};

export default IndustriePage;