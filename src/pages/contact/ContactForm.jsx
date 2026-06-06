import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const sectionRef = useRef(null);
  const infoRef = useRef(null);
  const formRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(infoRef.current, {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(formRef.current, {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-auto bg-cover bg-center bg-no-repeat py-24 px-4 sm:px-6 lg:px-16 font-montserrat text-white flex flex-col justify-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGVtcGxveWVlJTIwb2ZmaWNlfGVufDB8fDB8fA&ixlib=rb-4.0.3&q=80&w=1080')`,
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Info */}
        <div ref={infoRef} className="flex flex-col justify-start gap-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Contact for Workforce Solutions!
          </h2>
          <h3 className="text-xl sm:text-2xl font-semibold">
            Need help? Send us an inquiry
          </h3>
          <p className="text-white/70">
            Fill out the form and our team will get back to you as soon as
            possible
          </p>

          <div className="flex items-center gap-3 text-white/90 mt-6">
            <span className="text-red-600 font-bold">📧</span>
            <span className="font-medium">info@arkahire.com</span>
          </div>
        </div>

        {/* Right Form */}
        <div
          ref={formRef}
          className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg"
        >
          <form className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-md bg-white/20 placeholder-white/70 text-white focus:bg-white/30 focus:ring-2 focus:ring-[#2f7f35] focus:outline-none transition"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-md bg-white/20 placeholder-white/70 text-white focus:bg-white/30 focus:ring-2 focus:ring-[#2f7f35] focus:outline-none transition"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md bg-white/20 placeholder-white/70 text-white focus:bg-white/30 focus:ring-2 focus:ring-[#2f7f35] focus:outline-none transition"
              />
            </div>
            <textarea
              placeholder="Message"
              className="w-full px-4 py-3 rounded-md bg-white/20 placeholder-white/70 text-white h-32 resize-none focus:bg-white/30 focus:ring-2 focus:ring-[#2f7f35] focus:outline-none transition"
            />
            <button
              type="submit"
              className="mt-2 w-full bg-[#60c865] hover:bg-[#4caf52] text-white font-bold py-3 rounded-md shadow-lg transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Footer Address */}
      <div className="mt-12 text-center relative z-10">
        <p className="text-sm bg-white/10 inline-block px-6 py-2 rounded-md border border-white/30">
          HEAD OFFICE - UK <br /> Surbiton, United Kingdom, KT6 7TE
        </p>
      </div>
    </section>
  );
};

export default ContactForm;