// import Image from "next/image";
"use client";
import AwardCategories from "@/components/AwardCategories";
import Countdown from "@/components/Countdown";
import Hero from "@/components/Hero";
import Navbar from "@/components/navbar/Navbar";
import PastEvent from "@/components/PastEvent";
import ThisYear from "@/components/ThisYear";

export default function Home() {
  return (
    <main className="h-auto overflow-x-hidden">
      <Navbar />
      <Hero />
      <Countdown
        target="2025-11-30T18:00:00"
        onComplete={() => console.log("Event started!")}
        className="mt-40"
      />
      <PastEvent />
      <ThisYear />
      <AwardCategories />
    </main>
  );
}
