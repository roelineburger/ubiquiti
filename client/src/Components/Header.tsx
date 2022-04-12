import React from "react";
import logo from "../Assets/Ubiquiti_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/list">
        <img src={logo} alt="logo" />
      </Link>
      <h1>Devices</h1>
      <h1>Author/Developer Name</h1>
    </div>
  );
};

export default Header;
