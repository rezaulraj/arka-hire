import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

import ContactForm from "./ContactForm";
import LocationPage from "./LocationPage";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => t,
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      wheelMultiplier: 1,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  const socialLinks = [
    { platform: "Facebook", url: "https://www.facebook.com/ArkaHire" },
    { platform: "Instagram", url: "https://www.instagram.com/arka.hire.b2b/" },
    { platform: "Twitter", url: "https://x.com/ArkaHire" },
    {
      platform: "YouTube",
      url: "https://www.youtube.com/channel/UCUBIlFJjRENFb04CYFMQTug",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/company/arka-hire/",
    },
    { platform: "Pinterest", url: "https://www.pinterest.com/arkahireb2b/" },
  ];
  return (
    <div>
      <Helmet>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Contact Arka Hire for workforce solutions, recruitment inquiries, office location, email, and social media contacts. Connect with our expert team today."
        />
        <meta
          name="keywords"
          content="Contact, Arka Hire, Workforce Solutions, Recruitment, Email, Location, Social Media, Skilled Workers, HR Services"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://arkahire.com/contact-us" />
        <meta property="og:title" content="Contact Us" />
        <meta
          property="og:description"
          content="Reach Arka Hire for inquiries regarding workforce solutions, recruitment, office location, email, and social media contacts."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arkahire.com/contact-us" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Arka Hire",
            url: "https://www.arkahire.com",
            logo: "https://www.arkahire.com/logo1.webp",
            sameAs: socialLinks.map((link) => link.url),
            contactPoint: [
              {
                "@type": "ContactPoint",
                email: "info@arkahire.com",
                contactType: "customer service",
                areaServed: "Global",
                availableLanguage: ["English"],
              },
            ],
            address: {
              "@type": "PostalAddress",
              streetAddress: "KT6 7TE, Surbiton, United Kingdom",
              addressLocality: "Surbiton",
              addressRegion: "Surbiton",
              postalCode: "1205",
              addressCountry: "UK",
            },
          })}
        </script>
      </Helmet>

      <ContactForm />
      <LocationPage />
    </div>
  );
};

export default Contact;
