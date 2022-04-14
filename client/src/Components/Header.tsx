import React from "react";
import logo from "../Assets/Ubiquiti_logo.png";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img className="header-logo" src={logo} alt="logo" />
      <h1 className="header-devices">Devices</h1>
      <h1 className="header-author">Author/Developer Name</h1>
    </div>
  );
};

export default Header;
