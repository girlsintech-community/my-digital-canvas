import { useState, useCallback } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import IntroAnimation from "@/components/IntroAnimation";
import AboutPage from "./pages/AboutPage.tsx";
import ImpactPage from "./pages/ImpactPage.tsx";
import Index from "./pages/Index.tsx";
import Resume from "./pages/Resume.tsx";
import CommunityPage from "./pages/CommunityPage.tsx";
import DiaryPage from "./pages/DiaryPage.tsx";
import WallOfLovePage from "./pages/WallOfLovePage.tsx";
import PodcastsPage from "./pages/PodcastsPage.tsx";
import ContentPage from "./pages/ContentPage.tsx";
import EventsAttendedPage from "./pages/EventsAttendedPage.tsx";
import ConnectPage from "./pages/ConnectPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => {
  const [showIntro, setShowIntro] = useState(() => {
    if (sessionStorage.getItem("intro_shown")) return false;
    return true;
  });

  const handleIntroComplete = useCallback(() => {
    sessionStorage.setItem("intro_shown", "1");
    setShowIntro(false);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/diary" element={<DiaryPage />} />
            <Route path="/wall-of-love" element={<WallOfLovePage />} />
            <Route path="/podcasts" element={<PodcastsPage />} />
            <Route path="/content" element={<ContentPage />} />
            <Route path="/events-attended" element={<EventsAttendedPage />} />
            <Route path="/connect" element={<ConnectPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
