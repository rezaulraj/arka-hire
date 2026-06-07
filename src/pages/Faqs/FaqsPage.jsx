import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import { FiPlus, FiX, FiSearch, FiMail } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LetsTalk from "../home/LetsTalk";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "What types of clients/assignments do you work with?",
    answer:
      "At Arka Hire, we work with a diverse range of clients across various industries, including IT, healthcare, finance, engineering, and more. We handle assignments ranging from temporary and contract positions to permanent placements. Whether you need short-term project support or a long-term addition to your team, we can provide the right talent to meet your specific needs.",
  },
  {
    question: "How long are your typical contracts?",
    answer:
      "The duration of our contracts varies based on the specific requirements of our clients and the nature of the assignment. Temporary assignments can range from a few weeks to several months, while contract positions may last from six months to a year or more. Permanent placements are intended to be long-term. We work closely with our clients to determine the appropriate contract length for each assignment.",
  },
  {
    question: "Why should I work with a staffing agency to find a job?",
    answer:
      "Working with a staffing agency like Arka Hire gives you access to unadvertised jobs, expert guidance, career advice, resume reviews, interview preparation, strong employer connections, and flexible job options including temporary, contract, and permanent roles.",
  },
  {
    question: "How do recruitment agencies work?",
    answer:
      "Recruitment agencies serve as intermediaries between employers and job seekers. Our process includes client consultation, candidate sourcing, screening and interviews, client presentation, onboarding, and follow-up to ensure a smooth transition.",
  },
  {
    question: "What are the fees associated with recruitment services?",
    answer:
      "We do not take money from employers for placements. Instead, employers pay a one-time fee to cover the cost of obtaining the necessary work permits from the government. We are transparent about our fees and provide a detailed breakdown during the initial consultation.",
  },
  {
    question: "Is there an exclusivity clause in the recruitment contracts?",
    answer:
      "Exclusivity clauses are optional and depend on the agreement between Arka Hire and the client. Some clients prefer to work exclusively with us, while others may work with multiple agencies. We tailor our approach to your needs.",
  },
  {
    question: "Is there a deposit to be paid for your services?",
    answer:
      "Typically, we do not require a deposit for our recruitment services. Our one-time fee is payable upon the initiation of the work permit process and will be clearly outlined in our agreement.",
  },
  {
    question: "What is the hiring process like with your agency?",
    answer:
      "Our hiring process includes initial consultation, candidate search, screening, shortlisting, client interviews, selection, offer support, and onboarding assistance to ensure smooth integration.",
  },
  {
    question: "How do you ensure the quality of candidates?",
    answer:
      "We use a rigorous screening process including resume review, phone interviews, in-depth face-to-face or virtual interviews, skills testing where needed, reference checks, and continuous feedback from clients and candidates.",
  },
  {
    question: "How do you handle confidentiality?",
    answer:
      "We take confidentiality very seriously. Client and candidate information is handled with the utmost discretion. We follow strict data protection policies and only share information with authorized personnel involved in the recruitment process.",
  },
  {
    question: "Can you help with international recruitment?",
    answer:
      "Yes, Arka Hire can assist with international recruitment. We have a global network and can source candidates from various countries.",
  },
  {
    question: "What is your policy on diversity and inclusion?",
    answer:
      "Arka Hire is committed to promoting diversity and inclusion in the workplace. We believe diverse teams are more innovative and effective. We provide equal opportunities for all candidates and ensure our processes are free from bias.",
  },
  {
    question:
      "How do you handle disputes or issues during the recruitment process?",
    answer:
      "We have a clear resolution protocol in place. We encourage open communication and work closely with clients and candidates to resolve concerns promptly and fairly.",
  },
  {
    question: "What support do you offer after a candidate is placed?",
    answer:
      "Our support continues after placement. We provide follow-up meetings, performance assessments, and ongoing support to both employers and new hires during the initial employment period.",
  },
  {
    question: "How do you stay updated with industry trends?",
    answer:
      "Our team stays updated through continuous professional development, industry conferences, relevant publications, and insights from a network of industry experts.",
  },
  {
    question: "Can you provide temporary staffing solutions?",
    answer:
      "Yes, we offer temporary staffing solutions for short-term support, seasonal workloads, employee absence coverage, and specialized project needs.",
  },
  {
    question: "How do you match candidates to job roles?",
    answer:
      "We match candidates through detailed job analysis, candidate profiling, advanced matching technologies, cultural fit assessment, and long-term potential evaluation.",
  },
  {
    question: "What is your success rate in placing candidates?",
    answer:
      "Our success rate is high due to our rigorous screening process and deep understanding of client needs. We continuously monitor and improve our processes to maintain strong placement results and satisfaction.",
  },
];

