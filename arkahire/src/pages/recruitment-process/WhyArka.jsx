import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import whyarka from "../../assets/whyarka.gif";

gsap.registerPlugin(ScrollTrigger);

const WhyArka = () => {
  const sectionRef = useRef(null);
  const textRef = useRef([]);
  const buttonRef = useRef(null);
  const headingRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([...textRef.current, headingRef.current, buttonRef.current], {
        y: 30,
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.to(headingRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
      })
        .to(
          textRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(
          buttonRef.current,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.5)",
          },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const texts = [
    "We have years of experience in international recruitment.",
    "We understand the unique needs of different industries and tailor our services to meet those needs.",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-linear-to-r from-[#0C1A0E] via-[#2f7f35] to-[#0C1A0E] px-4 py-20 sm:px-6 lg:px-16 font-montserrat"
    >
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-10">
        {/* Left GIF */}
        <div className="flex-1">
          <img
            src={whyarka}
            alt="Why Arka Hire"
            className="w-full max-w-lg rounded-lg shadow-2xl object-cover"
          />
        </div>

        {/* Right Text */}
        <div className="flex-1 flex flex-col items-start text-left gap-4">
          <p
            ref={headingRef}
            className="text-[14px] font-black uppercase tracking-[0.18em] text-[#ff3030]"
          >
            Why Arka Hire?
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]">
            Reasons to Stay with Arka Hire Process
          </h2>

          {texts.map((text, i) => (
            <p
              key={i}
              ref={(el) => (textRef.current[i] = el)}
              className="text-white/80 text-base sm:text-lg leading-relaxed"
            >
              {text}
            </p>
          ))}

          <button className="mt-6 rounded-md bg-red-600 px-6 py-3 text-white font-bold shadow-lg transition-all hover:scale-105 hover:shadow-xl" ref={buttonRef}>
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyArka;