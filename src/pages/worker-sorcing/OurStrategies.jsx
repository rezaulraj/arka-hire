import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const strategies = [
  {
    number: "01",
    title: "Tailored Recruitment Plans",
    desc: "We design customized strategies to meet your specific workforce needs and project requirements.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        className="w-full h-full"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="32" cy="22" r="10" />
        <path
          d="M10 54c0-12.15 9.85-22 22-22s22 9.85 22 22"
          strokeLinecap="round"
        />
        <path
          d="M44 10l4 4-4 4M20 10l-4 4 4 4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M32 4v4M32 36v4" strokeLinecap="round" />
      </svg>
    ),
    color: "#4ade80",
    darkColor: "#16a34a",
  },
  {
    number: "02",
    title: "Comprehensive Screening",
    desc: "Our thorough assessment processes ensure the highest standards and the best fit for your projects.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        className="w-full h-full"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="32" cy="20" r="10" />
        <path
          d="M20 44c0-6.63 5.37-12 12-12s12 5.37 12 12"
          strokeLinecap="round"
        />
        <circle cx="32" cy="20" r="14" strokeDasharray="4 3" />
        <path d="M44 46l4 4" strokeLinecap="round" />
        <circle cx="40" cy="42" r="6" />
        <path
          d="M38 42l1.5 1.5 3-3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    color: "#facc15",
    darkColor: "#ca8a04",
  },
  {
    number: "03",
    title: "Efficient Compliance Handling",
    desc: "We expertly manage all necessary paperwork and legal requirements for the international deployment of workers.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        className="w-full h-full"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="14" y="8" width="36" height="48" rx="4" />
        <path d="M22 22h20M22 30h20M22 38h12" strokeLinecap="round" />
        <circle cx="44" cy="44" r="10" fill="rgba(74,222,128,0.15)" />
        <path
          d="M40 44l2.5 2.5 5-5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#4ade80"
        />
      </svg>
    ),
    color: "#60a5fa",
    darkColor: "#2563eb",
  },
  {
    number: "04",
    title: "Seamless Deployment",
    desc: "We ensure a smooth transition and integration of workers into your projects, minimizing disruption and maximizing efficiency.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        className="w-full h-full"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="20" y="14" width="24" height="20" rx="3" />
        <rect x="26" y="34" width="4" height="8" />
        <rect x="34" y="34" width="4" height="8" />
        <rect x="16" y="42" width="32" height="8" rx="2" />
        <circle cx="22" cy="46" r="1.5" fill="currentColor" />
        <circle cx="42" cy="46" r="1.5" fill="currentColor" />
        <path d="M30 20h4M30 25h4" strokeLinecap="round" />
      </svg>
    ),
    color: "#f97316",
    darkColor: "#c2410c",
  },
];

const StrategyCard = ({ strategy, index }) => {
  const cardRef = useRef(null);
  const numberRef = useRef(null);
  const iconRef = useRef(null);
  const lineRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    // Entry animation — alternating from sides
    const fromX = index % 2 === 0 ? -60 : 60;
    gsap.fromTo(
      card,
      { opacity: 0, x: fromX, y: 40, rotateZ: index % 2 === 0 ? -4 : 4 },
      {
        opacity: 1,
        x: 0,
        y: 0,
        rotateZ: 0,
        duration: 1,
        delay: index * 0.15,
        ease: "expo.out",
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      },
    );

    // Number count-up feel
    gsap.fromTo(
      numberRef.current,
      { opacity: 0, scale: 2, filter: "blur(10px)" },
      {
        opacity: 0.08,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.2,
        delay: index * 0.15 + 0.3,
        ease: "expo.out",
        scrollTrigger: { trigger: card, start: "top 88%" },
      },
    );

    // Line reveal
    gsap.fromTo(
      lineRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 0.8,
        delay: index * 0.15 + 0.5,
        ease: "expo.out",
        scrollTrigger: { trigger: card, start: "top 88%" },
      },
    );

    // Icon float
    gsap.to(iconRef.current, {
      y: -6,
      duration: 2.5 + index * 0.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Hover
    const onEnter = () => {
      gsap.to(card, {
        y: -10,
        scale: 1.03,
        duration: 0.35,
        ease: "power3.out",
      });
      gsap.to(glowRef.current, { opacity: 1, scale: 1.05, duration: 0.4 });
      gsap.to(iconRef.current, { rotate: 8, scale: 1.15, duration: 0.35 });
    };
    const onLeave = () => {
      gsap.to(card, { y: 0, scale: 1, duration: 0.4, ease: "power3.out" });
      gsap.to(glowRef.current, { opacity: 0, scale: 1, duration: 0.4 });
      gsap.to(iconRef.current, { rotate: 0, scale: 1, duration: 0.35 });
    };

    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="relative opacity-0 cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      {/* Glow blob */}
      <div
        ref={glowRef}
        className="absolute -inset-4 rounded-3xl opacity-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${strategy.color}30, transparent 70%)`,
          filter: "blur(24px)",
        }}
      />

      {/* Big background number */}
      <span
        ref={numberRef}
        className="absolute -top-4 -right-2 text-8xl font-black pointer-events-none select-none opacity-0"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          color: strategy.color,
          lineHeight: 1,
        }}
      >
        {strategy.number}
      </span>

      {/* Card */}
      <div
        className="relative rounded-2xl p-6 h-full flex flex-col gap-5 overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(24px)",
          boxShadow:
            "0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
      >
        {/* Corner accent */}
        <div
          className="absolute top-0 left-0 w-16 h-16 rounded-br-full opacity-20"
          style={{
            background: `radial-gradient(circle at top left, ${strategy.color}, transparent)`,
          }}
        />

        {/* Icon zone */}
        <div className="flex items-start gap-4">
          <div
            ref={iconRef}
            className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center relative"
            style={{
              background: `linear-gradient(135deg, ${strategy.color}22, ${strategy.color}08)`,
              border: `1.5px solid ${strategy.color}40`,
              color: strategy.color,
              boxShadow: `0 0 20px ${strategy.color}20`,
            }}
          >
            {strategy.icon}
          </div>

          {/* Step pill */}
          <div
            className="mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full tracking-widest"
            style={{
              background: `${strategy.color}18`,
              color: strategy.color,
              border: `1px solid ${strategy.color}30`,
              fontFamily: "monospace",
            }}
          >
            STEP {strategy.number}
          </div>
        </div>

        {/* Divider line */}
        <div
          ref={lineRef}
          className="h-px w-full origin-left"
          style={{
            background: `linear-gradient(90deg, ${strategy.color}60, transparent)`,
          }}
        />

        {/* Text */}
        <div className="flex flex-col gap-2">
          <h3
            className="text-lg font-black leading-tight text-white"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "0.05em",
              fontSize: "1.25rem",
            }}
          >
            {strategy.title}
          </h3>
          <p
            className="text-sm leading-relaxed"
            style={{
              color: "rgba(200,230,210,0.65)",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 400,
            }}
          >
            {strategy.desc}
          </p>
        </div>

        {/* Bottom arrow indicator */}
        <div className="mt-auto flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center"
            style={{
              background: `${strategy.color}22`,
              border: `1px solid ${strategy.color}40`,
            }}
          >
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="w-3 h-3"
              style={{ color: strategy.color }}
            >
              <path
                d="M3 8h10M8 3l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span
            className="text-xs tracking-widest uppercase opacity-40"
            style={{ fontFamily: "monospace", color: strategy.color }}
          >
            Learn more
          </span>
        </div>
      </div>
    </div>
  );
};

