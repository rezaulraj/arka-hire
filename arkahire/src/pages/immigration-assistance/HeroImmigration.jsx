import React, { useEffect, useRef } from "react";
import { FaArrowRight, FaBrain, FaCogs, FaLeaf, FaBalanceScale } from "react-icons/fa";
import heroImg from "../../assets/emi.webp";

const features = [
  {
    icon: <FaArrowRight size={22} />,
    title: "Expert Guidance",
    desc: "Our team stays up-to-date on the latest immigration laws and policies.",
  },
  {
    icon: <FaCogs size={22} />,
    title: "Comprehensive Support",
    desc: "We take care of everything, from paperwork to legal compliance.",
  },
  {
    icon: <FaBrain size={22} />,
    title: "Peace of Mind",
    desc: "Focus on growing your business while we handle the legal details.",
  },
  {
    icon: <FaBalanceScale size={22} />,
    title: "Legal Compliance",
    desc: "Our specialists ensure that all immigration procedures are in strict accordance with current laws.",
  },
];

export default function HeroImmigration() {
  const titleRef    = useRef(null);
  const subTitleRef = useRef(null);
  const headingRef  = useRef(null);
  const paraRef     = useRef(null);
  const imageRef    = useRef(null);
  const cardRefs    = useRef([]);

  useEffect(() => {
    const load = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(titleRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 })
        .fromTo(subTitleRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }, "-=0.4")
        .fromTo(headingRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8 }, "-=0.3")
        .fromTo(paraRef.current,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6 }, "-=0.4")
        .fromTo(imageRef.current,
        { x: 60, opacity: 0, scale: 0.95 },
        { x: 0, opacity: 1, scale: 1, duration: 0.9, ease: "back.out(1.4)" }, "-=0.8");

      gsap.fromTo(cardRefs.current,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.15, duration: 0.65, ease: "power3.out",
          scrollTrigger: { trigger: cardRefs.current[0], start: "top 85%" },
        });
    };
    load();
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#071b0c] via-[#2f7f35] to-[#071b0c] px-4 py-20 font-montserrat text-white sm:px-6 lg:px-10"
    >

      <div className="max-w-6xl mx-auto px-6 py-14">

        {/* ── Top heading (centered) ── */}
        <div className="text-center mb-10">
          <h1
            ref={titleRef}
            className="text-white text-3xl md:text-4xl mb-3"
            style={{ fontWeight: 600 }}
          >
            Immigration Assistance
          </h1>
          <p
            ref={subTitleRef}
            className="text-green-200 text-sm max-w-xl mx-auto"
            style={{ fontWeight: 400 }}
          >
            We understand that navigating the immigration process for your employees can be complex and stressful.
          </p>
        </div>

        {/* ── Two columns: text left, image right ── */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-14">

          {/* Left */}
          <div>
            <p
              className="text-sm mb-3"
              style={{ color: "#ff6b35", fontWeight: 600 }}
            >
              Why Choose Our Immigration Assistance?
            </p>

            <h2
              ref={headingRef}
              className="text-white text-2xl md:text-3xl leading-snug mb-4"
              style={{ fontWeight: 800 }}
            >
              Immigration laws can be challenging to manage. Here's why our services are the ideal solution for your business
            </h2>

            <p
              ref={paraRef}
              className="text-green-200 text-sm leading-relaxed"
              style={{ fontWeight: 400 }}
            >
              Our recruitment process is designed to be seamless, transparent, and supportive at every stage.
            </p>
          </div>

          {/* Right – image card */}
          <div ref={imageRef} className="flex justify-center md:justify-end">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "#fff",
                padding: "12px",
                maxWidth: 340,
                width: "100%",
                boxShadow: "0 8px 40px rgba(0,0,0,0.25)",
              }}
            >
              {/* Label inside card */}
              <div className="text-center mb-2">
                <p className="text-xs font-700 tracking-widest uppercase"
                  style={{ color: "#e67e22", fontWeight: 700 }}>
                  IMMIGRATION
                </p>
                <p className="text-xs font-700 tracking-widest uppercase"
                  style={{ color: "#e67e22", fontWeight: 700 }}>
                  CONSULTING
                </p>
              </div>
              <img
                src={heroImg}
                alt="Immigration Consulting"
                className="w-full rounded-xl object-cover"
                style={{ maxHeight: 200 }}
              />
            </div>
          </div>
        </div>

        {/* ── 4 Feature cards ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              ref={(el) => (cardRefs.current[i] = el)}
              className="rounded-xl p-5 text-center transition-transform duration-300 hover:-translate-y-1"
              style={{
                border: "1.5px solid rgba(52,211,153,0.45)",
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(6px)",
              }}
            >
              {/* Icon circle */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-white"
                style={{ background: "rgba(52,211,153,0.18)", border: "1.5px solid rgba(52,211,153,0.4)" }}
              >
                {f.icon}
              </div>

              <h3
                className="text-white text-sm mb-2"
                style={{ fontWeight: 700 }}
              >
                {f.title}
              </h3>
              <p
                className="text-green-200 text-xs leading-relaxed"
                style={{ fontWeight: 400 }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}