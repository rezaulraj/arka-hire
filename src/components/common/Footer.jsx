import React, { useLayoutEffect, useRef } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../../assets/logowhite.webp";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const sectionRef = useRef(null);
  const textRefs = useRef([]);

  const servicesLinks = [
    { label: "Recruitment Process", path: "/services/recruitment" },
    { label: "Mediation in Employment", path: "/services/mediation" },
    { label: "Temporary Recruitment", path: "/services/temporary" },
    { label: "Legal Assurance", path: "/services/legal-assurance" },
    { label: "Immigration Assistance", path: "/services/immigration" },
  ];

  const importantLinks = [
    { label: "Contact us", path: "/contact" },
    { label: "Agency Partnership", path: "/agency-partnership" },
    { label: "Open Jobs", path: "/open-jobs" },
    { label: "Industries We Serve", path: "/industries" },
  ];

  const importantPages = [
    {
      label: "Frequently Asked Questions",
      path: "/frequently-asked-questions",
    },
    { label: "Terms and Conditions", path: "/terms-and-conditions" },
    { label: "Privacy Policy", path: "/privacy-policy" },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(textRefs.current, { y: 30, opacity: 0, filter: "blur(6px)" });
      gsap.to(textRefs.current, {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.8,
        stagger: 0.08,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={sectionRef}
      className="relative bg-[#8a0707] px-6 py-12 sm:px-10 lg:px-20 font-montserrat text-white"
    >
      <div className="mx-auto max-w-7xl grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Logo & Social */}
        <div className="flex flex-col gap-4">
          <div
            ref={(el) => textRefs.current.push(el)}
            className="flex items-center gap-2 text-2xl font-extrabold text-white"
          >
            <img src={logo} alt="Arka Hire Logo" className="h-16 w-full" />
          </div>

          <div
            ref={(el) => textRefs.current.push(el)}
            className="text-sm text-white/80"
          >
            info@arkahire.com
          </div>

          <div className="flex gap-3 mt-2">
            {[
              FaFacebookF,
              FaTwitter,
              FaYoutube,
              FaLinkedinIn,
              FaPinterestP,
            ].map((Icon, i) => (
              <Icon
                key={i}
                ref={(el) => textRefs.current.push(el)}
                className="h-5 w-5 cursor-pointer transition hover:text-green-400"
              />
            ))}
          </div>

          <div
            ref={(el) => textRefs.current.push(el)}
            className="mt-6 text-xs text-white/50"
          >
            Arka Hire 2013-2026. All Rights Reserved
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-2">
          <h4
            ref={(el) => textRefs.current.push(el)}
            className="font-bold text-white text-lg mb-2"
          >
            Services
          </h4>
          {servicesLinks.map((item, i) => (
            <a
              key={i}
              ref={(el) => textRefs.current.push(el)}
              href={item.path}
              className="text-sm text-white/80 hover:text-green-400 transition"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Important Links */}
        <div className="flex flex-col gap-2">
          <h4
            ref={(el) => textRefs.current.push(el)}
            className="font-bold text-white text-lg mb-2"
          >
            Important Links
          </h4>
          {importantLinks.map((item, i) => (
            <a
              key={i}
              ref={(el) => textRefs.current.push(el)}
              href={item.path}
              className="text-sm text-white/80 hover:text-green-400 transition"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Important Pages */}
        <div className="flex flex-col gap-2">
          <h4
            ref={(el) => textRefs.current.push(el)}
            className="font-bold text-white text-lg mb-2"
          >
            Important Pages
          </h4>
          {importantPages.map((item, i) => (
            <a
              key={i}
              ref={(el) => textRefs.current.push(el)}
              href={item.path}
              className="text-sm text-white/80 hover:text-green-400 transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
