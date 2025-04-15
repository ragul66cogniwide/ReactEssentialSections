import { useEffect, useState } from "react";

export function useFetch(fetchFn) {
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();
  const [fetchedData, setfetchedData] = useState();
  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const places = await fetchFn();
        setfetchedData(places);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data..." });
      }

      setIsFetching(false);
    }

    fetchPlaces();
  }, [fetchFn]);

  return {
    isFetching,
    fetchedData,
    error,
  };
}
