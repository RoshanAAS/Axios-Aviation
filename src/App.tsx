import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "./components/ui/toaster";

import { ThemeProvider } from "./components/theme-provider";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer"; 
import Home from "@/pages/home";
import About from "@/pages/about";
import Fleet from "@/pages/fleet";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/fleet" component={Fleet} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

import { useState, useEffect } from "react";
import LoadingScreen from "./components/loading-screen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider defaultTheme="system" storageKey="skyluxe-theme">
      <QueryClientProvider client={queryClient}>
        {isLoading ? <LoadingScreen /> : <Router />}
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;