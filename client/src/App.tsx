import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import LoginPage from "@/pages/auth/login";
import RegisterPage from "@/pages/auth/register";
import CompanyOnboardingPage from "@/pages/onboarding/company";
import InfluencerOnboardingPage from "@/pages/onboarding/influencer";
import DashboardViewPage from "@/pages/dashboard/index";
import CompanyDashboard from "@/pages/dashboard/company";
import InfluencerDashboard from "@/pages/dashboard/influencer";
import AdminDashboard from "@/pages/admin/dashboard";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/auth/login" component={LoginPage} />
      <Route path="/auth/register" component={RegisterPage} />
      <Route path="/onboarding/company" component={CompanyOnboardingPage} />
      <Route path="/onboarding/influencer" component={InfluencerOnboardingPage} />
      <Route path="/view" component={DashboardViewPage} />
      <Route path="/dashboard/company" component={CompanyDashboard} />
      <Route path="/dashboard/influencer" component={InfluencerDashboard} />
      <Route path="/admin/dashboard" component={AdminDashboard} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
