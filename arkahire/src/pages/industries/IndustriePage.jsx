import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LetsTalk from "../home/LetsTalk";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    title: "Construction Industry",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
    workers: [
      "Workers",
      "Carpenters",
      "Masons",
      "Electricians",
      "Plumbers",
      "Roofers",
      "Painters",
      "Site Supervisors",
    ],
  },
  {
    title: "Drivers",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
    workers: [
      "Truck Drivers",
      "Bus Drivers",
      "Courier and Delivery Drivers",
      "Taxi and Ride-Hailing Drivers",
      "Construction and Heavy Equipment Drivers",
    ],
  },
  {
    title: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    workers: [
      "Nurses",
      "Home Care Helpers",
      "Medical Typists",
      "Pharmacy Helpers",
      "Hospital Helpers",
      "Cleaning Crew",
      "Food Service Helpers",
    ],
  },
  {
    title: "Beauty",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
    workers: [
      "Salon Assistants",
      "Hair Cutter",
      "Hair Stylist",
      "Makeup Artist",
      "Esthetician",
      "Beauty Therapist",
      "Salon Manager",
      "Spa Therapist",
      "Massage Therapist",
    ],
  },
  {
    title: "Denting and Painting",
    image:
      "https://images.unsplash.com/photo-1598860024867-a1cb3a858427?q=80&w=915&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    workers: [
      "Denting Technician",
      "Painting Assistant",
      "Surface Preparation Worker",
      "Paint Mixer",
      "Sanding Specialist",
      "Spray Painter",
    ],
  },
  {
    title: "Hospitality",
    image:
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
    workers: [
      "Chef de Partie",
      "Sous Chef",
      "Front Desk Receptionist",
      "Waiter/Waitress",
      "Bartender",
      "Housekeeping Supervisor",
      "Concierge",
      "Sommelier",
    ],
  },
  {
    title: "Welding Industry",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80",
    workers: [
      "MIG Welders",
      "TIG Welders",
      "Arc Welders",
      "Fabricators",
      "Welding Inspectors",
      "Pipefitters",
      "Structural Welders",
    ],
  },
  {
    title: "Retail Industry",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    workers: [
      "Sales Assistant",
      "Store Manager",
      "Cashier",
      "Visual Merchandiser",
      "Inventory Assistant",
      "Customer Service Representative",
      "Shelf Stocker",
    ],
  },
  {
    title: "Mining Industry",
    image:
      "https://images.unsplash.com/photo-1523848309072-c199db53f137?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    workers: [
      "Excavation Operators",
      "Drillers",
      "Blasting Technicians",
      "Safety Officers",
      "Geologists",
      "Surveyors",
      "Heavy Equipment Operators",
    ],
  },
  {
    title: "Food Processing and Production",
    image:
      "https://images.unsplash.com/photo-1651525670114-2b8117390b28?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    workers: [
      "Food Handlers",
      "Packers",
      "Quality Assurance Technicians",
      "Machine Operators",
      "Sanitation Workers",
      "Production Supervisors",
      "Line Workers",
    ],
  },
  {
    title: "Garments and Textile",
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80",
    workers: [
      "Textile Workers",
      "Sewing Operators",
      "Cutting Masters",
      "Quality Inspectors",
      "Ironing Workers",
      "Packaging Workers",
      "Production Helpers",
    ],
  },
  {
    title: "Manufacturing and Production",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80",
    workers: [
      "Assembly Line Workers",
      "Machine Operators",
      "Quality Control Inspectors",
      "Production Supervisors",
      "Welders",
      "Fabricators",
      "Forklift Operators",
    ],
  },
  {
    title: "Cleaning and Housekeeping",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    workers: [
      "Janitors",
      "Housekeepers",
      "Cleaning Staff",
      "Custodians",
      "Floor Technicians",
      "Window Cleaners",
      "Laundry Attendants",
    ],
  },
  {
    title: "Agriculture and Plantation",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    workers: [
      "Planters",
      "Harvesters",
      "Farm Maintenance Workers",
      "Irrigation Technicians",
      "Livestock Handlers",
      "Crop Managers",
      "Agronomists",
    ],
  },
  {
    title: "Marine and Shipbuilding",
    image:
      "https://images.unsplash.com/photo-1602575051429-c502cac0d3e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    workers: [
      "Marine Welders",
      "Fabricators",
      "Shipfitters",
      "Marine Electricians",
      "Pipefitters",
      "Naval Architects",
      "Marine Engineers",
    ],
  },
  {
    title: "Landscaping and Groundskeeping",
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=80",
    workers: [
      "Landscapers",
      "Groundskeepers",
      "Gardeners",
      "Irrigation Technicians",
      "Landscape Designers",
      "Arborists",
      "Lawn Care Specialists",
    ],
  },
  {
    title: "Heavy Equipment Operators",
    image:
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=1200&q=80",
    workers: [
      "Excavator Operators",
      "Bulldozer Operators",
      "Crane Operators",
      "Backhoe Operators",
      "Loader Operators",
      "Grader Operators",
      "Paver Operators",
    ],
  },
];

