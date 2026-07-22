import { useEffect } from "react";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import ImpactSection from "@/components/sections/ImpactSection";
import ScrollToTop from "@/components/ScrollToTop";

const ImpactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between overflow-x-hidden">
      <div>
        <Nav />
        <main className="pt-20">
          <ImpactSection />
        </main>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ImpactPage;
