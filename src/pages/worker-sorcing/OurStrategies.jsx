import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const strategyIcons = [
  <svg
    viewBox="0 0 64 64"
    fill="none"
    className="h-full w-full"
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
  </svg>,

  <svg
    viewBox="0 0 64 64"
    fill="none"
    className="h-full w-full"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="32" cy="20" r="10" />
    <path d="M20 44c0-6.63 5.37-12 12-12s12 5.37 12 12" strokeLinecap="round" />
    <circle cx="32" cy="20" r="14" strokeDasharray="4 3" />
    <path d="M44 46l4 4" strokeLinecap="round" />
    <circle cx="40" cy="42" r="6" />
    <path d="M38 42l1.5 1.5 3-3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,

  <svg
    viewBox="0 0 64 64"
    fill="none"
    className="h-full w-full"
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
  </svg>,

  <svg
    viewBox="0 0 64 64"
    fill="none"
    className="h-full w-full"
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
  </svg>,
];

const StrategyCard = ({ strategy, index, stepLabel, learnMore }) => {
  const cardRef = useRef(null);
  const numberRef = useRef(null);
  const iconRef = useRef(null);
  const lineRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const fromX = index % 2 === 0 ? -60 : 60;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          x: fromX,
          y: 40,
          rotateZ: index % 2 === 0 ? -4 : 4,
        },
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

      gsap.fromTo(
        numberRef.current,
        {
          opacity: 0,
          scale: 2,
          filter: "blur(10px)",
        },
        {
          opacity: 0.08,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.2,
          delay: index * 0.15 + 0.3,
          ease: "expo.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
          },
        },
      );

      gsap.fromTo(
        lineRef.current,
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          duration: 0.8,
          delay: index * 0.15 + 0.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
          },
        },
      );

      gsap.to(iconRef.current, {
        y: -6,
        duration: 2.5 + index * 0.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, card);

    const onEnter = () => {
      gsap.to(card, {
        y: -10,
        scale: 1.03,
        duration: 0.35,
        ease: "power3.out",
      });

      gsap.to(glowRef.current, {
        opacity: 1,
        scale: 1.05,
        duration: 0.4,
      });

      gsap.to(iconRef.current, {
        rotate: 8,
        scale: 1.15,
        duration: 0.35,
      });
    };

    const onLeave = () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "power3.out",
      });

      gsap.to(glowRef.current, {
        opacity: 0,
        scale: 1,
        duration: 0.4,
      });

      gsap.to(iconRef.current, {
        rotate: 0,
        scale: 1,
        duration: 0.35,
      });
    };

    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);

    return () => {
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
      ctx.revert();
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="relative cursor-pointer opacity-0"
      style={{ perspective: "1000px" }}
    >
      <div
        ref={glowRef}
        className="pointer-events-none absolute -inset-4 rounded-3xl opacity-0"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${strategy.color}30, transparent 70%)`,
          filter: "blur(24px)",
        }}
      />

      <span
        ref={numberRef}
        className="pointer-events-none absolute -right-2 -top-4 select-none text-8xl font-black opacity-0"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          color: strategy.color,
          lineHeight: 1,
        }}
      >
        {strategy.number}
      </span>

      <div
        className="relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl p-6"
        style={{
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(24px)",
          boxShadow:
            "0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
      >
        <div
          className="absolute left-0 top-0 h-16 w-16 rounded-br-full opacity-20"
          style={{
            background: `radial-gradient(circle at top left, ${strategy.color}, transparent)`,
          }}
        />

        <div className="flex items-start gap-4">
          <div
            ref={iconRef}
            className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl p-3"
            style={{
              background: `linear-gradient(135deg, ${strategy.color}22, ${strategy.color}08)`,
              border: `1.5px solid ${strategy.color}40`,
              color: strategy.color,
              boxShadow: `0 0 20px ${strategy.color}20`,
            }}
          >
            {strategy.icon}
          </div>

          <div
            className="mt-1 rounded-full px-2 py-0.5 text-[10px] font-bold tracking-widest"
            style={{
              background: `${strategy.color}18`,
              color: strategy.color,
              border: `1px solid ${strategy.color}30`,
              fontFamily: "monospace",
            }}
          >
            {stepLabel} {strategy.number}
          </div>
        </div>

        <div
          ref={lineRef}
          className="h-px w-full origin-left"
          style={{
            background: `linear-gradient(90deg, ${strategy.color}60, transparent)`,
          }}
        />

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

        <div className="mt-auto flex items-center gap-2">
          <div
            className="flex h-6 w-6 items-center justify-center rounded-full"
            style={{
              background: `${strategy.color}22`,
              border: `1px solid ${strategy.color}40`,
            }}
          >
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="h-3 w-3"
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
            className="text-xs uppercase tracking-widest opacity-40"
            style={{ fontFamily: "monospace", color: strategy.color }}
          >
            {learnMore}
          </span>
        </div>
      </div>
    </div>
  );
};

const OurStrategies = () => {
  const { t } = useTranslation();

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const tagRef = useRef(null);
  const svgLineRef = useRef(null);

  const headingData = t("ourApproach.workerSourcing.ourStrategies.heading", {
    returnObjects: true,
  });

  const cardsData = t("ourApproach.workerSourcing.ourStrategies.cards", {
    returnObjects: true,
  });

  const heading = Array.isArray(headingData) ? headingData : [];
  const strategies = Array.isArray(cardsData)
    ? cardsData.map((item, index) => ({
        ...item,
        icon: strategyIcons[index],
        color: item.color || "#4ade80",
        darkColor: item.darkColor || "#16a34a",
      }))
    : [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        tagRef.current,
        {
          opacity: 0,
          y: -20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: tagRef.current,
            start: "top 85%",
          },
        },
      );

      const words = titleRef.current?.querySelectorAll(".word") || [];

      gsap.fromTo(
        words,
        {
          opacity: 0,
          y: 40,
          rotateX: -40,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
          },
        },
      );

      if (svgLineRef.current) {
        const path = svgLineRef.current;
        const len = path.getTotalLength?.() || 800;

        gsap.set(path, {
          strokeDasharray: len,
          strokeDashoffset: len,
        });

        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [heading.length]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#0C1A0E] via-[#2f7f35] to-[#0C1A0E] px-4 py-24 font-montserrat text-white sm:px-8 lg:px-16"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;600;700;900&display=swap');
      `}</style>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(45deg, rgba(74,222,128,0.8) 1px, transparent 1px), linear-gradient(-45deg, rgba(74,222,128,0.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(74,222,128,0.07) 0%, transparent 70%)",
        }}
      />

      <svg
        className="pointer-events-none absolute left-0 top-0 hidden h-full w-full lg:block"
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

      <div className="relative z-10 mb-16 text-center">
        <div ref={tagRef} className="mb-5 inline-flex items-center gap-3">
          <div className="h-px w-8 bg-green-400 opacity-50" />

          <span
            className="text-[10px] font-bold uppercase tracking-[0.4em] text-green-400 opacity-70"
            style={{ fontFamily: "monospace" }}
          >
            {t("ourApproach.workerSourcing.ourStrategies.tagline")}
          </span>

          <div className="h-px w-8 bg-green-400 opacity-50" />
        </div>

        <h2
          ref={titleRef}
          className="text-5xl font-black uppercase leading-none sm:text-6xl lg:text-7xl"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            perspective: "600px",
          }}
        >
          {heading.map((word, index) => (
            <span
              key={`${word}-${index}`}
              className="word mr-4 inline-block opacity-0"
              style={{
                background:
                  index === heading.length - 1
                    ? "linear-gradient(135deg, #4ade80, #86efac)"
                    : "linear-gradient(135deg, #fff, #d1fae5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {word}
            </span>
          ))}
        </h2>

        <div className="mt-4 flex items-center justify-center gap-2">
          {[60, 20, 8].map((width, index) => (
            <div
              key={index}
              className="h-1 rounded-full"
              style={{
                width,
                background: "linear-gradient(90deg, #4ade80, #16a34a)",
                opacity: 1 - index * 0.25,
                boxShadow: "0 0 12px #4ade8050",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {strategies.map((strategy, index) => (
          <StrategyCard
            key={`${strategy.number}-${index}`}
            strategy={strategy}
            index={index}
            stepLabel={t("ourApproach.workerSourcing.ourStrategies.stepLabel", {
              defaultValue: "STEP",
            })}
            learnMore={t("ourApproach.workerSourcing.ourStrategies.learnMore", {
              defaultValue: "Learn more",
            })}
          />
        ))}
      </div>
    </section>
  );
};

export default OurStrategies;
