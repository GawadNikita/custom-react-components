import { NavbarLogoInterface } from "../../interface/navbar.interface";

const NavbarBrand = (props: NavbarLogoInterface) => {
  return (
    <>
      <div className="navbar-logo">
        <img src={props.logoSrc} alt={props.altText} />
        {props.title && <h1>{props.title}</h1>}
      </div>
    </>
  );
};

export default NavbarBrand;
