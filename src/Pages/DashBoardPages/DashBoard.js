import React from "react";
import { Outlet } from "react-router-dom";

export default function DashBoard() {
  return (
    <>
      dashboard home
      <Outlet />;
    </>
  );
}
