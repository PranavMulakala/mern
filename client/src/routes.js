import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import App from "./App";
import {
    createBrowserRouter,
  } from "react-router-dom";
import CheckAuth from "./utils/CheckAuth";
import Guest from './utils/Guest'
import Category from "./pages/Category";

export default createBrowserRouter([
    {
      element: <App />,
      children: [
      { 
        path: "/",
        element: (
        <CheckAuth>
            <Home />
        </CheckAuth>
    ),
    },  
    {
        path: "/login",
        element: (
          <Guest>
            <Login />
          </Guest>
        ),
      },
      {
        path: "/register",
        element: (
          <Guest>
            <Register />
          </Guest>
        ),
      },
      {
        path: "/category",
        element: (
          <CheckAuth>
            <Category />
          </CheckAuth>
        ),
      },
    ],
    },
  ]);