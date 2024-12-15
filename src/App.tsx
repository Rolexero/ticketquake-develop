import { Suspense } from "react";
import LoadingView from "./components/LoadingView";
import { RouterProvider } from "react-router-dom";

import router from "./routes";
import { ThemeProvider } from "./providers/ThemeProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./service/Queryclient/queryClient";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<LoadingView screen />}>
          <RouterProvider router={router} />
        </Suspense>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
