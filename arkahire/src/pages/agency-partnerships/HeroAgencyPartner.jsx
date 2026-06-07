import React, { useEffect, useRef } from "react";
import HeroImg from "../../assets/agencyPartner.webp";

export default function HeroAgencyPartner() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const dividerRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const parasRef = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    const load = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        // Top section
        const tl = gsap.timeline({
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
          defaults: { ease: "power3.out" },
        });

        tl.fromTo(
          titleRef.current,
          { y: -40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75 },
        )
          .fromTo(
            subRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.65 },
            "-=0.4",
          )
          .fromTo(
            dividerRef.current,
            { scaleX: 0, transformOrigin: "left center" },
            { scaleX: 1, duration: 0.6, ease: "expo.out" },
            "-=0.3",
          )
          .fromTo(
            labelRef.current,
            { x: -30, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5 },
            "-=0.2",
          )
          .fromTo(
            headingRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.75, ease: "expo.out" },
            "-=0.3",
          )
          .fromTo(
            parasRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.12, duration: 0.5 },
            "-=0.4",
          )
          .fromTo(
            imageRef.current,
            { x: 60, opacity: 0, scale: 0.93 },
            {
              x: 0,
              opacity: 1,
              scale: 1,
              duration: 0.85,
              ease: "back.out(1.3)",
            },
            "-=0.7",
          );
      }, sectionRef);

      return () => ctx.revert();
    };
    load();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#071b0c] via-[#2f7f35] to-[#071b0c] px-4 py-16 font-montserrat text-white sm:px-6 lg:px-10 lg:py-20"
    >
      {/* ── TOP: Title + paragraph ── */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12 pt-16 pb-10 text-center">
        <h1
          ref={titleRef}
          className="text-3xl lg:text-4xl font-semibold text-white mb-6"
        >
          Recruiting Process
        </h1>
        <p
          ref={subRef}
          className="text-green-200/70 text-sm leading-relaxed max-w-4xl mx-auto"
        >
          At Arka Hire, we are dedicated to fostering strong, long-term
          partnerships with recruitment agents. Our structured program provides
          the necessary support and resources to help you succeed. Let's
          collaborate to connect businesses with the skilled talent they need.
        </p>
      </div>

      {/* Divider line */}
      <div ref={dividerRef} className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="h-px bg-white/10 w-full" />
      </div>

      {/* ── BOTTOM: Two-column ── */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-14 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT – text */}
        <div>
          <p
            ref={labelRef}
            className="text-sm font-semibold mb-4"
            style={{ color: "#e07b39" }}
          >
            Arka Hire
          </p>

          <h2
            ref={headingRef}
            className="text-white font-black text-3xl lg:text-4xl leading-tight mb-6"
          >
            At Arka Hire, we believe in the power of collaboration.
          </h2>

          {[
            "Are you a solo agent or an organization looking to expand your reach in the recruitment industry?",
            "At Arka Hire, we offer you the opportunity to partner with us and grow your business.",
            "By joining forces with us, you can tap into a wide network of opportunities, increase your placements, and build long-lasting relationships in the industry.",
            "Let us handle the details while you focus on sourcing the best talent.",
          ].map((text, i) => (
            <p
              key={i}
              ref={(el) => (parasRef.current[i] = el)}
              className="text-green-200/70 text-sm leading-relaxed mb-3"
            >
              {text}
            </p>
          ))}
        </div>

        {/* RIGHT – image */}
        <div ref={imageRef} className="rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={HeroImg}
            alt="Agency Partner"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            style={{ maxHeight: 340 }}
          />
        </div>
      </div>
    </section>
  );
}
