"use client";

import React from "react";
import ContainerLayout from "@/components/ContainerLayout";

type FAQ = { q: string; a: string };

const faqs: FAQ[] = [
  {
    q: "When is the event?",
    a: "TECHFIESTA Awards & Dinner Night is an annual event. The specific date for each edition is announced several months in advance. Stay tuned to our official channels for the next edition's announcement.",
  },
  {
    q: "Who can nominate?",
    a: "Verified community managers and recognized groups within Nigeria's tech ecosystem can submit nominations. This includes GDG chapters, developer circles, company-led communities, and other established tech communities.",
  },
  {
    q: "Are self-nominations allowed?",
    a: "Self-nomination policies vary by edition. Please refer to this year's nomination guidelines for specific rules. Generally, we encourage community-led nominations to maintain credibility and peer recognition.",
  },
  {
    q: "How are winners selected?",
    a: "Winners are selected through a transparent, criteria-based process that includes: community nominations, review committee evaluation of impact and contributions, and a judging process that blends committee scoring with community input. Detailed methodology is published for each edition.",
  },
  {
    q: "What makes TECHFIESTA different from other tech events?",
    a: "TECHFIESTA is community-curated, focusing on real impact over hype. We recognize not just technical achievements but also mentorship, community building, and grassroots contributions. Plus, we publish success stories to document and celebrate impact beyond the event night.",
  },
  {
    q: "How can my company become a sponsor?",
    a: "Companies can partner with us by contacting our sponsorship team. We offer various sponsorship tiers that provide brand visibility, access to top talent, and networking opportunities with ecosystem leaders. Request our sponsorship deck for detailed information.",
  },
  {
    q: "Can I attend if I'm not nominated?",
    a: "Absolutely! TECHFIESTA is designed for the entire ecosystem—founders, developers, designers, students, and tech enthusiasts. Tickets are available for purchase, and we encourage everyone who wants to celebrate and network to attend.",
  },
  {
    q: "What should I expect at the event?",
    a: "Expect an elegant dinner, awards ceremony recognizing exceptional individuals and organizations, storytelling moments with short films and testimonials, panel discussions with ecosystem leaders, extensive networking opportunities, and media coverage of the evening's highlights.",
  },
];

export default function FAQSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-20 lg:py-28 text-white">
      {/* Dark backdrop */}
      <div className="absolute inset-0 -z-10 bg-[#0B1220]" />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(70% 60% at 50% 0%, rgba(148,163,184,0.08) 0%, rgba(148,163,184,0) 60%)",
        }}
      />

      <ContainerLayout>
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <span className="mx-auto inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 ring-1 ring-white/15">
            FAQs
          </span>
          <h2 className="mt-5 text-2xl md:text-3xl font-semibold text-white">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm md:text-base text-white/70">
            Everything you need to know about TECHFIESTA Awards &amp; Dinner
            Night
          </p>
        </div>

        {/* Accordions */}
        <div className="mx-auto max-w-4xl space-y-3">
          {faqs.map((item, idx) => (
            <AccordionItem key={idx} {...item} />
          ))}
        </div>
      </ContainerLayout>
    </section>
  );
}

/* ---------------- Accordion Item ---------------- */

function AccordionItem({ q, a }: FAQ) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="rounded-xl bg-white/5 ring-1 ring-white/10 shadow-[0_6px_20px_rgba(0,0,0,0.35)]">
      <button
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="text-sm md:text-base font-medium text-white/90">
          {q}
        </span>
        <Chevron
          className={`h-5 w-5 shrink-0 text-white/60 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-6 text-white/70 md:px-6 md:pb-6">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Icons ---------------- */

function Chevron({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
