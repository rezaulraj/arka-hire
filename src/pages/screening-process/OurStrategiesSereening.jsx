import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import sourcingIcon from "../../assets/icons/icon-17.webp";
import screeningIcon from "../../assets/icons/workforce.webp";
import targetedIcon from "../../assets/icons/data.webp";
import improvementIcon from "../../assets/icons/planning.webp";

gsap.registerPlugin(ScrollTrigger);

const strategies = [
  {
    title: "Advanced Sourcing Techniques",
    description:
      "We use the latest tools to quickly and efficiently find top talent.",
    icon: sourcingIcon,
  },
  {
    title: "Comprehensive Screening",
    description:
      "Our rigorous screening process ensures that only the best candidates are selected.",
    icon: screeningIcon,
  },
  {
    title: "Targeted Recruitment Campaigns",
    description:
      "We design focused campaigns to attract candidates who match your specific needs.",
    icon: targetedIcon,
  },
  {
    title: "Continuous Improvement",
    description:
      "We regularly update our strategies to stay ahead and deliver exceptional results.",
    icon: improvementIcon,
  },
];

const OurStrategiesSereening = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(cardsRef.current, { y: 50, opacity: 0, scale: 0.9 });

      gsap.to(cardsRef.current, {
        y: 0,
        scale: 1,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-linear-to-r from-[#0C1A0E] via-[#2f7f35] to-[#0C1A0E] px-4 py-16 sm:px-6 lg:px-20 font-montserrat text-white"
    >
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-12 drop-shadow-lg">
        Our Strategies
      </h2>

      <div className="flex flex-col gap-12">
        {strategies.map((strategy, idx) => (
          <div
            key={idx}
            ref={(el) => (cardsRef.current[idx] = el)}
            className={`flex flex-col sm:flex-row items-center gap-6 transition-transform duration-500 hover:scale-105
              ${idx % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
          >
            {/* Icon */}
            <div className="flex items-center justify-center h-24 w-24 rounded-xl bg-[#3a8d48] shadow-lg">
              <img
                src={strategy.icon}
                alt={strategy.title}
                className="h-12 w-12 object-contain"
              />
            </div>

            {/* Text card */}
            <div className="flex-1 rounded-xl bg-[#3a8d48] p-6 shadow-xl text-center sm:text-left">
              <h3 className="text-xl font-bold mb-2">{strategy.title}</h3>
              <p className="text-white/90">{strategy.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurStrategiesSereening;
