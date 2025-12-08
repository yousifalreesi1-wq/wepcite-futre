import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Stores from "./pages/Stores";
import Rules from "./pages/Rules";
import Protocols from "./pages/Protocols";
import GangRules from "./pages/GangRules";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/stores"} component={Stores} />
      <Route path={"/rules"} component={Rules} />
      <Route path={"/protocols"} component={Protocols} />
      <Route path={"/gang-rules"} component={GangRules} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;