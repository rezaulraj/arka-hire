import React, { useLayoutEffect, useRef } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaBuilding,
  FaGlobeEurope,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LocationPage = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".location-word", {
        yPercent: 110,
        opacity: 0,
      });

      gsap.set(".location-text", {
        y: 28,
        opacity: 0,
        filter: "blur(8px)",
      });

      gsap.set(cardRefs.current, {
        y: 70,
        opacity: 0,
        scale: 0.9,
        filter: "blur(10px)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.to(".location-word", {
        yPercent: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.08,
        ease: "power4.out",
      })
        .to(
          ".location-text",
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.45",
        )
        .to(
          cardRefs.current,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.35)",
          },
          "-=0.35",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const heading = ["Our", "Office", "Location"];

  const infoCards = [
    {
      icon: FaBuilding,
      title: "Head Office - UK",
      text: "Surbiton, United Kingdom, KT6 7TE",
    },
    {
      icon: FaEnvelope,
      title: "Email Address",
      text: "info@arkahire.com",
    },
    {
      icon: FaGlobeEurope,
      title: "Global Support",
      text: "Recruitment support for employers, agencies, and workers.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#071b0c] via-[#2f7f35] to-[#071b0c] px-4 py-20 font-montserrat text-white sm:px-6 lg:px-10"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(255,255,255,0.55)_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[850px] -translate-x-1/2 rounded-full bg-white/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-44 left-1/2 h-[380px] w-[950px] -translate-x-1/2 rounded-full bg-black/30 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <p className="location-text mb-4 text-[12px] font-black uppercase tracking-[0.35em] text-[#d8ffd8]">
            Visit Arka Hire
          </p>

          <h1 className="text-[38px] font-black leading-tight tracking-[0.06em] sm:text-[56px] lg:text-[72px]">
            {heading.map((word, index) => (
              <span
                key={index}
                className="mr-4 inline-block overflow-hidden align-bottom"
              >
                <span
                  className={`location-word inline-block ${
                    word === "Location" ? "text-[#d8ffd8]" : "text-white"
                  } drop-shadow-[0_12px_30px_rgba(0,0,0,0.45)]`}
                >
                  {word}
                </span>
              </span>
            ))}
          </h1>

          <p className="location-text mx-auto mt-5 max-w-3xl text-[15px] font-semibold leading-7 text-white/78 sm:text-[16px]">
            Find our office location and connect with our team for workforce,
            recruitment, and partnership support.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left info panel */}
          <div
            ref={(el) => (cardRefs.current[0] = el)}
            className="relative overflow-hidden rounded-[32px] border border-white/18 bg-white/10 p-7 shadow-[0_28px_85px_rgba(0,0,0,0.3)] backdrop-blur-xl"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#d8ffd8]/18 blur-2xl" />

            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#d8ffd8]/30 bg-[#d8ffd8]/15 text-[#d8ffd8] shadow-[0_18px_45px_rgba(0,0,0,0.22)]">
              <FaMapMarkerAlt className="text-[28px]" />
            </div>

            <p className="mb-3 text-[12px] font-black uppercase tracking-[0.25em] text-[#d8ffd8]">
              Location Details
            </p>

            <h2 className="mb-5 text-[34px] font-black leading-tight text-white sm:text-[44px]">
              Let’s build your workforce solution together.
            </h2>

            <p className="mb-8 text-[14px] font-semibold leading-7 text-white/78">
              Contact our UK head office for employer support, agency
              partnership, open jobs, and international workforce solutions.
            </p>

            <div className="space-y-4">
              {infoCards.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group flex items-start gap-4 rounded-2xl border border-white/12 bg-white/8 p-4 transition duration-300 hover:-translate-y-1 hover:border-[#d8ffd8]/50 hover:bg-white/12"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d8ffd8]/15 text-[#d8ffd8]">
                      <Icon />
                    </div>

                    <div>
                      <h3 className="text-[15px] font-black text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[13px] font-semibold leading-6 text-white/72">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right map style */}
          <div
            ref={(el) => (cardRefs.current[1] = el)}
            className="relative min-h-[520px] overflow-hidden rounded-[32px] border border-white/18 bg-[#0d2813] shadow-[0_28px_85px_rgba(0,0,0,0.3)]"
          >
            {/* Fake map background */}
            <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(216,255,216,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(216,255,216,0.25)_1px,transparent_1px)] [background-size:48px_48px]" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#2f7f35]/45 via-transparent to-black/50" />

            {/* Road lines */}
            <div className="absolute left-[8%] top-[20%] h-[2px] w-[88%] rotate-[-10deg] bg-white/20" />
            <div className="absolute left-[4%] top-[55%] h-[2px] w-[92%] rotate-[8deg] bg-white/18" />
            <div className="absolute left-[45%] top-0 h-full w-[2px] rotate-[18deg] bg-white/14" />
            <div className="absolute left-[68%] top-0 h-full w-[2px] rotate-[-14deg] bg-white/14" />

            {/* Location marker */}
            <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#e60000]/20">
                <div className="absolute h-24 w-24 animate-ping rounded-full bg-[#e60000]/25" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-[6px] border-white bg-[#e60000] text-white shadow-[0_0_40px_rgba(230,0,0,0.6)]">
                  <FaMapMarkerAlt className="text-[24px]" />
                </div>
              </div>
            </div>

            {/* Floating label */}
            <div className="absolute bottom-6 left-6 right-6 z-20 rounded-3xl border border-white/18 bg-black/35 p-6 shadow-[0_20px_55px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <p className="mb-2 text-[12px] font-black uppercase tracking-[0.25em] text-[#d8ffd8]">
                Head Office
              </p>

              <h3 className="text-[26px] font-black leading-tight text-white">
                Surbiton, United Kingdom
              </h3>

              <p className="mt-2 text-[14px] font-semibold text-white/75">
                KT6 7TE
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Surbiton%2C%20United%20Kingdom%20KT6%207TE"
                target="_blank"
                rel="noreferrer"
                className="group mt-5 inline-flex overflow-hidden rounded-md bg-[#e60000] px-6 py-3 text-[13px] font-black text-white shadow-[0_18px_45px_rgba(230,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#c90000]"
              >
                <span className="relative z-10">Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationPage;
