import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import JobListings from "@/components/sections/JobListings";
import CareerPaths from "@/components/sections/CareerPaths";
import Testimonials from "@/components/sections/Testimonials";
import Benefits from "@/components/sections/Benefits";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Set the page title dynamically
    document.title = "Coforge Career Connect - Your Gateway to Success";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <JobListings />
        <CareerPaths />
        <Benefits />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
