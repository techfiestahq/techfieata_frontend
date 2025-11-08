"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
// import Image from "next/image";
import ContainerLayout from "@/components/ContainerLayout";
// import TokenModal from "@/components/TokenModal";
import TokenSentModal from "./TokenSentModal";
// import VoteBgImage from "@/public/vote-bg-image.jpg"; // ← replace with your actual image if any

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function VoteSection() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="vote"
      className="bg-[#000000] relative w-full overflow-hidden text-white"
    >
      {/* Background */}
      {/* <div className="absolute inset-0 -z-10">
        <Image
          src={VoteBgImage}
          alt="Voting background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/85" />
      </div> */}

      <ContainerLayout>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative flex flex-col items-center justify-center text-center py-24 md:py-32"
        >
          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-3xl md:text-7xl font-medium leading-tight mb-5"
          >
            Vote for the people shaping <br className="hidden md:block" />{" "}
            Nigeria’s tech story.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className=" text-[#F9F9F9CC] text-base md:text-2xl font-normal mb-10"
          >
            Your vote helps spotlight the builders, innovators, and connectors{" "}
            <br className="hidden md:block" />
            driving Nigeria’s tech ecosystem forward.
          </motion.p>

          {/* Token Input */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6 w-full"
          >
            <input
              type="text"
              placeholder="Enter your unique voting token"
              className="bg-[#FFFFFF] border border-[#8E8E9378] text-xl font-normal w-[432px] h-16 rounded-[100px] px-6 text-black outline-none"
            />
            <button className="w-full h-16 sm:w-auto bg-[#4A21BD] hover:bg-[#7C3AED] text-white text-xl font-medium rounded-[100px] px-14 transition-colors cursor-pointer">
              Verify
            </button>
          </motion.div>

          {/* Link */}
          <motion.p
            variants={fadeUp}
            // href="#"
            onClick={() => setOpen(true)}
            className="text-white/70 text-2xl font-medium hover:text-white transition-colors cursor-pointer"
          >
            Get your free token here
          </motion.p>
        </motion.div>
      </ContainerLayout>
      {/* <TokenModal isOpen={open} onClose={() => setOpen(false)} /> */}
      <TokenSentModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
}
