import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ProductListing from "./pages/ProductListing";


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
      { path: "/product_listing", element: <ProductListing /> }, // Contact page route
      // Add more routes as needed
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
