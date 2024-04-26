import Navbar from "../components/Navbar/Navbar";
import NavbarLinks from "../components/Navbar/NavbarLinks";
// import { NavbarContextProvider } from "../components/Navbar/Navbar.Context";
import { ROUTES } from "../routes.constant";

function NavbarPage() {
  return (
    <>
      <Navbar theme="light">
        <NavbarLinks
          url={ROUTES.COMPONENTS.BUTTON.url}
          title={ROUTES.COMPONENTS.BUTTON.title}
        />
      </Navbar>
      <Navbar theme="dark"></Navbar>
      {/* <NavbarContextProvider value={value}></NavbarContextProvider> */}
    </>
  );
}

export default NavbarPage;
