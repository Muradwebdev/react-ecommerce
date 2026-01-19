import { createBrowserRouter } from "react-router";
import AppLayout from "../AppLayout/AppLayout";
import { productsLoader as homeLoader } from "../products";
import Error from "../UI/Error";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import About from "../pages/about/About";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";
export const router = createBrowserRouter([
  {
    errorElement: <Error />,
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home />, loader: homeLoader },
      { path: "/shop", element: <Shop /> },
      { path: "/blog", element: <Blog /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/sign-up", element: <div>sign ip</div> },
    ],
  },
]);
