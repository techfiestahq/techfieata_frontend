"use client";

import React from "react";
import Image from "next/image";
import ContainerLayout from "@/components/ContainerLayout";
import FooterBgImage from "@/public/footer-bg-image.jpg";

export default function WhoWeServe() {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-20 lg:py-28 text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={FooterBgImage}
          alt="TechFiesta dark background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#020617]/90 backdrop-blur-[2px]" />
      </div>

      <ContainerLayout>
        {/* Header */}
        <div className="text-center mb-14">
          <div className="mx-auto inline-flex items-center rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white/90 ring-1 ring-white/30">
            Who We Serve
          </div>

          <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-white">
            For Everyone Building Nigeria&apos;s Tech Future
          </h2>

          <p className="mt-3 text-sm md:text-base text-white/70">
            TECHFIESTA brings together the entire ecosystem under one roof
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ServeCard
            title="Developers & Engineers"
            desc="Mobile, backend, frontend, AI/ML, and emerging tech builders"
            icon={<CodeIcon />}
            color="from-[#A855F7] to-[#7E22CE]"
          />
          <ServeCard
            title="Product Managers & Designers"
            desc="Crafting impactful user experiences"
            icon={<DesignIcon />}
            color="from-[#3B82F6] to-[#1D4ED8]"
          />
          <ServeCard
            title="Startup Founders"
            desc="Entrepreneurs solving local and global problems"
            icon={<RocketIcon />}
            color="from-[#8B5CF6] to-[#7C3AED]"
          />
          <ServeCard
            title="Community Leaders"
            desc="Ambassadors growing grassroots impact"
            icon={<UsersIcon />}
            color="from-[#EC4899] to-[#DB2777]"
          />
          <ServeCard
            title="Corporate Partners"
            desc="Companies, accelerators, investors, and ecosystem enablers"
            icon={<BuildingIcon />}
            color="from-[#06B6D4] to-[#0284C7]"
          />
          <ServeCard
            title="Tech Enthusiasts & Students"
            desc="The next generation of builders"
            icon={<GraduationIcon />}
            color="from-[#A855F7] to-[#9333EA]"
          />
        </div>
      </ContainerLayout>
    </section>
  );
}

/* ---------- Card Component ---------- */
function ServeCard({
  title,
  desc,
  icon,
  color,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
}) {
  return (
    <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-sm transition-transform hover:translate-y-[-4px] md:p-8">
      <div
        className={`mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${color} text-white`}
      >
        {icon}
      </div>
      <h3 className="text-base md:text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm text-white/70 leading-relaxed">{desc}</p>
    </div>
  );
}

/* ---------- Inline Icons ---------- */
function CodeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <path d="M8 6L3 12l5 6M16 6l5 6-5 6" />
    </svg>
  );
}

function DesignIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <circle cx="8" cy="8" r="2.5" />
      <path d="M6 12l12-2 1.5 8.5L8 20z" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <path d="M5 15c-2 0-2 2-2 2s0 2 2 2h2l2-4H5zM19 9l-4 2-4 8 8-4 2-4zM15 5c0-2-2-2-2-2s-2 0-2 2v2l4 2V5z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <circle cx="8" cy="8" r="3" />
      <circle cx="17" cy="8" r="3" />
      <path d="M2 20c0-3.5 3-6 6-6h0c3 0 6 2.5 6 6M10 20c0-3.5 3-6 6-6h0c3 0 6 2.5 6 6" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 8h1v1H9zM14 8h1v1h-1zM9 13h1v1H9zM14 13h1v1h-1zM12 20v-6" />
    </svg>
  );
}

function GraduationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <path d="M3 9l9-4 9 4-9 4-9-4z" />
      <path d="M21 9v6l-9 4-9-4V9" />
      <path d="M3 15l9 4 9-4" />
    </svg>
  );
}
