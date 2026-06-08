import React, { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const { t } = useTranslation();

  const sectionRef = useRef(null);
  const infoRef = useRef(null);
  const formRef = useRef(null);

  const basePath = "contactPage.contactForm";

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(infoRef.current, {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(formRef.current, {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-auto w-full flex-col justify-center bg-cover bg-center bg-no-repeat px-4 py-24 font-montserrat text-white sm:px-6 lg:px-16"
      style={{
        backgroundImage: `url('${t(`${basePath}.backgroundImage`)}')`,
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Left Info */}
        <div ref={infoRef} className="flex flex-col justify-start gap-6">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            {t(`${basePath}.title`)}
          </h2>

          <h3 className="text-xl font-semibold sm:text-2xl">
            {t(`${basePath}.subtitle`)}
          </h3>

          <p className="text-white/70">{t(`${basePath}.description`)}</p>

          <div className="mt-6 flex items-center gap-3 text-white/90">
            <span className="font-bold text-red-600">📧</span>
            <span className="font-medium">{t(`${basePath}.email`)}</span>
          </div>
        </div>

        {/* Right Form */}
        <div
          ref={formRef}
          className="rounded-xl bg-white/10 p-6 shadow-lg backdrop-blur-md"
        >
          <form className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder={t(`${basePath}.form.fullNamePlaceholder`)}
              className="w-full rounded-md bg-white/20 px-4 py-3 text-white placeholder-white/70 transition focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-[#2f7f35]"
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder={t(`${basePath}.form.phonePlaceholder`)}
                className="w-full rounded-md bg-white/20 px-4 py-3 text-white placeholder-white/70 transition focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-[#2f7f35]"
              />

              <input
                type="email"
                placeholder={t(`${basePath}.form.emailPlaceholder`)}
                className="w-full rounded-md bg-white/20 px-4 py-3 text-white placeholder-white/70 transition focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-[#2f7f35]"
              />
            </div>

            <textarea
              placeholder={t(`${basePath}.form.messagePlaceholder`)}
              className="h-32 w-full resize-none rounded-md bg-white/20 px-4 py-3 text-white placeholder-white/70 transition focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-[#2f7f35]"
            />

            <button
              type="submit"
              className="mt-2 w-full rounded-md bg-[#60c865] py-3 font-bold text-white shadow-lg transition duration-300 hover:bg-[#4caf52]"
            >
              {t(`${basePath}.form.submitButton`)}
            </button>
          </form>
        </div>
      </div>

      {/* Footer Address */}
      <div className="relative z-10 mt-12 text-center">
        <p className="inline-block rounded-md border border-white/30 bg-white/10 px-6 py-2 text-sm">
          {t(`${basePath}.office.label`)} <br />
          {t(`${basePath}.office.address`)}
        </p>
      </div>
    </section>
  );
};

export default ContactForm;
