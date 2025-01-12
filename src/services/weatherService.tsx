import { WeatherApiResponse } from "@/lib/types";
import axios, { AxiosResponse } from "axios";

const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const fetchWeatherData = async (
  query: string
): Promise<AxiosResponse<WeatherApiResponse, unknown>> => {
  return axios.get<WeatherApiResponse>(
    `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${apiKey}`
  );
};
