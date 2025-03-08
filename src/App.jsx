
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

// Pages
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import CareerAssessment from "./pages/CareerAssessment";
import ExploreCareer from "./pages/ExploreCareer";
import SkillDevelopment from "./pages/SkillDevelopment";
import JobSimulation from "./pages/JobSimulation";
import AlumniNetwork from "./pages/AlumniNetwork";
import DailyTasks from "./pages/DailyTasks";
import { ThemeProvider } from "./components/ThemeProvider";

// Add dependency for GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Add Poppins and Inter fonts
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700;800&display=swap";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/career" element={<CareerAssessment />} />
              <Route path="/dashboard/explore-careers" element={<ExploreCareer />} />
              <Route path="/dashboard/skills" element={<SkillDevelopment />} />
              <Route path="/dashboard/job-simulation" element={<JobSimulation />} />
              <Route path="/dashboard/alumni" element={<AlumniNetwork />} />
              <Route path="/dashboard/daily-tasks" element={<DailyTasks />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
