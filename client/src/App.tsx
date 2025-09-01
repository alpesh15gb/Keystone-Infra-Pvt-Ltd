import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState } from "react";
import VisualEditor from "@/components/visual-editor";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

function Router({ isEditMode }: { isEditMode: boolean }) {
  return (
    <Switch>
      <Route path="/">
        {() => <Home isEditMode={isEditMode} />}
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="relative">
          <Toaster />
          <Router isEditMode={isEditMode} />
          <VisualEditor isEditMode={isEditMode} setIsEditMode={setIsEditMode} />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
