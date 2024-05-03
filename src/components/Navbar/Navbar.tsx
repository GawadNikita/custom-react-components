import "./Navbar.scss";

const Navbar = (props: any) => {
  const linksToRight = props.linksToRight ? "navbar-links-right" : null;
  let cssClass = `navbar-wrapper navbar-${props.theme} ${linksToRight}`;
  return (
    <>
      <div className={cssClass}>
        <div className="navbar-logo">
          <img
            src="https://placehold.co/90x35?text=Brand+Logo"
            alt="Main brand logo"
          />
        </div>
        <div className="navbar-links">{props.children}</div>
      </div>
    </>
  );
};
export default Navbar;
