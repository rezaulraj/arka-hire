import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactCountryFlag from "react-country-flag";

gsap.registerPlugin(ScrollTrigger);

const countries = [
  {
    name: "UAE",
    city: "Dubai",
    code: "AE",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Nepal",
    city: "Kathmandu",
    code: "NP",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Oman",
    city: "Muscat",
    code: "OM",
    image:
      "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Sri Lanka",
    city: "Colombo",
    code: "LK",
    image:
      "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Qatar",
    city: "Doha",
    code: "QA",
    image:
      "https://images.unsplash.com/photo-1700901742651-6b353164caf3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Bangladesh",
    city: "Dhaka",
    code: "BD",
    image:
      "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "India",
    city: "New Delhi",
    code: "IN",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Malaysia",
    city: "Kuala Lumpur",
    code: "MY",
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=900&q=80",
  },
];

const Sorceing = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".sourcing-word", {
        yPercent: 110,
        opacity: 0,
      });

      gsap.set(cardsRef.current, {
        y: 80,
        opacity: 0,
        scale: 0.86,
        rotateX: 18,
        filter: "blur(12px)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.to(".sourcing-word", {
        yPercent: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.06,
        ease: "power4.out",
      }).to(
        cardsRef.current,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateX: 0,
          filter: "blur(0px)",
          duration: 0.85,
          stagger: 0.11,
          ease: "back.out(1.45)",
        },
        "-=0.35",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const heading = [
    "Countries",
    "From",
    "Where",
    "We",
    "Collect",
    "Our",
    "Workers",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#0C1A0E] via-[#2f7f35] to-[#0C1A0E] px-4 py-20 font-montserrat text-white sm:px-6 lg:px-16"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-5xl text-center">
          <h2
            ref={titleRef}
            className="text-[32px] font-black leading-tight tracking-tight text-white sm:text-[46px] lg:text-[58px]"
          >
            {heading.map((word, index) => (
              <span
                key={index}
                className="mr-3 inline-block overflow-hidden align-bottom"
              >
                <span
                  className={`sourcing-word inline-block ${
                    word === "Workers" || word === "Countries"
                      ? "text-[#d8ffd8]"
                      : "text-white"
                  }`}
                >
                  {word}
                </span>
              </span>
            ))}
          </h2>

          <p className="mt-5 text-[15px] font-medium leading-7 text-white/75 sm:text-[16px]">
            We recruit skilled workers from trusted international talent markets
            and connect them with reliable opportunities.
          </p>
        </div>

        {/* Country cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {countries.map((country, index) => (
            <div
              key={country.code}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative h-[310px] overflow-hidden rounded-[24px] border border-white/15 bg-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.28)] backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:border-[#d8ffd8]/55 hover:shadow-[0_30px_85px_rgba(0,0,0,0.38)]"
            >
              {/* City image */}
              <img
                src={country.image}
                alt={`${country.city}, ${country.name}`}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#2f7f35]/25 via-transparent to-black/20" />

              {/* Flag */}
              <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/30 bg-white/20 shadow-xl backdrop-blur-md transition duration-500 group-hover:scale-110 group-hover:-rotate-6">
                <ReactCountryFlag
                  countryCode={country.code}
                  svg
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "8px",
                  }}
                  title={country.name}
                />
              </div>

              {/* Number */}
              <span className="absolute right-5 top-5 text-[42px] font-black leading-none text-white/15">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="mb-2 text-[12px] font-black uppercase tracking-[0.25em] text-[#d8ffd8]">
                  Recruitment Source
                </p>

                <h3 className="text-[28px] font-black leading-tight text-white drop-shadow-[0_8px_18px_rgba(0,0,0,0.45)]">
                  {country.name}
                </h3>

                <p className="mt-1 text-[14px] font-bold text-white/75">
                  {country.city}
                </p>

                <div className="mt-4 h-[2px] w-0 rounded-full bg-[#d8ffd8] transition-all duration-500 group-hover:w-full" />
              </div>

              {/* Hover shine */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sorceing;
