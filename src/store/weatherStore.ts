import { WeatherApiResponse } from "@/lib/types";
import { create } from "zustand";

interface WeatherState {
  weatherData: WeatherApiResponse | null;
  setWeatherData: (data: WeatherApiResponse) => void;
}

export const useWeatherStore = create<WeatherState>((set) => ({
  weatherData: null,
  setWeatherData: (data) => set({ weatherData: data }),
}));
