import React from "react";
import { NavInterface } from "../../interface/navbar.interface";
import "./Navbar.scss";

const Nav = (props: NavInterface) => {
  return (
    <>
      <div className="nav-wrapper">{props.children}</div>
    </>
  );
};
export default Nav;
