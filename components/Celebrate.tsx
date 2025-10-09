"use client";

import React from "react";
import ContainerLayout from "@/components/ContainerLayout";

type Category = {
  title: string;
  desc: string;
  color: "orange" | "fuchsia" | "blue" | "green" | "violet";
  icon: React.FC<{ className?: string }>;
};

const CATEGORIES: Category[] = [
  {
    title: "Community Impact & Leadership",
    desc: "Recognizing those who build, nurture, and grow tech communities across Nigeria",
    color: "orange",
    icon: TrophyIcon,
  },
  {
    title: "Product Innovation & Breakthroughs",
    desc: "Celebrating products and solutions that are making real-world impact",
    color: "fuchsia",
    icon: BulbIcon,
  },
  {
    title: "Technical Excellence & Mentorship",
    desc: "Honoring engineers who push boundaries and lift others up",
    color: "blue",
    icon: CodeIcon,
  },
  {
    title: "Rising Talent & Future Leaders",
    desc: "Spotlighting the next generation of innovators and changemakers",
    color: "green",
    icon: TrendIcon,
  },
  {
    title: "Corporate Contribution to Ecosystem Growth",
    desc: "Recognizing companies that invest in and enable the ecosystem",
    color: "violet",
    icon: BuildingIcon,
  },
];

export default function Celebrate() {
  return (
    <section className="relative w-full overflow-hidden py-14 md:py-18 lg:py-24">
      {/* soft page glow */}
      <div className="absolute inset-0 -z-10 bg-white" />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 15% 0%, rgba(168,85,247,0.10) 0%, rgba(168,85,247,0) 60%), radial-gradient(50% 50% at 85% 100%, rgba(59,130,246,0.08) 0%, rgba(59,130,246,0) 60%)",
        }}
      />

      <ContainerLayout>
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto inline-flex items-center rounded-full bg-[#EBD7FF] px-4 py-1.5 text-sm font-medium text-[#6B21A8]">
            Award Categories
          </div>

          <h2 className="mt-4 text-base font-semibold text-slate-900 md:text-lg">
            Celebrating Excellence Across the Ecosystem
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-sm text-slate-600 md:text-base">
            Multiple categories to honor different forms of impact and
            contribution
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-2 lg:grid-cols-3 px-2">
          {CATEGORIES.map((c, i) => (
            <CategoryCard key={i} {...c} />
          ))}

          {/* Coming Soon card */}
          <div className="rounded-2xl border-2 border-dashed border-violet-300/70 bg-violet-50/50 p-6 text-center md:p-8">
            <span className="mx-auto inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-900 ring-1 ring-slate-200">
              Coming Soon
            </span>
            <p className="mx-auto mt-3 max-w-[34ch] text-sm text-slate-700">
              Additional categories will be announced for this year&apos;s
              edition
            </p>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
}

/* ---------------- Card ---------------- */

function CategoryCard({ title, desc, color, icon: Icon }: Category) {
  const pillMap: Record<Category["color"], string> = {
    orange: "from-[#F59E0B] to-[#F97316]",
    fuchsia: "from-[#D946EF] to-[#A855F7]",
    blue: "from-[#3B82F6] to-[#2563EB]",
    green: "from-[#22C55E] to-[#16A34A]",
    violet: "from-[#8B5CF6] to-[#7C3AED]",
  };

  return (
    <article className="rounded-2xl bg-white p-6 shadow-[0_12px_30px_rgba(2,6,23,0.06)] ring-1 ring-black/5 md:p-8">
      <div
        className={`mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${pillMap[color]} text-white`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-base font-semibold text-slate-900 md:text-lg">
        {title}
      </h3>
      <p className="mt-3 max-w-prose text-sm leading-6 text-slate-600 md:text-[15px]">
        {desc}
      </p>
    </article>
  );
}

/* --------------- Icons (inline, lightweight) --------------- */

function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M7 4h10v2a5 5 0 01-10 0V4z" />
      <path d="M5 6h2a5 5 0 01-5 5V8a2 2 0 012-2zm12 0h2a2 2 0 012 2v3a5 5 0 01-5-5z" />
      <path d="M12 11v4M9 19h6" />
    </svg>
  );
}

function BulbIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M9 18h6M10 21h4" />
      <path d="M8 10a4 4 0 018 0c0 2-2 3-2 5h-4c0-2-2-3-2-5z" />
    </svg>
  );
}

function CodeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M8 6L3 12l5 6M16 6l5 6-5 6" />
    </svg>
  );
}

function TrendIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M3 17l6-6 4 4 8-8" />
    </svg>
  );
}

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M9 7h1v1H9zM14 7h1v1h-1zM9 12h1v1H9zM14 12h1v1h-1zM12 21v-6" />
    </svg>
  );
}
