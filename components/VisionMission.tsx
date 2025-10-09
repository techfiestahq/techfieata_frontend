"use client";

import React from "react";
import ContainerLayout from "@/components/ContainerLayout";

type Props = {
  visionHighlightHref?: string;
};

export default function VisionMission({}: //   visionHighlightHref = "https://en.wikipedia.org/wiki/Ballon_d%27Or",
Props) {
  return (
    <section className="relative w-full overflow-hidden py-12 md:py-16 lg:py-20">
      {/* page background + subtle purple glow */}
      <div className="absolute inset-0 -z-10 bg-white" />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 10% 0%, rgba(168, 85, 247, 0.10) 0%, rgba(168, 85, 247, 0) 60%), radial-gradient(50% 50% at 90% 100%, rgba(99, 102, 241, 0.08) 0%, rgba(99, 102, 241, 0) 60%)",
        }}
      />

      <ContainerLayout>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 px-2">
          {/* Vision Card */}
          <article className="rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(2,6,23,0.06)] ring-1 ring-black/5 md:p-8">
            {/* icon pill */}
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(139,92,246,0.12)] ring-1 ring-[rgba(139,92,246,0.35)]">
              {/* target icon */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                className="text-violet-600"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle cx="12" cy="12" r="1.7" fill="currentColor" />
              </svg>
            </div>

            <h3 className="text-lg font-medium text-slate-900">Our Vision</h3>

            <p className="mt-5 max-w-prose text-[15px] leading-7 text-slate-700">
              To establish TECHFIESTA as the{" "}
              <a
                // href={visionHighlightHref}
                // target="_blank"
                // rel="noreferrer"
                className="font-medium text-violet-600 underline decoration-violet-300 underline-offset-2 hover:text-violet-700"
              >
                &quot;Ballon d&apos;Or&quot;
              </a>{" "}
              of tech impact in Nigeria—where individuals, grassroots
              communities, and organizations are recognized for innovation,
              leadership, and collaboration.
            </p>
          </article>

          {/* Mission Card */}
          <article className="rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(2,6,23,0.06)] ring-1 ring-black/5 md:p-8">
            {/* icon pill */}
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(59,130,246,0.12)] ring-1 ring-[rgba(59,130,246,0.35)]">
              {/* compass icon */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                className="text-blue-600"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M14.8 9.2l-2.7 6.3-2.9-2.9 6.3-2.7z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="text-lg font-medium text-slate-900">Our Mission</h3>

            <p className="mt-5 max-w-prose text-[15px] leading-7 text-slate-700">
              We convene Nigeria&apos;s tech ecosystem for an annual,
              community-curated celebration that:
            </p>

            <ul className="mt-4 space-y-3 text-[15px] leading-7 text-slate-700">
              <li className="pl-5">
                <span className="mr-2 inline-block h-1.5 w-1.5 -translate-x-5 translate-y-[-2px] rounded-full bg-blue-600 align-middle" />
                Honors excellence and real-world impact
              </li>
              <li className="pl-5">
                <span className="mr-2 inline-block h-1.5 w-1.5 -translate-x-5 translate-y-[-2px] rounded-full bg-blue-600 align-middle" />
                Elevates grassroots communities and their stories
              </li>
              <li className="pl-5">
                <span className="mr-2 inline-block h-1.5 w-1.5 -translate-x-5 translate-y-[-2px] rounded-full bg-blue-600 align-middle" />
                Sparks meaningful connections and long-term collaboration
              </li>
            </ul>
          </article>
        </div>
      </ContainerLayout>
    </section>
  );
}
