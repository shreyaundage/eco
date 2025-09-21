import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EcoActivity from "./pages/EcoActivity";
import DNA from "./pages/DNA";
import Challenges from "./pages/Challenges";
import Feed from "./pages/Feed";
import Rewards from "./pages/Rewards";
import Games from "./pages/Games";
import Carbon from "./pages/Carbon";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import RequireAuth from "./components/AuthGate";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />

          {/* Protected routes - require passing through the login form first */}
          <Route
            path="/"
            element={
              <RequireAuth>
                <Index />
              </RequireAuth>
            }
          />
          <Route
            path="/eco"
            element={
              <RequireAuth>
                <EcoActivity />
              </RequireAuth>
            }
          />
          <Route
            path="/dna"
            element={
              <RequireAuth>
                <DNA />
              </RequireAuth>
            }
          />
          <Route
            path="/challenges"
            element={
              <RequireAuth>
                <Challenges />
              </RequireAuth>
            }
          />
          <Route
            path="/feed"
            element={
              <RequireAuth>
                <Feed />
              </RequireAuth>
            }
          />
          <Route
            path="/rewards"
            element={
              <RequireAuth>
                <Rewards />
              </RequireAuth>
            }
          />
          <Route
            path="/games"
            element={
              <RequireAuth>
                <Games />
              </RequireAuth>
            }
          />
          <Route
            path="/admin"
            element={
              <RequireAuth>
                <Admin />
              </RequireAuth>
            }
          />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
