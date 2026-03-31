import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import CategoriesSection from "@/components/CategoriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InstructorsSection from "@/components/InstructorsSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-16">
      <HeroSection />
      <FeaturedCourses />
      <CategoriesSection />
      <TestimonialsSection />
      <InstructorsSection />
    </main>
    <Footer />
  </div>
);

export default Index;
