import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import gsap from "gsap";

import collaboration from "../../assets/collaboration.webp";

const PartnerCollaboration = () => {
  const { t } = useTranslation();

  const sectionRef = useRef(null);

  const basePath = "workerandagencies.agencyPartnerPage.partnerCollaboration";

  const pointsData = t(`${basePath}.points`, {
    returnObjects: true,
  });

  const points = Array.isArray(pointsData) ? pointsData : [];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".pb-title", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".pb-text", {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.from(".pb-button", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [points.length]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#071b0c] via-[#2f7f35] to-[#071b0c] px-4 py-16 font-montserrat text-white sm:px-6 lg:px-10 lg:py-20"
    >
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={collaboration}
            alt={t(`${basePath}.imageAlt`)}
            className="w-full rounded-xl object-cover shadow-lg"
          />
        </div>

        {/* Right Text */}
        <div className="flex w-full flex-col gap-4 lg:w-1/2">
          <span className="pb-text font-semibold text-red-600">
            {t(`${basePath}.badge`)}
          </span>

          <h2 className="pb-title text-3xl font-extrabold leading-snug sm:text-4xl">
            {t(`${basePath}.title`)}
          </h2>

          {points.map((point, index) => (
            <p key={`${point.label}-${index}`} className="pb-text">
              <strong>{point.label}:</strong> {point.text}
            </p>
          ))}

          <Link
            to={t(`${basePath}.button.path`)}
            className="pb-button mt-4 w-max rounded bg-red-600 px-6 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-red-700"
          >
            {t(`${basePath}.button.text`)}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnerCollaboration;
