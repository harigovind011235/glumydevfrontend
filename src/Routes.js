import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loader from "./components/Loader";

const HomeScreen = lazy(() => import("./screens/HomeScreen"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader></Loader>}>
        <HomeScreen />
      </Suspense>
    ),
  },
]);

export default routes;
