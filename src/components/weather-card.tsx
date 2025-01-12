import React from "react";
import { useSearchHistoryStore } from "@/store/searchHistoryStore";
import { convertTimestamp } from "@/lib/utils";
import { useWeatherStore } from "@/store/weatherStore";
import { fetchWeatherData } from "@/services/weatherService";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaSearch, FaTrash } from "react-icons/fa";

const SearchHistoryItem: React.FC<{ location: string; date: string }> = ({
  location,
  date,
}) => {
  const removeSearchHistory = useSearchHistoryStore(
    (state) => state.removeSearchHistory
  );
  const addSearchHistory = useSearchHistoryStore(
    (state) => state.addSearchHistory
  );
  const setWeatherData = useWeatherStore((state) => state.setWeatherData);
  const handleSearch = async (location: string) => {
    try {
      const response = await fetchWeatherData(location);
      setWeatherData(response.data);
      addSearchHistory(location, convertTimestamp(Date.now() / 1000));
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };
  return (
    <Card className="flex items-center justify-between mt-2.5 p-3 rounded-xl">
      <span>{location}</span>
      <div className="flex gap-2 items-center text-gray-500 dark:text-gray-400">
        <span className="text-sm">{date}</span>
        <Button
          variant="outline"
          size="icon"
          onClick={() => handleSearch(location)}
        >
          <FaSearch size={16} />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => removeSearchHistory(location)}
        >
          <FaTrash size={16} />
        </Button>
      </div>
    </Card>
  );
};
const WeatherCard: React.FC = () => {
  const data = useWeatherStore((state) => state.weatherData);
  const searchHistory = useSearchHistoryStore((state) => state.searchHistory);

  if (!data)
    return (
      <p className="text-sm text-gray-700 dark:text-gray-300 my-6">
        Search for a city or location to display weather data
      </p>
    );

  return (
    <Card className="p-8 rounded-3xl w-5/6 max-w-xl relative mt-24 border border-white/20">
      {["rain", "clouds"].includes(data.weather[0].main.toLowerCase()) ? (
        <img
          src="/assets/cloud.png"
          alt="Cloud"
          className="w-48 absolute top-0 right-0 -mt-24"
        />
      ) : (
        <img
          src="/assets/sun.png"
          alt="Sun"
          className="w-48 absolute top-0 right-0 -mt-24"
        />
      )}
      <div>
        <h3 className="mb-2.5">Today's Weather</h3>
        <div className="flex items-center justify-between">
          <h1 className="text-7xl text-violet-700 dark:text-white font-bold">
            {Math.round(data.main.temp)}°
          </h1>
        </div>
        <p>
          H: {Math.round(data.main.temp_max)}° L:
          {Math.round(data.main.temp_min)}°
        </p>
        <div className="flex justify-between text-gray-500 dark:text-white">
          <p className="font-bold">
            {data.name}, {data.sys.country}
          </p>
          <p>{convertTimestamp(data.dt)}</p>
          <p>Humidity: {data.main.humidity}%</p> <p>{data.weather[0].main}</p>
        </div>
      </div>
      <Card className="mt-5 p-5 rounded-3xl">
        <h4 className="mb-4">Search History</h4>
        {!searchHistory.length ? (
          <p className="text-center text-sm text-gray-700 dark:text-gray-300">
            No searches yet. Start searching!
          </p>
        ) : null}
        {searchHistory.map((item, index) => (
          <SearchHistoryItem
            key={`${item.date}-${item.location}-${index}`}
            location={item.location}
            date={item.date}
          />
        ))}
      </Card>
    </Card>
  );
};

export default WeatherCard;
