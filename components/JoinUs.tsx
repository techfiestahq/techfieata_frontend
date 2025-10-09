"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ContainerLayout from "@/components/ContainerLayout";
import JoinUsBgImage from "@/public/join-us-bg-image.jpg";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -28 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function JoinUs() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={JoinUsBgImage}
          alt="TechFiesta auditorium"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_#030915B2_0%,_#030915B2_35%,_#0D062000_80%)]" />
      </div>

      <ContainerLayout>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative py-16 sm:py-24 lg:py-32"
        >
          <div className="max-w-3xl text-white">
            <motion.h2
              variants={fadeLeft}
              className="text-[#FFFFFF] font-medium leading-[1.5] text-[36px] sm:text-[56px] lg:text-[64px] tracking-tight"
            >
              Join us this year at <br />
              TechFiesta 2.0
            </motion.h2>

            <motion.div variants={fadeLeft} className="mt-8">
              <a
                href="https://tix.africa/techfiesta2025"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[100px] bg-[#FFFFFF] px-6 sm:px-8 py-3 sm:py-4 text-base md:text-xl font-medium text-[#4A22BD] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99]"
              >
                Get your Ticket now
              </a>
            </motion.div>
          </div>
        </motion.div>
      </ContainerLayout>
    </section>
  );
}
