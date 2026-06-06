import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import partnershipBg from "../../assets/partnership.avif";

gsap.registerPlugin(ScrollTrigger);

const PartnershipBenefits = () => {
  const sectionRef = useRef(null);
  const textRef = useRef([]);

  const steps = [
    {
      title: "Client Access",
      desc: "Expand your reach by connecting with businesses across multiple industries. We introduce you to employers actively seeking skilled workers.",
    },
    {
      title: "Simplified Recruitment",
      desc: "Our streamlined platform simplifies the recruitment process, handling everything from candidate sourcing to placement for a hassle-free experience.",
    },
    {
      title: "Training and Resources",
      desc: "Access comprehensive training programs, webinars, instructional videos, and marketing materials to enhance your recruitment skills.",
    },
    {
      title: "Timely Payments",
      desc: "Receive prompt payments for successful placements. Our efficient system ensures faster transactions compared to standard industry timelines.",
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${partnershipBg})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto py-24 px-6 sm:px-10 lg:px-16 text-white">
        <h2 className="text-xl sm:text-2xl font-bold text-red-600 mb-2 text-left">
          Our Steps
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-left">
          Partnership Benefits
        </h1>

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li
              key={i}
              ref={(el) => (textRef.current[i] = el)}
              className="bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
            >
              <h3 className="font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-white/80">{step.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PartnershipBenefits;
