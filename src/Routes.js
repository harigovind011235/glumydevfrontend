import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loader from "./components/Loader";
import JobCreation from "./screens/JobCreation";

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
  {
    path: "/jobcreation",
    element: (
      <Suspense fallback={<Loader></Loader>}>
        <JobCreation/>
      </Suspense>
    ),
  },
<<<<<<< HEAD
  {
    path: "/adminjobsdashboard",
    element: (
      <Suspense fallback={<Loader></Loader>}>
        <AdminJobsDashboard/>
      </Suspense>
    ),
  },
  {
    path: "/adminjobupdate",
    element: (
      <Suspense fallback={<Loader></Loader>}>
        <AdminJobCard/>
=======

  {
    path: "/jobpostings",
    element: (
      <Suspense fallback={<Loader></Loader>}>
        <JobScreen/>
>>>>>>> 97664824ce2f572aef94c53ecbb69831415fa111
      </Suspense>
    ),
  },

]);

export default routes;
