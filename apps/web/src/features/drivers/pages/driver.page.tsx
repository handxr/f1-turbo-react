import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetDriver } from "../hooks/use-get-driver";
import { Button } from "@/components/ui/button";

export function DriverPage() {
  const params = useParams();
  const navigate = useNavigate();
  const { driver, isLoading, isError } = useGetDriver(params.id!);

  function handleBackClick() {
    navigate("/");
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <React.Fragment>
      <div className="flex flex-col gap-4 items-start">
        <Button variant="link" onClick={handleBackClick}>
          Back
        </Button>
        {JSON.stringify(driver, null, 2)}
      </div>
    </React.Fragment>
  );
}
