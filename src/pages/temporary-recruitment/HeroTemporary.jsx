import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import temporaryHero from "../../assets/temp.avif";

gsap.registerPlugin(ScrollTrigger);

const HeroTemporary = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".temp-word", {
        yPercent: 110,
        opacity: 0,
      });

      gsap.set(".temp-text", {
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

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.to(".temp-word", {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.06,
        ease: "power4.out",
      })
        .to(
          ".temp-text",
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
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const heading = ["Temporary", "Recruitment", "Services"];

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#071b0c] via-[#2f7f35] to-[#071b0c] px-4 py-16 font-montserrat text-white sm:px-6 lg:px-10 lg:py-20"
    >
      {/* Background soft effect */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#071b0c]/70 via-transparent to-[#071b0c]/75" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[330px] w-[760px] -translate-x-1/2 rounded-full bg-white/8 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Top title */}
        <div className="mx-auto mb-24 max-w-5xl text-center">
          <h1 className="text-[30px] font-black leading-tight tracking-tight text-white sm:text-[42px] lg:text-[52px]">
            {heading.map((word, index) => (
              <span
                key={index}
                className="mr-3 inline-block overflow-hidden align-bottom"
              >
                <span
                  className={`temp-word inline-block ${
                    word === "Recruitment" ? "text-[#d8ffd8]" : "text-white"
                  } drop-shadow-[0_10px_25px_rgba(0,0,0,0.4)]`}
                >
                  {word}
                </span>
              </span>
            ))}
          </h1>

          <p className="temp-text mx-auto mt-5 max-w-3xl text-[13px] font-bold leading-6 text-white/85 sm:text-[14px]">
            Arka Hire offers temporary recruitment services, providing flexible
            and efficient staffing solutions with access to a pool of qualified
            candidates. This ensures your business can quickly adapt to changing
            workforce demands.
          </p>
        </div>

        {/* Main content */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left text */}
          <div className="lg:pl-10">
            <p className="temp-text mb-4 text-[13px] font-black uppercase tracking-[0.22em] text-[#ff3030]">
              Arka Hire
            </p>

            <h2 className="max-w-[560px] text-[34px] font-black leading-[0.98] tracking-tight text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.4)] sm:text-[46px] lg:text-[56px]">
              <span className="temp-text block">
                At Arka Hire, we recognize that business needs can shift
                rapidly.
              </span>
            </h2>

            <p className="temp-text mt-7 max-w-lg text-[13px] font-bold leading-6 text-white/88 sm:text-[14px]">
              Whether it&apos;s managing seasonal demands, executing special
              projects, or covering extended absences, our temporary recruitment
              services offer the flexibility and skilled workforce required to
              keep your operations running smoothly.
            </p>
          </div>

          {/* Right image */}
          <div
            ref={imageRef}
            className="group relative overflow-hidden rounded-[12px] shadow-[0_28px_80px_rgba(0,0,0,0.32)]"
          >
            <img
              src={temporaryHero}
              alt="Temporary Recruitment Services"
              className="h-[290px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[360px] lg:h-[365px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#143f1f]/10 via-transparent to-[#143f1f]/15" />

            <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/18 to-transparent transition duration-700 group-hover:translate-x-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTemporary;