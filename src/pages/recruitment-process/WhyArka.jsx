import React, { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import whyarka from "../../assets/whyarka.gif";

gsap.registerPlugin(ScrollTrigger);

const WhyArka = () => {
  const { t } = useTranslation();

  const sectionRef = useRef(null);
  const textRef = useRef([]);
  const buttonRef = useRef(null);
  const headingRef = useRef(null);
  const titleRef = useRef(null);

  const textsData = t("employers.recruitmentPage.whyArka.texts", {
    returnObjects: true,
  });

  const texts = Array.isArray(textsData) ? textsData : [];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          headingRef.current,
          titleRef.current,
          buttonRef.current,
          ...textRef.current.filter(Boolean),
        ],
        {
          y: 30,
          opacity: 0,
        },
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.to(headingRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
      })
        .to(
          titleRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.45",
        )
        .to(
          textRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.12,
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
            duration: 0.6,
            ease: "back.out(1.5)",
          },
          "-=0.3",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [texts.length]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#0C1A0E] via-[#2f7f35] to-[#0C1A0E] px-4 py-20 font-montserrat sm:px-6 lg:px-16"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row">
        {/* Left GIF */}
        <div className="flex-1">
          <img
            src={whyarka}
            alt={t("employers.recruitmentPage.whyArka.imageAlt")}
            className="w-full max-w-lg rounded-lg object-cover shadow-2xl"
          />
        </div>

        {/* Right Text */}
        <div className="flex flex-1 flex-col items-start gap-4 text-left">
          <p
            ref={headingRef}
            className="text-[14px] font-black uppercase tracking-[0.18em] text-[#ff3030]"
          >
            {t("employers.recruitmentPage.whyArka.badge")}
          </p>

          <h2
            ref={titleRef}
            className="text-3xl font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)] sm:text-4xl lg:text-5xl"
          >
            {t("employers.recruitmentPage.whyArka.title")}
          </h2>

          {texts.map((text, i) => (
            <p
              key={`${text}-${i}`}
              ref={(el) => {
                textRef.current[i] = el;
              }}
              className="text-base leading-relaxed text-white/80 sm:text-lg"
            >
              {text}
            </p>
          ))}

          <button
            ref={buttonRef}
            className="mt-6 rounded-md bg-red-600 px-6 py-3 font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            {t("employers.recruitmentPage.whyArka.button")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyArka;
