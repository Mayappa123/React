import React from "react";
import { Outlet } from "react-router-dom";

function Services() {
  return (
    <>
      <div>Services</div>
      <Outlet />
    </>
  );
}

export default Services;
