import React from "react";
import Footer from "@/components/Footer";
import JoinUs from "@/components/JoinUs";
import Navbar from "@/components/navbar/Navbar";
import OrganizerHero from "@/components/OrganizerHero";

function page() {
  return (
    <main className="h-auto overflow-x-hidden">
      <Navbar />
      <OrganizerHero />
      <JoinUs />
      <Footer />
    </main>
  );
}

export default page;
