import { NavLink } from "react-router-dom";
import { NavLinksInterface } from "../../interface/navbar.interface";

const NavbarLinks = (link: NavLinksInterface) => {
  return <NavLink to={link.url}>{link.title}</NavLink>;
};

export default NavbarLinks;
