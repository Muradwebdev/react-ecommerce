import { lazy, Suspense } from "react";
import AppLayout from "../AppLayout/AppLayout";
import { createBrowserRouter } from "react-router";
import { productsLoader as homeLoader } from "../products";
import { productsLoader as shopLoader } from "../products";
// import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import About from "../pages/about/About";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";
import SingleProduct from "../pages/shop/SingleProduct";
import Error from "../UI/Error";
import CartPage from "../pages/shop/CartPage";
import Loader from "../components/Loader";

const Home = lazy(() => import("../pages/home/Home"));

export const router = createBrowserRouter([
  {
    errorElement: <Error />,
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <AppLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
        loader: homeLoader,
      },
      { path: "/shop", element: <Shop />, loader: shopLoader },
      { path: "/shop/:id", element: <SingleProduct /> },
      { path: "/cart-page", element: <CartPage /> },
      { path: "/blog", element: <Blog /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/sign-up", element: <div>sign ip</div> },
    ],
  },
]);
