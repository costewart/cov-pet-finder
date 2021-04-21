import React from "react";
import { Link } from "react-router-dom";
import logo from "../../vanCityLogo.png";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="logo-wrapper">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <h1>Find Your Pet</h1>
    </div>
  );
};
export default TopBar;