const OurStrategies = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const tagRef = useRef(null);
  const svgLineRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      tagRef.current,
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: tagRef.current, start: "top 85%" },
      },
    );

    // Title word-by-word
    const words = titleRef.current.querySelectorAll(".word");
    gsap.fromTo(
      words,
      { opacity: 0, y: 40, rotateX: -40 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "back.out(1.5)",
        scrollTrigger: { trigger: titleRef.current, start: "top 85%" },
      },
    );

    // Connecting SVG path draw
    if (svgLineRef.current) {
      const path = svgLineRef.current;
      const len = path.getTotalLength?.() || 800;
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: { trigger: sectionRef.current, start: "top 60%" },
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-24 px-4 sm:px-8 lg:px-16 font-montserrat text-white bg-linear-to-r from-[#0C1A0E] via-[#2f7f35] to-[#0C1A0E]"
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;600;700;900&display=swap');`}</style>

      {/* Diagonal grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(45deg, rgba(74,222,128,0.8) 1px, transparent 1px), linear-gradient(-45deg, rgba(74,222,128,0.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Radial spotlight */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(74,222,128,0.07) 0%, transparent 70%)",
        }}
      />

      {/* SVG connecting line between cards (decorative) */}
      <svg
        className="absolute left-0 top-0 w-full h-full pointer-events-none hidden lg:block"
        preserveAspectRatio="none"
        style={{ opacity: 0.12 }}
      >
        <path
          ref={svgLineRef}
          d="M 80 340 C 280 260, 480 420, 680 340 S 980 260, 1200 340"
          fill="none"
          stroke="#4ade80"
          strokeWidth="1.5"
          strokeDasharray="6 4"
        />
      </svg>

      {/* Header */}
      <div className="relative z-10 text-center mb-16">
        <div ref={tagRef} className="inline-flex items-center gap-3 mb-5">
          <div className="w-8 h-px bg-green-400 opacity-50" />
          <span
            className="text-green-400 text-[10px] tracking-[0.4em] uppercase font-bold opacity-70"
            style={{ fontFamily: "monospace" }}
          >
            How We Work
          </span>
          <div className="w-8 h-px bg-green-400 opacity-50" />
        </div>

        <h2
          ref={titleRef}
          className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-none"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            perspective: "600px",
          }}
        >
          {"Our Strategies".split(" ").map((w, i) => (
            <span
              key={i}
              className="word inline-block opacity-0 mr-4"
              style={{
                background:
                  i === 1
                    ? "linear-gradient(135deg, #4ade80, #86efac)"
                    : "linear-gradient(135deg, #fff, #d1fae5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {w}
            </span>
          ))}
        </h2>

        {/* Underline glow */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {[60, 20, 8].map((w, i) => (
            <div
              key={i}
              className="h-1 rounded-full"
              style={{
                width: w,
                background: "linear-gradient(90deg, #4ade80, #16a34a)",
                opacity: 1 - i * 0.25,
                boxShadow: "0 0 12px #4ade8050",
              }}
            />
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {strategies.map((s, i) => (
          <StrategyCard key={i} strategy={s} index={i} />
        ))}
      </div>
    </section>
  );
};

export default OurStrategies;
