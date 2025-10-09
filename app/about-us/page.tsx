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

function page() {
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

export default page;
