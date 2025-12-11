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
import NicklesLogo from "@/public/Nickels Vc greyscale.svg";

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
      </div>

      <ContainerLayout>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative flex flex-col items-center gap-8 py-12 md:py-16 lg:flex-row lg:items-center lg:justify-between"
        >
          <motion.div
            variants={fadeUp}
            className="flex justify-center lg:justify-start"
          >
            <div className="w-[360px] flex items-center gap-1">
              <button
                aria-label="Home"
                className="relative h-10 w-[180px] shrink-0 lg:h-12 lg:w-[110px]"
              >
                <Image
                  src={logo}
                  alt="Techfiesta"
                  fill
                  priority
                  className="object-contain brightness-0 invert"
                />
              </button>

              <span className="text-gray-500 text-xl font-light">×</span>

              <button
                aria-label="Partner"
                className="relative h-10 w-[180px] shrink-0 lg:h-12 lg:w-[210px]"
              >
                <Image
                  src={NicklesLogo}
                  alt="Partner Logo"
                  fill
                  priority
                  className="object-contain invert"
                />
              </button>
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
