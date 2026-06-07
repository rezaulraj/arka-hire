import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    year: "2013",
    title: "Launch and Foundation",
    tag: "Founded",
    desc: "Arka Hire was founded in UK, focusing on providing personalized manpower management services and assembling a skilled team to serve initial clients in the construction and manufacturing sectors.",
    icon: "🚀",
  },
  {
    year: "2016",
    title: "Service Expansion",
    tag: "Growth",
    desc: "We broadened our recruitment services to include both temporary and permanent staffing solutions, expanding into warehousing, logistics, and healthcare, thereby growing our client base significantly.",
    icon: "📈",
  },
  {
    year: "2019",
    title: "Industry Diversification",
    tag: "Milestone",
    desc: "We further expanded our offerings into new industries, including retail, hospitality, and IT, allowing us to cater to a wider range of client needs and market demands.",
    icon: "🌿",
  },
  {
    year: "2023",
    title: "Global Expansion",
    tag: "Global",
    desc: "We enhanced our global presence by entering new international markets, solidifying our reputation as a leading recruitment partner and providing comprehensive manpower solutions worldwide.",
    icon: "🌍",
  },
];

const CompanyTimeline = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const lineFillRef = useRef(null);
  const dotRefs = useRef([]);
  const yearRefs = useRef([]);
  const cardRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.from(".tl-badge", {
        y: 28,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
      gsap.from(".tl-title", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power4.out",
        delay: 0.12,
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
      gsap.from(".tl-sub", {
        y: 28,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.24,
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      // Line draw
      gsap.fromTo(
        lineFillRef.current,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: lineRef.current,
            start: "top 55%",
            end: "bottom 80%",
            scrub: 1.2,
          },
        },
      );

      // Per-item animations
      dotRefs.current.forEach((dot, i) => {
        const isLeft = i % 2 === 0;

        // Dot
        gsap.fromTo(
          dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.55,
            ease: "back.out(2.2)",
            scrollTrigger: { trigger: dot, start: "top 78%" },
          },
        );

        // Year — slides in from its own side
        gsap.fromTo(
          yearRefs.current[i],
          { x: isLeft ? 50 : -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.65,
            ease: "power3.out",
            scrollTrigger: { trigger: dot, start: "top 78%" },
          },
        );

        // Card — slides in from its own side
        gsap.fromTo(
          cardRefs.current[i],
          {
            x: isLeft ? -70 : 70,
            opacity: 0,
            scale: 0.92,
            filter: "blur(8px)",
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.75,
            ease: "power3.out",
            delay: 0.1,
            scrollTrigger: { trigger: dot, start: "top 78%" },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
        .tl-wrap, .tl-wrap * { font-family: "Plus Jakarta Sans", sans-serif; box-sizing: border-box; }

        .tl-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(14px);
          transition: border-color 0.35s, box-shadow 0.35s, transform 0.35s;
        }
        .tl-card:hover {
          border-color: rgba(255,255,255,0.26);
          box-shadow: 0 24px 60px rgba(0,0,0,0.3), inset 0 0 40px rgba(255,255,255,0.03);
          transform: translateY(-5px);
        }

        .tl-dot {
          animation: dotPulse 2.8s ease-in-out infinite;
        }
        @keyframes dotPulse {
          0%,100% { box-shadow: 0 0 0 4px rgba(255,255,255,0.15), 0 0 0 8px rgba(255,255,255,0.05); }
          50%      { box-shadow: 0 0 0 7px rgba(255,255,255,0.22), 0 0 0 14px rgba(255,255,255,0.06); }
        }

        .tl-year {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.16);
          backdrop-filter: blur(10px);
          transition: background 0.3s;
        }
        .tl-year:hover { background: rgba(255,255,255,0.13); }

        /* ── 3-column grid: [year/card] [center] [card/year] ── */
        .tl-row {
          display: grid;
          grid-template-columns: 1fr 48px 1fr;
          align-items: center;
          gap: 0 24px;
        }

        /* Mobile: stack vertically */
        @media (max-width: 767px) {
          .tl-row {
            grid-template-columns: 40px 1fr;
            gap: 0 16px;
          }
          .tl-col-center { grid-column: 1; grid-row: 1; }
          .tl-col-left   { display: none; }
          .tl-col-right  { grid-column: 2; grid-row: 1; }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="tl-wrap relative w-full overflow-hidden bg-linear-to-r from-[#0C1A0E] via-[#2f7f35] to-[#0C1A0E] px-4 py-28 sm:px-8 lg:px-16"
      >
        {/* Glows */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_65%)]" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 translate-y-1/3 rounded-full bg-[radial-gradient(circle,rgba(47,127,53,0.3)_0%,transparent_65%)] blur-[50px]" />

        {/* ── Header ── */}
        <div className="relative z-10 mb-20 text-center">
          <div
            className="tl-badge mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.18)",
            }}
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white shadow-[0_0_6px_white]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/65">
              Our Journey
            </span>
          </div>

          <h2 className="tl-title mb-4 text-[clamp(32px,5vw,58px)] font-black leading-tight tracking-[-0.04em] text-white">
            Company{" "}
            <span className="relative inline-block">
              Timeline
              <span className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full bg-white/20" />
            </span>
          </h2>

          <p className="tl-sub mx-auto max-w-md text-[15px] font-medium leading-relaxed text-white/45">
            A decade of growth, innovation, and global impact in workforce
            solutions.
          </p>
        </div>

        {/* ── Timeline body ── */}
        <div className="relative z-10 mx-auto max-w-5xl">
          {/* Vertical line */}
          <div
            ref={lineRef}
            className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2"
            style={{ background: "rgba(255,255,255,0.08)" }}
          >
            <div
              ref={lineFillRef}
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.12))",
              }}
            />
          </div>

          {/* ── Rows ── */}
          <div className="flex flex-col" style={{ gap: "72px" }}>
            {timelineData.map((item, i) => {
              const isLeft = i % 2 === 0;

              const Card = (
                <div
                  ref={(el) => (cardRefs.current[i] = el)}
                  className="tl-card rounded-2xl p-6"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span
                      className="rounded-lg px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white/50"
                      style={{
                        background: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      {item.tag}
                    </span>
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <h3 className="mb-3 text-[18px] font-black leading-snug tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="text-[13px] font-medium leading-[1.85] text-white/48">
                    {item.desc}
                  </p>
                </div>
              );

              const Year = (
                <div
                  ref={(el) => (yearRefs.current[i] = el)}
                  className={`tl-year inline-flex flex-col items-center justify-center rounded-2xl px-5 py-3 ${
                    isLeft ? "ml-auto" : "mr-auto"
                  }`}
                >
                  <span className="mb-0.5 text-[9px] font-black uppercase tracking-[0.22em] text-white/30">
                    Year
                  </span>
                  <span className="text-[26px] font-black leading-none tracking-[-0.04em] text-white">
                    {item.year}
                  </span>
                </div>
              );

              return (
                <div key={i} className="tl-row">
                  {/* LEFT column */}
                  <div className="tl-col-left flex items-center justify-end">
                    {isLeft ? Card : Year}
                  </div>

                  {/* CENTER dot */}
                  <div className="tl-col-center flex justify-center">
                    <div
                      ref={(el) => (dotRefs.current[i] = el)}
                      className="tl-dot relative z-20 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[3px] border-white bg-[#2f7f35]"
                    >
                      <div className="h-3 w-3 rounded-full bg-white" />
                    </div>
                  </div>

                  {/* RIGHT column */}
                  <div className="tl-col-right flex items-center justify-start">
                    {isLeft ? Year : Card}
                  </div>
                </div>
              );
            })}
          </div>

          {/* End cap */}
          <div className="mt-16 flex flex-col items-center gap-3">
            <div className="h-10 w-[2px] bg-gradient-to-b from-white/20 to-transparent" />
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full text-xl backdrop-blur-sm"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.18)",
              }}
            >
              🌐
            </div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/28">
              And Beyond…
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyTimeline;