const FaqsPage = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const faqRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [search, setSearch] = useState("");

  const filteredFaqs = useMemo(() => {
    const value = search.toLowerCase().trim();

    if (!value) return faqs;

    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(value) ||
        faq.answer.toLowerCase().includes(value),
    );
  }, [search]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(leftRef.current, {
        x: -60,
        opacity: 0,
        filter: "blur(10px)",
      });

      gsap.set(faqRefs.current, {
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
        faqRefs.current,
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
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative w-full overflow-hidden bg-gradient-to-r from-[#071b0c] via-[#2f7f35] to-[#071b0c] px-4 py-20 font-montserrat text-white sm:px-6 lg:px-10"
      >
        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div ref={leftRef} className="lg:sticky lg:top-24 lg:h-fit">
            <p className="mb-4 text-[12px] font-black uppercase tracking-[0.35em] text-[#d8ffd8]">
              Help Center
            </p>

            <h1 className="max-w-xl text-[42px] font-black leading-[1.12] tracking-tight text-white drop-shadow-[0_12px_30px_rgba(0,0,0,0.45)] sm:text-[58px] lg:text-[72px]">
              Frequently Asked Questions
            </h1>

            <p className="mt-8 max-w-md text-[16px] font-semibold leading-7 text-white/82 sm:text-[18px]">
              Find answers about Arka Hire recruitment services, contracts,
              staffing, international hiring, and candidate support.
            </p>

            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur-md">
              <FiMail className="shrink-0 text-[22px] text-[#ff604d]" />
              <div>
                <p className="text-[12px] font-black uppercase tracking-[0.18em] text-[#d8ffd8]">
                  Need more help?
                </p>
                <a
                  href="mailto:info@arkahire.com"
                  className="text-[14px] font-bold text-white/90 hover:text-[#d8ffd8]"
                >
                  info@arkahire.com
                </a>
              </div>
            </div>

            <a
              href="/contact-us"
              className="group relative mt-7 inline-flex overflow-hidden rounded-sm bg-[#e60000] px-8 py-4 text-[14px] font-black text-white shadow-[0_18px_45px_rgba(230,0,0,0.3)] transition duration-300 hover:-translate-y-1 hover:bg-[#c90000]"
            >
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition duration-500 group-hover:translate-x-full" />
            </a>
          </div>

          <div>
            <div className="mb-6 rounded-[24px] border border-white/15 bg-white/10 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur-xl">
              <label className="flex items-center gap-3 rounded-2xl border border-white/12 bg-black/15 px-4 py-3">
                <FiSearch className="text-[20px] text-[#d8ffd8]" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setActiveIndex(0);
                  }}
                  className="w-full bg-transparent text-[14px] font-semibold text-white outline-none placeholder:text-white/50"
                />
              </label>
            </div>

            <div className="overflow-hidden rounded-[30px] border border-white/15 sm:p-6">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => {
                  const isOpen = activeIndex === index;

                  return (
                    <div
                      key={faq.question}
                      ref={(el) => (faqRefs.current[index] = el)}
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
                    No FAQ found.
                  </p>
                  <p className="mt-2 text-[14px] font-semibold text-white/70">
                    Try searching with another keyword.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-8 rounded-[24px] border border-[#d8ffd8]/20 bg-[#d8ffd8]/10 p-6 text-center shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl">
              <p className="text-[16px] font-bold leading-7 text-white/88">
                If you have any other questions or need further information,
                please feel free to contact us at{" "}
                <a
                  href="mailto:info@arkahire.com"
                  className="font-black text-[#d8ffd8] hover:text-white"
                >
                  info@arkahire.com
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
