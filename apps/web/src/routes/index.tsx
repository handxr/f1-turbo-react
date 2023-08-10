import { ContentLayout } from "@/components/content-layout";
import { HomePage } from "@/features/drivers";
import { DriverPage } from "@/features/drivers/pages/driver.page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const AppRoutes = () => {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <ContentLayout>
          <HomePage />
        </ContentLayout>
      ),
    },
    {
      path: "/drivers/:id",
      element: (
        <ContentLayout>
          <DriverPage />
        </ContentLayout>
      ),
    },
  ]);

  return <RouterProvider router={browserRouter} />;
};
