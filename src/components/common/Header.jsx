import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import logos from "../../assets/logo1.webp";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    { name: "About Us", path: "/about-us" },
    {
      name: "Our Approach",
      subLinks: [
        {
          name: "Client-Consultation",
          path: "/our-approach/client-consultation",
        },
        { name: "Worker Sourcing", path: "/our-approach/worker-sourcing" },
        { name: "Screening Process", path: "/our-approach/screening-process" },
        {
          name: "Seamless Integration",
          path: "/our-approach/seamless-integration",
        },
        {
          name: "Employee Welfare Support",
          path: "/our-approach/employee-welfare-support",
        },
      ],
    },
    {
      name: "Employers",
      subLinks: [
        { name: "Recruitment Process", path: "/employers/recruitment-process" },
        {
          name: "Immigration Assistance",
          path: "/employers/immigration-assistance",
        },
        {
          name: "Mediation in Employment",
          path: "/employers/mediation-in-employment",
        },
        {
          name: "Temporary Recruitment",
          path: "/employers/temporary-recruitment",
        },
        { name: "Legal Assurance", path: "/employers/legal-assurance" },
      ],
    },
    {
      name: "Workers and Agencies",
      subLinks: [
        { name: "Open Job", path: "/workers-and-agencies/open-job" },
        {
          name: "Agency PartnerShips",
          path: "/workers-and-agencies/agency-partnerships",
        },
      ],
    },
    { name: "Industries", path: "/industries" },
    { name: "Contact us", path: "/contact-us" },
  ];

  return (
    <header className="w-full font-montserrat sticky top-0 z-50 shadow-md">
      <div className="w-full bg-[#2f7f35]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="bg-white h-[78px] sm:h-[88px] md:h-[100px] w-[210px] sm:w-[250px] md:w-[285px] flex items-center justify-center px-4"
          >
            <img
              src={logos}
              alt="Arka Hire"
              className="w-full max-w-[235px] object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center justify-center gap-7 xl:gap-5 flex-1 px-6">
            {navLinks.map((item, index) => (
              <div key={index} className="relative group">
                {item.path ? (
                  <Link
                    to={item.path}
                    className="text-white text-[14px] xl:text-[15px] font-bold tracking-wide hover:text-gray-100 transition"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button className="flex items-center gap-1 text-white text-[14px] xl:text-[15px] font-bold tracking-wide hover:text-gray-100 transition">
                    {item.name}
                    <ChevronDown
                      size={14}
                      className="mt-[2px] transition-transform duration-300 group-hover:rotate-180"
                    />
                  </button>
                )}

                {item.subLinks && (
                  <div className="absolute left-1/2 top-full z-50 pt-5 -translate-x-1/2 opacity-0 invisible translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div
                      className="
          relative w-[270px] bg-white rounded-xl shadow-2xl overflow-visible
          border border-gray-100
          before:content-[''] before:absolute before:-top-2 before:left-1/2
          before:-translate-x-1/2 before:w-4 before:h-4 before:bg-white
          before:rotate-45 before:border-l before:border-t before:border-gray-100
        "
                    >
                      <div className="relative z-10 overflow-hidden rounded-xl bg-white">
                        {item.subLinks.map((sub, subIndex) => (
                          <Link
                            key={subIndex}
                            to={sub.path}
                            className="
                block px-5 py-3.5 text-[14px] font-semibold text-gray-700
                hover:bg-[#2f7f35] hover:text-white transition
                border-b border-gray-100 last:border-b-0
              "
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Language */}
          <div className="hidden md:flex items-center mr-3 xl:mr-8">
            <button className="h-[30px] w-[172px] bg-white flex items-center justify-between px-3 text-gray-600 text-[16px] shadow-sm">
              <span className="flex items-center gap-2">
                <ReactCountryFlag
                  countryCode="GB"
                  svg
                  style={{
                    width: "24px",
                    height: "18px",
                  }}
                  title="English"
                />
                English
              </span>
              <ChevronDown size={17} />
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="lg:hidden text-white mr-4 p-2"
          >
            {openMenu ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white shadow-xl overflow-hidden transition-all duration-300 ${
          openMenu ? "max-h-[900px]" : "max-h-0"
        }`}
      >
        <div className="px-5 py-5 space-y-2">
          {navLinks.map((item, index) => (
            <div key={index} className="border-b border-gray-100 pb-2">
              {item.path ? (
                <Link
                  to={item.path}
                  onClick={() => setOpenMenu(false)}
                  className="block py-3 text-[15px] font-bold text-gray-800 hover:text-[#2f7f35]"
                >
                  {item.name}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() =>
                      setActiveDropdown(activeDropdown === index ? null : index)
                    }
                    className="w-full flex items-center justify-between py-3 text-[15px] font-bold text-gray-800 hover:text-[#2f7f35]"
                  >
                    {item.name}
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        activeDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeDropdown === index ? "max-h-[400px]" : "max-h-0"
                    }`}
                  >
                    <div className="pl-4 pb-2">
                      {item.subLinks.map((sub, subIndex) => (
                        <Link
                          key={subIndex}
                          to={sub.path}
                          onClick={() => setOpenMenu(false)}
                          className="block py-2 text-[14px] font-medium text-gray-600 hover:text-[#2f7f35]"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}

          <button className="mt-4 h-[38px] w-full bg-gray-100 flex items-center justify-between px-4 text-gray-700 text-[15px] font-medium rounded-md">
            <span className="flex items-center gap-2">
              <ReactCountryFlag
                countryCode="GB"
                svg
                style={{
                  width: "25px",
                  height: "18px",
                }}
                title="English"
              />
              English
            </span>
            <ChevronDown size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
