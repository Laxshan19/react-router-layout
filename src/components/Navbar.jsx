import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Lax Logo</div>
      <ul>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/products"><li>Products</li></NavLink>
        <NavLink to="/contact"><li>Contact</li></NavLink>
        <NavLink to="/about"><li>About</li></NavLink>
        {/* if we use "NavLink" tag intead of "Link" we can get the active class which is active that time */}
      </ul>
      <NavLink to="/dashboard"><button>Login</button></NavLink>
    </div>
  );
};

export default Navbar;
