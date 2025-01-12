// src/components/MainContent.tsx
import React, { useEffect, useState } from "react";
import { useTheme } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import SearchForm from "@/components/search-form";
import WeatherCard from "@/components/weather-card";
import MetaTags from "@/components/meta-tages";

const Home: React.FC = () => {
  const { theme } = useTheme();
  const [effectiveTheme, setEffectiveTheme] = useState(theme);
  useEffect(() => {
    if (theme === "system") {
      const systemDarkMatch = window.matchMedia("(prefers-color-scheme: dark)");
      const systemTheme = systemDarkMatch.matches ? "dark" : "light";
      setEffectiveTheme(systemTheme);
      const handleChange = (e: MediaQueryListEvent) => {
        setEffectiveTheme(e.matches ? "dark" : "light");
      };
      systemDarkMatch.addEventListener("change", handleChange);
      return () => systemDarkMatch.removeEventListener("change", handleChange);
    } else {
      setEffectiveTheme(theme);
    }
  }, [theme]);

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(/weather-app/assets/${
          effectiveTheme === "light" ? "bg-light.png" : "bg-dark.png"
        })`,
      }}
    >
      <MetaTags title="Weather app" description="Weather app with search" />
      <header className="p-4 text-center text-2xl font-bold dark:text-white ">
        <span className="mr-2">Weather App</span>
        <ModeToggle />
      </header>
      <main className="container mx-auto px-4 flex flex-col items-center">
        <SearchForm />
        <WeatherCard />
      </main>
    </div>
  );
};

export default Home;
