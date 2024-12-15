import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Optional: Customize behavior
      retry: 1, // Number of retries on failure
    },
  },
});

export default queryClient;
