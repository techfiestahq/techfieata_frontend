"use client";
import React from "react";
import Image from "next/image";
import ContainerLayout from "@/components/ContainerLayout";
import { motion } from "framer-motion";
import Organizer1 from "@/public/olaifa-glory.webp";
import Organizer2 from "@/public/Esuola-Daniel.webp";
import Organizer3 from "@/public/Quyum-Kehinde.webp";
import Organizer4 from "@/public/Toby-Toby.webp";
import SponsorHeroBgImage from "@/public/sponsor-hero-bg-image.png";
import Team1 from "@/public/Confidence-Ufuoma.webp";
import Team2 from "@/public/john-olaniyi.webp";

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
  fadeDown: {
    hidden: { opacity: 0, y: -12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  },
};

import type { StaticImageData } from "next/image";
type Person = { name: string; src: StaticImageData; role: string };

export default function SponsorsSection() {
  const people: Person[] = [
    { name: "Glory Olaifa", src: Organizer1, role: "Convener" },
    { name: "Daniel Esuola", src: Organizer2, role: "Organizer" },
    { name: "Kehinde Quyum", src: Organizer3, role: "Organizer" },
    { name: "Adio Testimony", src: Organizer4, role: "Organizer" },
  ];

  const team: Person[] = [
    { name: "Confidence Ufuoma", src: Team1, role: "Content Creator" },
    { name: "Olaniyi John", src: Team2, role: "Frontend developer" },
  ];

  return (
    <section
      id="sponsors"
      className="relative w-full overflow-hidden text-center lg:py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={SponsorHeroBgImage}
          alt="sponsors background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <ContainerLayout>
        <motion.div
          variants={variants.container}
          initial="hidden"
          animate="visible"
          className="mx-auto w-full px-4 sm:px-6 mt-[101px]"
        >
          {/* Heading */}
          <motion.h2
            variants={variants.fadeUp}
            className="mb-10 text-3xl font-semibold text-white md:text-6xl"
          >
            Organizers
          </motion.h2>

          {/* Cards */}
          <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 justify-items-center">
            {people.map(({ name, src, role }, i) => (
              <div key={i} className="w-full max-w-[360px]">
                <div className="m-auto relative w-[260px] h-[260px] md:w-[300px] md:h-[300px] overflow-hidden rounded-xl ring-1 ring-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
                  <Image
                    src={src}
                    alt={name}
                    fill
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>
                <p className="mt-6 text-center text-xl md:text-2xl font-semibold">
                  {name}
                </p>
                <p className="mt-1 text-center text-sm md:text-base text-white/70 font-normal">
                  {role}
                </p>
              </div>
            ))}
          </div>

          <motion.h2
            variants={variants.fadeUp}
            className="mt-32 mb-10 text-3xl font-semibold text-white md:text-6xl"
          >
            Our Team
          </motion.h2>

          {/* Cards */}
          <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 justify-items-center">
            {team.map(({ name, src, role }, i) => (
              <div key={i} className="w-full max-w-[360px]">
                <div className="m-auto relative w-[260px] h-[260px] md:w-[300px] md:h-[300px] overflow-hidden rounded-xl ring-1 ring-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
                  <Image
                    src={src}
                    alt={name}
                    fill
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>
                <p className="mt-6 text-center text-xl md:text-2xl font-semibold">
                  {name}
                </p>
                <p className="mt-1 text-center text-sm md:text-base text-white/70 font-normal">
                  {role}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </ContainerLayout>
    </section>
  );
}
