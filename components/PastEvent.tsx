"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ContainerLayout from "@/components/ContainerLayout";
import PastEventBgImage from "@/public/past-event-bg-image.png";
import Image1 from "@/public/image-1.png";
import Image2 from "@/public/image-2.png";
import Image3 from "@/public/image-3.png";
import Image4 from "@/public/image-4.png";
import Image5 from "@/public/image-5.png";
import Image6 from "@/public/image-6.png";
import videoImage from "@/public/video.png";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function PastEvent() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 md:py-24">
      {/* Section-scoped background: covers entire section height */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src={PastEventBgImage}
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 -z-20">
        <Image
          src={PastEventBgImage}
          alt="Techfiesta abstract background"
          fill
          priority
          className="object-cover"
        />
      </div>

      <ContainerLayout>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Pill */}
          <motion.div
            variants={fadeUp}
            className="mx-auto mb-6 w-fit rounded-full border border-[#515151A6] px-4 py-2 text-sm text-black/90 backdrop-blur"
          >
            TechFiesta 1.0
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            className="mx-auto mb-10 max-w-3xl text-center text-2xl sm:text-3xl md:text-[32px] font-medium text-black/70"
          >
            Last year, we gathered to{" "}
            <span className="font-semibold text-black">
              learn,
              <br className="hidden md:inline" /> connect, and celebrate
            </span>{" "}
            tech.
          </motion.h2>

          {/* Collage — gapless; Row1: 20/40/40, Row2: 40/20/40 */}
          <div className="mb-20">
            {/* Row 1 */}
            <div className="flex w-full gap-0 h-[220px] sm:h-[260px] md:h-[300px]">
              <motion.figure
                variants={fadeUp}
                className="relative w-[20%] h-full overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <Image
                  src={Image1}
                  alt="Photo 1"
                  fill
                  className="object-cover"
                />
              </motion.figure>
              <motion.figure
                variants={fadeUp}
                className="relative w-[40%] h-full overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <Image
                  src={Image2}
                  alt="Photo 2"
                  fill
                  className="object-cover"
                />
              </motion.figure>
              <motion.figure
                variants={fadeUp}
                className="relative w-[40%] h-full overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <Image
                  src={Image3}
                  alt="Photo 3"
                  fill
                  className="object-cover"
                />
              </motion.figure>
            </div>

            {/* Row 2 */}
            <div className="mt-0 flex w-full gap-0 h-[220px] sm:h-[260px] md:h-[300px]">
              <motion.figure
                variants={fadeUp}
                className="relative w-[40%] h-full overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <Image
                  src={Image4}
                  alt="Photo 4"
                  fill
                  className="object-cover"
                />
              </motion.figure>
              <motion.figure
                variants={fadeUp}
                className="relative w-[20%] h-full overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <Image
                  src={Image5}
                  alt="Photo 5"
                  fill
                  className="object-cover"
                />
              </motion.figure>
              <motion.figure
                variants={fadeUp}
                className="relative w-[40%] h-full overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <Image
                  src={Image6}
                  alt="Photo 6"
                  fill
                  className="object-cover"
                />
              </motion.figure>
            </div>
          </div>

          {/* Video card */}
          <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-xl"
          >
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={videoImage}
                alt="TechFiesta 1.0 recap video"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </motion.div>
        </motion.div>
      </ContainerLayout>
    </section>
  );
}

export default PastEvent;
