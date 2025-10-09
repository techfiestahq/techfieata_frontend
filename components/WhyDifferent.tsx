"use client";
import React from "react";
import ContainerLayout from "@/components/ContainerLayout";

export default function WhyDifferent() {
  return (
    <section className="relative w-full overflow-hidden py-14 md:py-18 lg:py-24">
      {/* subtle page glow */}
      <div className="absolute inset-0 -z-10 bg-white" />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 10% 0%, rgba(168,85,247,.10) 0%, rgba(168,85,247,0) 60%), radial-gradient(50% 50% at 90% 100%, rgba(59,130,246,.08) 0%, rgba(59,130,246,0) 60%)",
        }}
      />

      <ContainerLayout>
        {/* Heading zone */}
        <div className="text-center">
          <div className="mx-auto inline-flex items-center rounded-full bg-[#EBD7FF] px-4 py-1.5 text-sm font-medium text-[#6B21A8]">
            Why We&apos;re Different
          </div>

          <h2 className="mt-4 text-xl font-semibold text-slate-900 md:text-2xl">
            More Than Just Another Awards Event
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-sm text-slate-600 md:text-base">
            We&apos;re building something unique—where community trust meets
            genuine impact recognition
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-2 lg:grid-cols-4 px-2">
          <FeatureCard
            color="violet"
            title="Community-Curated Nominations"
            desc="Verified community managers submit nominees, ensuring credibility and peer recognition."
            icon={TargetIcon}
          />
          <FeatureCard
            color="blue"
            title="Impact Over Hype"
            desc="Beyond technical feats, we celebrate mentorship, community building, rising talent, and products changing lives."
            icon={TrendUpIcon}
          />
          <FeatureCard
            color="indigo"
            title="Cross-Community Bridges"
            desc="A shared space that deepens bonds across networks and disciplines."
            icon={NodesIcon}
          />
          <FeatureCard
            color="rose"
            title="Warm, Intentional Atmosphere"
            desc="Less formal than conferences, more meaningful than casual meetups—designed for real conversations and lasting connections."
            icon={HeartIcon}
          />
        </div>

        {/* Bottom banner */}
        <div className="mt-8 md:mt-12">
          <div className="mx-auto max-w-5xl rounded-2xl border border-violet-200/70 bg-gradient-to-b from-violet-50 to-indigo-50 px-5 py-4 text-center shadow-[0_10px_30px_rgba(2,6,23,0.06)] md:px-8 md:py-6">
            <p className="text-sm text-slate-800 md:text-base">
              <span className="font-semibold">Published Success Stories</span> –
              We document and publish community impact alongside awardees,
              ensuring lasting recognition beyond the event night.
            </p>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
}

/* ---------- Card ---------- */

type CardProps = {
  color: "violet" | "blue" | "indigo" | "rose";
  title: string;
  desc: string;
  icon: React.FC<{ className?: string }>;
};

function FeatureCard({ color, title, desc, icon: Icon }: CardProps) {
  const pillBg: Record<CardProps["color"], string> = {
    violet:
      "bg-[rgba(139,92,246,0.12)] ring-[rgba(139,92,246,0.35)] text-violet-600",
    blue: "bg-[rgba(59,130,246,0.12)] ring-[rgba(59,130,246,0.35)] text-blue-600",
    indigo:
      "bg-[rgba(79,70,229,0.12)] ring-[rgba(79,70,229,0.35)] text-indigo-600",
    rose: "bg-[rgba(244,63,94,0.12)] ring-[rgba(244,63,94,0.35)] text-rose-600",
  };

  const ring: Record<CardProps["color"], string> = {
    violet: "ring-violet-200",
    blue: "ring-blue-200",
    indigo: "ring-indigo-200",
    rose: "ring-rose-200",
  };

  return (
    <article
      className={`rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(2,6,23,0.06)] ring-1 ${ring[color]} md:p-7`}
    >
      <div
        className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ring-1 ${pillBg[color]}`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-base font-semibold text-slate-900 md:text-lg">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-600 md:text-[15px]">
        {desc}
      </p>
    </article>
  );
}

/* ---------- Inline Icons (simple, lightweight) ---------- */

function TargetIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TrendUpIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M4 16l6-6 4 4 6-6" />
      <path d="M14 8h6v6" />
    </svg>
  );
}

function NodesIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <path d="M8 7.5l4 8 4-8M8.5 6h7" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M12 20s-7-4.2-7-9a4 4 0 017-2.6A4 4 0 0119 11c0 4.8-7 9-7 9z" />
    </svg>
  );
}
