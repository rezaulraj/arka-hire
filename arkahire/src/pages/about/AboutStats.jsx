import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsFillPinAngleFill } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: "1300+", label: "Worker Replaced In Last 5 Years" },
  { number: "200+", label: "Happy Employers Who Trusted Us" },
];

const AboutStats = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([headingRef.current, textRef.current, buttonRef.current], {
        y: 40,
        opacity: 0,
        filter: "blur(6px)",
      });

      gsap.set(cardsRef.current, {
        y: 50,
        opacity: 0,
        scale: 0.9,
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
      })
        .to(
          textRef.current,
          { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.7 },
          "-=0.5",
        )
        .to(
          cardsRef.current,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.85,
            stagger: 0.15,
          },
          "-=0.6",
        )
        .to(
          buttonRef.current,
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.75,
            ease: "back.out(1.5)",
          },
          "-=0.5",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-linear-to-r from-[#0C1A0E] via-[#2f7f35] to-[#0C1A0E] px-4 py-20 sm:px-6 lg:px-16 font-montserrat text-white"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1.9fr] gap-12 items-center">
        {/* Left stats cards */}
        <div className="flex flex-col gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="relative rounded-xl bg-red-600 p-6 shadow-lg overflow-hidden"
            >
              <h3 className="text-[28px] font-extrabold text-white mb-2">
                {stat.number}
              </h3>
              <p className="text-[14px] font-semibold text-white/90">
                {stat.label}
              </p>
              <span className="absolute top-2 right-2 text-[28px] animate-bounce">
                <BsFillPinAngleFill />
              </span>
            </div>
          ))}
        </div>

        {/* Right content */}
        <div className="flex flex-col gap-6">
          <h2
            ref={headingRef}
            className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold leading-snug"
          >
            Over a Decade of Expertise in <br />
            Manpower Outsourcing
          </h2>
          <p
            ref={textRef}
            className="text-[14px] sm:text-[15px] text-white/90 leading-relaxed"
          >
            Arka Hire is a prominent manpower outsourcing company, headquartered
            in London, UK. With over a decade of experience, we specialize in
            providing customized manpower management solutions tailored to meet
            the unique needs of our clients. Our expert team excels in
            identifying top talent, ensuring a perfect match for each
            organization’s specific requirements and budget. We offer a
            comprehensive range of services, including both temporary and
            permanent recruitment across various sectors worldwide. Our goal is
            to be the preferred human resources partner for both public and
            private sector organizations.
          </p>
          <button
            ref={buttonRef}
            className="mt-4 w-[200px] rounded-md bg-red-600 px-6 py-3 font-bold text-white shadow-lg hover:bg-red-700 transition duration-300"
          >
            More About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
