"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SponsorHeroBgImage from "@/public/sponsor-hero-bg-image.png";

const variants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.12 },
    },
  },
  fadeUp: {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
};

export default function SponsorsSection() {
  return (
    <section
      id="sponsors"
      className="relative w-full overflow-hidden text-center lg:py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={SponsorHeroBgImage}
          alt="TechFiesta background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <motion.div
        variants={variants.container}
        initial="hidden"
        animate="visible"
        className="mx-auto w-full px-4 sm:px-6 mt-[101px] max-w-5xl mb-10 lg:mb-0"
      >
        {/* Pill */}
        <motion.div
          variants={variants.fadeUp}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur"
        >
          {/* <span className="inline-block h-2 w-2 rounded-full bg-yellow-300" /> */}
          <span>Annual Tech Awards &amp; Dinner Night</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={variants.fadeUp}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white"
        >
          TECHFIESTA
        </motion.h1>

        {/* Sub-title (purple) */}
        <motion.h2
          variants={variants.fadeUp}
          className="mt-2 text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-violet-300"
        >
          Awards &amp; Dinner Night
        </motion.h2>

        {/* Tagline */}
        <motion.p
          variants={variants.fadeUp}
          className="mx-auto mt-6 max-w-4xl text-base sm:text-lg lg:text-xl font-medium text-white"
        >
          Celebrating the people, products, and communities shaping
          Nigeria&apos;s tech future.
        </motion.p>

        {/* Long description */}
        <motion.p
          variants={variants.fadeUp}
          className="mx-auto mt-5 max-w-4xl text-sm sm:text-base lg:text-lg leading-relaxed text-white/80"
        >
          An annual, community-curated awards and networking dinner that brings
          the ecosystem together—founders, engineers, designers, community
          leads, and corporate partners—under one roof to connect, recognize
          impact, and tell authentic stories.
        </motion.p>
      </motion.div>
    </section>
  );
}
