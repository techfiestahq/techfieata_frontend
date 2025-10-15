import type { Metadata } from "next";
import React from "react";
import Footer from "@/components/Footer";
import JoinUs from "@/components/JoinUs";
import Navbar from "@/components/navbar/Navbar";
import OrganizerHero from "@/components/OrganizerHero";

export const metadata: Metadata = {
  title:
    "Meet the Organizers of TechFiesta 2.0 – Builders of Nigeria's Tech Celebration",
  description:
    "Get to know the minds behind TechFiesta – the event that celebrates Nigeria's thriving tech ecosystem and its incredible people.",
  openGraph: {
    title:
      "Meet the Organizers of TechFiesta 2.0 – Builders of Nigeria's Tech Celebration",
    description:
      "Get to know the minds behind TechFiesta – the event that celebrates Nigeria's thriving tech ecosystem and its incredible people.",
    images: ["/public/og-image.webp"],
    url: "https://techfiesta.africa/organizers",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
  },
};

function Page() {
  return (
    <main className="h-auto overflow-x-hidden">
      <Navbar />
      <OrganizerHero />
      <JoinUs />
      <Footer />
    </main>
  );
}

export default Page;
