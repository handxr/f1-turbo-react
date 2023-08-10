import { DriversTable, driversColumns } from "../components/drivers-table";
import React from "react";
import { Head } from "@/components/head";
import { useGetDrivers } from "../hooks/use-get-drivers";
import { DriversTableSkeleton } from "../components/drivers-table/drivers-table-skeleton";

export const HomePage = () => {
  const { drivers, isLoading, isError } = useGetDrivers();

  if (isLoading) {
    return <DriversTableSkeleton />;
  }

  if (isError) {
    return <div>Something went wrong...</div>;
  }

  if (!drivers) return null;

  return (
    <React.Fragment>
      <Head title="F1 Drivers Home Page" />

      <DriversTable columns={driversColumns} data={drivers} />
    </React.Fragment>
  );
};
