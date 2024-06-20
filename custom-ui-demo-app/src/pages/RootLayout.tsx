// import { Nav, Navbar, NavbarBrand, NavbarLinks } from "custom-react-components";
import { Outlet, useNavigation } from "react-router-dom";
function RootLayout() {
  const navigation = useNavigation();

  return (
    <>
      {/* <Navbar theme="light">
        <NavbarBrand
          logoSrc="https://placehold.co/90x35?text=Brand+Logo"
          altText="Brand logo"
        />
        <Nav>
          <NavbarLinks url="/" title="Home" />
          <NavbarLinks url="/" title="home" />
        </Nav>
      </Navbar> */}
      <main>
        {navigation.state === "loading" && <p>Loading ...</p>}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
