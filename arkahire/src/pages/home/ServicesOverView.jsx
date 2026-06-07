import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import service1 from "../../assets/icons/icon-17.webp";
import service2 from "../../assets/icons/workforce.webp";
import service3 from "../../assets/icons/data.webp";
import service4 from "../../assets/icons/planning.webp";
import service5 from "../../assets/icons/background-check.webp";
import service6 from "../../assets/icons/cognitive-training.webp";

gsap.registerPlugin(ScrollTrigger);

const ServicesOverView = () => {
  const { t } = useTranslation();

  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const serviceIcons = [
    service1,
    service2,
    service3,
    service4,
    service5,
    service6,
  ];

  const servicesData = t("home.servicesOverview.items", {
    returnObjects: true,
  });

  const services = Array.isArray(servicesData)
    ? servicesData.map((item, index) => ({
        ...item,
        icon: serviceIcons[index],
      }))
    : [];

  const heading = t("home.servicesOverview.title").split(" ");
  const subtitle = t("home.servicesOverview.subtitle");
  const viewDetails = t("home.servicesOverview.viewDetails");
  const serviceLabel = t("home.servicesOverview.serviceLabel");

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".overview-word", {
        yPercent: 110,
        opacity: 0,
      });

      gsap.set(".overview-subtitle", {
        y: 20,
        opacity: 0,
        filter: "blur(8px)",
      });

      gsap.set(cardsRef.current, {
        y: 70,
        opacity: 0,
        scale: 0.88,
        rotateX: 12,
        filter: "blur(10px)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      tl.to(".overview-word", {
        yPercent: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.08,
        ease: "power4.out",
      })
        .to(
          ".overview-subtitle",
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .to(
          cardsRef.current,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 0.85,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.35",
        )
        .fromTo(
          ".service-icon",
          {
            scale: 0,
            rotate: -20,
            opacity: 0,
          },
          {
            scale: 1,
            rotate: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "back.out(1.8)",
          },
          "-=0.6",
        )
        .fromTo(
          ".service-title",
          {
            y: 18,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.45,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.5",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#0C1A0E] via-[#2f7f35] to-[#0C1A0E] px-4 py-20 font-montserrat sm:px-6 lg:px-8"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <h2 className="text-[34px] font-black leading-tight tracking-tight text-white sm:text-[46px] lg:text-[56px]">
            {heading.map((word, index) => (
              <span
                key={`${word}-${index}`}
                className="mr-3 inline-block overflow-hidden align-bottom"
              >
                <span
                  className={`overview-word inline-block ${
                    word === "Services" ? "text-[#d8ffd8]" : "text-white"
                  }`}
                >
                  {word}
                </span>
              </span>
            ))}
          </h2>

          <p className="overview-subtitle mx-auto mt-4 max-w-2xl text-[15px] font-medium leading-7 text-white/80">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              to={service.path}
              key={service.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group block h-[250px] cursor-pointer [perspective:1200px]"
            >
              <div className="relative h-full w-full rounded-[20px] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-[20px] border border-white/15 bg-[#60c865]/90 p-6 text-center shadow-[0_24px_60px_rgba(0,0,0,0.22)]"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="service-icon relative z-10 mb-5 flex h-24 w-24 items-center justify-center rounded-2xl border border-white/35 bg-white shadow-[0_14px_35px_rgba(0,0,0,0.18)] transition duration-500 group-hover:scale-110">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="block h-16 w-16 object-contain"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="service-title relative z-10 text-[18px] font-extrabold leading-tight text-white drop-shadow-lg">
                    {service.title}
                  </h3>

                  <span className="absolute right-4 top-4 text-[44px] font-black leading-none text-white/10">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-[20px] border border-white/20 bg-[#16451f] p-7 text-center shadow-[0_24px_60px_rgba(0,0,0,0.28)] [transform:rotateY(180deg)]"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-transparent via-[#90ff90] to-transparent" />
                  <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-[#90ff90]/20 blur-2xl" />

                  <p className="mb-3 text-[12px] font-black uppercase tracking-[0.25em] text-[#90ff90]">
                    {serviceLabel} {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mb-3 text-[20px] font-extrabold leading-tight text-white">
                    {service.title}
                  </h3>

                  <p className="text-[13px] font-medium leading-6 text-white/75">
                    {service.description}
                  </p>

                  <span className="mt-4 inline-flex rounded-full border border-[#90ff90]/35 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#90ff90]">
                    {viewDetails}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverView;
