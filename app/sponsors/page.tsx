import React from "react";
import Footer from "@/components/Footer";
import JoinUs from "@/components/JoinUs";
import Navbar from "@/components/navbar/Navbar";
import SponsorHero from "@/components/SponsorHero";
import BecomeSponsors from "@/components/BecomeSponsor";

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
