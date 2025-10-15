import React from "react";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import JoinUs from "@/components/JoinUs";
import Navbar from "@/components/navbar/Navbar";
import SponsorHero from "@/components/SponsorHero";
import BecomeSponsors from "@/components/BecomeSponsor";

export const metadata: Metadata = {
  title:
    "Become a TechFiesta Sponsor or Partner – Support Africa's Tech Builders",
  description:
    "Join TechFiesta 2.0 as a sponsor or partner and connect your brand with thousands of tech talents, founders, and industry leaders.",
  openGraph: {
    title:
      "Become a TechFiesta Sponsor or Partner – Support Africa's Tech Builders",
    description:
      "Join TechFiesta 2.0 as a sponsor or partner and connect your brand with thousands of tech talents, founders, and industry leaders.",
    images: ["/public/og-image.webp"],
    url: "https://techfiesta.africa/sponsors",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

function page() {
  return (
    <main className="h-auto overflow-x-hidden">
      <Navbar />
      <SponsorHero />
      <BecomeSponsors />
      <JoinUs />
      <Footer />
    </main>
  );
}

export default page;
