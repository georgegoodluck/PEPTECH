import React from "react";
import oauLogo from "/oau-logo.jpg";
import { Link } from "react-router-dom";

const navLinkStyle = { color: "white", textDecoration: "none" };

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
          <Link to="/" style={navLinkStyle}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/our-department"
            style={navLinkStyle}
          >
            Our Department
          </Link>
        </li>
        <li>
          <a href="#" style={navLinkStyle}>
            Research
          </a>
        </li>
        <li>
          <a href="#" style={navLinkStyle}>
            Academics
          </a>
        </li>
        <li>
          <a href="#" style={navLinkStyle}>
            Resources
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
