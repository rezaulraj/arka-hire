import React, { useEffect, useRef } from "react";
import { FaCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function AssistanceProcess() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const overlayRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const listRef = useRef([]);
  const lineRef = useRef(null);
  const rightRefs = useRef([]);

  // Fetch steps from i18n JSON
  const stepsData = t(
    "employers.immigrationAssistancePage.assistanceProcess.steps",
    {
      returnObjects: true,
    },
  );
  const steps = Array.isArray(stepsData) ? stepsData : [];

  useEffect(() => {
    const load = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
          defaults: { ease: "power3.out" },
        });

        tl.fromTo(
          labelRef.current,
          { x: -30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6 },
        )
          .fromTo(
            headingRef.current,
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.75 },
            "-=0.3",
          )
          .fromTo(
            listRef.current,
            { x: -25, opacity: 0 },
            { x: 0, opacity: 1, stagger: 0.1, duration: 0.5 },
            "-=0.4",
          )
          .fromTo(
            lineRef.current,
            { scaleY: 0, transformOrigin: "top center" },
            { scaleY: 1, duration: 1, ease: "power2.out" },
            "-=0.6",
          )
          .fromTo(
            rightRefs.current,
            { x: 40, opacity: 0 },
            { x: 0, opacity: 1, stagger: 0.15, duration: 0.65 },
            "-=0.9",
          );
      }, sectionRef);

      return () => ctx.revert();
    };
    load();
  }, [steps.length]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif", minHeight: 420 }}
    >
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');`}
      </style>

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1600&q=80')",
        }}
      />

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0"
        style={{ background: "rgba(10, 40, 20, 0.82)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-14 py-16 grid md:grid-cols-2 gap-12 items-start">
        {/* LEFT */}
        <div>
          <p
            ref={labelRef}
            className="text-sm mb-3"
            style={{
              color: "#e03939",
              fontWeight: 600,
              letterSpacing: "0.08em",
            }}
          >
            {t("employers.immigrationAssistancePage.assistanceProcess.label")}
          </p>

          <h2
            ref={headingRef}
            className="text-white leading-tight mb-8"
            style={{ fontWeight: 800, fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
          >
            {t("employers.immigrationAssistancePage.assistanceProcess.heading")}
          </h2>

          <ul className="space-y-3">
            {steps.map((s, i) => (
              <li
                key={s.title}
                ref={(el) => (listRef.current[i] = el)}
                className="flex items-center gap-3 text-sm"
                style={{ color: "#d1fae5", fontWeight: 500 }}
              >
                <FaCircle
                  size={8}
                  style={{ color: "#eb2424", flexShrink: 0 }}
                />
                {s.title}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT – timeline */}
        <div className="relative">
          <div
            ref={lineRef}
            className="absolute left-0 top-2 bottom-2 w-px"
            style={{
              background:
                "linear-gradient(to bottom, #e62828, rgba(224, 57, 65, 0.2))",
            }}
          />

          <div className="space-y-8 pl-8">
            {steps.map((s, i) => (
              <div
                key={s.title}
                ref={(el) => (rightRefs.current[i] = el)}
                className="relative"
              >
                <h3
                  className="text-white mb-1"
                  style={{ fontWeight: 700, fontSize: "0.95rem" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-green-200 text-xs leading-relaxed"
                  style={{ fontWeight: 400 }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
