import React from "react";
import { fetchDriverApi } from "..";
import { Driver } from "drivers";

export function useGetDriver(driverId: string) {
  const [driver, setDriver] = React.useState<Driver | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await fetchDriverApi(driverId);
        setDriver(response);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    })();

    return () => {
      setDriver(null);
      setIsLoading(false);
      setIsError(false);
    };
  }, [driverId]);

  return {
    driver,
    isLoading,
    isError,
  };
}
