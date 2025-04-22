import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import emailjs from '@emailjs/browser';

emailjs.init("PALLtRYBITpMC5WoO");

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="*">
        <Home />
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
      <ScrollToTop />
    </QueryClientProvider>
  );
}

export default App;
