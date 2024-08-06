import { Suspense } from "react";
import "./App.css";
import Body from "./components/Body";
import Shimmerui from "./components/shimmer";
import Lazyloading from "./components/Lazyloading";
import About from "./components/About";
import ProductInnerpage from "./components/ProductInnerpage";
import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Productlistcontainer from "./components/productListContainer";
import Contact from "./components/Contact";

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
    // },
        {
          path: "/",
          element: <Productlistcontainer />,
        },
        {
          path: "/Products",
          element: (
            <Suspense fallback={<Shimmerui />}>
              <Lazyloading />
            </Suspense>
          ),
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/resturants/:resId",
          element: <ProductInnerpage />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
      errorElement: <Error/>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}>
      </RouterProvider>
    </div>
  );
}

export default App;
