import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import whyarka from "../../assets/whyarka.gif";
import reachIcon from "../../assets/icons/agreement.webp";
import followIcon from "../../assets/icons/follow.webp";

gsap.registerPlugin(ScrollTrigger);

const WhyArkaMediation = () => {
  const iconsMap = {
    agreement: reachIcon,
    follow: followIcon,
  };
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const buttonRef = useRef(null);

  const basePath = "employers.mediationEmploymentPage.whyArkaMediation";

  const heading = t(`${basePath}.heading`, { returnObjects: true });
  const topCards = t(`${basePath}.topCards`, { returnObjects: true });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".why-word", { yPercent: 110, opacity: 0 });
      gsap.set(cardsRef.current, {
        y: 55,
        opacity: 0,
        scale: 0.9,
        filter: "blur(10px)",
      });
      gsap.set(imageRef.current, {
        x: -60,
        opacity: 0,
        scale: 0.92,
        filter: "blur(10px)",
      });
      gsap.set(contentRef.current, { x: 60, opacity: 0, filter: "blur(10px)" });
      gsap.set(buttonRef.current, { y: 20, opacity: 0, scale: 0.92 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.to(".why-word", {
        yPercent: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.06,
        ease: "power4.out",
      })
        .to(
          cardsRef.current,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.8,
            stagger: 0.14,
            ease: "back.out(1.45)",
          },
          "-=0.35",
        )
        .to(
          imageRef.current,
          {
            x: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.95,
            ease: "power4.out",
          },
          "-=0.45",
        )
        .to(
          contentRef.current,
          {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.85,
            ease: "power3.out",
          },
          "-=0.75",
        )
        .to(
          buttonRef.current,
          { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.6)" },
          "-=0.35",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [heading.length, topCards.length]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#071b0c] via-[#2f7f35] to-[#071b0c] px-4 py-16 font-montserrat text-white sm:px-6 lg:px-10 lg:py-20"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-[34px] font-black leading-tight tracking-wide text-white sm:text-[46px] lg:text-[58px]">
            {heading.map((word, index) => (
              <span
                key={index}
                className="mr-3 inline-block overflow-hidden align-bottom"
              >
                <span
                  className={`why-word inline-block ${index === heading.length - 1 ? "text-[#d8ffd8]" : "text-white"} drop-shadow-[0_10px_25px_rgba(0,0,0,0.45)]`}
                >
                  {word}
                </span>
              </span>
            ))}
          </h2>
        </div>

        {/* Top cards */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {topCards.map((item, index) => (
            <div
              key={item.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative min-h-[170px] overflow-hidden rounded-[18px] border border-white/20 bg-white/8 p-6 text-center shadow-[0_22px_65px_rgba(0,0,0,0.22)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#d8ffd8]/60 hover:bg-white/12 hover:shadow-[0_28px_85px_rgba(0,0,0,0.32)]"
            >
              <div className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full bg-[#d8ffd8]/16 blur-2xl transition duration-500 group-hover:bg-[#d8ffd8]/28" />

              <div className="relative z-10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/25 bg-[#d8ffd8]/12 shadow-[0_14px_40px_rgba(0,0,0,0.22)] transition duration-500 group-hover:scale-110 group-hover:-rotate-6">
                <img
                  src={iconsMap[item.icon]}
                  alt={item.title}
                  className="h-11 w-11 object-contain"
                />
              </div>

              <h3 className="relative z-10 mb-2 text-[18px] font-black text-white">
                {item.title}
              </h3>
              <p className="relative z-10 mx-auto max-w-md text-[12px] font-bold leading-5 text-white/78">
                {item.description}
              </p>

              <span className="pointer-events-none absolute bottom-2 right-4 text-[58px] font-black leading-none text-white/[0.05]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/18 to-transparent transition duration-700 group-hover:translate-x-full" />
            </div>
          ))}
        </div>

        {/* Bottom content */}
        <div className="mx-auto mt-24 grid max-w-6xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          {/* GIF */}
          <div
            ref={imageRef}
            className="group relative overflow-hidden rounded-[14px] border border-white/18 bg-white p-4 shadow-[0_28px_80px_rgba(0,0,0,0.28)]"
          >
            <img
              src={whyarka}
              alt="Why Arka Hire"
              className="h-[210px] w-full rounded-[10px] object-contain transition duration-700 group-hover:scale-105 sm:h-[260px]"
            />
            <div className="pointer-events-none absolute inset-0 rounded-[14px] bg-gradient-to-br from-transparent via-transparent to-[#2f7f35]/10" />
          </div>

          {/* Text */}
          <div ref={contentRef}>
            <p className="mb-3 text-[13px] font-black tracking-[0.18em] text-white/90">
              {t(`${basePath}.badge`) || "Why Arka Hire?"}
            </p>
            <h3 className="max-w-xl text-[34px] font-black leading-[1.05] tracking-tight text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.4)] sm:text-[44px] lg:text-[54px]">
              {t(`${basePath}.title`) || "The Arka Hire Advantage"}
            </h3>
            <p className="mt-5 max-w-xl text-[14px] font-bold leading-7 text-white/80">
              {t(`${basePath}.description`) ||
                "Choosing Arka Hire for your mediation needs means partnering with a team committed to fostering a positive work environment."}
            </p>

            <Link
              ref={buttonRef}
              to="/contact-us"
              className="group relative mt-7 inline-flex overflow-hidden rounded-sm bg-[#e60000] px-7 py-3 text-[13px] font-black text-white shadow-[0_18px_45px_rgba(230,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#c90000]"
            >
              <span className="relative z-10">Get In Touch</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition duration-500 group-hover:translate-x-full" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyArkaMediation;
