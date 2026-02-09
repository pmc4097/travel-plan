import { City } from "@/types";

export const getCities = async (): Promise<City[]> => {
  const response = await fetch("/api/cities");
  if (!response.ok) {
    throw new Error("Failed to fetch cities");
  }
  return response.json();
};

export const getSearchCities = async (search: string): Promise<City[]> => {
  const response = await fetch(`/api/cities/search?q=${search}`);
  if (!response.ok) {
    throw new Error("Failed to fetch cities");
  }
  return response.json();
};
