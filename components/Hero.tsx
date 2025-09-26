"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ContainerLayout from "@/components/ContainerLayout";
import HeroBgImage from "@/public/hero-bg-image.jpg";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Hero() {
  return (
    <div className="relative w-full text-[#FFFFFF]">
      {/* Background image */}

      <ContainerLayout>
        <div className="absolute inset-0 -z-20">
          <Image
            src={HeroBgImage}
            alt="Techfiesta abstract background"
            fill
            priority
            className="object-center"
          />
        </div>
        {/* Apply negative margin here to shift everything up */}
        <div className="-mt-16 md:-mt-24 lg:-mt-56">
          <motion.section
            variants={container}
            initial="hidden"
            animate="visible"
            className="relative flex min-h-[120vh] flex-col items-center justify-center text-center"
          >
            {/* Tiny pill above heading */}
            <motion.div
              variants={fadeUp}
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#0000003D] px-5 py-3 text-[12px] leading-5 ring-1 ring-[#16289EA6] text-[#FFFFFFC9]"
            >
              Celebrating Impacts
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-[40px] sm:text-[56px] md:text-[68px] lg:text-[110px] leading-[1.1] font-medium"
            >
              TechFiesta 2.0
            </motion.h1>

            {/* Subcopy */}
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-4 max-w-[780px] text-2xl font-normal leading-7 text-[#FFFFFFE5] sm:text-[18px]"
            >
              This year, TechFiesta is more than a gathering, it’s a celebration
              of <br className="hidden md:block" /> the people and communities
              powering Nigeria’s tech future.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center justify-center gap-3"
            >
              <a
                href="#tickets"
                className="inline-flex items-center justify-center rounded-full bg-[#FFFFFF] px-6 py-3 text-xl font-medium text-[#4A22BD] shadow-[0_6px_24px_rgba(255,255,255,0.12)] transition hover:brightness-110"
              >
                Get your free ticket
              </a>

              <a
                href="#nominate"
                className="inline-flex items-center justify-center rounded-full bg-white/0 px-8 py-3 text-xl font-medium text-white ring-1 ring-[#FFFFFF] backdrop-blur hover:bg-white/10 transition"
              >
                Nominate
              </a>
            </motion.div>
          </motion.section>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Hero;
