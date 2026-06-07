import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import work1 from "../../assets/rec1.webp";
import work2 from "../../assets/rec2.webp";
import work3 from "../../assets/rec3.webp";

gsap.registerPlugin(ScrollTrigger);

const WhyWorkArka = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const cards = [
    {
      title: "Industry Expertise",
      description:
        "We have years of experience in international recruitment. We understand the unique needs of different industries and tailor our services to meet those needs.",
      image: work1,
    },
    {
      title: "Customizable Solutions",
      description:
        "We offer customizable recruitment solutions to meet the unique needs of your business. Whether you need temporary staff for a short-term project or permanent employees for long-term growth.",
      image: work2,
    },
    {
      title: "Proven Success",
      description:
        "We have helped numerous businesses find the skilled workers they need to thrive. Our commitment to excellence and customer satisfaction sets us apart from other recruitment agencies.",
      image: work3,
    },
  ];

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

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-r from-[#071b0c] via-[#2f7f35] to-[#071b0c] px-4 py-16 sm:px-6 lg:px-16 font-montserrat text-white"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
          Partner with Arka Hire
        </h2>
        <p className="mt-4 text-white/80 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          We are committed to assisting you in managing your immigration needs efficiently. Our comprehensive services ensure that your employees comply with all legal requirements, providing the support you need for smooth operations.
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
              src={card.image}
              alt={card.title}
              className="h-44 w-44 object-contain rounded-lg mb-4 shadow-md"
            />
            <h3 className="text-xl font-bold mb-2 text-[#d8ffd8]">{card.title}</h3>
            <p className="text-white/70 text-sm leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyWorkArka;