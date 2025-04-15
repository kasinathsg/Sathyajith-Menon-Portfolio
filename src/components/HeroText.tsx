"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export function HeroHighlightDemo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" }); 

  return (
    <HeroHighlight>
      <motion.h1
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: [20, -5, 0] } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
      >
        Unveiling My Best{" "}
        <Highlight className={isInView ? "text-black dark:text-white transition duration-500" : "text-neutral-400"}>
          Works
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
