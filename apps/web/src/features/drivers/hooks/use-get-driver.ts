import React from "react";
import { fetchDriverApi } from "..";

export function useGetDriver(driverId: string) {
  const [driver, setDriver] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await fetchDriverApi(driverId);
        setDriver(response.MRData.DriverTable.Drivers[0]);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    })();
  }, [driverId]);

  return {
    driver,
    isLoading,
    isError,
  };
}
