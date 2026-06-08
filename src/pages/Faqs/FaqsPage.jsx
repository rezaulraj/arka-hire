import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import { FiPlus, FiX, FiSearch, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LetsTalk from "../home/LetsTalk";

gsap.registerPlugin(ScrollTrigger);

const FaqsPage = () => {
  const { t } = useTranslation();

  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const faqRefs = useRef([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [search, setSearch] = useState("");

  const basePath = "faqsPage";

  const faqsData = t(`${basePath}.faqs`, {
    returnObjects: true,
  });

  const faqs = Array.isArray(faqsData) ? faqsData : [];

  const filteredFaqs = useMemo(() => {
    const value = search.toLowerCase().trim();

    if (!value) return faqs;

    return faqs.filter(
      (faq) =>
        faq.question?.toLowerCase().includes(value) ||
        faq.answer?.toLowerCase().includes(value),
    );
  }, [search, faqs]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(leftRef.current, {
        x: -60,
        opacity: 0,
        filter: "blur(10px)",
      });

      gsap.set(faqRefs.current.filter(Boolean), {
        y: 45,
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
        duration: 0.9,
        ease: "power4.out",
      }).to(
        faqRefs.current.filter(Boolean),
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.7,
          stagger: 0.06,
          ease: "power3.out",
        },
        "-=0.45",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [filteredFaqs.length]);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative w-full overflow-hidden bg-gradient-to-r from-[#071b0c] via-[#2f7f35] to-[#071b0c] px-4 py-20 font-montserrat text-white sm:px-6 lg:px-10"
      >
        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          {/* Left Side */}
          <div ref={leftRef} className="lg:sticky lg:top-24 lg:h-fit">
            <p className="mb-4 text-[12px] font-black uppercase tracking-[0.35em] text-[#d8ffd8]">
              {t(`${basePath}.badge`)}
            </p>

            <h1 className="max-w-xl text-[42px] font-black leading-[1.12] tracking-tight text-white drop-shadow-[0_12px_30px_rgba(0,0,0,0.45)] sm:text-[58px] lg:text-[72px]">
              {t(`${basePath}.heading`)}
            </h1>

            <p className="mt-8 max-w-md text-[16px] font-semibold leading-7 text-white/82 sm:text-[18px]">
              {t(`${basePath}.description`)}
            </p>

            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur-md">
              <FiMail className="shrink-0 text-[22px] text-[#ff604d]" />

              <div>
                <p className="text-[12px] font-black uppercase tracking-[0.18em] text-[#d8ffd8]">
                  {t(`${basePath}.helpBox.label`)}
                </p>

                <a
                  href={`mailto:${t(`${basePath}.helpBox.email`)}`}
                  className="text-[14px] font-bold text-white/90 hover:text-[#d8ffd8]"
                >
                  {t(`${basePath}.helpBox.email`)}
                </a>
              </div>
            </div>

            <Link
              to={t(`${basePath}.contactButton.path`)}
              className="group relative mt-7 inline-flex overflow-hidden rounded-sm bg-[#e60000] px-8 py-4 text-[14px] font-black text-white shadow-[0_18px_45px_rgba(230,0,0,0.3)] transition duration-300 hover:-translate-y-1 hover:bg-[#c90000]"
            >
              <span className="relative z-10">
                {t(`${basePath}.contactButton.text`)}
              </span>

              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition duration-500 group-hover:translate-x-full" />
            </Link>
          </div>

          {/* Right Side */}
          <div>
            {/* Search */}
            <div className="mb-6 rounded-[24px] border border-white/15 bg-white/10 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur-xl">
              <label className="flex items-center gap-3 rounded-2xl border border-white/12 bg-black/15 px-4 py-3">
                <FiSearch className="text-[20px] text-[#d8ffd8]" />

                <input
                  type="text"
                  placeholder={t(`${basePath}.search.placeholder`)}
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setActiveIndex(0);
                  }}
                  className="w-full bg-transparent text-[14px] font-semibold text-white outline-none placeholder:text-white/50"
                />
              </label>
            </div>

            {/* FAQ List */}
            <div className="overflow-hidden rounded-[30px] border border-white/15 sm:p-6">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => {
                  const isOpen = activeIndex === index;

                  return (
                    <div
                      key={`${faq.question}-${index}`}
                      ref={(el) => {
                        faqRefs.current[index] = el;
                      }}
                      className="border-b border-white/22 last:border-b-0"
                    >
                      <button
                        type="button"
                        onClick={() => setActiveIndex(isOpen ? null : index)}
                        className="group flex w-full items-start justify-between gap-5 py-6 text-left"
                      >
                        <h3
                          className={`text-[19px] font-black leading-snug transition duration-300 sm:text-[24px] ${
                            isOpen ? "text-[#ff604d]" : "text-white"
                          } group-hover:text-[#d8ffd8]`}
                        >
                          {faq.question}
                        </h3>

                        <span
                          className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition duration-300 ${
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
                          <p className="max-w-4xl pb-7 text-[14px] font-semibold leading-8 text-white/82 sm:text-[15px]">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="py-12 text-center">
                  <p className="text-[18px] font-black text-white">
                    {t(`${basePath}.emptyState.title`)}
                  </p>

                  <p className="mt-2 text-[14px] font-semibold text-white/70">
                    {t(`${basePath}.emptyState.description`)}
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Note */}
            <div className="mt-8 rounded-[24px] border border-[#d8ffd8]/20 bg-[#d8ffd8]/10 p-6 text-center shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl">
              <p className="text-[16px] font-bold leading-7 text-white/88">
                {t(`${basePath}.bottomNote.textBeforeEmail`)}{" "}
                <a
                  href={`mailto:${t(`${basePath}.bottomNote.email`)}`}
                  className="font-black text-[#d8ffd8] hover:text-white"
                >
                  {t(`${basePath}.bottomNote.email`)}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <LetsTalk />
    </>
  );
};

export default FaqsPage;
