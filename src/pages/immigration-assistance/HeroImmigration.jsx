import React, { useEffect, useRef } from "react";
import { FaArrowRight, FaBrain, FaCogs, FaBalanceScale } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import heroImg from "../../assets/emi.webp";

const iconsMap = {
  FaArrowRight: <FaArrowRight size={22} />,
  FaCogs: <FaCogs size={22} />,
  FaBrain: <FaBrain size={22} />,
  FaBalanceScale: <FaBalanceScale size={22} />,
};

export default function HeroImmigration() {
  const { t } = useTranslation();

  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const imageRef = useRef(null);
  const cardRefs = useRef([]);

  const basePath = "employers.immigrationAssistancePage.heroImmigration";

  const imageLabelsData = t(`${basePath}.imageLabels`, {
    returnObjects: true,
  });

  const featuresData = t(`${basePath}.features`, {
    returnObjects: true,
  });

  const imageLabels = Array.isArray(imageLabelsData) ? imageLabelsData : [];

  const features = Array.isArray(featuresData)
    ? featuresData.map((item) => ({
        ...item,
        icon: iconsMap[item.icon],
      }))
    : [];

  useEffect(() => {
    const load = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        titleRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
      )
        .fromTo(
          subTitleRef.current,
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.4",
        )
        .fromTo(
          headingRef.current,
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8 },
          "-=0.3",
        )
        .fromTo(
          paraRef.current,
          { x: -30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6 },
          "-=0.4",
        )
        .fromTo(
          imageRef.current,
          { x: 60, opacity: 0, scale: 0.95 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            ease: "back.out(1.4)",
          },
          "-=0.8",
        );

      if (cardRefs.current.length > 0) {
        gsap.fromTo(
          cardRefs.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 0.65,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardRefs.current[0],
              start: "top 85%",
            },
          },
        );
      }
    };

    load();
  }, [features.length]);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#071b0c] via-[#2f7f35] to-[#071b0c] px-4 py-20 font-montserrat text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* Top heading */}
        <div className="mb-10 text-center">
          <h1
            ref={titleRef}
            className="mb-3 text-3xl font-semibold text-white md:text-4xl"
          >
            {t(`${basePath}.heading`)}
          </h1>

          <p
            ref={subTitleRef}
            className="mx-auto max-w-xl text-sm font-normal text-green-200"
          >
            {t(`${basePath}.subtitle`)}
          </p>
        </div>

        {/* Two columns */}
        <div className="mb-14 grid items-center gap-10 md:grid-cols-2">
          {/* Left */}
          <div>
            <p className="mb-3 text-sm font-semibold text-[#ff6b35]">
              {t(`${basePath}.badge`)}
            </p>

            <h2
              ref={headingRef}
              className="mb-4 text-2xl font-extrabold leading-snug text-white md:text-3xl"
            >
              {t(`${basePath}.title`)}
            </h2>

            <p
              ref={paraRef}
              className="text-sm font-normal leading-relaxed text-green-200"
            >
              {t(`${basePath}.description`)}
            </p>
          </div>

          {/* Right image card */}
          <div ref={imageRef} className="flex justify-center md:justify-end">
            <div className="w-full max-w-[340px] overflow-hidden rounded-2xl bg-white p-3 shadow-[0_8px_40px_rgba(0,0,0,0.25)]">
              <div className="mb-2 text-center">
                {imageLabels.map((line, index) => (
                  <p
                    key={`${line}-${index}`}
                    className="text-xs font-bold uppercase tracking-widest text-[#e67e22]"
                  >
                    {line}
                  </p>
                ))}
              </div>

              <img
                src={heroImg}
                alt={t(`${basePath}.imageAlt`)}
                className="max-h-[200px] w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={`${feature.title}-${index}`}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="rounded-xl p-5 text-center transition-transform duration-300 hover:-translate-y-1"
              style={{
                border: "1.5px solid rgba(52,211,153,0.45)",
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(6px)",
              }}
            >
              <div
                className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full text-white"
                style={{
                  background: "rgba(52,211,153,0.18)",
                  border: "1.5px solid rgba(52,211,153,0.4)",
                }}
              >
                {feature.icon}
              </div>

              <h3 className="mb-2 text-sm font-bold text-white">
                {feature.title}
              </h3>

              <p className="text-xs font-normal leading-relaxed text-green-200">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
