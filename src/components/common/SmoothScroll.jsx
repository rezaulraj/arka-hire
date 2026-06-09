import { useEffect, useRef, forwardRef } from "react";
import Lenis from "@studio-freight/lenis";

// Forward ref so HomePage can optionally use it
const SmoothScroll = forwardRef(({ children }, ref) => {
  const scrollRef = ref || useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const lenis = new Lenis({
      wrapper: scrollRef.current,
      content: scrollRef.current,
      duration: 1.2,
      easing: (t) => t,
      smooth: true,
      direction: "vertical",
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div
      ref={scrollRef}
      style={{
        height: "100vh",
        overflow: "hidden", // Lenis manages scroll
      }}
    >
      {children}
    </div>
  );
});

export default SmoothScroll;