import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LetsTalk = () => {
  const { t } = useTranslation();

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRef = useRef(null);
  const lineRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(titleRef.current, {
        y: 30,
        opacity: 0,
        filter: "blur(8px)",
      });

      gsap.set(buttonRef.current, {
        y: 30,
        opacity: 0,
        scale: 0.9,
        filter: "blur(8px)",
      });

      gsap.set(lineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });

      tl.to(titleRef.current, {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.75,
        ease: "power4.out",
      })
        .to(
          buttonRef.current,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.7,
            ease: "back.out(1.5)",
          },
          "-=0.45",
        )
        .to(
          lineRef.current,
          {
            scaleX: 1,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.4",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white px-4 py-12 font-montserrat sm:px-6 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:radial-gradient(rgba(47,127,53,0.25)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-[650px] -translate-x-1/2 rounded-full bg-[#2f7f35]/10 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 rounded-[22px] border border-[#2f7f35]/10 bg-white/90 px-6 py-10 shadow-[0_22px_70px_rgba(0,0,0,0.08)] backdrop-blur-md md:flex-row md:px-12">
          <div className="text-center md:text-left">
            <p className="mb-3 text-[12px] font-black uppercase tracking-[0.28em] text-[#2f7f35]">
              {t("home.letsTalk.badge")}
            </p>

            <h2
              ref={titleRef}
              className="text-[26px] font-black leading-tight text-gray-900 sm:text-[34px] lg:text-[42px]"
            >
              {t("home.letsTalk.title")}
            </h2>
          </div>

          <Link
            ref={buttonRef}
            to="/contact-us"
            className="group relative inline-flex min-w-[150px] items-center justify-center overflow-hidden rounded-md bg-[#e60000] px-8 py-4 text-[14px] font-extrabold text-white shadow-[0_18px_40px_rgba(230,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-[#c90000] hover:shadow-[0_22px_48px_rgba(230,0,0,0.32)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span className="text-[15px]">▣</span>
              {t("home.letsTalk.button")}
            </span>

            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition duration-500 group-hover:translate-x-full" />
          </Link>
        </div>

        <div className="mt-8 h-[2px] w-full overflow-hidden rounded-full bg-[#e60000]/15">
          <div
            ref={lineRef}
            className="h-full w-full rounded-full bg-gradient-to-r from-transparent via-[#e60000] to-transparent"
          />
        </div>
      </div>
    </section>
  );
};

export default LetsTalk;
