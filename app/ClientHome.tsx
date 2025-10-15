"use client";

import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import PastEvent from "@/components/PastEvent";
import ThisYear from "@/components/ThisYear";
import AwardCategories from "@/components/AwardCategories";
import Sponsors from "@/components/Sponsors";
import Organizers from "@/components/Organizers";
import JoinUs from "@/components/JoinUs";
import Footer from "@/components/Footer";

export default function ClientHome() {
  return (
    <main className="h-auto overflow-x-hidden">
      <Navbar />
      <Hero />
      <Countdown
        target="2025-12-12T00:00:00"
        onComplete={() => console.log("Event started!")}
        className="bg-[#000000] pt-5 lg:pt-40"
      />
      <PastEvent />
      <ThisYear />
      <AwardCategories />
      <Sponsors />
      <Organizers />
      <JoinUs />
      <Footer />
    </main>
  );
}
