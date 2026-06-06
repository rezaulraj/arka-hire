import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bgprocess from "../../assets/temppro.avif";

gsap.registerPlugin(ScrollTrigger);

const leftSteps = [
  "Consultation and Needs Assessment",
  "Candidate Sourcing",
  "Screening and Selection",
  "Placement and Onboarding",
  "Ongoing Support",
];

const processSteps = [
  {
    title: "Consultation and Needs Assessment",
    description:
      "We begin by understanding your specific business requirements and identifying the skills needed. Our team works closely with you to define the ideal candidate profile.",
  },
  {
    title: "Candidate Sourcing",
    description:
      "Utilizing our extensive network, we source candidates who match your criteria. Our diverse database includes highly skilled workers ready to take on temporary roles.",
  },
  {
    title: "Screening and Selection",
    description:
      "We conduct comprehensive screening, including background checks and skills assessments, ensuring that you receive only top-quality candidates. Our multi-level selection process guarantees that the workers we provide are both competent and dependable.",
  },
  {
    title: "Placement and Onboarding",
    description:
      "Once the right candidates are chosen, we manage the placement and onboarding process. This includes handling all necessary paperwork and orientation to facilitate a seamless transition into your team.",
  },
];

const TempProcess = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const itemsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(leftRef.current, {
        x: -45,
        opacity: 0,
        filter: "blur(8px)",
      });

      gsap.set(itemsRef.current, {
        x: 50,
        opacity: 0,
        filter: "blur(8px)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.to(leftRef.current, {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.85,
        ease: "power4.out",
      }).to(
        itemsRef.current,
        {
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.75,
          stagger: 0.16,
          ease: "power3.out",
        },
        "-=0.45"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-cover bg-center font-montserrat text-white"
      style={{ backgroundImage: `url(${bgprocess})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-[#5b612c]/72" />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-black/35 via-transparent to-black/25" />

      {/* red top and bottom bars */}
      <div className="absolute left-0 top-0 z-10 h-[8px] w-full bg-[#b94425]/70" />
      <div className="absolute bottom-0 left-0 z-10 h-[20px] w-full bg-[#b94425]/60" />

      <div className="relative z-20 mx-auto grid min-h-[360px] max-w-7xl grid-cols-1 items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-16">
        {/* left */}
        <div ref={leftRef} className="lg:pl-14">
          <p className="mb-3 text-[13px] font-black text-[#ff2d18]">
            Our Steps
          </p>

          <h2 className="max-w-[320px] text-[36px] font-black leading-[0.95] text-white drop-shadow-[0_8px_18px_rgba(0,0,0,0.55)] sm:text-[48px]">
            Recruiting <br /> Process
          </h2>

          <ul className="mt-5 space-y-2">
            {leftSteps.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-[12px] font-bold text-white/92"
              >
                <span className="text-[#ff2d18]">»</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* right timeline */}
        <div className="relative max-w-4xl">
          <div className="absolute left-0 top-2 hidden h-[calc(100%-20px)] w-[2px] bg-[#ff2d18]/75 md:block" />

          <div className="space-y-7 md:pl-10">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                ref={(el) => (itemsRef.current[index] = el)}
                className="relative"
              >
                <span className="absolute -left-[47px] top-1 hidden h-3 w-3 rounded-full bg-[#ff2d18] shadow-[0_0_14px_rgba(255,45,24,0.75)] md:block" />

                <h3 className="mb-1 text-[16px] font-black text-white drop-shadow-[0_6px_15px_rgba(0,0,0,0.45)]">
                  {step.title}
                </h3>

                <p className="max-w-[760px] text-[11px] font-bold leading-5 text-white/88 sm:text-[12px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TempProcess;