const IndustriePage = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const activeIndustry = industries[activeIndex];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".industry-word", {
        yPercent: 110,
        opacity: 0,
      });

      gsap.set(".industry-subtitle", {
        y: 24,
        opacity: 0,
        filter: "blur(8px)",
      });

      gsap.set(cardsRef.current, {
        y: 80,
        opacity: 0,
        scale: 0.88,
        rotateX: 14,
        filter: "blur(12px)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.to(".industry-word", {
        yPercent: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.07,
        ease: "power4.out",
      })
        .to(
          ".industry-subtitle",
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.45",
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
            stagger: 0.08,
            ease: "back.out(1.35)",
          },
          "-=0.35",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % industries.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovering]);

  const heading = ["Industries", "We", "Serve"];

  return (
    <>
      <section
        ref={sectionRef}
        className="relative w-full overflow-hidden bg-gradient-to-r from-[#071b0c] via-[#2f7f35] to-[#071b0c] px-4 py-20 font-montserrat text-white sm:px-6 lg:px-10"
      >
        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Heading */}
          <div className="mx-auto mb-16 max-w-5xl text-center">
            <p className="mb-4 text-[12px] font-black uppercase tracking-[0.35em] text-[#d8ffd8]">
              Pick from Our Top Workers
            </p>

            <h1 className="text-[42px] font-black leading-tight tracking-[0.07em] sm:text-[58px] lg:text-[78px]">
              {heading.map((word, index) => (
                <span
                  key={index}
                  className="mr-4 inline-block overflow-hidden align-bottom"
                >
                  <span
                    className={`industry-word inline-block ${
                      word === "Serve" ? "text-[#d8ffd8]" : "text-white"
                    } drop-shadow-[0_12px_30px_rgba(0,0,0,0.45)]`}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </h1>

            <p className="industry-subtitle mx-auto mt-5 max-w-3xl text-[15px] font-semibold leading-7 text-white/75 sm:text-[16px]">
              A premium recruitment showcase for trusted industries, skilled
              workers, and reliable workforce solutions.
            </p>
          </div>

          {/* Featured active showcase */}
          <div className="mb-12 grid items-center gap-8 rounded-[34px] border border-white/15 bg-white/10 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.32)] backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
            <div className="group relative h-[340px] overflow-hidden rounded-[28px] shadow-[0_24px_70px_rgba(0,0,0,0.35)] sm:h-[430px]">
              <img
                key={activeIndustry.title}
                src={activeIndustry.image}
                alt={activeIndustry.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110 animate-[industryFade_0.7s_ease]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#2f7f35]/30 via-transparent to-black/15" />

              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="mb-2 text-[12px] font-black uppercase tracking-[0.28em] text-[#d8ffd8]">
                  Active Industry
                </p>

                <h2 className="text-[34px] font-black leading-tight text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.45)] sm:text-[50px]">
                  {activeIndustry.title}
                </h2>
              </div>

              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-full" />
            </div>

            <div>
              <p className="mb-4 text-[13px] font-black uppercase tracking-[0.25em] text-[#d8ffd8]">
                Pick from Our Top Workers
              </p>

              <h3 className="mb-6 text-[30px] font-black leading-tight text-white sm:text-[40px]">
                Skilled roles ready for your business
              </h3>

              <div className="flex flex-wrap gap-3">
                {activeIndustry.workers.map((worker) => (
                  <span
                    key={worker}
                    className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[13px] font-bold text-white/90 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#d8ffd8]/60 hover:bg-[#d8ffd8]/15"
                  >
                    {worker}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Industry Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <button
                key={industry.title}
                ref={(el) => (cardsRef.current[index] = el)}
                onMouseEnter={() => {
                  setIsHovering(true);
                  setActiveIndex(index);
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                }}
                onClick={() => {
                  setActiveIndex(index);
                }}
                className={`group relative min-h-[380px] overflow-hidden rounded-[28px] border text-left shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-[#d8ffd8]/65 hover:shadow-[0_34px_90px_rgba(0,0,0,0.36)] ${
                  activeIndex === index
                    ? "border-[#d8ffd8]/80 bg-[#d8ffd8]/15"
                    : "border-white/15 bg-white/10"
                }`}
              >
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/45 to-black/15" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#2f7f35]/25 via-transparent to-black/25" />

                <span className="absolute right-5 top-5 text-[54px] font-black leading-none text-white/15">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="mb-2 text-[11px] font-black uppercase tracking-[0.25em] text-[#d8ffd8]">
                    Pick from Our Top Workers
                  </p>

                  <h3 className="mb-4 text-[25px] font-black leading-tight text-white drop-shadow-[0_8px_18px_rgba(0,0,0,0.45)]">
                    {industry.title}
                  </h3>

                  <div className="flex max-h-[92px] flex-wrap gap-2 overflow-hidden">
                    {industry.workers.slice(0, 5).map((worker) => (
                      <span
                        key={worker}
                        className="rounded-full bg-white/12 px-3 py-1.5 text-[11px] font-bold text-white/88 backdrop-blur-md"
                      >
                        {worker}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-[12px] font-black uppercase tracking-[0.18em] text-white/60">
                      View Roles
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[18px] font-black text-white transition duration-300 group-hover:border-[#d8ffd8]/60 group-hover:bg-[#d8ffd8] group-hover:text-[#123817]">
                      →
                    </span>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/18 to-transparent transition duration-700 group-hover:translate-x-full" />
              </button>
            ))}
          </div>
        </div>

        <style>{`
        @keyframes industryFade {
          from {
            opacity: 0;
            transform: scale(1.06);
            filter: blur(8px);
          }
          to {
            opacity: 1;
            transform: scale(1);
            filter: blur(0px);
          }
        }
      `}</style>
      </section>
      <LetsTalk />
    </>
  );
};

export default IndustriePage;
