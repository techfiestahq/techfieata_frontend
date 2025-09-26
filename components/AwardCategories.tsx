"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ContainerLayout from "@/components/ContainerLayout";
import AwardBgimage from "@/public/award-bg-image.jpg";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

type Chip = { text: string; rotate?: number; solid?: boolean };

const chips: Chip[] = [
  { text: "Open Source Contributor of the Year", rotate: 4 },
  { text: "Tech Content Creator / Educator of the Year", rotate: -4 },
  { text: "Innovator of the Year", rotate: 5 },

  { text: "Community Builder of the Year", rotate: -6 },
  { text: "Technical Leadership Award", rotate: -2 },
  { text: "Rising Talent Award", rotate: -4 },
  { text: "Diversity & Inclusion Champion", rotate: -2 },

  { text: "Ecosystem Connector / Community Catalyst", rotate: -5 },
  { text: "Volunteer of the Year", rotate: -3 },
  { text: "Tech Influencer of the Year", rotate: -4 },
  { text: "and moreeeee", solid: true, rotate: -8 },
];

export default function AwardCategories() {
  return (
    <section className="relative w-full text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={AwardBgimage}
          alt=""
          fill
          priority
          className="object-cover"
        />
        {/* slight dark wash for readability */}
        {/* <div className="absolute inset-0 bg-[#030915]/40" /> */}
      </div>

      {/* Curved bottom glow like the mock (overlays the image) */}
      {/* <div className="pointer-events-none absolute inset-x-0 -bottom-28 h-[52vh] -z-0"> */}
      {/* upper wide ellipse */}
      {/* <div className="absolute left-1/2 bottom-28 w-[130vw] -translate-x-1/2 h-[42vh] rounded-[999px] bg-[radial-gradient(60%_120%_at_50%_100%,rgba(124,113,255,0.12)_0%,rgba(6,10,22,0)_60%)]" /> */}
      {/* darker fade to bottom */}
      {/* <div className="absolute inset-x-0 bottom-0 h-[38vh] bg-[linear-gradient(180deg,_#0D062000_0%,_#0D06204D_40%,_#030915_90%)]" /> */}
      {/* </div> */}

      <ContainerLayout>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative mx-auto py-16 md:py-24"
        >
          {/* Section label */}
          <motion.div
            variants={fadeUp}
            className="mx-auto mb-6 w-fit rounded-full bg-[#0000003D] px-4 py-2 text-sm ring-1 ring-[#828282A6] backdrop-blur-[2px] text-[#FFFFFFC9] lg:text-2xl"
          >
            Award Categories
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="mx-auto max-w-4xl text-center text-2xl sm:text-3xl md:text-[32px] leading-snug font-normal text-[#FFFFFF]"
          >
            This year’s awards spotlight the builders, innovators, and
            connectors shaping the future of tech in Nigeria.
          </motion.h2>
          {/* Chips */}
          <motion.div
            variants={fadeUp}
            className="mx-auto mt-10 max-w-6xl space-y-6"
          >
            {/* First row: 2 chips */}
            <div className="flex justify-center gap-6">
              {chips.slice(0, 2).map(({ text, rotate = 0, solid }) => (
                <div
                  key={text}
                  style={{ rotate: `${rotate}deg` }}
                  className={[
                    "whitespace-nowrap rounded-full px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-lg font-medium",
                    "shadow-[0_10px_24px_rgba(0,0,0,0.35)]",
                    solid
                      ? "bg-[#5C3BFE] text-white"
                      : "bg-transparent text-[#FFFFFF] ring-1 ring-[#FFFFFF]",
                  ].join(" ")}
                >
                  {text}
                </div>
              ))}
            </div>

            {/* Second row: 4 chips */}
            <div className="flex flex-wrap justify-center gap-6">
              {chips.slice(2, 6).map(({ text, rotate = 0, solid }) => (
                <div
                  key={text}
                  style={{ rotate: `${rotate}deg` }}
                  className={[
                    "whitespace-nowrap rounded-full px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-lg font-medium",
                    "shadow-[0_10px_24px_rgba(0,0,0,0.35)]",
                    solid
                      ? "bg-[#5C3BFE] text-white"
                      : "bg-transparent text-[#FFFFFF] ring-1 ring-[#FFFFFF]",
                  ].join(" ")}
                >
                  {text}
                </div>
              ))}
            </div>

            {/* Third row: 4 chips */}
            <div className="flex flex-wrap justify-center gap-6">
              {chips.slice(6, 10).map(({ text, rotate = 0, solid }) => (
                <div
                  key={text}
                  style={{ rotate: `${rotate}deg` }}
                  className={[
                    "whitespace-nowrap rounded-full px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-lg font-medium",
                    "shadow-[0_10px_24px_rgba(0,0,0,0.35)]",
                    solid
                      ? "bg-[#5C3BFE] text-white"
                      : "bg-transparent text-[#FFFFFF] ring-1 ring-[#FFFFFF]",
                  ].join(" ")}
                >
                  {text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeUp} className="mt-12 flex justify-center">
            <a
              href="#nominate"
              className="inline-flex items-center justify-center rounded-full bg-[#FFFFFF] px-6 md:px-7 py-3 text-sm md:text-xl font-medium text-black shadow-[0_6px_24px_rgba(255,255,255,0.12)] transition hover:brightness-95"
            >
              Nominate Now
            </a>
          </motion.div>
        </motion.div>
      </ContainerLayout>
    </section>
  );
}
