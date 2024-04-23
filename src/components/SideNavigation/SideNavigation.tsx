import React from "react";
import { Link } from "react-router-dom";
import "./SideNavigation.scss";
const SideNavigation: React.FC = () => {
  const activeCssClass: any = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? "active" : "";
  };
  return (
    <aside className="sidebar-container">
      <h2>Components</h2>
      <nav>
        <ul className="side-nav-list">
          <li>
            <Link
              // className={({ isActive: string | undefined }) => (isActive ? "active" : undefined)}
              className={activeCssClass}
              to="/button"
            >
              Button {activeCssClass}
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideNavigation;
