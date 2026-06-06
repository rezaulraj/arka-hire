import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import advan from "../../assets/imm.webp";

gsap.registerPlugin(ScrollTrigger);

const ArkaHireAdvantage = () => {
  const sectionRef = useRef(null);
  const textRef = useRef([]);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading, text, and button
      gsap.from(textRef.current, {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Animate image
      gsap.from(imageRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Button animation
      gsap.from(buttonRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full px-4 py-16 sm:px-6 lg:px-16 font-montserrat text-white bg-gradient-to-r from-[#071b0c] via-[#2f7f35] to-[#071b0c]"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Image */}
        <div
          ref={imageRef}
          className="flex-1 rounded-xl overflow-hidden shadow-2xl w-full lg:max-w-lg"
        >
          <img
            src={advan}
            alt="Arka Hire Advantage"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 flex flex-col gap-4">
          <p ref={(el) => (textRef.current[0] = el)} className="text-red-500 text-base font-bold">
            The Arka Hire Advantage
          </p>
          <h2
            ref={(el) => (textRef.current[1] = el)}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug"
          >
            Partnering with Arka Hire offers several benefits
          </h2>
          <p
            ref={(el) => (textRef.current[2] = el)}
            className="text-white/80 text-base sm:text-lg leading-relaxed"
          >
            Tailored Solutions: We customize our services to meet your specific needs. Experienced Team: Our experts bring years of experience in immigration law. Hassle-Free Process: We handle the complexities, allowing you to focus on your business.
          </p>

          <button
            ref={buttonRef}
            className="mt-4 w-max px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold text-white shadow-lg transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default ArkaHireAdvantage;