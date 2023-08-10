import { useYearStore } from "@/stores/year.store";
import { useQuery } from "@tanstack/react-query";

import { driversAdapter } from "acme-drivers/infrastructure";

export function useGetDriver(driverId: string) {
  const { year } = useYearStore();
  const {
    data: driver,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["driver", driverId, year],
    queryFn: () => driversAdapter.findById(driverId, year.toString()),
  });
  return {
    driver,
    isLoading,
    isError,
  };
}
