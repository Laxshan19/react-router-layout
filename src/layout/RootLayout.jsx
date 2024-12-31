import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <div>
      {/* Navbar displayed across all pages */}
      <Navbar />
      {/* Outlet renders child routes */}
      <Outlet />
    </div>
  );
};

export default RootLayout;
