"use client";
import React from "react";
import Image from "next/image";
import ContainerLayout from "@/components/ContainerLayout";
import OrganizerBgImage from "@/public/organizer-bg-image.jpg";
import Organizer1 from "@/public/olaifa-glory.webp";
import Organizer2 from "@/public/Esuola-Daniel.webp";
import Organizer3 from "@/public/Quyum-Kehinde.webp";
import Organizer4 from "@/public/Toby.webp";

import type { StaticImageData } from "next/image";
import { motion } from "framer-motion";
type Person = { name: string; src: StaticImageData; role: string };

const people: Person[] = [
  { name: "Glory Olaifa", src: Organizer1, role: "Convener" },
  { name: "Deniel Esuola", src: Organizer2, role: "Organizer" },
  { name: "Kehinde Quyum", src: Organizer3, role: "Organizer" },
  { name: "Adio Testimony", src: Organizer4, role: "Organizer" },
];

const fadeLeft = {
  hidden: { opacity: 0, x: -28 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Organizers() {
  return (
    <section
      id="organizers"
      className="relative w-full overflow-hidden text-white"
    >
      {/* Background (subtle texture + deep indigo wash like the mock) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={OrganizerBgImage}
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      <ContainerLayout>
        <div className="mx-auto max-w-7xl lg:py-24">
          {/* Label */}
          <div className="mx-auto mb-6 w-fit rounded-[100px] bg-[#0000003D] px-5 py-2 text-sm ring-1 ring-[#16289EA6] text-[#FFFFFFC9] lg:text-xl font-medium backdrop-blur-sm">
            Organizers
          </div>

          {/* Heading */}
          <h2 className="text-[#FFFFFF] text-center text-3xl md:text-[42px] font-semibold tracking-tight mb-12">
            Meet the Organizers
          </h2>

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

          <motion.div variants={fadeLeft} className="mt-12 flex justify-center">
            <a
              href="/organizers"
              className="inline-flex items-center gap-2 rounded-[100px] bg-[#FFFFFF] px-6 sm:px-8 py-3 sm:py-4 text-base md:text-xl font-medium text-[#4A22BD] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99]"
            >
              See more
            </a>
          </motion.div>
        </div>
      </ContainerLayout>
    </section>
  );
}
