import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import Home from "@/routes";

const App: React.FC = () => {
  const currentHour = new Date().getHours();
  const isDay = currentHour >= 6 && currentHour < 18;

  return (
    <ThemeProvider
      defaultTheme={isDay ? "light" : "dark"}
      storageKey="vite-ui-theme"
    >
      <Home />
    </ThemeProvider>
  );
};

export default App;
