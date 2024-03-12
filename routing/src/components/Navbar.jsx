import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul>
      <li>
        <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products"
          style={{ color: "white", textDecoration: "none" }}
        >
          Products
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" style={{ color: "white", textDecoration: "none" }}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          style={{ color: "white", textDecoration: "none" }}
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/lifeCycle"
          style={{ color: "white", textDecoration: "none" }}
        >
          life Cycle
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/axios"
          style={{ color: "white", textDecoration: "none" }}
        >
          Axios
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
