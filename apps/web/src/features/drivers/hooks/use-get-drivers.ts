import { driversAdapter } from "acme-drivers/infrastructure";
import { useQuery } from "@tanstack/react-query";

import { useYearStore } from "@/stores/year.store";

export function useGetDrivers() {
  const { year } = useYearStore();
  const {
    data: drivers,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["drivers", year],
    queryFn: () => driversAdapter.findAll(year.toString()),
  });

  return {
    drivers,
    isLoading,
    isError,
  };
}
