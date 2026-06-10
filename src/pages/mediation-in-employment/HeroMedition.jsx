import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroRecruitment from "../../assets/recruitment.webp";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const HeroRecruitment = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const topTextRef = useRef(null);
  const badgeRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const { t } = useTranslation();

  const heading = t("employers.recruitmentPage.heroRecruitment.heading", {
    returnObjects: true,
  });
  const topDescription = t(
    "employers.recruitmentPage.heroRecruitment.topDescription",
  );
  const badge = t("employers.recruitmentPage.heroRecruitment.badge");
  const title = t("employers.recruitmentPage.heroRecruitment.title");
  const description = t(
    "employers.recruitmentPage.heroRecruitment.description",
  );
  const tags = t("employers.recruitmentPage.heroRecruitment.tags", {
    returnObjects: true,
  });
  const imageAlt = t("employers.recruitmentPage.heroRecruitment.imageAlt");
  const imageCardText = t(
    "employers.recruitmentPage.heroRecruitment.imageCardText",
  );

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".recruit-word", { yPercent: 115, opacity: 0 });
      gsap.set(
        [
          topTextRef.current,
          badgeRef.current,
          subtitleRef.current,
          descRef.current,
        ],
        {
          y: 28,
          opacity: 0,
          filter: "blur(8px)",
        },
      );
      gsap.set(imageRef.current, {
        x: 80,
        opacity: 0,
        scale: 0.92,
        rotate: 2,
        filter: "blur(12px)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.to(".recruit-word", {
        yPercent: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.07,
        ease: "power4.out",
      })
        .to(
          topTextRef.current,
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.45",
        )
        .to(
          badgeRef.current,
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .to(
          subtitleRef.current,
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.85,
            ease: "power4.out",
          },
          "-=0.35",
        )
        .to(
          descRef.current,
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.45",
        )
        .to(
          imageRef.current,
          {
            x: 0,
            opacity: 1,
            scale: 1,
            rotate: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "power4.out",
          },
          "-=0.8",
        );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#071b0c] via-[#2f7f35] to-[#071b0c] px-4 py-20 font-montserrat text-white sm:px-6 lg:px-10"
    >
      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <h1 className="text-[36px] font-black leading-tight tracking-[0.08em] text-white sm:text-[48px] lg:text-[62px]">
          {heading.map((word, idx) => (
            <span
              key={idx}
              className="mr-4 inline-block overflow-hidden align-bottom"
            >
              <span
                className={`recruit-word inline-block ${word === "Process" ? "text-[#8bea8f]" : "text-white"} drop-shadow-[0_10px_25px_rgba(0,0,0,0.45)]`}
              >
                {word}
              </span>
            </span>
          ))}
        </h1>
        <p
          ref={topTextRef}
          className="mx-auto mt-5 max-w-3xl text-[14px] font-bold leading-7 text-white/80 sm:text-[15px]"
        >
          {topDescription}
        </p>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[12px] font-black uppercase tracking-[0.12em] text-[#d8ffd8] backdrop-blur-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div
        ref={imageRef}
        className="mt-10 mx-auto max-w-4xl relative overflow-hidden rounded-[30px] border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.4)]"
      >
        <img
          src={heroRecruitment}
          alt={imageAlt}
          className="w-full h-auto object-cover"
        />
        <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-black/35 p-5 backdrop-blur-md">
          <p className="text-[13px] font-bold leading-6 text-white/85">
            {imageCardText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroRecruitment;
