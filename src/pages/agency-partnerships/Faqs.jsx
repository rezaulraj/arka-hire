import React, { useLayoutEffect, useRef, useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "What Is Arka Hire Affiliate Program?",
    answer:
      "At Arka Hire, we strive to connect clients with the best employees. We carefully evaluate potential agency partners, ensuring they meet our strict criteria and high standards before establishing collaborations.",
  },
  {
    question:
      "When Can I Send Candidates For An Interview With Arka Hire Consultants?",
    answer:
      "You can send candidates after initial screening and documentation review. Our consultants will guide you through the required steps and interview schedule.",
  },
  {
    question: "Who Covers The Cost Of Employment?",
    answer:
      "Employment costs depend on the agreement between the employer, agency partner, and candidate. Our team ensures everything is clearly communicated before proceeding.",
  },
  {
    question:
      "Are There Nationality Requirements For The Arka Hire Affiliate Program?",
    answer:
      "Requirements may vary depending on the client, job role, and destination country. We review every case carefully and provide clear guidance to our partners.",
  },
];

const Faqs = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const faqRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(leftRef.current, {
        x: -60,
        opacity: 0,
        filter: "blur(10px)",
      });

      gsap.set(faqRefs.current, {
        x: 60,
        opacity: 0,
        filter: "blur(10px)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.to(leftRef.current, {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.85,
        ease: "power4.out",
      }).to(
        faqRefs.current,
        {
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
        },
        "-=0.45",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#071b0c] via-[#2f7f35] to-[#071b0c] px-4 py-20 font-montserrat text-white sm:px-6 lg:px-10"
    >

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* Left side */}
        <div ref={leftRef} className="flex flex-col justify-center">
          <p className="mb-4 text-[12px] font-black uppercase tracking-[0.35em] text-[#d8ffd8]">
            Help Center
          </p>

          <h2 className="max-w-md text-[42px] font-black leading-[1.15] tracking-tight text-white drop-shadow-[0_12px_30px_rgba(0,0,0,0.45)] sm:text-[58px] lg:text-[70px]">
            Frequently Asked Questions
          </h2>

          <p className="mt-10 text-[18px] font-medium text-white/85 sm:text-[22px]">
            Still Have Questions? Contact Us.
          </p>

          <a
            href="/contact-us"
            className="group relative mt-8 inline-flex w-fit overflow-hidden rounded-sm bg-[#e60000] px-8 py-4 text-[14px] font-black text-white shadow-[0_18px_45px_rgba(230,0,0,0.3)] transition duration-300 hover:-translate-y-1 hover:bg-[#c90000]"
          >
            <span className="relative z-10">Contact us</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition duration-500 group-hover:translate-x-full" />
          </a>
        </div>

        {/* FAQ list */}
        <div className=" p-4 sm:p-6">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={faq.question}
                ref={(el) => (faqRefs.current[index] = el)}
                className="border-b border-white/35 last:border-b-0"
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="group flex w-full items-center justify-between gap-5 py-6 text-left"
                >
                  <h3
                    className={`text-[20px] font-black leading-snug transition duration-300 sm:text-[26px] ${
                      isOpen ? "text-[#ff604d]" : "text-white"
                    } group-hover:text-[#d8ffd8]`}
                  >
                    {faq.question}
                  </h3>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition duration-300 ${
                      isOpen
                        ? "border-[#ff604d]/50 bg-[#ff604d]/15 text-[#ff604d]"
                        : "border-[#d8ffd8]/30 bg-[#d8ffd8]/10 text-[#d8ffd8]"
                    }`}
                  >
                    {isOpen ? <FiX /> : <FiPlus />}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl pb-7 text-[14px] font-semibold leading-8 text-white/82 sm:text-[16px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
