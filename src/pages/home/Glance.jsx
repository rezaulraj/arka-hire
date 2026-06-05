import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroHome from "../../assets/large.webp";

gsap.registerPlugin(ScrollTrigger);

const tabs = [
  {
    label: "Short Overview",
    icon: "↻",
    content: [
      "Arka Hire Limited is a leading manpower outsourcing company with over a decade of experience. The company is headquartered in London, UK, to support its international operations and client base.",
      "We specialize in customized manpower management solutions designed to meet the unique needs of our clients. Our expert team excels at identifying top talent, ensuring a perfect fit for each organization’s specific requirements and budget.",
    ],
  },
  {
    label: "Vision",
    icon: "◉",
    content: [
      "Our vision is to become a trusted global manpower partner, connecting businesses with reliable, skilled, and committed workers across industries.",
      "We aim to build long-term recruitment solutions that support business growth and create meaningful employment opportunities worldwide.",
    ],
  },
  {
    label: "Mission",
    icon: "◉",
    content: [
      "Our mission is to deliver professional manpower outsourcing services through quality recruitment, transparent processes, and continuous support.",
      "We work closely with clients, agencies, and workers to create sustainable staffing solutions that benefit every partner involved.",
    ],
  },
];

const Glance = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const tabContentRef = useRef(null);
  const leftBottomRef = useRef(null);
  const imageRef = useRef(null);
  const floatCardRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".glance-word", {
        yPercent: 110,
        opacity: 0,
      });

      gsap.set(".glance-tabs", {
        x: -45,
        opacity: 0,
        filter: "blur(8px)",
      });

      gsap.set(tabContentRef.current, {
        x: 35,
        opacity: 0,
        filter: "blur(8px)",
      });

      gsap.set(leftBottomRef.current, {
        y: 45,
        opacity: 0,
        filter: "blur(8px)",
      });

      gsap.set(imageRef.current, {
        x: 80,
        opacity: 0,
        scale: 0.94,
        filter: "blur(10px)",
      });

      gsap.set(floatCardRef.current, {
        y: 45,
        opacity: 0,
        scale: 0.9,
        filter: "blur(8px)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      tl.to(".glance-word", {
        yPercent: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.08,
        ease: "power4.out",
      })
        .to(
          ".glance-tabs",
          {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.35",
        )
        .to(
          tabContentRef.current,
          {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.55",
        )
        .to(
          leftBottomRef.current,
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.35",
        )
        .to(
          imageRef.current,
          {
            x: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power4.out",
          },
          "-=0.85",
        )
        .to(
          floatCardRef.current,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.75,
            ease: "back.out(1.5)",
          },
          "-=0.45",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (!tabContentRef.current) return;

    gsap.fromTo(
      tabContentRef.current.querySelectorAll(".tab-line"),
      {
        y: 18,
        opacity: 0,
        filter: "blur(6px)",
      },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out",
      },
    );
  }, [activeTab]);

  const heading = ["Arka", "Hire", "At", "a", "Glance"];

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-linear-to-r from-[#0C1A0E] via-[#2f7f35] to-[#0C1A0E] px-4 py-16 font-montserrat sm:px-6 lg:px-10 lg:py-20"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <h2
          ref={headingRef}
          className="mb-16 text-center text-[34px] font-black tracking-wide text-white sm:text-[44px] lg:text-[54px]"
        >
          {heading.map((word, index) => (
            <span
              key={index}
              className="mr-3 inline-block overflow-hidden align-bottom"
            >
              <span
                className={`glance-word inline-block ${
                  word === "Arka" || word === "Glance"
                    ? "text-[#d8ffd8]"
                    : "text-white"
                }`}
              >
                {word}
              </span>
            </span>
          ))}
        </h2>

        {/* Top tabs + text */}
        <div className="grid gap-6 lg:grid-cols-[135px_1fr] lg:gap-4">
          <div className="glance-tabs flex overflow-hidden rounded-none sm:w-fit lg:block">
            {tabs.map((tab, index) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(index)}
                className={`flex min-w-[135px] items-center gap-2 px-5 py-4 text-left text-[13px] font-bold transition-all duration-300 ${
                  activeTab === index
                    ? "bg-[#61cf6b] text-white"
                    : "bg-[#e60000] text-white hover:bg-[#b90000]"
                }`}
              >
                <span className="text-[15px]">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          <div
            ref={tabContentRef}
            className="max-w-5xl pt-2 text-[13px] font-bold leading-6 text-white sm:text-[14px]"
          >
            {tabs[activeTab].content.map((line, index) => (
              <p key={index} className="tab-line mb-4 last:mb-0">
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Bottom content */}
        <div className="mt-16 grid items-end gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div ref={leftBottomRef} className="pb-2">
            <h3 className="mb-4 text-[22px] font-black tracking-wide text-white sm:text-[26px]">
              Join Our Global Recruitment Network
            </h3>

            <p className="max-w-xl text-[14px] font-bold leading-7 text-white/90">
              At Arka Hire, we believe that great achievements are built on
              strong partnerships. Whether you’re a solo agent or part of an
              agency, now is the perfect time to collaborate with us and deliver
              exceptional staffing solutions to clients worldwide.
            </p>

            <a
              href="/contact-us"
              className="group relative mt-7 inline-flex overflow-hidden rounded-sm bg-[#096111] px-7 py-3 text-[13px] font-bold text-white shadow-[0_16px_35px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-[#0b7415]"
            >
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-500 group-hover:translate-x-full" />
            </a>
          </div>

          <div className="relative">
            <div
              ref={imageRef}
              className="relative overflow-hidden rounded-xl shadow-[0_25px_70px_rgba(0,0,0,0.32)]"
            >
              <img
                src={HeroHome}
                alt="Arka Hire At a Glance"
                className="h-[285px] w-full object-cover sm:h-[340px] lg:h-[335px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#2f7f35]/10 via-transparent to-[#2f7f35]/20" />
            </div>

            <div
              ref={floatCardRef}
              className="absolute bottom-4 left-4 max-w-[280px] rounded-lg border-[6px] border-white/35 bg-[#096111] p-4 text-white shadow-[0_18px_45px_rgba(0,0,0,0.35)] backdrop-blur-md sm:max-w-[310px]"
            >
              <h4 className="mb-2 text-[16px] font-black leading-tight">
                Collaborative Onboarding
              </h4>

              <p className="text-[13px] font-bold leading-6 text-white/95">
                You’ll receive comprehensive guidance right from the start —
                understand our best practices, client expectations, and support
                systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Glance;
