import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import heroImg from "../../assets/legalHero.webp";
import card1 from "../../assets/legal-card1.webp";
import card2 from "../../assets/legal-card2.webp";
import card3 from "../../assets/legal-card3.webp";

gsap.registerPlugin(ScrollTrigger);

const ArkaAdvanced = () => {
  const containerRef = useRef(null);
  const textRef = useRef([]);
  const cardRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading & paragraph
      gsap.from(textRef.current, {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      // Animate bottom cards
      gsap.from(cardRef.current, {
        y: 50,
        opacity: 0,
        scale: 0.9,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-gradient-to-r from-[#071b0c] via-[#2f7f35] to-[#071b0c] px-6 py-16 sm:px-10 lg:px-20 font-montserrat text-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left Image */}
        <div className="relative w-full lg:w-1/2 rounded-xl overflow-hidden shadow-xl">
          <img
            src={heroImg}
            alt="Legal Hero"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6">
          <h2
            ref={(el) => (textRef.current[0] = el)}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
          >
            Reasons to Stay with{" "}
            <span className="text-red-500">Arka Hire Process</span>
          </h2>
          <p
            ref={(el) => (textRef.current[1] = el)}
            className="text-sm sm:text-base text-white/80 leading-relaxed"
          >
            Partnering with Arka Hire means working with a team committed to
            your business's legal compliance and protection. Tailored solutions,
            experienced team, and ongoing support.
          </p>
          <button
            ref={(el) => (textRef.current[2] = el)}
            className="bg-red-600 hover:bg-red-700 transition text-white px-6 py-3 rounded-md font-bold w-max mt-2"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[card1, card2, card3].map((card, idx) => (
          <div
            key={idx}
            ref={(el) => (cardRef.current[idx] = el)}
            className="border border-black backdrop-blur-md p-6 rounded-xl flex flex-col items-center gap-3 text-center shadow-lg hover:scale-105 transition-transform duration-500"
          >
            <img
              src={card}
              alt={`Card ${idx + 1}`}
              className="h-36 w-36 object-contain"
            />
            <h3 className="font-bold text-lg text-white">
              Card Title {idx + 1}
            </h3>
            <p className="text-white/70 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArkaAdvanced;
