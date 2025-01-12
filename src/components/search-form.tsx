import React, { FormEvent, useState } from "react";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSearchHistoryStore } from "@/store/searchHistoryStore";
import { convertTimestamp } from "@/lib/utils";
import { useWeatherStore } from "@/store/weatherStore";
import { fetchWeatherData } from "@/services/weatherService";
import { FaSearch } from "react-icons/fa";

const SearchForm: React.FC = () => {
  const [location, setLocation] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const addSearchHistory = useSearchHistoryStore(
    (state) => state.addSearchHistory
  );
  const setWeatherData = useWeatherStore((state) => state.setWeatherData);

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);
    try {
      if (!location) throw new Error("");
      const response = await fetchWeatherData(location);
      setWeatherData(response.data);
      addSearchHistory(location, convertTimestamp(Date.now() / 1000));
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setErrorMessage(
        location.length > 0
          ? "Error fetching weather data for query: " + location
          : "Error fetching weather data, no location provided"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form
        onSubmit={handleSearch}
        className="flex gap-2 justify-center mb-4 max-w-md m-auto relative w-full"
      >
        <div className="relative w-full">
          <Input
            id="inputField"
            placeholder="Enter a city or country"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-6 peer"
            aria-describedby="location-helper"
          />
          <label
            htmlFor="inputField"
            className="absolute left-5 top-2 -translate-y-1/2 text-gray-600 dark:text-gray-400 text-xs px-1 block peer-placeholder-shown:hidden"
          >
            Country
          </label>
          <p id="location-helper" className="sr-only">
            Enter the name of the city or country to search for weather data.
          </p>
        </div>
        <Button
          type="submit"
          className="p-6 rounded-xl"
          disabled={loading}
          aria-label={loading ? "Loading" : "Search"}
        >
          {loading ? <Loader2 className="animate-spin" /> : <FaSearch />}
        </Button>
      </form>
      {errorMessage && (
        <div
          className="text-center text-sm dark:text-white bg-red-600/50 text-white rounded-xl py-2 px-4"
          role="alert"
          aria-live="assertive"
        >
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default SearchForm;
