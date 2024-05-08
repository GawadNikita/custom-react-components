import { NavbarInterface } from "../../interface/navbar.interface";
import "./Navbar.scss";

const Navbar = (props: NavbarInterface) => {
  const linksToRight = props.linksToRight ? "navbar-links-right" : "";
  return (
    <>
      <div className={`navbar-wrapper navbar-${props.theme} ${linksToRight}`}>
        {props.children}
      </div>
    </>
  );
};
export default Navbar;
