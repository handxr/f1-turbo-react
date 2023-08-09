import React from "react";

import { Driver } from "drivers/domain";
import { driversService } from "drivers/infrastructure";

export function useGetDriver(driverId: string) {
  const [driver, setDriver] = React.useState<Driver | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await driversService.findById(driverId);
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
