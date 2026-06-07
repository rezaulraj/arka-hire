import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bgImage from "../../assets/medi.webp";

gsap.registerPlugin(ScrollTrigger);

const benefits = ["Confidentiality", "Speed", "Cost-Effective", "Voluntary", "Control"];

const steps = [
  {
    title: "Initial Consultation",
    description:
      "We begin with an initial consultation to assess the nature of the dispute and determine whether mediation is the appropriate approach.",
    note: "This step involves speaking with both parties to explain the process and answer any questions.",
  },
  {
    title: "Agreement to Mediate",
    description:
      "Both parties must agree to participate in mediation. We provide a written agreement outlining the terms and conditions of the mediation process.",
  },
  {
    title: "Scheduling the Mediation",
    description:
      "Once both parties agree, we schedule a mediation session at a convenient time and place. Sessions can be conducted in person or virtually, depending on the preferences of the parties involved.",
  },
  {
    title: "Mediation Session",
    description:
      "During the session, the mediator facilitates a structured discussion, allowing each party to express their views and concerns. The mediator helps identify common ground and explore potential solutions.",
  },
];

const MediationSteps = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const stepsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(leftRef.current, {
        x: -50,
        opacity: 0,
        filter: "blur(8px)",
      });

      gsap.set(stepsRef.current, {
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
        stepsRef.current,
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
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#4b5425]/75" />
      <div className="absolute inset-0 bg-black/25" />

      {/* Red top / bottom line */}
      <div className="absolute left-0 top-0 z-10 h-[8px] w-full bg-[#b94425]/70" />
      <div className="absolute bottom-0 left-0 z-10 h-[18px] w-full bg-[#b94425]/60" />

      <div className="relative z-20 mx-auto grid min-h-[390px] max-w-7xl grid-cols-1 items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-16">
        {/* Left */}
        <div ref={leftRef} className="lg:pl-14">
          <p className="mb-3 text-[13px] font-black text-[#ff2d18]">
            Our Steps
          </p>

          <h2 className="max-w-[320px] text-[34px] font-black leading-[0.95] text-white drop-shadow-[0_8px_18px_rgba(0,0,0,0.5)] sm:text-[44px]">
            Benefits of <br /> Mediation
          </h2>

          <ul className="mt-5 space-y-2">
            {benefits.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-[12px] font-bold text-white/90"
              >
                <span className="text-[#ff2d18]">»</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Timeline */}
        <div className="relative max-w-3xl">
          <div className="absolute left-0 top-2 hidden h-[calc(100%-20px)] w-[2px] bg-[#ff2d18]/75 md:block" />

          <div className="space-y-7 md:pl-10">
            {steps.map((step, index) => (
              <div
                key={step.title}
                ref={(el) => (stepsRef.current[index] = el)}
                className="relative"
              >
                <span className="absolute -left-[47px] top-1 hidden h-3 w-3 rounded-full bg-[#ff2d18] shadow-[0_0_14px_rgba(255,45,24,0.7)] md:block" />

                <h3 className="mb-1 text-[16px] font-black text-white">
                  {step.title}
                </h3>

                <p className="max-w-[680px] text-[11px] font-bold leading-5 text-white/88 sm:text-[12px]">
                  {step.description}
                </p>

                {step.note && (
                  <p className="mt-2 max-w-[680px] text-[11px] font-bold leading-5 text-white/88 sm:text-[12px]">
                    {step.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediationSteps;