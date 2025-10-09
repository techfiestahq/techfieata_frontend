"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ContainerLayout from "@/components/ContainerLayout";
import FooterBgImage from "@/public/footer-bg-image.jpg";
import TwitterIcon from "@/public/x.svg";
import InstagramIcon from "@/public/Ig.svg";
import LinkedinIcon from "@/public/Ln.svg";
import logo from "@/public/logo.svg";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={FooterBgImage}
          alt=""
          fill
          priority
          className="object-cover"
        />
        {/* deep indigo wash + vignette to match mock */}
        {/* <div className="absolute inset-0 bg-[#05081A]/80" /> */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(110%_80%_at_50%_10%,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0)_55%)] pointer-events-none" /> */}
      </div>

      {/* Large soft rounded panel glow */}
      {/* <div className="pointer-events-none absolute left-1/2 top-6 h-[78%] w-[92%] -translate-x-1/2 rounded-[40px] bg-[linear-gradient(180deg,rgba(29,34,74,0.35),rgba(29,34,74,0.12))] shadow-[0_30px_120px_rgba(0,0,0,0.45)]" /> */}

      <ContainerLayout>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative flex flex-col items-center gap-8 py-12 md:py-16 lg:flex-row lg:items-center lg:justify-between"
        >
          {/* Left: hashtag (center on mobile, left on lg+) */}
          {/* <motion.h2
            variants={fadeUp}
            className="text-center lg:text-left text-[40px] sm:text-[64px] lg:text-[88px] font-semibold tracking-tight
               bg-gradient-to-r from-[#999999] to-[#FFFFFF] bg-clip-text text-transparent"
          >
            #TechFiesta
          </motion.h2> */}
          {/* Left: Logo */}
          <motion.div
            variants={fadeUp}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative h-10 w-[160px] sm:h-14 sm:w-[200px] lg:h-16 lg:w-[240px]">
              <Image
                src={logo}
                alt="TechFiesta Logo"
                fill
                priority
                className="object-contain brightness-0 invert"
              />
            </div>
          </motion.div>

          {/* Middle: socials — absolute centered ONLY on lg+ */}
          <motion.div
            variants={fadeUp}
            className="
      flex items-center gap-6 sm:gap-8
      lg:absolute lg:left-1/2 lg:-translate-x-1/2
    "
            aria-label="Social links"
          >
            {[
              {
                icon: TwitterIcon,
                href: "https://x.com/TechfiestaHQ",
                label: "Twitter",
              },
              {
                icon: InstagramIcon,
                href: "https://www.instagram.com/techfiestahq/",
                label: "Instagram",
              },
              {
                icon: LinkedinIcon,
                href: "https://www.linkedin.com/company/techfiesta-hq",
                label: "LinkedIn",
              },
            ].map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-14 w-14 items-center justify-center transition"
                aria-label={label}
              >
                <Image
                  src={icon}
                  alt={label}
                  className="h-14 w-14 opacity-90 group-hover:opacity-100"
                />
              </a>
            ))}
          </motion.div>

          {/* Right: copyright (center on mobile, right on lg+) */}
          <motion.div
            variants={fadeUp}
            className="text-center lg:text-right text-xl font-medium text-[#FFFFFFCC]"
          >
            <p>© 2025 Techfiesta.</p>
            <p>All right reserved</p>
          </motion.div>
        </motion.div>
      </ContainerLayout>
    </footer>
  );
}
