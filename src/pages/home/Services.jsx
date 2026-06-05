import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import consulting from "../../assets/consulting.webp";
import workeraquition from "../../assets/workeraquition.webp";
import traing from "../../assets/traing.webp";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const headingRef = useRef(null);

  const services = [
    {
      name: "Consulting",
      image: consulting,
    },
    {
      name: "Worker Acquisition",
      image: workeraquition,
    },
    {
      name: "Train Workers",
      image: traing,
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;

      gsap.fromTo(
        headingRef.current,
        {
          y: -40,
          opacity: 0,
          scale: 0.92,
          filter: "blur(10px)",
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );

      const activeCard = (activeIndex) => {
        cards.forEach((card, index) => {
          const img = card.querySelector(".service-img");
          const title = card.querySelector(".service-title");
          const dark = card.querySelector(".service-dark");

          gsap.to(card, {
            flex: index === activeIndex ? 1.9 : 0.85,
            xPercent:
              activeIndex === 0
                ? 0
                : activeIndex === 1
                  ? index === 0
                    ? -5
                    : index === 2
                      ? 5
                      : 0
                  : 0,
            duration: 0.9,
            ease: "power3.out",
          });

          gsap.to(img, {
            scale: index === activeIndex ? 1.08 : 1,
            duration: 1,
            ease: "power3.out",
          });

          gsap.to(title, {
            y: index === activeIndex ? 0 : 14,
            opacity: index === activeIndex ? 1 : 0.85,
            scale: index === activeIndex ? 1 : 0.92,
            duration: 0.75,
            ease: "power3.out",
          });

          gsap.to(dark, {
            opacity: index === activeIndex ? 0.48 : 0.6,
            duration: 0.75,
            ease: "power3.out",
          });
        });
      };

      activeCard(0);

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=2200",
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          if (progress < 0.34) {
            activeCard(0);
          } else if (progress < 0.68) {
            activeCard(1);
          } else {
            activeCard(2);
          }
        },
      });

      gsap.from(".service-card", {
        y: 90,
        opacity: 0,
        rotateX: 8,
        duration: 1.1,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex w-full items-center overflow-hidden bg-[#2f7f35] font-montserrat"
    >
      {/* Center Top Overlay Heading */}
      <div
        ref={headingRef}
        className="pointer-events-none absolute left-1/2 top-7 z-30 -translate-x-1/2 text-center sm:top-10 lg:top-12"
      >
        <span className="mb-3 inline-block rounded-full border border-white/35 bg-white/15 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.35em] text-white shadow-xl backdrop-blur-md sm:text-[12px]">
          Our
        </span>

        <h2 className="text-[38px] font-black uppercase leading-none tracking-tight text-white drop-shadow-2xl sm:text-[58px] lg:text-[76px]">
          Services
        </h2>
      </div>

      <div className="w-full">
        {/* Desktop */}
        <div className="hidden h-[520px] w-full gap-0 overflow-hidden rounded-none lg:flex">
          {services.map((service, index) => (
            <div
              key={service.name}
              ref={(el) => (cardsRef.current[index] = el)}
              className="service-card relative h-full flex-1 overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.name}
                className="service-img h-full w-full object-cover"
              />

              <div className="service-dark absolute inset-0 bg-black" />

              <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-center px-6 pb-10">
                <h2 className="service-title text-center text-[34px] font-extrabold leading-tight text-white drop-shadow-2xl xl:text-[42px]">
                  {service.name}
                </h2>
              </div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            </div>
          ))}
        </div>

        {/* Mobile / Tablet */}
        <div className="grid gap-5 lg:hidden">
          {services.map((service) => (
            <div
              key={service.name}
              className="relative h-[330px] overflow-hidden rounded-[26px] shadow-xl sm:h-[430px]"
            >
              <img
                src={service.image}
                alt={service.name}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/45" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-8">
                <h2 className="text-[30px] font-extrabold text-white drop-shadow-2xl sm:text-[42px]">
                  {service.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
