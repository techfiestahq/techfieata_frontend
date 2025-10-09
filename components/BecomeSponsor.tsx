"use client";

import React from "react";
import Image from "next/image";
import ContainerLayout from "@/components/ContainerLayout";
import Image6 from "@/public/image-6.png";

export default function BecomeSponsors() {
  return (
    <section
      id="sponsors-cta"
      className="relative w-full overflow-hidden py-12 md:py-20 lg:py-24"
    >
      {/* Soft white + purple glow background */}
      <div className="absolute inset-0 -z-10 bg-white" />
      <div
        className="absolute inset-0 -z-10 opacity-90"
        style={{
          background:
            "radial-gradient(60% 60% at 15% 10%, rgba(138, 92, 246, 0.18) 0%, rgba(138, 92, 246, 0) 60%), radial-gradient(55% 55% at 85% 90%, rgba(217, 70, 239, 0.10) 0%, rgba(217, 70, 239, 0) 60%)",
        }}
      />

      <ContainerLayout>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-16">
          {/* Left: Copy */}
          <div className="text-left">
            <h2 className="text-[28px] leading-[1.15] font-semibold text-[#000000] sm:text-4xl md:text-7xl">
              <span className="block">Become a</span>
              <span className="block">TechFiesta Sponsor</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm text-[#000000] sm:text-xl">
              Join us in celebrating Nigeria’s tech excellence while connecting
              your brand with innovators, builders, and leaders.
            </p>

            <div className="mt-6">
              <a
                href="#sponsor"
                className="bg-[#4A21BD] inline-flex items-center justify-center rounded-full px-5 py-4 text-sm md:text-xl font-medium text-[#FFFFFF] shadow-[0_10px_30px_rgba(76,29,149,0.25)] transition-transform hover:translate-y-[-1px] focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                Become our Sponsor
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] shadow-xl ring-1 ring-black/10">
              <Image
                src={Image6}
                alt="Audience at TechFiesta"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
}
