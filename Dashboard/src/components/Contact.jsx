import React from 'react'
import { Outlet } from "react-router-dom";


function Contact() {
  return (
    <>
      <div>Contact</div>
      <Outlet />
    </>
  );
}

export default Contact