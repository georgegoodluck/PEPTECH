import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Hero";
import OurDepartment from "./Pages/OurDepartment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./index.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-department" element={<OurDepartment />} />
      </Routes>
    </Router>
  );
};

export default App;
