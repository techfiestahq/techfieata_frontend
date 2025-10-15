import type { Metadata } from "next";
import ClientHome from "./ClientHome";

export const metadata: Metadata = {
  title: "TechFiesta 2.0 – Nigeria's Biggest Tech Community Dinner & Awards",
  description:
    "Join innovators, creators, and leaders shaping Nigeria's tech ecosystem at TechFiesta 2.0 – a night to celebrate the builders.",
  openGraph: {
    title: "TechFiesta 2.0 – Nigeria's Biggest Tech Community Dinner & Awards",
    description:
      "Join innovators, creators, and leaders shaping Nigeria's tech ecosystem at TechFiesta 2.0 – a night to celebrate the builders.",
    images: ["/og-image.webp"], // note: no /public prefix
    url: "https://techfiesta.africa/",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function Home() {
  return <ClientHome />;
}
