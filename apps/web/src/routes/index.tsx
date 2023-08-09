import { HomePage } from "@/features/drivers";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const AppRoutes = () => {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);

  return <RouterProvider router={browserRouter} />;
};
