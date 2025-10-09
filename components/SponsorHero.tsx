"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import SponsorHeroBgImage from "@/public/sponsor-hero-bg-image.png";
import DevfestLogo from "@/public/devfest-logo.svg";
// import GDGLogo from "@/public/gdg-logo.svg";
import StarIcon from "@/public/star_shine.svg";

type Sponsor = { src: StaticImageData | string; alt: string };

type SponsorsByTier = {
  platinum: Sponsor[];
  gold: Sponsor[];
  silver: Sponsor[];
};

const variants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.12 },
    },
  },
  fadeUp: {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  },
};

// --- sample placeholder sponsors (replace with real data) ---
const defaults: SponsorsByTier = {
  platinum: [
    // { src: GDGLogo, alt: "GDG Ogbomoso" },
    { src: DevfestLogo, alt: "DevFest Ogbomoso" },
    // { src: GDGLogo, alt: "GDG Ogbomoso" },
    { src: DevfestLogo, alt: "DevFest Ogbomoso" },
    // { src: GDGLogo, alt: "GDG Ogbomoso" },
    { src: DevfestLogo, alt: "DevFest Ogbomoso" },
    { src: DevfestLogo, alt: "DevFest Ogbomoso" },
    { src: DevfestLogo, alt: "DevFest Ogbomoso" },
    { src: DevfestLogo, alt: "DevFest Ogbomoso" },
    { src: DevfestLogo, alt: "DevFest Ogbomoso" },
    { src: DevfestLogo, alt: "DevFest Ogbomoso" },
    { src: DevfestLogo, alt: "DevFest Ogbomoso" },
    { src: DevfestLogo, alt: "DevFest Ogbomoso" },
  ],
  gold: [
    // { src: GDGLogo, alt: "GDG Ogbomoso" },
    { src: DevfestLogo, alt: "DevFest Ogbomoso" },
    // { src: GDGLogo, alt: "GDG Ogbomoso" },
    { src: DevfestLogo, alt: "DevFest Ogbomoso" },
    // { src: GDGLogo, alt: "GDG Ogbomoso" },
    { src: DevfestLogo, alt: "DevFest Ogbomoso" },
    { src: DevfestLogo, alt: "DevFest Ogbomoso" },
    { src: DevfestLogo, alt: "DevFest Ogbomoso" },
    { src: DevfestLogo, alt: "DevFest Ogbomoso" },
    { src: DevfestLogo, alt: "DevFest Ogbomoso" },
    { src: DevfestLogo, alt: "DevFest Ogbomoso" },
    { src: DevfestLogo, alt: "DevFest Ogbomoso" },
    { src: DevfestLogo, alt: "DevFest Ogbomoso" },
  ],
  silver: [
    // { src: GDGLogo, alt: "GDG Ogbomoso" },
    { src: DevfestLogo, alt: "DevFest Ogbomoso" },
    // { src: GDGLogo, alt: "GDG Ogbomoso" },
    { src: DevfestLogo, alt: "DevFest Ogbomoso" },
    // { src: GDGLogo, alt: "GDG Ogbomoso" },
    { src: DevfestLogo, alt: "DevFest Ogbomoso" },
    { src: DevfestLogo, alt: "DevFest Ogbomoso" },
    { src: DevfestLogo, alt: "DevFest Ogbomoso" },
  ],
};

// --- Tier marquee with infinite scroll ---
function TierMarquee({
  label,
  speed = 28,
  segmentLength = 8,
}: {
  label: string;
  speed?: number;
  segmentLength?: number;
}) {
  const segment = Array.from({ length: segmentLength });

  return (
    <div className="relative w-full overflow-hidden py-4">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40" />
      <div
        className="flex w-[200%]"
        style={{ animation: `tf-marquee-left ${speed}s linear infinite` }}
      >
        {/* first copy */}
        <div className="flex items-center justify-between gap-4 pr-4">
          {segment.map((_, i) => (
            <div key={`seg1-${i}`} className="flex items-center gap-4">
              <span className="whitespace-nowrap rounded-full border border-white/20 px-5 py-2 text-sm text-white/90">
                {label}
              </span>
              <Image
                src={StarIcon}
                alt=""
                width={22}
                height={22}
                className="opacity-80 mr-5"
                aria-hidden
              />
            </div>
          ))}
        </div>

        {/* second copy */}
        <div
          className="flex items-center justify-between gap-4 pr-4"
          aria-hidden
        >
          {segment.map((_, i) => (
            <div key={`seg2-${i}`} className="flex items-center gap-4">
              <span className="whitespace-nowrap rounded-full border border-white/20 px-5 py-2 text-sm text-white/90">
                {label}
              </span>
              <Image
                src={StarIcon}
                alt=""
                width={22}
                height={22}
                className="opacity-80 mr-5"
                aria-hidden
              />
            </div>
          ))}
        </div>
      </div>

      {/* keyframes */}
      <style jsx global>{`
        @keyframes tf-marquee-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

// --- Sponsor logos grid ---
function LogoGrid({ items }: { items: Sponsor[] }) {
  return (
    <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-x-8 gap-y-10 justify-items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {items.map((s, i) => (
        <div
          key={`${s.alt}-${i}`}
          className="group flex items-center justify-center"
          title={s.alt}
          aria-label={s.alt}
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/95 p-3 shadow-lg transition-transform md:h-24 md:w-24 group-hover:scale-105">
            {"src" in (s as any) && (s as any).src ? (
              <Image
                src={s.src as StaticImageData}
                alt={s.alt}
                width={72}
                height={72}
                className="object-contain"
              />
            ) : (
              <Image
                src={s.src as string}
                alt={s.alt}
                className="h-12 w-auto object-contain"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function SponsorsSection({
  sponsors = defaults,
}: {
  sponsors?: SponsorsByTier;
}) {
  return (
    <section
      id="sponsors"
      className="relative w-full overflow-hidden text-center lg:py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={SponsorHeroBgImage}
          alt="sponsors background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <motion.div
        variants={variants.container}
        initial="hidden"
        animate="visible"
        className="mx-auto w-full px-4 sm:px-6 mt-[101px]"
      >
        {/* Heading */}
        <motion.h2
          variants={variants.fadeUp}
          className="mb-6 text-3xl font-semibold text-white md:text-6xl"
        >
          Our Proud Sponsors
        </motion.h2>

        <motion.p
          variants={variants.fadeUp}
          className="mx-auto mb-10 max-w-2xl text-base text-white/80 md:mb-16 md:text-lg"
        >
          We’re grateful to the organizations powering this year’s TechFiesta.
        </motion.p>

        {/* Platinum Tier */}
        <motion.div variants={variants.fadeUp}>
          <TierMarquee
            label="Platinum Sponsors"
            speed={26}
            segmentLength={7.5}
          />
          <div className="mt-6 md:mt-10">
            <LogoGrid items={sponsors.platinum} />
          </div>
        </motion.div>

        {/* Gold Tier */}
        <motion.div variants={variants.fadeDown} className="mt-14 md:mt-20">
          <TierMarquee label="Gold Sponsors" speed={28} segmentLength={8} />
          <div className="mt-6 md:mt-10">
            <LogoGrid items={sponsors.gold} />
          </div>
        </motion.div>

        {/* Silver Tier */}
        <motion.div
          variants={variants.fadeDown}
          className="mt-14 md:mt-20 mb-12 lg:mb-0"
        >
          <TierMarquee label="Silver Sponsors" speed={30} segmentLength={8} />
          <div className="mt-6 md:mt-10">
            <LogoGrid items={sponsors.silver} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
