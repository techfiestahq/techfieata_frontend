import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import VotesHero from "@/components/VotesHero";
import Awards from "@/components/Awards";
import BecomeSponsors from "@/components/BecomeSponsor";
import JoinUs from "@/components/JoinUs";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vote for the people shaping Nigeria’s tech story.",
  description:
    "Your vote helps spotlight the builders, innovators, and connectors driving Nigeria’s tech ecosystem forward.",
  openGraph: {
    title: "Vote for the people shaping Nigeria’s tech story.",
    description:
      "Your vote helps spotlight the builders, innovators, and connectors driving Nigeria’s tech ecosystem forward.",
    images: ["/public/og-image.webp"],
    url: "https://techfiesta.africa/votes",
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
      <VotesHero />
      <Awards />
      <BecomeSponsors />
      <JoinUs />
      <Footer />
    </main>
  );
}

export default page;
