import React, { useRef, useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import seamlessint from "../../assets/seamlessint.webp";
import { ArrowBigRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const HeroSeamless = () => {
  const { t } = useTranslation();

  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const bulletRefs = useRef([]);
  const buttonRef = useRef(null);

  const pointsData = t("ourApproach.seamlessIntegration.points", {
    returnObjects: true,
  });

  const points = Array.isArray(pointsData) ? pointsData : [];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(imageRef.current, {
        x: -80,
        opacity: 0,
        scale: 0.95,
        filter: "blur(6px)",
      });

      gsap.set([headingRef.current, textRef.current], {
        y: 40,
        opacity: 0,
        filter: "blur(8px)",
      });

      gsap.set(bulletRefs.current, {
        x: 20,
        opacity: 0,
      });

      gsap.set(buttonRef.current, {
        y: 20,
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.to(headingRef.current, {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "power3.out",
      })
        .to(
          imageRef.current,
          {
            x: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6",
        )
        .to(
          textRef.current,
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6",
        )
        .to(
          bulletRefs.current,
          {
            x: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .to(
          buttonRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.5)",
          },
          "-=0.4",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-r from-[#0C1A0E] via-[#2f7f35] to-[#0C1A0E] px-4 py-10 font-montserrat text-white sm:px-6 lg:px-16"
    >
      <h2
        ref={headingRef}
        className="pb-10 text-center text-[28px] font-extrabold leading-snug tracking-tight sm:text-[32px] lg:text-[36px]"
      >
        {t("ourApproach.seamlessIntegration.heading")}
      </h2>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative">
          <div ref={imageRef} className="overflow-hidden rounded-xl shadow-xl">
            <img
              src={seamlessint}
              alt={t("ourApproach.seamlessIntegration.heroImageAlt")}
              className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[480px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <p
            ref={textRef}
            className="text-[14px] leading-relaxed text-white/85 sm:text-[15px]"
          >
            {t("ourApproach.seamlessIntegration.intro")}
          </p>

          <div className="flex flex-col gap-1">
            {points.map((point, idx) => (
              <div
                key={`${point}-${idx}`}
                ref={(el) => {
                  bulletRefs.current[idx] = el;
                }}
                className="flex items-start gap-3 px-4 py-2 text-[13px] font-semibold"
              >
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center text-[10px] text-white">
                  <ArrowBigRight />
                </span>

                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <a
        href="/contact-us"
          ref={buttonRef}
          className="mt-6 w-[220px] rounded-full bg-red-600 px-6 py-3 text-[13px] font-black uppercase text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-red-700"
        >
          {t("ourApproach.seamlessIntegration.cta.buttonText")}
        </a>
      </div>
    </section>
  );
};

export default HeroSeamless;
