import { WeCollaborate } from "@/components/Common/WeCollaborate";
import { AboutSection } from "@/components/HomeComponents/AboutSection";
import Clients from "@/components/HomeComponents/Clients";
import { ContextSection } from "@/components/HomeComponents/ContextSection";
import HeroSection from "@/components/HomeComponents/HeroSection";
import { HomeServices } from "@/components/HomeComponents/HomeServices";
import { ProjectsSection } from "@/components/HomeComponents/ProjectsSection";
import { Testimonial } from "@/components/HomeComponents/TestimonialSection";
import Footer from "@/components/Layout/Footer";
import { Navbar } from "@/components/Layout/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daniyal Sohail - Full Stack Developer & Web Designer",
  description: "Daniyal Sohail is a professional Full Stack Developer specializing in React, Node.js, and modern web technologies. View portfolio, projects, and services.",
  keywords: [
    "Daniyal Sohail",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Node.js Developer",
    "Portfolio",
    "Web Development",
    "JavaScript Developer",
    "TypeScript Developer"
  ],
  openGraph: {
    title: "Daniyal Sohail - Full Stack Developer & Web Designer",
    description: "Professional Full Stack Developer specializing in React, Node.js, and modern web technologies. View portfolio, projects, and services.",
    url: "https://daniyalsohail.me",
    images: [
      {
        url: "/img/hero.png",
        width: 1200,
        height: 630,
        alt: "Daniyal Sohail - Full Stack Developer",
      },
    ],
  },
  twitter: {
    title: "Daniyal Sohail - Full Stack Developer & Web Designer",
    description: "Professional Full Stack Developer specializing in React, Node.js, and modern web technologies.",
  },
  alternates: {
    canonical: "https://daniyalsohail.me",
  },
};

export default function Home() {
  return (
    <div >
      <Navbar />
      <HeroSection />
      <Clients />
      <HomeServices />
      <ProjectsSection />
      <ContextSection />
      <AboutSection />
      <WeCollaborate />
      <Testimonial />
      <Footer />
    </div>
  );
}
