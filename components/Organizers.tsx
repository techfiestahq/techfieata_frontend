"use client";

import React from "react";
import Image from "next/image";
import ContainerLayout from "@/components/ContainerLayout";
import OrganizerBgImage from "@/public/organizer-bg-image.jpg";
import Organizer1 from "@/public/organizer-1.png";
import Organizer2 from "@/public/organizer-1.png";
import Organizer3 from "@/public/organizer-1.png";

import type { StaticImageData } from "next/image";
type Person = { name: string; src: StaticImageData };

const people: Person[] = [
  { name: "Dada Dada", src: Organizer1 },
  { name: "Dada Dada", src: Organizer2 },
  { name: "Dada Dada", src: Organizer3 },
];

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
          <div className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
            {people.map(({ name, src }, i) => (
              <div key={i} className="w-full max-w-[360px]">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md ring-1 ring-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
                  <Image
                    src={src}
                    alt={name}
                    fill
                    className="object-cover grayscale"
                    priority={i === 0}
                  />
                </div>
                <p className="mt-6 text-center text-xl md:text-2xl font-medium">
                  {name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
}
