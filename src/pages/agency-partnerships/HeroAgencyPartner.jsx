import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import HeroImg from "../../assets/agencyPartner.webp";

export default function HeroAgencyPartner() {
  const { t } = useTranslation();

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const dividerRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const parasRef = useRef([]);
  const imageRef = useRef(null);

  const basePath = "workerandagencies.agencyPartnerPage.heroAgencyPartner";

  const paragraphsData = t(`${basePath}.paragraphs`, {
    returnObjects: true,
  });

  const paragraphs = Array.isArray(paragraphsData) ? paragraphsData : [];

  useEffect(() => {
    const load = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
          defaults: {
            ease: "power3.out",
          },
        });

        tl.fromTo(
          titleRef.current,
          {
            y: -40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
          },
        )
          .fromTo(
            subRef.current,
            {
              y: 20,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.65,
            },
            "-=0.4",
          )
          .fromTo(
            dividerRef.current,
            {
              scaleX: 0,
              transformOrigin: "left center",
            },
            {
              scaleX: 1,
              duration: 0.6,
              ease: "expo.out",
            },
            "-=0.3",
          )
          .fromTo(
            labelRef.current,
            {
              x: -30,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              duration: 0.5,
            },
            "-=0.2",
          )
          .fromTo(
            headingRef.current,
            {
              y: 40,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.75,
              ease: "expo.out",
            },
            "-=0.3",
          )
          .fromTo(
            parasRef.current.filter(Boolean),
            {
              y: 20,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              stagger: 0.12,
              duration: 0.5,
            },
            "-=0.4",
          )
          .fromTo(
            imageRef.current,
            {
              x: 60,
              opacity: 0,
              scale: 0.93,
            },
            {
              x: 0,
              opacity: 1,
              scale: 1,
              duration: 0.85,
              ease: "back.out(1.3)",
            },
            "-=0.7",
          );
      }, sectionRef);

      return () => ctx.revert();
    };

    load();
  }, [paragraphs.length]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#071b0c] via-[#2f7f35] to-[#071b0c] px-4 py-16 font-montserrat text-white sm:px-6 lg:px-10 lg:py-10"
    >
      {/* Top title */}
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-16 text-center lg:px-12">
        <h1
          ref={titleRef}
          className="mb-6 text-3xl font-semibold text-white lg:text-6xl"
        >
          {t(`${basePath}.heading`)}
        </h1>

        <p
          ref={subRef}
          className="mx-auto max-w-4xl text-base leading-relaxed text-white"
        >
          {t(`${basePath}.topDescription`)}
        </p>
      </div>

      {/* Divider line */}
      <div ref={dividerRef} className="mx-auto max-w-5xl px-6 lg:px-12">
        <div className="h-px w-full bg-white/10" />
      </div>

      {/* Bottom content */}
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 md:grid-cols-2 lg:px-12">
        {/* Left text */}
        <div>
          <p ref={labelRef} className="mb-4 text-sm font-semibold text-red-600">
            {t(`${basePath}.badge`)}
          </p>

          <h2
            ref={headingRef}
            className="mb-6 text-3xl font-black leading-tight text-white lg:text-4xl"
          >
            {t(`${basePath}.title`)}
          </h2>

          {paragraphs.map((text, index) => (
            <p
              key={`${text}-${index}`}
              ref={(el) => {
                parasRef.current[index] = el;
              }}
              className="mb-3 text-sm leading-relaxed text-white"
            >
              {text}
            </p>
          ))}
        </div>

        {/* Right image */}
        <div ref={imageRef} className="overflow-hidden rounded-2xl shadow-2xl">
          <img
            src={HeroImg}
            alt={t(`${basePath}.imageAlt`)}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            style={{ maxHeight: 340 }}
          />
        </div>
      </div>
    </section>
  );
}
