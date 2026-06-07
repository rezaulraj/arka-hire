import React, { useRef, useLayoutEffect } from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import employmentwelfere from "../../assets/employmentwelfere.webp";
import { ArrowBigRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const points = [
  "Tailored health and wellness programs to meet individual requirements.",
  "Flexible work-life balance options to accommodate a range of lifestyles.",
  "Comprehensive support services, including counseling and employee assistance programs.",
  "Financial planning resources designed to assist employees in managing their finances effectively.",
];

const HeroEmploymentWelfare = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const bulletRefs = useRef([]);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(imageRef.current, {
        x: -80,
        opacity: 0,
        scale: 0.95,
        filter: "blur(6px)",
      });
      gsap.set(textRef.current, { y: 40, opacity: 0, filter: "blur(8px)" });
      gsap.set(bulletRefs.current, { x: 20, opacity: 0 });
      gsap.set(buttonRef.current, { y: 20, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.to(imageRef.current, {
        x: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
      })
        .to(
          textRef.current,
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6",
        )
        .to(
          bulletRefs.current,
          { x: 0, opacity: 1, stagger: 0.2, duration: 0.7, ease: "power3.out" },
          "-=0.5",
        )
        .to(
          buttonRef.current,
          { y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.5)" },
          "-=0.4",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-linear-to-r from-[#0C1A0E] via-[#2f7f35] to-[#0C1A0E] px-4 py-10 sm:px-6 lg:px-16 font-montserrat text-white"
    >
      <h2
        ref={textRef}
        className="text-[28px] sm:text-[32px] lg:text-[36px] text-center pb-10 font-extrabold leading-snug tracking-tight"
      >
        Employee Welfare Support
      </h2>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
        {/* Left Image */}
        <div className="relative">
          <div ref={imageRef} className="overflow-hidden rounded-xl shadow-xl">
            <img
              src={employmentwelfere}
              alt="Employee Welfare Support"
              className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[480px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>

        {/* Right Text */}
        <div className="flex flex-col gap-6">
          <p className="text-[14px] sm:text-[15px] text-white/85 leading-relaxed">
            At Arka Hire, our Employee Welfare Support service is dedicated to ensuring the overall well-being of our workforce. We provide an array of health and wellness initiatives, foster a balanced work-life environment, and offer tailored support services.
            <br />
            Our objective is to cultivate a nurturing atmosphere where employees can excel both personally and professionally. From fitness programs and mental health support to adaptable working arrangements and financial planning assistance, we are resolute in meeting the varied needs of our employees.
          </p>

          <div className="flex flex-col gap-1">
            {points.map((point, idx) => (
              <div
                key={idx}
                ref={(el) => (bulletRefs.current[idx] = el)}
                className="flex items-start gap-3 px-4 py-2 text-[13px] font-semibold"
              >
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center text-[10px] text-white">
                  <ArrowBigRight />
                </span>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          ref={buttonRef}
          className="mt-6 w-[220px] rounded-full bg-red-600 px-6 py-3 text-[13px] font-black uppercase text-white shadow-lg transition duration-300 hover:bg-red-700 hover:-translate-y-1"
        >
          Let's Discuss Further
        </button>
      </div>
    </section>
  );
};

export default HeroEmploymentWelfare