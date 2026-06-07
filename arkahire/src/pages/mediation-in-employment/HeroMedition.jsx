import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroMedi from "../../assets/medi.webp";

gsap.registerPlugin(ScrollTrigger);

const HeroMedition = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const bottomRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".medi-word", {
        yPercent: 110,
        opacity: 0,
      });

      gsap.set(".medi-text", {
        y: 28,
        opacity: 0,
        filter: "blur(8px)",
      });

      gsap.set(imageRef.current, {
        x: 70,
        opacity: 0,
        scale: 0.92,
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

      tl.to(".medi-word", {
        yPercent: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.06,
        ease: "power4.out",
      })
        .to(
          ".medi-text",
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

  const mainTitle = ["Mediation", "in", "Employment"];
  const heroTitle = [
    "At",
    "Arka",
    "Hire,",
    "we",
    "believe",
    "that",
    "a",
    "harmonious",
    "workplace",
    "is",
    "essential",
    "for",
    "productivity",
    "and",
    "employee",
    "satisfaction.",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#071b0c] via-[#2f7f35] to-[#071b0c] px-4 py-16 font-montserrat text-white sm:px-6 lg:px-10 lg:py-20"
    >

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Top Heading */}
        <div className="mx-auto mb-20 max-w-5xl text-center">
          <h1 className="text-[34px] font-black leading-tight tracking-tight text-white sm:text-[46px] lg:text-[58px]">
            {mainTitle.map((word, index) => (
              <span
                key={index}
                className="mr-3 inline-block overflow-hidden align-bottom"
              >
                <span
                  className={`medi-word inline-block ${
                    word === "Employment" ? "text-[#d8ffd8]" : "text-white"
                  } drop-shadow-[0_10px_25px_rgba(0,0,0,0.45)]`}
                >
                  {word}
                </span>
              </span>
            ))}
          </h1>

          <p className="medi-text mx-auto mt-5 max-w-4xl text-[13px] font-bold leading-6 text-white/82 sm:text-[14px]">
            Arka Hire offers mediation services in employment settings to
            resolve workplace conflicts and improve communication. Our
            experienced mediators create positive work environments, facilitating
            mutually beneficial agreements for both employers and employees.
          </p>
        </div>

        {/* Hero Content */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left Text */}
          <div>
            <p className="medi-text mb-4 text-[13px] font-black uppercase tracking-[0.22em] text-[#ff3030]">
              Arka Hire
            </p>

            <h2 className="max-w-xl text-[32px] font-black leading-[1.05] tracking-tight text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.42)] sm:text-[46px] lg:text-[54px]">
              {heroTitle.map((word, index) => (
                <span
                  key={index}
                  className="mr-2 inline-block overflow-hidden align-bottom"
                >
                  <span className="medi-word inline-block">{word}</span>
                </span>
              ))}
            </h2>

            <p className="medi-text mt-7 max-w-lg text-[13px] font-bold leading-6 text-white/82 sm:text-[14px]">
              Our mediation services are designed to help resolve conflicts and
              disputes in a fair, efficient, and confidential manner.
            </p>
          </div>

          {/* Right Image */}
          <div
            ref={imageRef}
            className="group relative overflow-hidden rounded-[26px] border border-white/18 bg-white/10 p-2 shadow-[0_30px_90px_rgba(0,0,0,0.38)] backdrop-blur-md"
          >
            <img
              src={heroMedi}
              alt="Mediation in Employment"
              className="h-[300px] w-full rounded-[20px] object-cover transition duration-700 group-hover:scale-105 sm:h-[390px] lg:h-[420px]"
            />

            <div className="absolute inset-2 rounded-[20px] bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            <div className="absolute inset-2 rounded-[20px] bg-gradient-to-r from-[#2f7f35]/15 via-transparent to-black/20" />

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-black/35 p-5 backdrop-blur-md">
              <p className="text-[13px] font-bold leading-6 text-white/88">
                Building better conversations for stronger workplace
                relationships.
              </p>
            </div>

            <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/18 to-transparent transition duration-700 group-hover:translate-x-full" />
          </div>
        </div>

        {/* Bottom Mediation Box */}
        <div
          ref={bottomRef}
          className="mt-20 grid overflow-hidden rounded-[26px] border border-white/16 bg-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl lg:grid-cols-[0.75fr_1.25fr]"
        >
          <div className="flex items-center border-b border-white/15 p-8 lg:border-b-0 lg:border-r">
            <h3 className="text-[28px] font-black leading-tight text-white drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)] sm:text-[34px] lg:text-[42px]">
              What is Mediation?
            </h3>
          </div>

          <div className="space-y-5 p-8">
            <p className="text-[14px] font-bold leading-7 text-white/82">
              Mediation is an informal and confidential process where a neutral
              mediator assists disputing parties in discussing their differences
              and working toward a mutually acceptable resolution.
            </p>

            <p className="text-[14px] font-bold leading-7 text-white/82">
              The mediator does not make decisions or assign blame but
              facilitates communication to help the parties find their solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMedition;