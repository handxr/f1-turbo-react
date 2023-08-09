import { useQuery } from "@tanstack/react-query";

import { driversAdapter } from "acme-drivers/infrastructure";

export function useGetDriver(driverId: string) {
  const {
    data: driver,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["driver", driverId],
    queryFn: () => driversAdapter.findById(driverId),
  });
  return {
    driver,
    isLoading,
    isError,
  };
}
