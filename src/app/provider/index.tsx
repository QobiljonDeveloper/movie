import { memo, Suspense, type ReactNode, useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "../store";

import loading_1 from "@/shared/assets/loading-1.svg";
import loading_2 from "@/shared/assets/loading-2.svg";
import loading_3 from "@/shared/assets/loading-3.svg";

const client = new QueryClient();

const LoadingAnimation = () => {
  const images = [loading_1, loading_2, loading_3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 300); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen gap-7">
      <img src={images[index]} alt="Loading..." className="w-20 h-20" />
    </div>
  );
};

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <Provider store={store}>
          <Suspense fallback={<LoadingAnimation />}>{children}</Suspense>
        </Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default memo(AppProvider);
