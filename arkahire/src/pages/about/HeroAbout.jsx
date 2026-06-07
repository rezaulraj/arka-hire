import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import herologo from "../../assets/logo1.webp";

const HeroAbout = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([headingRef.current, subtitleRef.current, textRef.current], {
        y: 40,
        opacity: 0,
        filter: "blur(6px)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.to(headingRef.current, {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "power4.out",
      })
        .to(
          subtitleRef.current,
          { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.75, ease: "power3.out" },
          "-=0.5"
        )
        .to(
          textRef.current,
          { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.75, ease: "power3.out" },
          "-=0.5"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#d2e6d9] px-4 py-20 sm:px-6 lg:px-10 font-montserrat flex flex-col items-center text-center"
    >
      <img src={herologo} alt="Arka Hire" className="mb-8 h-20 w-auto" />

      <h1
        ref={headingRef}
        className="text-[34px] font-extrabold text-[#1e5b2f] sm:text-[44px] lg:text-[52px] leading-tight"
      >
        An Agency Without Borders
      </h1>

      <p
        ref={subtitleRef}
        className="mt-4 max-w-3xl text-[15px] sm:text-[16px] text-[#1a4225] font-medium leading-relaxed"
      >
        We take pride in anticipating challenges and adapting to the evolving demands of the labor market.
      </p>

      <p
        ref={textRef}
        className="mt-2 max-w-3xl text-[14px] sm:text-[15px] text-[#1a4225]/90 leading-relaxed"
      >
        Our steadfast commitment to the success of our partners is unwavering.
      </p>
    </section>
  );
};

export default HeroAbout;