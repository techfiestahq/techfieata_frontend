"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ContainerLayout from "@/components/ContainerLayout";
import ThisyearBgimage from "@/public/this-year-bg-image.jpg";
import awardImage from "@/public/award.png";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ThisYear() {
  return (
    <section
      id="nominees"
      className="relative w-full text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={ThisyearBgimage}
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Top sticker */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="
    relative z-10 mt-6
    flex justify-center
    lg:absolute lg:top-44 lg:left-[40%] 
    lg:-translate-x-56 lg:rotate-[12deg]
  "
        aria-hidden
      >
        <div className="rounded-full bg-[#0000003D] ring-1 ring-[#80839682] px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-4 backdrop-blur-[2px] shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
          <span className="tracking-[0.02em] text-[#FFFFFFC9] text-xl lg:text-5xl font-normal">
            TechFiesta 2.0
          </span>
        </div>
      </motion.div>

      <ContainerLayout>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative flex flex-col lg:flex-row items-center justify-between gap-10 lg:py-24"
        >
          {/* LEFT: copy */}
          <div className="flex-1 max-w-[700px]">
            <motion.h1
              variants={fadeUp}
              className="mb-4 font-semibold leading-[1.05] text-[34px] sm:text-[44px] md:text-[64px]"
            >
              <span className="mr-3 inline-flex items-center rounded-[30px] bg-white px-4 py-1.5 text-black shadow-[0_6px_24px_rgba(0,0,0,0.25)]">
                This year,
              </span>
              <span className="text-[#FFFFFFCC]">
                we’re <br className="hidden md:block" /> taking it {}
              </span>
              even further.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-[58ch] text-[#FFFFFFE5] leading-relaxed text-base md:text-2xl font-normal"
            >
              The first-ever{" "}
              <span className="text-white font-semibold">
                Dinner &amp; Award Night
              </span>{" "}
              where recognition, connection, and storytelling come together in
              one <br className="hidden md:block" /> unforgettable evening.
            </motion.p>

            {/* Bottom sticker */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="
    relative z-10 mt-8
    flex justify-center
    lg:absolute lg:bottom-32 lg:left-[20%] 
    lg:-translate-x-56 lg:-rotate-[6deg]
  "
              aria-hidden
            >
              <div className="rounded-full bg-[#0000003D] ring-1 ring-[#80839682] px-6 md:px-8 py-2.5 md:py-4 backdrop-blur-[2px] shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
                <span className="tracking-[0.02em] text-[#FFFFFFC9] text-lg sm:text-xl lg:text-5xl font-normal">
                  The Award Edition
                </span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: trophy (taller via scale) */}
          <motion.div
            variants={fadeUp}
            className="flex-1 flex justify-center md:justify-end w-full pr-4 lg:pr-10 mt-10"
          >
            <Image
              src={awardImage}
              alt="TechFiesta Award"
              className="w-full h-auto object-contain scale-110 md:scale-125 drop-shadow-[0_24px_48px_rgba(0,0,0,0.55)]"
              priority
            />
          </motion.div>
        </motion.div>
      </ContainerLayout>

      {/* 🔽 bottom overlay gradient */}
      <div
        className="
          pointer-events-none absolute inset-x-0 bottom-0
          h-[34vh] md:h-[38vh] lg:h-[42vh] z-20
          bg-[linear-gradient(180deg,_#0D062000_0%,_#0D06204D_40%,_#030915_85%)]
        "
      />
    </section>
  );
}
