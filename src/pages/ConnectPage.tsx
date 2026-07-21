import Nav from "@/components/sections/Nav";
import Connect from "@/components/sections/Connect";
import Footer from "@/components/sections/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const ConnectPage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Nav />
    <main className="pt-24">
      <Connect />
    </main>
    <Footer />
    <ScrollToTop />
  </div>
);

export default ConnectPage;
