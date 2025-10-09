"use client";

import React from "react";
import Image from "next/image";
import ContainerLayout from "@/components/ContainerLayout";
import DinnerPhoto from "@/public/image-6.png"; // swap to your real image

export default function TheExperience() {
  return (
    <section className="relative w-full overflow-hidden py-14 md:py-18 lg:py-24">
      {/* subtle page glow */}
      <div className="absolute inset-0 -z-10 bg-white" />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 12% 0%, rgba(168,85,247,.10) 0%, rgba(168,85,247,0) 60%), radial-gradient(50% 50% at 88% 100%, rgba(99,102,241,.08) 0%, rgba(99,102,241,0) 60%)",
        }}
      />

      <ContainerLayout>
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 lg:gap-16">
          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center rounded-full bg-[#EBD7FF] px-4 py-1.5 text-sm font-medium text-[#6B21A8]">
              The Experience
            </div>

            <h3 className="mt-5 text-lg font-semibold text-slate-900">
              What to Expect on the Night
            </h3>

            <p className="mt-3 max-w-[60ch] text-sm text-slate-600 md:text-base">
              An unforgettable evening that combines celebration, connection,
              and inspiration
            </p>

            <div className="mt-8 space-y-6">
              <Item
                icon={<UtensilsIcon className="h-5 w-5" />}
                title="Elegant Dinner & Networking"
                desc="A relaxed, high-energy evening for meaningful conversations"
              />
              <Item
                icon={<MedalIcon className="h-5 w-5" />}
                title="Awards Ceremony"
                desc="Spotlighting impact across individuals, products, communities, and companies"
              />
              <Item
                icon={<FilmIcon className="h-5 w-5" />}
                title="Storytelling Moments"
                desc="Short films and testimonials that document community journeys"
              />
              <Item
                icon={<MicIcon className="h-5 w-5" />}
                title="Panel & Lightning Sessions"
                desc="Curated insights from ecosystem leaders"
              />
              <Item
                icon={<CameraIcon className="h-5 w-5" />}
                title="Media & Photo Moments"
                desc="Capture and share the night's highlights"
              />
            </div>
          </div>

          {/* Right: image with overlay + stat card */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-[0_30px_80px_rgba(2,6,23,0.18)] ring-1 ring-black/10">
              <div className="relative aspect-[16/9] md:aspect-[4/3]">
                <Image
                  src={DinnerPhoto}
                  alt="TechFiesta dinner setting"
                  fill
                  className="object-cover"
                  priority
                />
                {/* bottom purple overlay for depth */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#4C1D95]/60 via-[#4C1D95]/30 to-transparent" />
              </div>
            </div>

            {/* floating badge */}
            <div className="absolute -bottom-6 left-6">
              <div className="rounded-xl bg-white px-5 py-4 text-slate-800 shadow-[0_20px_60px_rgba(2,6,23,0.18)] ring-1 ring-slate-200">
                <p className="text-xs font-medium text-slate-600">
                  Expected Attendance
                </p>
                <p className="mt-1 text-2xl font-semibold text-violet-700">
                  500+
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
}

/* ---------- Row item ---------- */
function Item({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#A855F7] to-[#7C3AED] text-white">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-semibold text-slate-900 md:text-base">
          {title}
        </h4>
        <p className="mt-1 max-w-[55ch] text-sm leading-6 text-slate-600 md:text-[15px]">
          {desc}
        </p>
      </div>
    </div>
  );
}

/* ---------- Inline icons ---------- */
function UtensilsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        d="M8 3v8M5 3v8M11 3v8M8 11v10M19 3l-5 5v13"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MedalIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M8.5 12L7 21l5-3 5 3-1.5-9" />
    </svg>
  );
}

function FilmIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M7 5v14M17 5v14M3 9h4M17 9h4M3 15h4M17 15h4" />
    </svg>
  );
}

function MicIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="9" y="2" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0014 0M12 18v4" />
    </svg>
  );
}

function CameraIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M4 8h3l2-3h6l2 3h3v12H4z" />
      <circle cx="12" cy="14" r="4" />
    </svg>
  );
}
