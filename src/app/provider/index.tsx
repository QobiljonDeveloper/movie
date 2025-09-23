import { memo, Suspense, type ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "../store";

const client = new QueryClient();

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <Provider store={store}>
          <Suspense fallback={<div>Loading...</div>}>
            {children}
          </Suspense>
        </Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default memo(AppProvider);
