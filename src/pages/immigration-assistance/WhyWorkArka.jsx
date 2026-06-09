import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";

import work1 from "../../assets/rec1.webp";
import work2 from "../../assets/rec2.webp";
import work3 from "../../assets/rec3.webp";

gsap.registerPlugin(ScrollTrigger);

const WhyWorkUs = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const { t } = useTranslation();

  const cards = t("employers.recruitmentPage.whyWorkWithUs.cards", {
    returnObjects: true,
  });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        y: 50,
        opacity: 0,
        scale: 0.9,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const heading = t("employers.recruitmentPage.whyWorkWithUs.heading", {
    returnObjects: true,
  });
  const subtitle = t("employers.recruitmentPage.whyWorkWithUs.subtitle");

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-r from-[#071b0c] via-[#2f7f35] to-[#071b0c] px-4 py-16 sm:px-6 lg:px-16 font-montserrat text-white"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
          {heading.map((word, idx) => (
            <span
              key={idx}
              className={`mr-3 ${["work", "us?"].includes(word) ? "text-[#d8ffd8]" : "text-white"}`}
            >
              {word}
            </span>
          ))}
        </h2>
        <p className="mt-4 text-white/80 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            ref={(el) => (cardsRef.current[idx] = el)}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-center shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={
                card.image === "work1"
                  ? work1
                  : card.image === "work2"
                    ? work2
                    : card.image === "work3"
                      ? work3
                      : work1
              }
              alt={card.title}
              className="h-56 w-56 object-contain rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2 text-white">
              {card.title}
            </h3>
            <p className="text-white/90 text-sm leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyWorkUs;
