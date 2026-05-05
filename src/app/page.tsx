
import About from "@/components/homeCompoents/About";
import Hero from "@/components/homeCompoents/Hero";
import Portfolio from "@/components/homeCompoents/Portfolio";
import Services from "@/components/homeCompoents/Services";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import type { Metadata } from "next";

// page.tsx metadata
export const metadata: Metadata = {
  title: "Daniyal Sohail - SaaS Engineer & Full Stack Developer",
  description: "Daniyal Sohail is a SaaS Engineer and Full Stack Developer helping founders turn ideas into production ready AI powered products. Building XenorAI — approved by Microsoft for Startups and accepted into Takhleeq Incubator.",
  keywords: [
    "Daniyal Sohail",
    "SaaS Engineer",
    "AI Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "Node.js Developer",
    "AI SaaS Development",
    "SaaS MVP Development",
    "RAG Pipelines",
    "OpenAI Developer",
    "XenorAI",
    "AI Automation",
    "Freelance AI Developer",
    "Freelance SaaS Developer",
    "TypeScript Developer",
    "React Developer",
    "Pakistan Developer",
    "Lahore Developer",
    "Hire AI Developer",
    "Hire SaaS Developer",
    "AI Integration",
    "LLM Integration",
    "AI Chatbot Developer",
    "SaaS Founder",
    "Microsoft for Startups",
  ],
  openGraph: {
    title: "Daniyal Sohail - SaaS Engineer & Full Stack Developer",
    description: "Helping founders turn ideas into production-ready AI-powered SaaS products. Building XenorAI — approved by Microsoft for Startups.",
    url: "https://daniyalsohail.me",
    images: [
      {
        url: "/img/hero.png",
        width: 1200,
        height: 630,
        alt: "Daniyal Sohail - SaaS Engineer & Full Stack Developer",
      },
    ],
  },
  twitter: {
    title: "Daniyal Sohail - SaaS Engineer & Full Stack Developer",
    description: "Helping founders turn ideas into production-ready AI-powered SaaS products. Building XenorAI — approved by Microsoft for Startups.",
  },
  alternates: {
    canonical: "https://daniyalsohail.me",
  },
};

export default function Home() {
  return (


    <main className=" ">
      <div className="mx-auto w-[min(1400px,calc(100%-1.5rem))] md:w-[min(1300px,calc(100%-2rem))]">
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Footer />
      </div>
    </main>
  );
}
