import React from "react";
import { fetchDriversApi } from "..";

export function useGetDrivers() {
  const [drivers, setDrivers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      try {
        const drivers = await fetchDriversApi();
        setDrivers(drivers);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();

    return () => {
      setDrivers([]);
      setIsLoading(true);
      setIsError(false);
    };
  }, []);

  return {
    drivers,
    isLoading,
    isError,
  };
}
