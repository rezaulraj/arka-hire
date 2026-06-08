import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaBuilding } from "react-icons/fa";

const LocationPage = () => {
  const address = "Surbiton, United Kingdom, KT6 7TE";

  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-16 font-montserrat text-[#123817] sm:px-6 lg:px-10">
      {/* Decorative gradient blur */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-[#2f7f35]/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-[12px] font-black uppercase tracking-[0.3em] text-[#2f7f35]">
            Our Location
          </p>

          <h1 className="text-[34px] font-black leading-tight text-[#123817] sm:text-[48px] lg:text-[60px]">
            Visit Our Office
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] font-semibold leading-7 text-[#123817]/70">
            Find our office location and contact details below.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left Info */}
          <div className="rounded-[28px] border border-[#2f7f35]/15 bg-white p-7 shadow-[0_24px_70px_rgba(0,0,0,0.08)]">
            <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2f7f35]/10 text-[#2f7f35]">
              <FaMapMarkerAlt className="text-[28px]" />
            </div>

            <h2 className="mb-5 text-[30px] font-black leading-tight text-[#123817]">
              Head Office - UK
            </h2>

            <div className="space-y-4">
              <div className="flex gap-4 rounded-2xl border border-[#2f7f35]/10 bg-[#f4faf5] p-4">
                <FaBuilding className="mt-1 shrink-0 text-[#2f7f35]" />
                <div>
                  <h3 className="text-[14px] font-black text-[#123817]">
                    Address
                  </h3>
                  <p className="mt-1 text-[14px] font-semibold leading-6 text-[#123817]/70">
                    {address}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-[#2f7f35]/10 bg-[#f4faf5] p-4">
                <FaEnvelope className="mt-1 shrink-0 text-[#2f7f35]" />
                <div>
                  <h3 className="text-[14px] font-black text-[#123817]">
                    Email
                  </h3>
                  <a
                    href="mailto:info@arkahire.com"
                    className="mt-1 inline-block text-[14px] font-semibold text-[#123817]/70 transition hover:text-[#2f7f35]"
                  >
                    info@arkahire.com
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Surbiton%2C%20United%20Kingdom%2C%20KT6%207TE"
              target="_blank"
              rel="noreferrer"
              className="group relative mt-7 inline-flex overflow-hidden rounded-md bg-[#e60000] px-7 py-3 text-[13px] font-black text-white shadow-[0_18px_40px_rgba(230,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:bg-[#c90000]"
            >
              <span className="relative z-10">Open in Google Maps</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition duration-500 group-hover:translate-x-full" />
            </a>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-[28px] border border-[#2f7f35]/15 bg-white p-3 shadow-[0_24px_70px_rgba(0,0,0,0.1)]">
            <iframe
              title="Arka Hire Location - Surbiton"
              src="https://www.google.com/maps?q=Surbiton%2C%20United%20Kingdom%2C%20KT6%207TE&output=embed"
              className="h-[420px] w-full rounded-[22px] border-0 sm:h-[500px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationPage;
