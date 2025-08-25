import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Solutions from "./pages/Solutions";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Insurance from "./pages/Insurance";
import BotoxSkinCare from "./pages/BotoxSkinCare";
import ClinicsDentist from "./pages/ClinicsDentist";
import GymHealthCoach from "./pages/GymHealthCoach";
import BusinessConsultation from "./pages/BusinessConsultation";
import ITSaaS from "./pages/ITSaaS";
import SalonsSpa from "./pages/SalonsSpa";
import RealEstateAgents from "./pages/RealEstateAgents";
import TherapistsCounselors from "./pages/TherapistsCounselors";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/botox-skincare" element={<BotoxSkinCare />} />
          <Route path="/clinics-dentist" element={<ClinicsDentist />} />
          <Route path="/gym-health-coach" element={<GymHealthCoach />} />
          <Route path="/business-consultation" element={<BusinessConsultation />} />
          <Route path="/it-saas" element={<ITSaaS />} />
          <Route path="/salons-spa" element={<SalonsSpa />} />
          <Route path="/real-estate-agents" element={<RealEstateAgents />} />
          <Route path="/therapists-counselors" element={<TherapistsCounselors />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
