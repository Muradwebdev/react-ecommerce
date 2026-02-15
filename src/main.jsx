import "./index.css";

import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router";
import { router } from "./Router/router";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools/production";
import { queryClient } from "./Query/queryClient";
// import 'swiper/css';

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "././assets/css/icofont.min.css";
import "././assets/css/animate.css";
import "././assets/css/style.min.css";
import { Suspense } from "react";
import Loader from "./components/Loader";
import AuthProvider from "./contexts/AuthProvider";
createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <Suspense fallback={<Loader />}>
      <AuthProvider>
        <RouterProvider router={router} fallbackElement={<Loader />} />
      </AuthProvider>
    </Suspense>
  </QueryClientProvider>,
);
