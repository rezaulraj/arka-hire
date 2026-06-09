import React, { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import work1 from "../../assets/rec1.webp";
import work2 from "../../assets/rec2.webp";
import work3 from "../../assets/rec3.webp";

gsap.registerPlugin(ScrollTrigger);

const images = {
  work1,
  work2,
  work3,
};
console.log("imags", work1, work2, work3)
const WhyWorkUs = () => {
  const { t } = useTranslation();

  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const headingData = t("employers.recruitmentPage.whyWorkWithUs.heading", {
    returnObjects: true,
  });

  const cardsData = t("employers.recruitmentPage.whyWorkWithUs.cards", {
    returnObjects: true,
  });

  const heading = Array.isArray(headingData)
    ? headingData
    : typeof headingData === "string"
      ? headingData.split(" ")
      : [];

  const reasons = Array.isArray(cardsData)
    ? cardsData.map((item) => ({
        ...item,
        image: images[item.image],
      }))
    : [];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".work-word", {
        yPercent: 110,
        opacity: 0,
      });

      gsap.set(".work-subtitle", {
        y: 24,
        opacity: 0,
        filter: "blur(8px)",
      });

      gsap.set(cardsRef.current, {
        y: 70,
        opacity: 0,
        scale: 0.88,
        rotateX: 14,
        filter: "blur(10px)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.to(".work-word", {
        yPercent: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.055,
        ease: "power4.out",
      })
        .to(
          ".work-subtitle",
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.4",
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
            stagger: 0.16,
            ease: "back.out(1.35)",
          },
          "-=0.35",
        )
        .from(
          ".work-card-img",
          {
            scale: 0.6,
            opacity: 0,
            rotate: -8,
            duration: 0.55,
            stagger: 0.12,
            ease: "back.out(1.8)",
          },
          "-=0.65",
        )
        .from(
          ".work-card-title",
          {
            y: 18,
            opacity: 0,
            duration: 0.45,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          ".work-card-desc",
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
  }, [reasons.length]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#071b0c] via-[#2f7f35] to-[#071b0c] px-4 py-20 font-montserrat text-white sm:px-6 lg:px-10"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-5xl text-center">
          <h2 className="text-[34px] font-black leading-tight tracking-wide text-white sm:text-[48px] lg:text-[62px]">
            {heading.map((word, index) => (
              <span
                key={`${word}-${index}`}
                className="mr-3 inline-block overflow-hidden align-bottom"
              >
                <span
                  className={`work-word inline-block ${
                    word.toLowerCase() === "work" ||
                    word.toLowerCase() === "us?"
                      ? "text-[#d8ffd8]"
                      : "text-white"
                  } drop-shadow-[0_10px_25px_rgba(0,0,0,0.45)]`}
                >
                  {word}
                </span>
              </span>
            ))}
          </h2>

          <p className="work-subtitle mx-auto mt-5 max-w-4xl text-[14px] font-semibold leading-7 text-white/80 sm:text-[15px]">
            {t("employers.recruitmentPage.whyWorkWithUs.subtitle")}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={`${reason.title}-${index}`}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`group relative overflow-hidden rounded-[28px] border border-white/18 bg-white/10 p-6 text-center shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-[#d8ffd8]/65 hover:bg-white/15 hover:shadow-[0_34px_90px_rgba(0,0,0,0.38)] ${
                index === 1 ? "md:mt-10" : ""
              }`}
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#d8ffd8]/18 blur-2xl transition duration-500 group-hover:bg-[#d8ffd8]/30" />

              <span className="pointer-events-none absolute bottom-2 right-4 text-[72px] font-black leading-none text-white/[0.06]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="work-card-img relative z-10 mx-auto mb-6 h-[128px] w-[190px] overflow-hidden rounded-full border border-white/25 bg-white/90 p-2 shadow-[0_20px_45px_rgba(0,0,0,0.24)] transition duration-500 group-hover:scale-105 group-hover:-rotate-2">
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>

              <h3 className="work-card-title relative z-10 mb-3 text-[22px] font-black leading-tight text-white drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)]">
                {reason.title}
              </h3>

              <p className="work-card-desc relative z-10 text-[14px] font-semibold leading-7 text-white/78">
                {reason.description}
              </p>

              <div className="mx-auto mt-6 h-[2px] w-16 rounded-full bg-[#d8ffd8]/70 transition-all duration-500 group-hover:w-32" />

              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/18 to-transparent transition duration-700 group-hover:translate-x-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkUs;
