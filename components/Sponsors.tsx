"use client";
import React from "react";
import Image from "next/image";
import ContainerLayout from "@/components/ContainerLayout";
import SponsorBgImage from "@/public/sponsor-bg-image.jpg";
// import DevfestLogo from "@/public/devfest-logo.svg";
import GDGLogo from "@/public/gdg-logo.svg";
import Asset3logo from "@/public/asset-3logo.webp";
import BkHeader from "@/public/bkheader-01.webp";
import KtcSticker from "@/public/ktc-sticker-black.webp";
import GdgLautech from "@/public/gdg-lautech.webp";
import GdgIlorin from "@/public/gdg-ilorin.webp";
import Acoms from "@/public/ACOMS.jpg";
import Danjaypegs from "@/public/DANDYJPEGs.png";
import eclat from "@/public/eclas.jpeg";
import Blockchain from "@/public/blockchain.jpg";
import GDGIlorin from "@/public/gdg-ilorin.jpeg";
import NicklesLogo from "@/public/Nickels Vc greyscale.svg";
import ProvoloLogo from "@/public/provolo.png";
import OvicoLogo from "@/public/ovico.jpeg";
import NextLabLogo from "@/public/nextlab.jpeg";
import CapverseLogo from "@/public/capverse.jpeg";

const sponsors = [
  { src: NicklesLogo, alt: "GDG Ogbomoso" },
  { src: ProvoloLogo, alt: "gdg lautech" },
  { src: OvicoLogo, alt: "Gdg Ilorin" },
  { src: NextLabLogo, alt: "DevFest Ogbomoso" },
  { src: CapverseLogo, alt: "DevFest Ogbomoso" },
];

const partners = [
  { src: GDGLogo, alt: "GDG Ogbomoso" },
  { src: GdgLautech, alt: "gdg lautech" },
  { src: GdgIlorin, alt: "Gdg Ilorin" },
  { src: Asset3logo, alt: "DevFest Ogbomoso" },
  { src: BkHeader, alt: "DevFest Ogbomoso" },
  { src: KtcSticker, alt: "DevFest Ogbomoso" },
  { src: Acoms, alt: "DevFest Ogbomoso" },
  { src: eclat, alt: "DevFest Ogbomoso" },
  { src: Blockchain, alt: "DevFest Ogbomoso" },
  { src: GDGIlorin, alt: "DevFest Ogbomoso" },
  { src: Danjaypegs, alt: "DevFest Ogbomoso" },
];

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="relative w-full overflow-hidden text-center lg:py-20"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={SponsorBgImage}
          alt="Sponsors background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
      </div>

      <ContainerLayout>
        {/* Label */}
        <div className="mx-auto mb-8 w-fit rounded-full bg-white/50 px-4 py-2 ring-1 ring-[#515151A6] text-[#000000] text-sm md:text-xl font-medium backdrop-blur-sm">
          Powered by our sponsors.
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-[42px] font-semibold text-[#000000] mb-12">
          Sponsors
        </h2>

        <div className="mx-auto grid max-w-5xl grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-10 gap-y-10 items-center justify-items-center">
          {sponsors.map((s, idx) => (
            <div key={idx} className="flex items-center justify-center">
              <Image
                src={s.src}
                alt={s.alt}
                className={`h-16 w-auto md:h-20 object-contain ${
                  s.alt === "gdg lautech" ? "!h-28 md:!h-32" : ""
                }`}
              />
            </div>
          ))}
        </div>

        <h2 className="text-2xl md:text-[42px] font-semibold text-[#000000] mb-12 mt-40">
          Community Partners
        </h2>

        {/* Logos grid */}
        <div className="mx-auto grid max-w-5xl grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-10 gap-y-10 items-center justify-items-center">
          {partners.map((p, idx) => (
            <div key={idx} className="flex items-center justify-center">
              <Image
                src={p.src}
                alt={p.alt}
                className={`h-16 w-auto md:h-20 object-contain ${
                  p.alt === "gdg lautech" ? "!h-28 md:!h-32" : ""
                }`}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <a
            href="/sponsors"
            className="inline-flex items-center justify-center rounded-[100px] bg-[#4A21BD] px-6 md:px-8 py-3 text-sm md:text-xl font-medium text-[#FFFFFF] shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition hover:brightness-110"
          >
            Become our Sponsor
          </a>
        </div>
      </ContainerLayout>
    </section>
  );
}
