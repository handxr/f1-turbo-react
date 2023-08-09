import { Button } from "@/components/ui/button";
import { useSearchParams } from "react-router-dom";

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <Button
      onClick={() =>
        setSearchParams({
          ...searchParams,
          page: "3",
        })
      }
    >
      Go to page 2
    </Button>
  );
};
