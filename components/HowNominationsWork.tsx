"use client";

import React from "react";
import ContainerLayout from "@/components/ContainerLayout";

export default function HowNominationsWork() {
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
        {/* Heading area */}
        <div className="text-center">
          <div className="mx-auto inline-flex items-center rounded-full bg-[#EBD7FF] px-4 py-1.5 text-sm font-medium text-[#6B21A8]">
            How Nominations Work
          </div>

          <h2 className="mt-4 text-base font-semibold text-slate-900 md:text-lg">
            A Transparent, Community–Driven Process
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-sm text-slate-600 md:text-base">
            Every nomination goes through a rigorous yet fair evaluation process
          </p>
        </div>

        {/* Steps */}
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-8 md:mt-12 md:grid-cols-2">
          <StepItem
            index={1}
            title="Community–Led"
            description="Verified community managers submit nominees"
            icon={CheckIcon}
          />
          <StepItem
            index={2}
            title="Review & Shortlist"
            description="A review committee evaluates impact, credibility, and contributions"
            icon={ClipboardIcon}
          />
          <StepItem
            index={3}
            title="Final Selection"
            description="Judging blends committee scoring and community inputs"
            icon={MedalIcon}
          />
          <StepItem
            index={4}
            title="Storytelling"
            description="Awardees and nominating communities have their impact stories officially published"
            icon={BookIcon}
          />
        </div>
      </ContainerLayout>
    </section>
  );
}

/* ---------------------- Step Item ---------------------- */

function StepItem({
  index,
  title,
  description,
  icon: Icon,
}: {
  index: number;
  title: string;
  description: string;
  icon: React.FC<{ className?: string }>;
}) {
  return (
    <div className="flex items-start gap-4">
      {/* Icon pill with number badge */}
      <div className="relative shrink-0">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#A855F7] to-[#6366F1] text-white shadow-md">
          <Icon className="h-6 w-6" />
        </div>
        <span className="absolute -right-1 -top-1 inline-flex h-7 min-w-7 items-center justify-center rounded-full border border-violet-500 bg-white px-2 text-xs font-semibold text-violet-700 shadow-sm">
          {String(index).padStart(2, "0")}
        </span>
      </div>

      {/* Copy */}
      <div>
        <h3 className="text-sm font-semibold text-slate-900 md:text-base">
          {title}
        </h3>
        <p className="mt-1 max-w-[48ch] text-sm leading-6 text-slate-600 md:text-[15px]">
          {description}
        </p>
      </div>
    </div>
  );
}

/* ---------------------- Inline Icons ---------------------- */

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function ClipboardIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="6" y="5" width="12" height="16" rx="2" />
      <path d="M9 5V3h6v2M8 9h8M8 13h8" />
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
      strokeWidth="2"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M8.5 12L7 21l5-3 5 3-1.5-9" />
    </svg>
  );
}

function BookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M3 6a2 2 0 012-2h7v16H5a2 2 0 01-2-2V6zM12 4h7a2 2 0 012 2v12a2 2 0 01-2 2h-7" />
    </svg>
  );
}
