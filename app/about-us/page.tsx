import type { Metadata } from "next";
import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import AboutUsHero from "@/components/AboutUsHero";
import OurStory from "@/components/OurStory";
import VisionMission from "@/components/VisionMission";
import WhyDifferent from "@/components/WhyDifferent";
import WhoWeServe from "@/components/WhoWeServe";
import HowNominationsWork from "@/components/HowNominationsWork";
import Celebrate from "@/components/Celebrate";
import GetInvolved from "@/components/GetInvolved";
import TheExperience from "@/components/TheExperience";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title:
    "About TechFiesta – Celebrating the People Powering Africa's Tech Future",
  description:
    "Discover the story behind TechFiesta, the annual event uniting and celebrating the people shaping Africa's tech industry.",
  openGraph: {
    title:
      "About TechFiesta – Celebrating the People Powering Africa's Tech Future",
    description:
      "Discover the story behind TechFiesta, the annual event uniting and celebrating the people shaping Africa's tech industry.",
    images: ["/public/og-image.webp"],
    url: "https://techfiesta.africa/about-us",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
  },
};

function Page() {
  return (
    <main className="h-auto overflow-x-hidden">
      <Navbar />
      <AboutUsHero />
      <OurStory />
      <VisionMission />
      <WhyDifferent />
      <WhoWeServe />
      <HowNominationsWork />
      <Celebrate />
      <TheExperience />
      <GetInvolved />
      <FAQSection />
      <Footer />
    </main>
  );
}

export default Page;
