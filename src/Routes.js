import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loader from "./components/Loader";

const HomeScreen = lazy(() => import("./screens/HomeScreen"));
const RegisterScreen = lazy(() => import("./screens/RegisterScreen"));
const LoginScreen = lazy(() => import("./screens/LoginScreen"));
const OurCompanyScreen = lazy(() => import("./screens/OurCompanyScreen"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader></Loader>}>
        <HomeScreen />
      </Suspense>
    ),
  },
  {
    path: "/register",
    element: (
      <Suspense fallback={<Loader></Loader>}>
        <RegisterScreen />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loader></Loader>}>
        <LoginScreen />
      </Suspense>
    ),
  },
  {
    path: "/ourcompanies",
    element: (
      <Suspense fallback={<Loader></Loader>}>
        <OurCompanyScreen/>
      </Suspense>
    ),
  },
  
]);

export default routes;
