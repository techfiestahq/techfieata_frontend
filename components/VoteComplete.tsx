"use client";
import React from "react";
import Image from "next/image";
import VoteCompleteIcon from "@/public/vote-complete.svg";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ContainerLayout from "@/components/ContainerLayout";

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

export default function VoteComplete() {
  const router = useRouter();

  const handleReturnHome = () => {
    router.push("/");
  };

  return (
    <section
      id="vote"
      className="bg-[#000000] relative w-full overflow-hidden text-white"
    >
      <ContainerLayout>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative flex flex-col items-center justify-center text-center py-24 md:py-32"
        >
          {/* Success Icon */}
          <motion.div variants={fadeUp} className="mb-8 text-6xl md:text-8xl">
            <Image src={VoteCompleteIcon} alt="vote-complete" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-3xl md:text-7xl font-medium leading-tight mb-5"
          >
            Thank you for voting!
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-[#F9F9F9CC] text-base md:text-2xl font-normal mb-10"
          >
            Your vote has been recorded successfully.
          </motion.p>

          <motion.button
            variants={fadeUp}
            onClick={handleReturnHome}
            className="bg-[#4A21BD] hover:bg-[#7C3AED] text-white text-xl font-medium rounded-[100px] px-14 h-16 transition-colors cursor-pointer"
          >
            Return to Homepage
          </motion.button>
        </motion.div>
      </ContainerLayout>
    </section>
  );
}
