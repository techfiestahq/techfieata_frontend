// import Image from "next/image";
"use client";
import AwardCategories from "@/components/AwardCategories";
import Countdown from "@/components/Countdown";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import JoinUs from "@/components/JoinUs";
import Navbar from "@/components/navbar/Navbar";
import Organizers from "@/components/Organizers";
import PastEvent from "@/components/PastEvent";
import Sponsors from "@/components/Sponsors";
import ThisYear from "@/components/ThisYear";

export default function Home() {
  return (
    <main className="h-auto overflow-x-hidden">
      <Navbar />
      <Hero />
      <Countdown
        target="2025-11-30T18:00:00"
        onComplete={() => console.log("Event started!")}
        className="mt-5 lg:mt-40"
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
