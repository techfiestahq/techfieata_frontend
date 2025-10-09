"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ContainerLayout from "@/components/ContainerLayout";
import HeroBgImage from "@/public/hero-bg-image.jpg";
import HeroAward from "@/public/hero-award.png";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  return (
    <div className="relative w-full text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={HeroBgImage}
          alt="Techfiesta abstract background"
          fill
          priority
          className="object-center"
        />
      </div>

      <ContainerLayout>
        <div className="mt-1 lg:-mt-5">
          <motion.section
            variants={container}
            initial="hidden"
            animate="visible"
            className="relative flex flex-col items-center justify-center text-center min-h-[60vh] lg:min-h-[120vh]"
          >
            {/* Tiny pill */}
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
              className="mx-auto mt-4 max-w-[780px] font-normal leading-7 text-[#FFFFFFE5] text-lg lg:text-2xl"
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
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-xl font-medium text-[#4A22BD] shadow-[0_6px_24px_rgba(255,255,255,0.12)] transition hover:brightness-110"
              >
                Get your free ticket
              </a>

              {/* <a
                href="#nominate"
                className="inline-flex items-center justify-center rounded-full bg-white/0 px-8 py-3 text-xl font-medium text-white ring-1 ring-white backdrop-blur hover:bg-white/10 transition"
              >
                Nominate
              </a> */}
            </motion.div>

            {/* Award image (in normal flow) */}
            <motion.div
              variants={fadeUp}
              className="mt-14 sm:mt-20 flex justify-center"
            >
              <div className="relative w-[546px] lg:w-[700px] md:h-[300px] h-[393px]">
                <Image
                  src={HeroAward}
                  alt="TechFiesta Award"
                  className="w-full h-auto object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.55)]"
                  priority
                />
                {/* base ellipse shadow */}
                <div className="absolute -bottom-3 left-1/2 h-6 w-[82%] -translate-x-1/2 rounded-full bg-black/55 blur-xl" />
              </div>
            </motion.div>
          </motion.section>
        </div>
      </ContainerLayout>

      {/* Bottom gradient overlay */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[30vh] sm:h-[34vh] lg:h-[40vh] bg-[linear-gradient(180deg,_#0D062000_0%,_#000000_90%)] -z-10" />
    </div>
  );
}
