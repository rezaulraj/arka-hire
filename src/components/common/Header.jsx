import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";
import logos from "../../assets/logo1.webp";

const Header = () => {
  const { t, i18n } = useTranslation();

  const [openMenu, setOpenMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const languages = [
    { code: "en", country: "GB", name: "English" },
    { code: "cnr", country: "ME", name: "CNR" },
    { code: "de", country: "DE", name: "Deutsch" },
    { code: "el", country: "GR", name: "Ελληνικά" },
    { code: "hr", country: "HR", name: "Hrvatski" },
    { code: "mk", country: "MK", name: "Македонски" },
    { code: "ro", country: "RO", name: "Română" },
    { code: "sr", country: "RS", name: "Српски" },
  ];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsLanguageOpen(false);
    setOpenMenu(false);
  };

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const navLinks = [
    {
      name: t("navItem.aboutUs"),
      path: "/about-us",
    },
    {
      name: t("navItem.ourApproach.title"),
      subLinks: [
        {
          name: t("navItem.ourApproach.subLinks.clientConsultation"),
          path: "/our-approach/client-consultation",
        },
        {
          name: t("navItem.ourApproach.subLinks.workerSourcing"),
          path: "/our-approach/worker-sourcing",
        },
        {
          name: t("navItem.ourApproach.subLinks.screeningProcess"),
          path: "/our-approach/screening-process",
        },
        {
          name: t("navItem.ourApproach.subLinks.seamlessIntegration"),
          path: "/our-approach/seamless-integration",
        },
        {
          name: t("navItem.ourApproach.subLinks.employeeWelfareSupport"),
          path: "/our-approach/employee-welfare-support",
        },
      ],
    },
    {
      name: t("navItem.employers.title"),
      subLinks: [
        {
          name: t("navItem.employers.subLinks.recruitmentProcess"),
          path: "/employers/recruitment-process",
        },
        {
          name: t("navItem.employers.subLinks.immigrationAssistance"),
          path: "/employers/immigration-assistance",
        },
        {
          name: t("navItem.employers.subLinks.mediationInEmployment"),
          path: "/employers/mediation-in-employment",
        },
        {
          name: t("navItem.employers.subLinks.temporaryRecruitment"),
          path: "/employers/temporary-recruitment",
        },
        {
          name: t("navItem.employers.subLinks.legalAssurance"),
          path: "/employers/legal-assurance",
        },
      ],
    },
    {
      name: t("navItem.workersAndAgencies.title"),
      subLinks: [
        {
          name: t("navItem.workersAndAgencies.subLinks.openJob"),
          path: "/workers-and-agencies/open-job",
        },
        {
          name: t("navItem.workersAndAgencies.subLinks.agencyPartnerships"),
          path: "/workers-and-agencies/agency-partnerships",
        },
      ],
    },
    {
      name: t("navItem.industries"),
      path: "/industries",
    },
    {
      name: t("navItem.contactUs"),
      path: "/contact-us",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full font-montserrat shadow-md">
      <div className="w-full bg-[#2f7f35]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex h-[78px] w-[210px] items-center justify-center bg-white px-4 sm:h-[88px] sm:w-[250px] md:h-[100px] md:w-[285px]"
          >
            <img
              src={logos}
              alt="Arka Hire"
              className="w-full max-w-[235px] object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden flex-1 items-center justify-center gap-7 px-6 lg:flex xl:gap-5">
            {navLinks.map((item, index) => (
              <div key={index} className="group relative">
                {item.path ? (
                  <Link
                    to={item.path}
                    className="text-[14px] font-bold tracking-wide text-white transition hover:text-gray-100 xl:text-[15px]"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button className="flex items-center gap-1 text-[14px] font-bold tracking-wide text-white transition hover:text-gray-100 xl:text-[15px]">
                    {item.name}
                    <ChevronDown
                      size={14}
                      className="mt-[2px] transition-transform duration-300 group-hover:rotate-180"
                    />
                  </button>
                )}

                {item.subLinks && (
                  <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 translate-y-3 pt-5 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div
                      className="
                        relative w-[270px] overflow-visible rounded-xl border border-gray-100 bg-white shadow-2xl
                        before:absolute before:-top-2 before:left-1/2 before:h-4 before:w-4
                        before:-translate-x-1/2 before:rotate-45 before:border-l before:border-t
                        before:border-gray-100 before:bg-white before:content-['']
                      "
                    >
                      <div className="relative z-10 overflow-hidden rounded-xl bg-white">
                        {item.subLinks.map((sub, subIndex) => (
                          <Link
                            key={subIndex}
                            to={sub.path}
                            className="block border-b border-gray-100 px-5 py-3.5 text-[14px] font-semibold text-gray-700 transition last:border-b-0 hover:bg-[#2f7f35] hover:text-white"
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

          {/* Desktop Language */}
          <div className="relative mr-3 hidden items-center md:flex xl:mr-8">
            <button
              type="button"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex h-[30px] w-[172px] items-center justify-between bg-white px-3 text-[16px] text-gray-600 shadow-sm"
            >
              <span className="flex items-center gap-2">
                <ReactCountryFlag
                  countryCode={currentLanguage.country}
                  svg
                  style={{ width: "24px", height: "18px" }}
                  title={currentLanguage.name}
                />
                {currentLanguage.name}
              </span>
              <ChevronDown
                size={17}
                className={`transition-transform ${
                  isLanguageOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isLanguageOpen && (
              <div className="absolute right-0 top-[38px] z-50 w-[172px] overflow-hidden rounded-md bg-white shadow-xl">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => changeLanguage(lang.code)}
                    className="flex w-full items-center gap-2 px-3 py-2 text-left text-[14px] font-semibold text-gray-700 transition hover:bg-[#2f7f35] hover:text-white"
                  >
                    <ReactCountryFlag
                      countryCode={lang.country}
                      svg
                      style={{ width: "24px", height: "18px" }}
                      title={lang.name}
                    />
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="mr-4 p-2 text-white lg:hidden"
          >
            {openMenu ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-white shadow-xl transition-all duration-300 lg:hidden ${
          openMenu ? "max-h-[950px]" : "max-h-0"
        }`}
      >
        <div className="space-y-2 px-5 py-5">
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
                    className="flex w-full items-center justify-between py-3 text-[15px] font-bold text-gray-800 hover:text-[#2f7f35]"
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
                    <div className="pb-2 pl-4">
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

          {/* Mobile Language */}
          <div className="pt-3">
            <button
              type="button"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex h-[38px] w-full items-center justify-between rounded-md bg-gray-100 px-4 text-[15px] font-medium text-gray-700"
            >
              <span className="flex items-center gap-2">
                <ReactCountryFlag
                  countryCode={currentLanguage.country}
                  svg
                  style={{ width: "25px", height: "18px" }}
                  title={currentLanguage.name}
                />
                {currentLanguage.name}
              </span>
              <ChevronDown
                size={18}
                className={`transition-transform ${
                  isLanguageOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isLanguageOpen && (
              <div className="mt-2 overflow-hidden rounded-md border border-gray-100 bg-white shadow-md">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => changeLanguage(lang.code)}
                    className="flex w-full items-center gap-2 px-4 py-2 text-left text-[14px] font-semibold text-gray-700 hover:bg-[#2f7f35] hover:text-white"
                  >
                    <ReactCountryFlag
                      countryCode={lang.country}
                      svg
                      style={{ width: "25px", height: "18px" }}
                      title={lang.name}
                    />
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
