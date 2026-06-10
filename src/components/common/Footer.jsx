import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaPinterestP,
  FaInstagram
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../../assets/logowhite.webp";

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaPinterestP,
};

const Footer = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const textRefs = useRef([]);

  const footerData = t("footer", { returnObjects: true });

  const sections = Array.isArray(footerData.sections)
    ? footerData.sections
    : [];

  const socialLinks = Array.isArray(footerData.socialLinks)
    ? footerData.socialLinks
    : [];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(textRefs.current.filter(Boolean), {
        y: 30,
        opacity: 0,
        filter: "blur(6px)",
      });

      gsap.to(textRefs.current.filter(Boolean), {
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
  }, [sections.length, socialLinks.length]);

  return (
    <footer
      ref={sectionRef}
      className="relative bg-[#8a0707] px-6 py-12 font-montserrat text-white sm:px-10 lg:px-20"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Logo + Social */}
        <div className="flex flex-col gap-4">
          <div
            ref={(el) => {
              textRefs.current[0] = el;
            }}
          >
            <img
              src={logo}
              alt={footerData.logo?.alt || "Arka Hire Logo"}
              className="h-16 w-full object-contain"
            />
          </div>

          <a
            ref={(el) => {
              textRefs.current[1] = el;
            }}
            href={`mailto:${footerData.contactEmail}`}
            className="text-sm text-white/80 transition hover:text-green-400"
          >
            {footerData.contactEmail}
          </a>

          <div
            ref={(el) => {
              textRefs.current[2] = el;
            }}
          >
            <h4 className="mb-3 text-sm font-bold text-white">
              {footerData.socialTitle}
            </h4>

            <div className="flex gap-3">
              {socialLinks.map((item, index) => {
                const Icon = iconMap[item.icon];

                if (!Icon) return null;

                return (
                  <a
                    key={`${item.platform}-${index}`}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.platform}
                    className="transition hover:text-green-400"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <p
            ref={(el) => {
              textRefs.current[3] = el;
            }}
            className="mt-6 text-xs text-white/50"
          >
            {footerData.copyright}
          </p>
        </div>

        {/* Footer Sections */}
        {sections.map((section, sectionIndex) => (
          <div
            key={`${section.title}-${sectionIndex}`}
            className="flex flex-col gap-2"
          >
            <h4
              ref={(el) => {
                textRefs.current[10 + sectionIndex] = el;
              }}
              className="mb-2 text-lg font-bold text-white"
            >
              {section.title}
            </h4>

            {section.links?.map((link, linkIndex) => (
              <a
                key={`${link.label}-${linkIndex}`}
                ref={(el) => {
                  textRefs.current[20 + sectionIndex * 10 + linkIndex] = el;
                }}
                href={link.path}
                className="text-sm text-white/80 transition hover:text-green-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
