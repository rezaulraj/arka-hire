import { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import heroImg from "../../assets/legalHero.webp";
import card1 from "../../assets/legal-card1.webp";
import card2 from "../../assets/legal-card2.webp";
import card3 from "../../assets/legal-card3.webp";

gsap.registerPlugin(ScrollTrigger);

const imageMap = {
  "legal-card1.webp": card1,
  "legal-card2.webp": card2,
  "legal-card3.webp": card3,
  card1,
  card2,
  card3,
};

const ArkaAdvanced = () => {
  const { t } = useTranslation();

  const containerRef = useRef(null);
  const textRef = useRef([]);
  const cardRef = useRef([]);

  const basePath = "employers.legalAssurancePage.arkaAdvanced";

  const cardsData = t(`${basePath}.cards`, {
    returnObjects: true,
  });

  const cards = Array.isArray(cardsData) ? cardsData : [];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current.filter(Boolean), {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      gsap.from(cardRef.current.filter(Boolean), {
        y: 50,
        opacity: 0,
        scale: 0.9,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [cards.length]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-gradient-to-r from-[#071b0c] via-[#2f7f35] to-[#071b0c] px-6 py-16 font-montserrat text-white sm:px-10 lg:px-20"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
        {/* Left Image */}
        <div className="relative w-full overflow-hidden rounded-xl shadow-xl lg:w-1/2">
          <img
            src={heroImg}
            alt={t(`${basePath}.heroImageAlt`) || "Legal Hero"}
            className="h-auto w-full rounded-xl object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex w-full flex-col justify-center gap-6 lg:w-1/2">
          <h2
            ref={(el) => {
              textRef.current[0] = el;
            }}
            className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl"
          >
            {t(`${basePath}.topTitle`)}
          </h2>

          <p
            ref={(el) => {
              textRef.current[1] = el;
            }}
            className="text-sm leading-relaxed text-white/80 sm:text-base"
          >
            {t(`${basePath}.topDescription`)}
          </p>

          <button
            ref={(el) => {
              textRef.current[2] = el;
            }}
            className="mt-2 w-max rounded-md bg-red-600 px-6 py-3 font-bold text-white transition hover:bg-red-700"
          >
            {t(`${basePath}.button.text`)}
          </button>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {cards.map((card, idx) => (
          <div
            key={`${card.title}-${idx}`}
            ref={(el) => {
              cardRef.current[idx] = el;
            }}
            className="flex flex-col items-center gap-3 rounded-xl border border-black p-6 text-center shadow-lg backdrop-blur-md transition-transform duration-500 hover:scale-105"
          >
            <img
              src={imageMap[card.image]}
              alt={card.title}
              className="h-36 w-36 object-contain"
            />

            <h3 className="text-lg font-bold text-white">{card.title}</h3>

            <p className="text-sm text-white/70">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArkaAdvanced;
