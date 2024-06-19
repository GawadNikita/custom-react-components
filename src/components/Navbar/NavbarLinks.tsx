import React from "react";
import { NavLink } from "react-router-dom";
import { NavLinksInterface } from "../../interface/navbar.interface";

const NavbarLinks: React.FC<NavLinksInterface> = (link: NavLinksInterface) => {
  return (
    <>
      <NavLink to={link.url}>{link.title}</NavLink>
    </>
  );
};

export default NavbarLinks;
