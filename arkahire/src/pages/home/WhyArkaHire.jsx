import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const WhyArkaHire = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const dotsRef = useRef([]);
  const progressRef = useRef(null);
  const descRef = useRef(null);

  const heading = t("home.whyArkaHire.title").split(" ");
  const description = t("home.whyArkaHire.description");
  const reasons = t("home.whyArkaHire.reasons", { returnObjects: true });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".why-word", { yPercent: 110, opacity: 0 });
      gsap.set(descRef.current, { y: 22, opacity: 0, filter: "blur(8px)" });
      gsap.set(cardsRef.current, {
        y: 55,
        opacity: 0,
        scale: 0.92,
        filter: "blur(10px)",
      });
      gsap.set(dotsRef.current, { scale: 0, opacity: 0 });
      gsap.set(progressRef.current, {
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

      tl.to(".why-word", {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.055,
        ease: "power4.out",
      })
        .to(
          descRef.current,
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.35",
        )
        .to(
          progressRef.current,
          { scaleX: 1, duration: 1.2, ease: "power3.out" },
          "-=0.25",
        )
        .to(
          dotsRef.current,
          {
            scale: 1,
            opacity: 1,
            duration: 0.45,
            stagger: 0.16,
            ease: "back.out(1.8)",
          },
          "-=0.95",
        )
        .to(
          cardsRef.current,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.8,
            stagger: 0.16,
            ease: "power4.out",
          },
          "-=0.7",
        )
        .from(
          ".why-card-title",
          {
            y: 18,
            opacity: 0,
            duration: 0.45,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.6",
        )
        .from(
          ".why-card-desc",
          {
            y: 18,
            opacity: 0,
            duration: 0.45,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.52",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-linear-to-r from-[#0C1A0E] via-[#2f7f35] to-[#0C1A0E] px-4 py-20 font-montserrat sm:px-6 lg:px-10"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="text-[32px] font-extrabold leading-tight tracking-[0.08em] text-white sm:text-[44px] lg:text-[54px]">
            {heading.map((word, index) => (
              <span
                key={index}
                className="mr-3 inline-block overflow-hidden align-bottom"
              >
                <span
                  className={`why-word inline-block ${word.includes("Arka") || word.includes("Hire") ? "text-[#8bea8f]" : "text-white"}`}
                >
                  {word}
                </span>
              </span>
            ))}
          </h2>
          <p
            ref={descRef}
            className="mx-auto mt-5 max-w-2xl text-[15px] font-medium leading-7 text-white/70"
          >
            {description}
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[7%] right-[7%] top-[42px] hidden h-[3px] rounded-full bg-white/15 lg:block">
            <div
              ref={progressRef}
              className="h-full w-full rounded-full bg-gradient-to-r from-[#8bea8f] via-white/70 to-[#8bea8f] shadow-[0_0_22px_rgba(139,234,143,0.45)]"
            />
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((item, index) => (
              <div
                key={item.num}
                className="relative flex flex-col items-center text-center"
              >
                <div
                  ref={(el) => (dotsRef.current[index] = el)}
                  className="relative z-20 mb-7 hidden h-[48px] w-[48px] items-center justify-center rounded-full border-[5px] border-[#143f1f] bg-[#8bea8f] text-[12px] font-black text-[#0e3216] shadow-[0_0_0_1px_rgba(139,234,143,0.55),0_0_22px_rgba(139,234,143,0.5)] lg:flex"
                >
                  {item.num}
                </div>

                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#8bea8f] text-[12px] font-black text-[#0e3216] shadow-[0_0_18px_rgba(139,234,143,0.45)] lg:hidden">
                  {item.num}
                </div>

                <div
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="group relative w-full max-w-[220px] overflow-hidden rounded-2xl border border-white/10 bg-[#0f3d18]/95 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition-all duration-500 hover:-translate-y-2 hover:border-yellow-300/60 hover:bg-[#123f1b] hover:shadow-[0_0_0_1px_rgba(253,224,71,0.22),0_22px_55px_rgba(0,0,0,0.32)]"
                >
                  <div className="pointer-events-none absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-white/70 via-transparent to-white/70" />
                  <span className="pointer-events-none absolute bottom-1 right-3 select-none text-[4.4rem] font-black leading-none text-[#143f1f]/10">
                    {item.num}
                  </span>
                  <h3 className="why-card-title relative z-10 mb-4 text-[17px] font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="why-card-desc relative z-10 text-[13px] font-bold leading-6 tracking-[0.04em] text-white/70">
                    {item.description}
                  </p>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/18 via-transparent to-[#143f1f]/10 opacity-0 transition duration-500 group-hover:opacity-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyArkaHire;
