import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavbarDropDown = (props: any) => {
  const [isDropDownVisibile, setIsDropDownVisibile] = useState(false);
  let dropdownCssClasses = `nav-dropdown-options-wrapper dropdown-hidden`;
  function toggleDropdownOptions(flag: boolean) {
    setIsDropDownVisibile(flag);
    dropdownCssClasses += flag ? "dropdown-visible" : "dropdown-hidden";
  }
  return (
    <>
      <div className="nav-dropdown">
        <NavLink
          to="#"
          onClick={() => toggleDropdownOptions(!isDropDownVisibile)}
          className="nav-dropdown-link"
        >
          {props.title}
          <span className="material-icon material-symbols-outlined">
            arrow_drop_down
          </span>
          {isDropDownVisibile && (
            <div className={dropdownCssClasses}>{props.children}</div>
          )}
        </NavLink>
      </div>
    </>
  );
};

export default NavbarDropDown;
