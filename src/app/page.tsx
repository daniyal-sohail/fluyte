
import Features from "@/components/homeCompoents/Features";
import HomeHero from "@/components/homeCompoents/Hero";
import HowItWorks from "@/components/homeCompoents/HowWorks";
import NewsletterCTA from "@/components/homeCompoents/NewsLetter";
import UseCases from "@/components/homeCompoents/UseCases";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import type { Metadata } from "next";

// page.tsx metadata
export const metadata: Metadata = {
  title: "Smart Inventory Management Powered by AI",
  description:
    "Fluyte helps you scan barcodes, extract supplier receipts with AI, and track stock across every location in real time. No hardware, no setup fee — get started in 2 minutes.",
  keywords: [
    "Fluyte",
    "inventory management app",
    "AI inventory tracking",
    "barcode scanner app",
    "QR inventory system",
    "stock management",
    "AI receipt scanner",
    "multi-location stock tracking",
    "real-time inventory",
    "inventory for small business",
    "restaurant stock app",
    "retail inventory",
    "IT asset tracker",
    "home pantry management",
    "team inventory management",
    "inventory SaaS",
    "smart stock alerts",
    "low stock notifications",
    "QR label printing",
    "inventory analytics",
  ],
  openGraph: {
    title: "Fluyte - Smart Inventory Management Powered by AI",
    description:
      "Scan once, watch cargo load automatically. Fluyte turns your physical stock into a live digital system — no hardware, no setup fee.",
    url: "https://fluyte.app",
    images: [
      {
        url: "/img/hero.png",
        width: 1200,
        height: 630,
        alt: "Fluyte - Smart Inventory Management Powered by AI",
      },
    ],
  },
  twitter: {
    title: "Fluyte - Smart Inventory Management Powered by AI",
    description:
      "Scan once, watch cargo load automatically. Fluyte turns your physical stock into a live digital system — no hardware, no setup fee.",
  },
  alternates: {
    canonical: "https://fluyte.app",
  },
};


export default function Home() {
  return (


    <main className=" ">
      <div className="mx-auto w-[min(1400px,calc(100%-1.5rem))] md:w-[min(1300px,calc(100%-2rem))]">
        <Navbar />
        <HomeHero />
        <Features />
        <UseCases />
        <HowItWorks />
        <NewsletterCTA />
        <Footer />
      </div>
    </main>
  );
}
