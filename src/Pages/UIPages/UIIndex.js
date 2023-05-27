import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from "../../Components/UIComponents/NavBar";
import Footer from "../../Components/UIComponents/Footer";

export default function UIIndex() {
  return (
    <>
      <NavBar />

      <Outlet />

      <Footer />
    </>
  );
}
