import React from "react";
import logo from "./Ubiquiti_logo.png";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src={logo} alt="logo" />
      </Link>
      <h1 className="header-devices">Devices</h1>
      <h1 className="header-author" data-testid="author">
        Roeline Burger
      </h1>
    </div>
  );
};

export default Header;
