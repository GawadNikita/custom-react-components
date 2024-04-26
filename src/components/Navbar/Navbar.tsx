import React from "react";
import { NavbarInterface } from "../../interface/navbar.interface";
import "./Navbar.scss";

const Navbar: React.FC<NavbarInterface> = (values: NavbarInterface) => {
  const cssClass = `navbar-wrapper navbar-${values.theme}`;
  return (
    <>
      <div className={cssClass}>
        <div className="navbar-logo">
          <img
            src="https://placehold.co/120x60?text=Brand+Logo"
            alt="Main brand logo"
          />
        </div>
      </div>
    </>
  );
};
export default Navbar;
