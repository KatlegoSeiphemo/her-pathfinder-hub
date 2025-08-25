import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CareerAssessment from "./pages/CareerAssessment";
import SkillsDevelopment from "./pages/SkillsDevelopment";
import MentorshipNetwork from "./pages/MentorshipNetwork";
import JobMatching from "./pages/JobMatching";
import Communities from "./pages/Communities";
import SuccessStoriesPage from "./pages/SuccessStoriesPage";
import CVGenerator from "./pages/CVGenerator";
import CoverLetterGenerator from "./pages/CoverLetterGenerator";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/career-assessment" element={<CareerAssessment />} />
          <Route path="/skills-development" element={<SkillsDevelopment />} />
          <Route path="/mentorship" element={<MentorshipNetwork />} />
          <Route path="/job-matching" element={<JobMatching />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/cv-generator" element={<CVGenerator />} />
          <Route path="/cover-letter" element={<CoverLetterGenerator />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
