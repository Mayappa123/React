import { NavLink,Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h2>Contact Page</h2>
      <button>
        <NavLink to="contact-us">Call us</NavLink>
      </button>
      <button>
        <NavLink to="address">Drop a mail</NavLink>
      </button>
      <Outlet />
    </div>
  );
};

export default Contact;
