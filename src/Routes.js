import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loader from "./components/Loader";
import JobCreation from "./screens/JobCreation";

const HomeScreen = lazy(() => import("./screens/HomeScreen"));
const RegisterScreen = lazy(() => import("./screens/RegisterScreen"));
const LoginScreen = lazy(() => import("./screens/LoginScreen"));
const OurCompanyScreen = lazy(() => import("./screens/OurCompanyScreen"));
const Aboutusscreen = lazy(() => import("./screens/Aboutus"));
const JobCard = lazy(() => import("./components/JobCard"));

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

  {
    path: "/aboutus",
    element: (
      <Suspense fallback={<Loader></Loader>}>
        <Aboutusscreen/>
      </Suspense>
    ),
  },

  {
    path: "/jobcard",
    element: (
      <Suspense fallback={<Loader></Loader>}>
        <JobCard/>
      </Suspense>
    ),
  },

]);

export default routes;
