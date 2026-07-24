import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import ImageSlideshow from "@/components/sections/ImageSlideshow";
import About from "@/components/sections/About";
import WhatIDo from "@/components/sections/WhatIDo";
import Awards from "@/components/sections/Awards";
import WallOfLove from "@/components/sections/WallOfLove";
import Footer from "@/components/sections/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <ImageSlideshow />
      <About />
      <WhatIDo />
      <Awards />
      <WallOfLove />
      <Footer />
    </div>
  );
};

export default Index;
