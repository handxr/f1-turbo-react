import React from "react";

import { type Driver } from "drivers/domain";
import { driversService } from "drivers/infrastructure";

export function useGetDrivers() {
  const [drivers, setDrivers] = React.useState<Driver[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      try {
        const drivers = await driversService.findAll();
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
