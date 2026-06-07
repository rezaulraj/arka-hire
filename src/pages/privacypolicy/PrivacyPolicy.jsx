import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LetsTalk from "../home/LetsTalk";

gsap.registerPlugin(ScrollTrigger);

const PrivacyPolicy = () => {
  const sectionRef = useRef(null);
  const textRefs = useRef([]);

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

  const sections = [
    {
      title: "Our Privacy Policy",
      content: `We at Arka Hire, located at Al-Barqiya, Building 379, zone, 57 Street 41, Ar-Rayyan, Qatar, aim to protect your privacy. This Policy sets out what personal information we collect from you and how we use it.`,
    },
    {
      title: "Personal Information We May Collect",
      content: `We collect information from your visits to the Website, including traffic data, location, and content from contact forms. Mandatory fields are marked with *, and optional fields are your choice.`,
    },
    {
      title: "How We Use Your Personal Information",
      content: `We use your data to tailor content, respond to inquiries, provide interactive functions, and improve the website. We retain data typically for 2 years to comply with legal obligations.`,
    },
    {
      title: "Marketing Messages",
      content: `With your consent, we may send marketing messages via email. You may opt out anytime using the unsubscribe link or contacting info@arkahire.com.`,
    },
    {
      title: "Sharing with Third Parties",
      content: `We may disclose data to suppliers, contractors, or government authorities if legally required. All third parties must respect privacy obligations.`,
    },
    {
      title: "IP Addresses and Cookies",
      content: `We collect technical data like IP addresses and browser type to improve the site. Cookies are used to provide personalized content. Please do not use "remember me" on shared devices.`,
    },
    {
      title: "Your Rights",
      content: `You may access, correct, delete, or restrict the processing of your personal data. You may withdraw consent anytime or lodge a complaint with relevant authorities.`,
    },
    {
      title: "Policy Changes",
      content: `We may update this Policy from time to time. Changes will be posted on this website or notified through other channels.`,
    },
    {
      title: "Contact",
      content: `Questions about this Policy can be sent to Arka Hire at info@arkahire.com.`,
    },
  ];

  return (
    <>
      <section
        ref={sectionRef}
        className="relative w-full min-h-screen bg-gradient-to-r from-[#0C1A0E] via-[#2f7f35] to-[#0C1A0E] px-6 py-20 sm:px-10 lg:px-24 font-montserrat text-white"
      >
        <h1
          ref={(el) => textRefs.current.push(el)}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center text-white"
        >
          Privacy Policy
        </h1>

        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          {sections.map((sec, idx) => (
            <div
              key={idx}
              ref={(el) => textRefs.current.push(el)}
              className="p-6 sm:p-8 bg-[#194524]/50 rounded-xl shadow-lg border border-white/10"
            >
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-white">
                {sec.title}
              </h2>
              <p className="text-white/90 leading-relaxed">{sec.content}</p>
            </div>
          ))}
        </div>
      </section>
      <LetsTalk />
    </>
  );
};

export default PrivacyPolicy;
