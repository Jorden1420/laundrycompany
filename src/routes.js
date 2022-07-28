import React, { lazy } from "react";

import { Routes, Route } from "react-router-dom";

// const LocationsPage = lazy(() => import("./components/Locations/Locations"));
const HomePage = lazy(() => import("./components/Home/Home"));

function appRoutes() {
  return (
    <Routes>
      {/* <Route key={"locations"} path={"/"} element={<LocationsPage />} /> */}
      <Route key={"home"} path={"/"} element={<HomePage />} />
    </Routes>
  );
}

export default appRoutes;
