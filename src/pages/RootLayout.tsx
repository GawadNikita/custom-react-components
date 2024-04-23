import { Outlet, useNavigation } from "react-router-dom";
import SideNavigation from "../components/SideNavigation/SideNavigation";
function RootLayout() {
  const navigation = useNavigation();

  return (
    <>
      <SideNavigation />
      <main>
        {navigation.state === "loading" && <p>Loading ...</p>}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
