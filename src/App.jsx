import React , {lazy , Suspense} from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
const ProductListing = lazy(()=> import("./pages/ProductListing"))
import Spinner from "./components/Spinner";


// Layout component with Header and Footer
const Layout = () => (
  <>
  
    <Header />

    <Outlet />

    <Footer />
  </>
);

// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Apply Layout to all routes
    children: [
      { path: "/", element: <HomePage /> }, // Home page route
      { path: "/about", element: <AboutUs /> }, // About page route
      { path: "/contact", element: <ContactUs /> }, // Contact page route
      { path: "/product_listing", element: (<Suspense fallback={<Spinner />} >
         <ProductListing />
      </Suspense>
      )
       }, // Contact page route
      // Add more routes as needed
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
