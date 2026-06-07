import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// change this image path if your file name is different
import legalHero from "../../assets/legal.webp";

gsap.registerPlugin(ScrollTrigger);

const HeroLegalAssurance = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const bottomRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".legal-word", {
        yPercent: 110,
        opacity: 0,
      });

      gsap.set(".legal-text", {
        y: 28,
        opacity: 0,
        filter: "blur(8px)",
      });

      gsap.set(imageRef.current, {
        x: 70,
        opacity: 0,
        scale: 0.94,
        filter: "blur(10px)",
      });

      gsap.set(bottomRef.current, {
        y: 45,
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

      tl.to(".legal-word", {
        yPercent: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.06,
        ease: "power4.out",
      })
        .to(
          ".legal-text",
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.75,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.45"
        )
        .to(
          imageRef.current,
          {
            x: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power4.out",
          },
          "-=0.75"
        )
        .to(
          bottomRef.current,
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.35"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const mainTitle = ["Legal", "Assurance", "Service"];
  const heroTitle = [
    "Navigating",
    "the",
    "complexities",
    "of",
    "employment",
    "laws",
    "can",
    "be",
    "challenging.",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#071b0c] via-[#2f7f35] to-[#071b0c] px-4 py-16 font-montserrat text-white sm:px-6 lg:px-10 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#071b0c]/75 via-transparent to-[#071b0c]/75" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[330px] w-[760px] -translate-x-1/2 rounded-full bg-white/8 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Top heading */}
        <div className="mx-auto mb-24 max-w-5xl text-center">
          <h1 className="text-[30px] font-black leading-tight tracking-tight text-white sm:text-[42px] lg:text-[52px]">
            {mainTitle.map((word, index) => (
              <span
                key={index}
                className="mr-3 inline-block overflow-hidden align-bottom"
              >
                <span
                  className={`legal-word inline-block ${
                    word === "Assurance" ? "text-[#d8ffd8]" : "text-white"
                  } drop-shadow-[0_10px_25px_rgba(0,0,0,0.4)]`}
                >
                  {word}
                </span>
              </span>
            ))}
          </h1>

          <p className="legal-text mx-auto mt-5 max-w-4xl text-[13px] font-bold leading-6 text-white/85 sm:text-[14px]">
            At Arka Hire, our Legal Assurance services are designed to provide
            businesses with peace of mind by ensuring compliance with employment
            laws and minimizing legal risks.
          </p>
        </div>

        {/* Main content */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left text */}
          <div>
            <p className="legal-text mb-4 text-[13px] font-black uppercase tracking-[0.22em] text-[#ff3030]">
              Arka Hire
            </p>

            <h2 className="max-w-[560px] text-[34px] font-black leading-[0.98] tracking-tight text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.4)] sm:text-[46px] lg:text-[54px]">
              {heroTitle.map((word, index) => (
                <span
                  key={index}
                  className="mr-2 inline-block overflow-hidden align-bottom"
                >
                  <span className="legal-word inline-block">{word}</span>
                </span>
              ))}
            </h2>

            <p className="legal-text mt-7 max-w-lg text-[13px] font-bold leading-6 text-white/88 sm:text-[14px]">
              That’s why we offer expert legal guidance to help your business
              remain fully compliant, protecting you from potential legal issues.
            </p>
          </div>

          {/* Right image */}
          <div
            ref={imageRef}
            className="group relative overflow-hidden rounded-[12px] shadow-[0_28px_80px_rgba(0,0,0,0.32)]"
          >
            <img
              src={legalHero}
              alt="Legal Assurance Service"
              className="h-[290px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[360px] lg:h-[365px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#143f1f]/10 via-transparent to-[#143f1f]/15" />

            <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/18 to-transparent transition duration-700 group-hover:translate-x-full" />
          </div>
        </div>

        {/* Bottom section */}
        <div
          ref={bottomRef}
          className="mt-24 grid overflow-hidden border-y border-white/75 py-7 lg:grid-cols-[0.75fr_1.25fr]"
        >
          <div className="flex items-center justify-center border-b border-white/25 pb-6 lg:border-b-0 lg:border-r lg:pb-0">
            <h3 className="text-center text-[30px] font-black leading-[1.05] text-white drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)] sm:text-[40px]">
              Why Legal <br /> Assurance?
            </h3>
          </div>

          <div className="space-y-4 px-0 pt-6 lg:px-10 lg:pt-0">
            <p className="text-[14px] font-bold leading-7 text-white/88">
              Legal assurance is essential for businesses seeking to avoid legal
              complications. Here’s why it matters:
            </p>

            <div className="space-y-2 text-[13px] font-bold leading-6 text-white/86 sm:text-[14px]">
              <p>
                <span className="text-[#d8ffd8]">Compliance:</span> Stay
                updated with the latest employment laws and regulations.
              </p>

              <p>
                <span className="text-[#d8ffd8]">Risk Management:</span>{" "}
                Identify and mitigate potential legal risks before they escalate.
              </p>

              <p>
                <span className="text-[#d8ffd8]">Expert Guidance:</span> Gain
                access to legal professionals who understand your business needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroLegalAssurance;