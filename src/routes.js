import React, { lazy } from "react";

import { Routes, Route } from "react-router-dom";

const Header = lazy(() => import("./common/Header"));
const Footer = lazy(() => import("./common/Footer"));

const HomePage = lazy(() => import("./components/Home/Home"));

function appRoutes() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route key={"home"} path={"/"} element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default appRoutes;
