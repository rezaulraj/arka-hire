import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LetsTalk from "../home/LetsTalk";

gsap.registerPlugin(ScrollTrigger);

const TermsPage = () => {
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

  return (
    <>
      <div
        ref={sectionRef}
        className="relative w-full min-h-screen bg-gradient-to-r from-[#0C1A0E] via-[#2f7f35] to-[#0C1A0E] px-6 py-20 sm:px-10 lg:px-24 font-montserrat text-white"
      >
        <h1
          ref={(el) => textRefs.current.push(el)}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center text-white"
        >
          Terms and Conditions
        </h1>

        <div className="max-w-5xl mx-auto flex flex-col gap-6 text-sm sm:text-base leading-7">
          {[
            {
              title: "Subject Matter and Acceptance",
              content: `These Terms of Use (“Terms of Use”) govern the use of the arkahire.com website of Arka Hire. Any person who accesses the Website (“you”) hereby accepts the Terms of Use in force at the time of visiting.`,
            },
            {
              title: "Use of the Website",
              content: `You hereby agree to voluntarily and expressly accept the use of the website solely and exclusively at your own risk. You are responsible for keeping any user ID, password confidential.`,
            },
            {
              title: "Content",
              content: `We are not required to verify the accuracy of the Content and we do not warrant the usefulness, accuracy, completeness, or relevance of the Content. All decisions based on content are your responsibility.`,
            },
            {
              title: "Intellectual Property Rights",
              content: `All content on the Website is protected worldwide by copyright, design, trademark and other intellectual property laws. You may not copy, redistribute, or use it without permission.`,
            },
            {
              title: "Links and Linking",
              content: `The Website may contain links to third-party sites. Linking to such sites does not imply our warranty for those sites. Use is at your own risk.`,
            },
            {
              title: "Personal Data",
              content: `Collection and use of personal data is governed by our Privacy Policy: https://arkahire.com/privacy-policy`,
            },
            {
              title: "Law and Jurisdiction",
              content: `These Terms of Use are governed by the laws of Qatar and are subject to the exclusive jurisdiction of the court in Doha.`,
            },
            {
              title: "Contact",
              content: `Questions, comments, and requests related to these Terms can be sent to Arka Hire, Al-Barqiya, Building 379, zone, 57 Street 41, Ar-Rayyan, Qatar, info@arkahire.com`,
            },
          ].map((section, i) => (
            <div
              key={i}
              ref={(el) => textRefs.current.push(el)}
              className="p-4 sm:p-6 bg-[#194524]/50 rounded-lg shadow-lg border border-white/10"
            >
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-[#f1f1f1]">
                {section.title}
              </h2>
              <p className="text-white/90">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
      <LetsTalk />
    </>
  );
};

export default TermsPage;
