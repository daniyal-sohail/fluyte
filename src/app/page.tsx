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
