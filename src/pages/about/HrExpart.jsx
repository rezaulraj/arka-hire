import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HrExpartImg from "../../assets/abouthr.webp";
import {
  FaUsers,
  FaGlobe,
  FaCheckCircle,
  FaUserGraduate,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const points = [
  {
    title: "Tailored Recruitment Solutions",
    desc: "We craft our recruitment strategies to align with your specific needs, ensuring that you receive the most qualified candidates.",
    icon: <FaUsers className="text-white w-5 h-5" />,
  },
  {
    title: "Global Talent Acquisition",
    desc: "Our expansive network enables us to source top-tier talent from across the globe for both temporary and permanent roles.",
    icon: <FaGlobe className="text-white w-5 h-5" />,
  },
  {
    title: "Comprehensive Legal Assistance",
    desc: "We manage all legal aspects, from securing work permits to ensuring compliance with local regulations.",
    icon: <FaCheckCircle className="text-white w-5 h-5" />,
  },
  {
    title: "Integration and Support",
    desc: "We assist with accommodation, vocational training, and language education to facilitate the smooth integration of new employees.",
    icon: <FaUserGraduate className="text-white w-5 h-5" />,
  },
];

const HrExpart = () => {
  const sectionRef = useRef(null);
  const contentRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(contentRefs.current, { y: 40, opacity: 0, filter: "blur(6px)" });

      gsap.to(contentRefs.current, {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.15,
        duration: 0.8,
        ease: "power4.out",
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
      className="relative w-full bg-linear-to-r from-[#0C1A0E] via-[#2f7f35] to-[#0C1A0E] px-4 py-20 sm:px-6 lg:px-16 font-montserrat text-white"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
        {/* Left Image */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={HrExpartImg}
            alt="HR Experts"
            className="rounded-xl shadow-xl w-full max-w-md object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-8">
          <h2
            ref={(el) => contentRefs.current.push(el)}
            className="text-[28px] sm:text-[32px] lg:text-[36px] font-extrabold leading-snug"
          >
            HR Experts Committed to Your Success
          </h2>

          <div className="relative flex flex-col gap-8">
            {points.map((point, idx) => (
              <div
                key={idx}
                ref={(el) => contentRefs.current.push(el)}
                className="flex gap-4 relative pl-10 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-white/20"
              >
                <div className="flex-shrink-0 relative z-10">
                  <div className="flex items-center justify-center w-8 h-8 bg-red-600 rounded-full shadow-lg">
                    {point.icon}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[15px] font-bold">{point.title}</h3>
                  <p className="text-[13px] text-white/80 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HrExpart;
