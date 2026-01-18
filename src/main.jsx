import "./index.css";

import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router/dom";
import { router } from "./Router/router";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools/production";


export const client = new QueryClient();


// import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';


createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={client}>
    <ReactQueryDevtools initialIsOpen={false} />
    <RouterProvider router={router} />
  </QueryClientProvider>,
);
