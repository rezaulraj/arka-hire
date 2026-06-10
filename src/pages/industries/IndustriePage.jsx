import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

import Industries from "./Industries";
import LetsTalk from "../home/LetsTalk";
import { Helmet } from "react-helmet-async";

const IndustriePage = () => {
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

  const pageTitle = "Industries We Serve | Arka Hire";
  const pageDescription =
    "Explore our premium recruitment services across multiple industries. Find skilled workers for construction, healthcare, hospitality, and more.";
  const pageUrl = "https://arkahire.com/industries";
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
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="https://arkahire.com/logo1.png" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://arkahire.com/logo1.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Arka Hire",
            url: "https://arkahire.com",
            logo: "https://arkahire.com/logo1.png",
            sameAs: socialLinks.map((s) => s.url),
            contactPoint: {
              "@type": "ContactPoint",
              email: "info@arkahire.com",
              contactType: "customer support",
              areaServed: "Worldwide",
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "Surbiton",
              addressLocality: "United Kingdom",
              postalCode: "KT6 7TE",
              addressCountry: "GB",
            },
          })}
        </script>
      </Helmet>

      <Industries />
      <LetsTalk />
    </div>
  );
};

export default IndustriePage;
