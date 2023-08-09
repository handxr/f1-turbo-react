import { driversAdapter } from "acme-drivers/infrastructure";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export function useGetDrivers() {
  const [selectedYear, setSelectedYear] = React.useState<string>("2023");
  const {
    data: drivers,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["drivers"],
    queryFn: () => driversAdapter.findAll(selectedYear),
  });

  return {
    drivers,
    isLoading,
    isError,
    selectedYear,
    setSelectedYear,
  };
}
