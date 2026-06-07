import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import collaboration from "../../assets/collaboration.webp";

const PartnerCollaboration = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".pb-title", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(".pb-text", {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        stagger: 0.2,
        ease: "power3.out",
      });
      gsap.from(".pb-button", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#071b0c] via-[#2f7f35] to-[#071b0c] px-4 py-16 font-montserrat text-white sm:px-6 lg:px-10 lg:py-20"
    >

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={collaboration}
            alt="Partnership"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Right Text */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <span className="text-red-600 font-semibold pb-text">
            Why Partner with Arka Hire?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold pb-title leading-snug">
            Collaborating with Arka Hire offers numerous advantages. Here’s why
            you should join our network
          </h2>
          <p className="pb-text">
            <strong>Exclusive Opportunities:</strong> Gain access to a wide
            range of job openings and an extensive client base.
          </p>
          <p className="pb-text">
            <strong>Collaborative Network:</strong> Become part of a
            professional community committed to recruitment excellence.
          </p>
          <p className="pb-text">
            <strong>Professional Growth:</strong> Enhance your expertise and
            expand your business with our expert guidance.
          </p>

          <button className="pb-button mt-4 w-max bg-red-600 hover:bg-red-700 transition-colors px-6 py-3 rounded text-white font-semibold shadow-lg">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnerCollaboration;
