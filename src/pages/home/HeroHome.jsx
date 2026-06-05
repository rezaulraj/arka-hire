import React from "react";
import heroVideo from "../../assets/herovideo.mp4";

const HeroHome = () => {
  const workers = [
    "Carpenters",
    "Masons",
    "Electricians",
    "Plumbers",
    "Roofers",
    "Painters",
    "Site Supervisors",
    "Drivers",
    "Truck Drivers",
    "Bus Drivers",
    "Courier and Delivery Drivers",
    "Taxi and Ride-Hailing Drivers",
    "Construction and Heavy Equipment Drivers",
    "Healthcare",
    "Nurses",
    "Home Care Helpers",
    "Medical Typists",
    "Pharmacy Helpers",
    "Hospital Helpers",
    "Cleaning Crew",
    "Food Service Helpers",
    "Beauty",
    "Salon Assistants",
    "Hair cutter",
    "Hair Stylist",
    "Makeup Artist",
    "Esthetician",
    "Skincare Specialist",
    "Beauty Therapist",
    "Salon Manager",
    "Spa Therapist",
    "Massage Therapist",
    "Denting and Painting",
    "Denting Technician",
    "Painting Assistant",
    "Surface Preparation Worker",
    "Paint Mixer",
    "Sanding Specialist",
    "Spray Painter",
    "Hospitality",
    "Chef de Partie",
    "Sous Chef",
    "Front Desk Receptionist",
    "Waiter/Waitress",
    "Bartender",
    "Housekeeping Supervisor",
    "Concierge",
    "Sommelie",
    "Welding Industry",
    "MIG Welders",
    "TIG Welders",
    "Arc Welders",
    "Fabricators",
    "Welding Inspectors",
    "Pipefitters",
    "Structural Welders",
    "Retail Industry",
    "Sales Assistant",
    "Store Manager",
    "Cashier",
    "Visual Merchandiser",
    "Inventory Assistant",
    "Customer Service Representative",
    "Shelf Stocker",
    "Mining Industry",
    "Excavation Operators",
    "Drillers",
    "Blasting Technicians",
    "Safety Officers",
    "Geologists",
    "Surveyors",
    "Heavy Equipment Operators",
    "Food Processing and Production",
    "Food Handlers",
    "Packers",
    "Quality Assurance Technicians",
    "Machine Operators",
    "Sanitation Workers",
    "Production Supervisors",
    "Line Workers",
    "Garments and Textile",
    "Manufacturing and Production",
    "Assembly Line Workers",
    "Quality Control Inspectors",
    "Welders",
    "Forklift Operators",
    "Cleaning and Housekeeping",
    "Janitors",
    "Housekeepers",
    "Cleaning Staff",
    "Custodians",
    "Floor Technicians",
    "Window Cleaners",
    "Laundry Attendants",
    "Agriculture and Plantation",
    "Planters",
    "Harvesters",
    "Farm Maintenance Workers",
    "Irrigation Technicians",
    "Livestock Handlers",
    "Crop Managers",
    "Agronomists",
    "Marine and Shipbuilding",
    "Marine Welders",
    "Shipfitters",
    "Marine Electricians",
    "Pipefitters",
    "Naval Architects",
    "Marine Engineers",
    "Landscaping and Groundskeeping",
    "Landscapers",
    "Groundskeepers",
    "Gardeners",
    "Landscape Designers",
    "Arborists",
    "Lawn Care Specialists",
    "Excavator Operators",
    "Bulldozer Operators",
    "Crane Operators",
    "Backhoe Operators",
    "Loader Operators",
    "Grader Operators",
    "Paver Operators",
  ];

  const firstRow = workers.filter((_, index) => index % 2 === 0);
  const secondRow = workers.filter((_, index) => index % 2 !== 0);

  const WorkerItem = ({ name }) => (
    <div className="mx-2 shrink-0 rounded-full border border-white/30 px-5 py-2.5 text-[13px] font-bold text-gray-100 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100 hover:text-[#2f7f35] sm:px-6 sm:py-3 sm:text-[14px] md:text-[15px]">
      {name}
    </div>
  );

  const MarqueeRow = ({ items, reverse = false }) => {
    const repeatedItems = [...items, ...items, ...items, ...items];

    return (
      <div className="flex w-full overflow-hidden py-2 sm:py-3">
        <div
          className={`flex w-max shrink-0 ${
            reverse ? "marquee-reverse" : "marquee"
          }`}
        >
          {repeatedItems.map((name, index) => (
            <WorkerItem key={`${name}-${index}`} name={name} />
          ))}
        </div>

        <div
          aria-hidden="true"
          className={`flex w-max shrink-0 ${
            reverse ? "marquee-reverse" : "marquee"
          }`}
        >
          {repeatedItems.map((name, index) => (
            <WorkerItem key={`${name}-copy-${index}`} name={name} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="relative w-full overflow-hidden bg-black font-montserrat">
      <div className="relative h-[calc(100vh-100px)] min-h-[520px] w-full overflow-hidden">
        <video
          className="absolute inset-0 z-0 h-full w-full object-cover"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />

        <div className="absolute inset-0 z-10 bg-black/20" />

        {/* Marquee inside video bottom */}
        <div className="marquee-box absolute bottom-0 left-0 right-0 z-30 overflow-hidden bg-gradient-to-t from-black/90 via-black/55 to-transparent ">
          <div className="pointer-events-none absolute left-0 top-0 z-40 h-full w-16 bg-gradient-to-r from-black/90 to-transparent sm:w-36" />
          <div className="pointer-events-none absolute right-0 top-0 z-40 h-full w-16 bg-gradient-to-l from-black/90 to-transparent sm:w-36" />

          <MarqueeRow items={firstRow} />
          <MarqueeRow items={secondRow} reverse />
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
