import { HomePage } from "@/features/drivers";
import { DriverPage } from "@/features/drivers/pages/driver.page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const AppRoutes = () => {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/drivers/:id",
      element: <DriverPage />,
    },
  ]);

  return <RouterProvider router={browserRouter} />;
};
