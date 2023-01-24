import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">Exercise Tracker</Link>
      <ul className="navbar-nav">
        <li className="navbar-item">
          <Link to="/" className="nav-link">Exercises</Link>
        </li>
        <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Exercise Log</Link>
        </li>
        <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
