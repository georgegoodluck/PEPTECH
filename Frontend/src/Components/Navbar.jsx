import React from "react";
import oauLogo from "/oau-logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "#333",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img src={oauLogo} alt="OAU Logo" style={{ height: "40px" }} />
      <ul
        style={{
          listStyleType: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          gap: "20px",
        }}
      >
        <li>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/our-department"
            style={{ color: "white", textDecoration: "none" }}
          >
            Our Department
          </Link>
        </li>
        <li>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Research
          </a>
        </li>
        <li>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Academics
          </a>
        </li>
        <li>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Resources
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
