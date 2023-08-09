import React from "react";
import { useParams } from "react-router-dom";
import { useGetDriver } from "../hooks/use-get-driver";

export function DriverPage() {
  const params = useParams();
  const { driver, isLoading, isError } = useGetDriver(params.id!);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return <React.Fragment>{JSON.stringify(driver, null, 2)}</React.Fragment>;
}
