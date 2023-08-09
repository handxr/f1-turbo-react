import React from "react";
import { HelmetProvider } from "react-helmet-async";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      }
    >
      <HelmetProvider>{children}</HelmetProvider>
    </React.Suspense>
  );
};
