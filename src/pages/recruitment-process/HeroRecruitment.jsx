import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroRecruitment from "../../assets/recruitment.webp";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const HeroRecruitment = () => {
  const { t } = useTranslation();

  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const badgeRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const topTextRef = useRef(null);

  const headingData = t("employers.recruitmentPage.heroRecruitment.heading", {
    returnObjects: true,
  });

  const tagsData = t("employers.recruitmentPage.heroRecruitment.tags", {
    returnObjects: true,
  });

  const heading = Array.isArray(headingData)
    ? headingData
    : typeof headingData === "string"
      ? headingData.split(" ")
      : [];

  const tags = Array.isArray(tagsData) ? tagsData : [];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".recruit-word", {
        yPercent: 115,
        opacity: 0,
      });

      gsap.set(
        [
          topTextRef.current,
          badgeRef.current,
          subtitleRef.current,
          descRef.current,
        ].filter(Boolean),
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
  }, [heading.length]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#071b0c] via-[#2f7f35] to-[#071b0c] px-4 py-20 font-montserrat text-white sm:px-6 lg:px-10"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Top heading */}
        <div className="mx-auto mb-20 max-w-5xl text-center">
          <h1 className="text-[36px] font-black leading-tight tracking-[0.08em] text-white sm:text-[48px] lg:text-[62px]">
            {heading.map((word, index) => (
              <span
                key={`${word}-${index}`}
                className="mr-4 inline-block overflow-hidden align-bottom"
              >
                <span
                  className={`recruit-word inline-block ${
                    word === "Process" ? "text-[#8bea8f]" : "text-white"
                  } drop-shadow-[0_10px_25px_rgba(0,0,0,0.45)]`}
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
            {t("employers.recruitmentPage.heroRecruitment.topDescription")}
          </p>
        </div>

        {/* Content */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left text */}
          <div>
            <p
              ref={badgeRef}
              className="mb-5 text-[14px] font-black uppercase tracking-[0.22em] text-[#ff3030]"
            >
              {t("employers.recruitmentPage.heroRecruitment.badge")}
            </p>

            <h2
              ref={subtitleRef}
              className="max-w-xl text-[36px] font-black leading-[1.05] tracking-tight text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.35)] sm:text-[48px] lg:text-[58px]"
            >
              {t("employers.recruitmentPage.heroRecruitment.title")}
            </h2>

            <p
              ref={descRef}
              className="mt-7 max-w-lg text-[14px] font-bold leading-7 text-white/82 sm:text-[15px]"
            >
              {t("employers.recruitmentPage.heroRecruitment.description")}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {tags.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[12px] font-black uppercase tracking-[0.12em] text-[#d8ffd8] backdrop-blur-md"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div
            ref={imageRef}
            className="group relative overflow-hidden rounded-[30px] border border-white/15 bg-black shadow-[0_30px_90px_rgba(0,0,0,0.4)]"
          >
            <img
              src={heroRecruitment}
              alt={t("employers.recruitmentPage.heroRecruitment.imageAlt")}
              className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[390px] lg:h-[430px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2f7f35]/15 via-transparent to-black/20" />

            <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[12px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-md">
              {t("employers.recruitmentPage.heroRecruitment.imageBadge")}
            </div>

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-black/35 p-5 backdrop-blur-md">
              <p className="text-[13px] font-bold leading-6 text-white/85">
                {t("employers.recruitmentPage.heroRecruitment.imageCardText")}
              </p>
            </div>

            <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroRecruitment;
