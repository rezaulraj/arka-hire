import React, { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactCountryFlag from "react-country-flag";
import { FaMapMarkerAlt, FaArrowRight, FaGlobe } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const countryImages = [
  "https://images.pexels.com/photos/29252744/pexels-photo-29252744.jpeg",
  "https://images.pexels.com/photos/20314803/pexels-photo-20314803.jpeg",
  "https://images.pexels.com/photos/16908385/pexels-photo-16908385.jpeg",
  "https://images.pexels.com/photos/37090868/pexels-photo-37090868.jpeg",
];

const cardClasses = [
  "cw-card-one",
  "cw-card-two",
  "cw-card-three",
  "cw-card-four",
];

const CountrySendWorker = () => {
  const { t } = useTranslation();

  const sectionRef = useRef(null);
  const stageRef = useRef(null);

  const statsData = t("home.countrySendWorker.stats", {
    returnObjects: true,
  });

  const countriesData = t("home.countrySendWorker.countries", {
    returnObjects: true,
  });

  const stats = Array.isArray(statsData) ? statsData : [];
  const countries = Array.isArray(countriesData)
    ? countriesData.map((country, index) => ({
        ...country,
        image: countryImages[index],
        cardClass: cardClasses[index],
      }))
    : [];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 35%",
          scrub: 1.2,
        },
      });

      tl.from(".cw-badge", {
        y: 24,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          ".cw-title-line",
          {
            y: 80,
            opacity: 0,
            rotateX: 55,
            stagger: 0.14,
            duration: 0.9,
            ease: "power4.out",
          },
          "-=0.3",
        )
        .from(
          ".cw-text",
          {
            y: 26,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.35",
        )
        .from(
          ".cw-stat",
          {
            y: 20,
            opacity: 0,
            stagger: 0.1,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3",
        );

      gsap.from(".cw-img-card", {
        scrollTrigger: {
          trigger: stageRef.current,
          start: "top 82%",
          end: "bottom 35%",
          scrub: 1.25,
        },
        x: 160,
        y: 110,
        rotate: 18,
        scale: 0.78,
        opacity: 0,
        stagger: 0.18,
        ease: "power3.out",
      });

      const parallax = [
        { cls: ".cw-card-one", y: -34, rotate: -8 },
        { cls: ".cw-card-two", y: 30, rotate: 5 },
        { cls: ".cw-card-three", y: -20, rotate: 8 },
        { cls: ".cw-card-four", y: 28, rotate: -5 },
      ];

      parallax.forEach(({ cls, y, rotate }) => {
        gsap.to(cls, {
          y,
          rotate,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.4,
          },
        });
      });

      gsap.to(".cw-glow", {
        scale: 1.25,
        opacity: 0.9,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
        .cw-section, .cw-section * { font-family: "Plus Jakarta Sans", sans-serif; box-sizing: border-box; }

        .cw-img-card::before {
          content: "";
          position: absolute;
          inset: 9px;
          z-index: 2;
          border-radius: 14px;
          background: linear-gradient(to top, rgba(4,13,28,0.85), rgba(4,13,28,0.1), transparent);
          pointer-events: none;
        }

        .cw-img-card img { transition: transform 0.7s ease; }
        .cw-img-card:hover img { transform: scale(1.08); }

        .cw-card-one  { width: 370px; height: 215px; top: 0px;   left: 60px;  transform: rotate(-7deg); z-index: 2; }
        .cw-card-two  { width: 410px; height: 235px; top: 170px; left: 130px; transform: rotate(4deg);  z-index: 4; }
        .cw-card-three{ width: 375px; height: 210px; top: 335px; left: 50px;  transform: rotate(8deg);  z-index: 5; }
        .cw-card-four { width: 360px; height: 205px; top: 498px; left: 110px; transform: rotate(-5deg); z-index: 3; }

        @media (max-width: 1024px) {
          .cw-card-one, .cw-card-two, .cw-card-three, .cw-card-four { left: 5%; }
          .cw-card-two  { left: 18%; }
          .cw-card-four { left: 10%; }
        }

        @media (max-width: 640px) {
          .cw-card-one, .cw-card-two, .cw-card-three, .cw-card-four {
            width: 270px; height: 158px;
          }
          .cw-card-one   { top: 0px;   left: 4px; }
          .cw-card-two   { top: 132px; left: 44px; }
          .cw-card-three { top: 262px; left: 8px; }
          .cw-card-four  { top: 390px; left: 36px; }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="cw-section relative min-h-screen overflow-hidden bg-linear-to-r from-[#0C1A0E] via-[#2f7f35] to-[#0C1A0E] py-28 px-5 sm:px-8"
      >
        <div className="relative z-10 mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left */}
          <div className="relative z-10">
            <div className="cw-badge mb-6 inline-flex items-center gap-2 rounded-full border border-[#2f7f35]/40 bg-[#2f7f35]/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#2f7f35] shadow-[0_0_6px_rgba(47,127,53,0.8)]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#2f7f35]">
                {t("home.countrySendWorker.badge")}
              </span>
            </div>

            <h2 className="mb-6 text-[clamp(40px,5.5vw,58px)] font-black uppercase leading-[0.95] tracking-[-0.06em] text-white">
              <span className="cw-title-line block origin-left">
                {t("home.countrySendWorker.titleLineOne")}
              </span>
              <span className="cw-title-line block origin-left">
                {t("home.countrySendWorker.titleLineTwo")
                  .split(" ")
                  .slice(0, -1)
                  .join(" ")}{" "}
                <span className="italic text-[#48b451]">
                  {
                    t("home.countrySendWorker.titleLineTwo")
                      .split(" ")
                      .slice(-1)[0]
                  }
                </span>
              </span>
            </h2>

            <p className="cw-text mb-8 max-w-[420px] text-[15px] font-medium leading-[1.8] text-white/55">
              {t("home.countrySendWorker.description")}
            </p>

            <div className="mb-10 flex flex-wrap gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="">
                  <p className="text-[28px] font-black leading-none tracking-tight text-[#2f7f35]">
                    {stat.num}
                  </p>
                  <p className="mt-1 text-[12px] font-semibold uppercase tracking-widest text-white/35">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <button className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#2f7f35] to-[#4aaf52] px-7 py-3.5 text-[12px] font-black uppercase tracking-[0.1em] text-white shadow-[0_16px_34px_rgba(47,127,53,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(47,127,53,0.45)]">
              <FaGlobe className="text-sm" />
              {t("home.countrySendWorker.button")}
              <FaArrowRight className="text-xs" />
            </button>
          </div>

          {/* Right */}
          <div
            ref={stageRef}
            className="relative min-h-[560px] sm:min-h-[720px]"
          >
            <div className="relative h-[720px] w-full">
              {countries.map((country) => (
                <div
                  key={country.code}
                  className={`cw-img-card ${country.cardClass} absolute overflow-hidden rounded-[22px] bg-white/90 p-[9px] shadow-[0_28px_65px_rgba(0,0,0,0.45)]`}
                >
                  <img
                    src={country.image}
                    alt={country.title}
                    className="h-full w-full rounded-[14px] object-cover"
                  />

                  <div className="absolute bottom-5 left-6 right-6 z-10 text-white">
                    <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#2f7f35]/50 bg-[#040d1c]/70 px-3 py-1 backdrop-blur-md">
                      <ReactCountryFlag
                        countryCode={country.code}
                        svg
                        style={{
                          width: "18px",
                          height: "14px",
                          borderRadius: "3px",
                        }}
                      />
                      <span className="text-[10px] font-black uppercase tracking-[0.14em] text-[#4aaf52]">
                        {country.code}
                      </span>
                      <FaMapMarkerAlt className="text-[9px] text-[#2f7f35]" />
                    </div>

                    <h3 className="mb-0.5 text-[19px] font-black leading-tight tracking-tight drop-shadow-lg">
                      {country.title}
                    </h3>

                    <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/60">
                      {country.city}
                    </p>

                    <p className="mt-1 text-[11px] font-medium text-white/55">
                      {country.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CountrySendWorker;
