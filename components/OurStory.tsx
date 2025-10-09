"use client";

import React from "react";
import Image from "next/image";
import ContainerLayout from "@/components/ContainerLayout";
import Image6 from "@/public/image-6.png";

export default function OurStory() {
  return (
    <section id="our-story" className="relative w-full overflow-hidden">
      {/* Plain white with subtle radial glow */}
      <div className="absolute inset-0 -z-10 bg-white" />
      <div
        className="absolute inset-0 -z-10 opacity-90"
        style={{
          background:
            "radial-gradient(60% 60% at 15% 10%, rgba(138, 92, 246, 0.08) 0%, rgba(138, 92, 246, 0) 60%)",
        }}
      />

      <ContainerLayout>
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 lg:gap-16">
          {/* Left: Image */}
          <div className="relative mx-auto w-full max-w-2xl md:max-w-none">
            <div className="relative w-full overflow-hidden rounded-[22px] ring-1 ring-black/10 shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
              {/* Keep a consistent aspect on wide screens */}
              <div className="relative aspect-[16/9] md:aspect-[4/3]">
                <Image
                  src={Image6}
                  alt="TechFiesta community"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Copy */}
          <div className="text-left">
            {/* Pill */}
            <div className="inline-flex items-center rounded-full bg-[#EBD7FF] px-5 py-3 text-sm font-medium text-[#6B21A8]">
              Our Story
            </div>

            {/* Heading */}
            <h3 className="mt-4 text-[20px] font-semibold text-[#0F172A] sm:text-[22px]">
              A New Tradition in Nigeria&apos;s Tech Ecosystem
            </h3>

            {/* Paragraphs */}
            <p className="mt-4 max-w-[56ch] text-base md:text-xl leading-7 text-[#334155]">
              Following the remarkable success of past TECHFIESTA editions where
              professionals gathered to learn, network, and celebrate,
              we&apos;re launching a new tradition: the TECHFIESTA Awards &amp;
              Dinner Night.
            </p>

            <p className="mt-4 max-w-[56ch] text-base md:text-xl leading-7 text-[#334155]">
              It blends recognition, networking, and storytelling in a relaxed
              yet intentional setting—spotlighting unsung heroes and amplifying
              the communities that help them rise.
            </p>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
}
