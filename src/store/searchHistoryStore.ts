import { create } from "zustand";

interface SearchHistoryItem {
  location: string;
  date: string;
}

interface SearchHistoryState {
  searchHistory: SearchHistoryItem[];
  addSearchHistory: (location: string, date: string) => void;
  removeSearchHistory: (location: string) => void;
}

export const useSearchHistoryStore = create<SearchHistoryState>((set) => ({
  searchHistory: [],
  addSearchHistory: (location, date) =>
    set((state) => ({
      searchHistory: [...state.searchHistory, { location, date }],
    })),
  removeSearchHistory: (location) =>
    set((state) => ({
      searchHistory: state.searchHistory.filter(
        (item) => item.location !== location
      ),
    })),
}));
