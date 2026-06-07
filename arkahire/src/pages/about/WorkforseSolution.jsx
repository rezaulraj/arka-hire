import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import worker1 from "../../assets/icons/worker-1.webp";
import worker2 from "../../assets/icons/workforce.webp";
import worker3 from "../../assets/icons/data.webp";
import worker4 from "../../assets/icons/planning.webp";
import worker5 from "../../assets/icons/background-check.webp";
import worker6 from "../../assets/icons/legal-1.webp";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Worker Acquisition",
    description:
      "We specialize in identifying and attracting top talent. Our thorough recruitment process ensures we source the best candidates who are a perfect match for your organization's needs.",
    icon: worker1,
  },
  {
    title: "Workforce Solutions",
    description:
      "We offer flexible staffing options to meet diverse requirements, from temporary to permanent placements, ensuring reliability and adaptability in your workforce.",
    icon: worker2,
  },
  {
    title: "Regulatory Compliance",
    description:
      "Our expertise in legal and regulatory compliance guarantees that all hiring processes adhere to both local and international laws, minimizing risks for your business.",
    icon: worker3,
  },
  {
    title: "Strategic Workforce Planning",
    description:
      "We assist in developing and implementing effective workforce strategies that align with your business goals, driving productivity and efficiency.",
    icon: worker4,
  },
  {
    title: "Background Checks",
    description:
      "Our rigorous background checks and vetting processes ensure you hire trustworthy and qualified candidates, offering peace of mind and security.",
    icon: worker5,
  },
  {
    title: "Skills Training & Development",
    description:
      "We provide targeted training and development programs to enhance the skills and capabilities of your workforce, ensuring they are well-prepared for job demands.",
    icon: worker6,
  },
];

const WorkforseSolution = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(titleRef.current, {
        y: 40,
        opacity: 0,
        textShadow: "0px 0px 0px rgba(0,0,0,0)",
      });
      gsap.set(cardRefs.current, {
        y: 50,
        opacity: 0,
        scale: 0.9,
        filter: "blur(8px)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.to(titleRef.current, {
        y: 0,
        opacity: 1,
        textShadow: "2px 2px 10px rgba(0,0,0,0.4)",
        duration: 0.8,
        ease: "power4.out",
      }).to(
        cardRefs.current,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
        },
        "-=0.5",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-linear-to-r from-[#0C1A0E] via-[#2f7f35] to-[#0C1A0E] px-4 py-20 sm:px-6 lg:px-16 font-montserrat text-white"
    >
      <h2
        ref={titleRef}
        className="mb-16 text-center text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold leading-snug tracking-tight"
      >
        Our Comprehensive Workforce Solutions for Your Business
      </h2>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 items-start">
        {services.map((service, idx) => (
          <div
            key={idx}
            ref={(el) => (cardRefs.current[idx] = el)}
            className="group flex flex-col items-center text-center rounded-xl bg-[#3a6b3d]/80 p-6 shadow-xl hover:scale-105 transition-transform duration-500"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="mb-4 h-20 w-20 object-contain"
            />
            <h3 className="mb-2 text-[16px] font-bold text-white">
              {service.title}
            </h3>
            <p className="text-[13px] text-white/85 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkforseSolution;
