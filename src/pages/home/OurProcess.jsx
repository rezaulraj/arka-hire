import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import process1 from "../../assets/icons/customer-service.webp";
import process2 from "../../assets/icons/workers.webp";
import process3 from "../../assets/icons/screening.webp";
import process4 from "../../assets/icons/process.webp";
import process5 from "../../assets/icons/support.webp";
import process6 from "../../assets/icons/customer-service-agent.webp";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Initial Consultation",
    description:
      "Our initial consultation enables us to gain a comprehensive understanding of your specific requirements, allowing us to customize our recruitment approach and identify the most suitable global workers for your business.",
    icon: process1,
    num: "01",
  },
  {
    title: "Worker Sourcing",
    description:
      "We connect you with top-tier global workers through an extensive network, ensuring access to high-quality candidates. Our customized solutions are designed to meet your business's specific demands.",
    icon: process2,
    num: "02",
  },
  {
    title: "Screening and Selection",
    description:
      "Our screening and selection process guarantees that you receive only the highest quality workers through background checks, skills assessments, and interviews.",
    icon: process3,
    num: "03",
  },
  {
    title: "Onboarding and Integration",
    description:
      "We offer comprehensive orientation, training, and support to ensure that workers quickly adapt and contribute meaningfully to your team.",
    icon: process4,
    num: "04",
  },
  {
    title: "Accommodation",
    description:
      "We provide reliable accommodation solutions for workers, including sourcing and arranging suitable housing that meets employer requirements.",
    icon: process5,
    num: "05",
  },
  {
    title: "Continuous Support",
    description:
      "We offer ongoing support to ensure the success and satisfaction of both employers and workers.",
    icon: process6,
    num: "06",
  },
];

const OurProcess = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef([]);
  const pinsRef = useRef([]);
  const lineRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".reveal-word", {
        yPercent: 110,
        opacity: 0,
      });

      gsap.set(textRef.current, {
        y: 24,
        opacity: 0,
        filter: "blur(8px)",
      });

      gsap.set(cardsRef.current, {
        opacity: 0,
        y: 60,
        scale: 0.9,
        filter: "blur(10px)",
      });

      gsap.set(pinsRef.current, {
        opacity: 0,
        scale: 0,
      });

      gsap.set(lineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      tl.to(".reveal-word", {
        yPercent: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.08,
        ease: "power4.out",
      })
        .to(
          textRef.current,
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.45",
        )
        .to(
          lineRef.current,
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.35",
        )
        .to(
          pinsRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.45,
            stagger: 0.12,
            ease: "back.out(1.8)",
          },
          "-=0.9",
        )
        .to(
          cardsRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.85,
            stagger: 0.14,
            ease: "power4.out",
          },
          "-=0.65",
        )
        .from(
          ".card-title",
          {
            y: 18,
            opacity: 0,
            duration: 0.45,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.65",
        )
        .from(
          ".card-desc",
          {
            y: 18,
            opacity: 0,
            duration: 0.45,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.55",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const heading = [
    "How",
    "We",
    "Find",
    "the",
    "Ideal",
    "Match",
    "for",
    "Your",
    "Business",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-linear-to-r from-[#0C1A0E] via-[#2f7f35] to-[#0C1A0E] px-4 py-24 font-montserrat sm:px-6 lg:px-8"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-yellow-300 shadow-[0_0_8px_rgba(253,224,71,0.9)]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8bea8f]">
                Our Process
              </span>
            </div>

            <h2
              ref={headingRef}
              className="max-w-4xl text-[clamp(32px,5vw,58px)] font-extrabold leading-tight tracking-tight text-white"
            >
              {heading.map((word, index) => (
                <span
                  key={index}
                  className="mr-3 inline-block overflow-hidden align-bottom"
                >
                  <span
                    className={`reveal-word inline-block ${
                      word === "Ideal" || word === "Business"
                        ? "text-[#8bea8f]"
                        : "text-white"
                    }`}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </h2>
          </div>

          <p
            ref={textRef}
            className="max-w-sm text-sm font-medium leading-relaxed text-white/75 lg:text-right"
          >
            Six carefully crafted steps to connect you with the world's best
            talent — efficiently, reliably, and beautifully.
          </p>
        </div>

        <div className="relative">
          {/* Road line */}
          <div className="absolute left-[5%] right-[5%] top-1/2 hidden h-[2px] -translate-y-1/2 bg-white/15 xl:block">
            <div
              ref={lineRef}
              className="h-full w-full bg-gradient-to-r from-yellow-300 via-white/50 to-yellow-300 shadow-[0_0_20px_rgba(253,224,71,0.35)]"
            />
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-4">
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div
                  className={`flex flex-col items-center ${
                    i % 2 === 0 ? "xl:flex-col" : "xl:flex-col-reverse"
                  }`}
                >
                  {/* Card */}
                  {/* Card */}
                  <div
                    ref={(el) => (cardsRef.current[i] = el)}
                    className="
    group relative w-full max-w-[190px] overflow-hidden rounded-2xl
    border border-white/10 bg-[#0f3d18]/95 p-5
    shadow-[0_18px_50px_rgba(0,0,0,0.22)]
    transition-all duration-500
    hover:-translate-y-2 hover:border-yellow-300/60
    hover:bg-[#123f1b]
    hover:shadow-[0_0_0_1px_rgba(253,224,71,0.22),0_22px_55px_rgba(0,0,0,0.32)]
  "
                  >
                    {/* Top accent line */}
                    <div className="absolute left-0 top-0 h-[3px] w-14 bg-gradient-to-r from-yellow-300 via-yellow-200 to-transparent" />

                    {/* Soft glow */}
                    <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-yellow-300/10 blur-2xl transition duration-500 group-hover:bg-yellow-300/20" />

                    {/* Watermark number */}
                    <span className="pointer-events-none absolute bottom-1 right-2 select-none text-[3.2rem] font-black leading-none tracking-tight text-white/[0.06]">
                      {step.num}
                    </span>

                    {/* Icon */}
                    <div
                      className="
      mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl
      border border-yellow-300/35 bg-yellow-300/15
      shadow-[0_0_18px_rgba(253,224,71,0.12)]
      transition-all duration-300
      group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-yellow-300/25
    "
                    >
                      <img
                        src={step.icon}
                        alt={step.title}
                        className="h-7 w-7 object-contain"
                      />
                    </div>

                    <h3 className="card-title mb-2 text-[13px] font-extrabold leading-snug tracking-tight text-white">
                      {step.title}
                    </h3>

                    <p className="card-desc text-[11px] font-medium leading-relaxed text-white/70">
                      {step.description}
                    </p>

                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-yellow-300/5 opacity-0 transition duration-500 group-hover:opacity-100" />
                  </div>

                  {/* Connector pin */}
                  <div
                    className={`flex flex-col items-center ${
                      i % 2 === 0
                        ? "xl:mt-4"
                        : "order-first xl:order-none xl:mb-4"
                    }`}
                  >
                    <div className="hidden h-8 w-px bg-white/15 xl:block" />

                    <div
                      ref={(el) => (pinsRef.current[i] = el)}
                      className="flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-[#2f7f35] bg-[#8bea8f] text-[11px] font-black text-[#08240c] shadow-[0_0_0_1px_rgba(253,224,71,0.55),0_0_18px_rgba(253,224,71,0.55)]"
                    >
                      {step.num}
                    </div>

                    <div className="hidden h-8 w-px bg-white/15 xl:block" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 hidden justify-between px-2 xl:flex">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/35">
              Start
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8bea8f]">
              Your Ideal Hire →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
