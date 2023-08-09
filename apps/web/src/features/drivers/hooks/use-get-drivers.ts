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
        setDrivers(drivers.MRData.DriverTable.Drivers);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    drivers,
    isLoading,
    isError,
  };
}
