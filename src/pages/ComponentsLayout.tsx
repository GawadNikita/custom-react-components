import { Outlet } from "react-router-dom";

function ComponentsLayout() {
  return (
    <>
      Check out the components available !
      <Outlet />
    </>
  );
}

export default ComponentsLayout;
