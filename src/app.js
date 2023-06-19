import React from "react";
import ReactDOM from "react-dom/client";
import "/style.scss";


//import components
import Header from "./components/Header.js"
import Body from "./components/Body"
import About from "./components/About.js";
import Error from "./components/Error.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantDetails from "./components/RestaurantDetails.js";

const App = () => {
  return (
    <div className="food-page">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetails />, 
      },
    ],
  },
 
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router= {appRouter}/>);
