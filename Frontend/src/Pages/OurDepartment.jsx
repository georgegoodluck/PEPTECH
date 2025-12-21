import React from "react";
import "./OurDepartment.css";

const OurDepartment = () => {
  return (
    <div className="department-container">
      <h1 className="department-header">Our Department</h1>
      <div className="department-content">
        <img src="/oau-logo.jpg" alt="Department Image" className="department-image" />
        <p className="department-text">
          Welcome to our department. Here we focus on innovation and excellence in technology.
        </p>
      </div>
    </div>
  );
};

export default OurDepartment;
