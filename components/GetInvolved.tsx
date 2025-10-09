"use client";

import React from "react";
import ContainerLayout from "@/components/ContainerLayout";

export default function GetInvolved() {
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
            Get Involved
          </div>

          <h2 className="mt-4 text-base font-semibold text-slate-900 md:text-lg">
            Be Part of Something Bigger
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-sm text-slate-600 md:text-base">
            Multiple ways to contribute to and participate in TECHFIESTA Awards
            &amp; Dinner Night
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-2 lg:grid-cols-4">
          <ActionCard
            color="from-[#F59E0B] to-[#F97316]"
            icon={NominateIcon}
            title="Nominate"
            desc="Put forward outstanding people, products, and communities making real impact"
            cta="Submit Nomination"
            href="/nominate"
          />
          <ActionCard
            color="from-[#D946EF] to-[#A855F7]"
            icon={SponsorIcon}
            title="Sponsor"
            desc="Power the platform that powers the ecosystem and connect with key stakeholders"
            cta="View Opportunities"
            href="/sponsor"
          />
          <ActionCard
            color="from-[#3B82F6] to-[#06B6D4]"
            icon={VolunteerIcon}
            title="Volunteer"
            desc="Join the team that brings the night to life and shape the experience"
            cta="Join the Team"
            href="/volunteer"
          />
          <ActionCard
            color="from-[#22C55E] to-[#16A34A]"
            icon={TicketIcon}
            title="Attend"
            desc="Secure your seat at Nigeria's most anticipated tech celebration"
            cta="Get Tickets"
            href="/tickets"
          />
        </div>
      </ContainerLayout>
    </section>
  );
}

/* --------- Card --------- */
function ActionCard({
  color,
  icon: Icon,
  title,
  desc,
  cta,
  href,
}: {
  color: string;
  icon: React.FC<{ className?: string }>;
  title: string;
  desc: string;
  cta: string;
  href: string;
}) {
  return (
    <article className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-[0_12px_30px_rgba(2,6,23,0.06)] ring-1 ring-black/5 md:p-8">
      <div
        className={`mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${color} text-white`}
      >
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="text-base font-semibold text-slate-900 md:text-lg">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 md:text-[15px]">
        {desc}
      </p>

      <div className="mt-6">
        <a
          href={href}
          className="inline-flex w-full items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
        >
          {cta}
        </a>
      </div>
    </article>
  );
}

/* --------- Inline Icons --------- */
function NominateIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M6 12l4 4 8-8" />
      <path d="M12 6l-2-2H6L4 6v4l2 2" />
    </svg>
  );
}

function SponsorIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M12 3v18" />
      <path d="M7 8h10a3 3 0 010 6H7a3 3 0 010-6z" />
    </svg>
  );
}

function VolunteerIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M6 12l3 3 9-9" />
      <path d="M6 20h12" />
    </svg>
  );
}

function TicketIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="4" y="6" width="16" height="12" rx="2" />
      <path d="M8 10h8M8 14h8" />
    </svg>
  );
}
