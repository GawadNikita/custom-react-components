import Navbar from "../components/Navbar/Navbar";
import NavbarDropDown from "../components/Navbar/NavbarDropDown";
import NavbarLinks from "../components/Navbar/NavbarLinks";
// import { NavbarContextProvider } from "../components/Navbar/Navbar.Context";
import { ROUTES } from "../routes.constant";

function NavbarPage() {
  return (
    <>
      <h2>Navbar</h2>
      <div>
        <h3>Setting theme</h3>
        <p>theme:string = 'light' | 'dark'</p>
        <Navbar theme="light">
          <NavbarLinks url="/" title="Home" />
          <NavbarLinks
            url={ROUTES.COMPONENTS.BUTTON.url}
            title={ROUTES.COMPONENTS.BUTTON.title}
          />
        </Navbar>

        <Navbar theme="dark">
          <NavbarLinks url="/" title="Home" />
          <NavbarLinks
            url={ROUTES.COMPONENTS.BUTTON.url}
            title={ROUTES.COMPONENTS.BUTTON.title}
          />
        </Navbar>
      </div>

      <div>
        <h3>Aligning the links</h3>
        <p>linksToRight?: boolean</p>
        <Navbar theme="light" linksToRight>
          <NavbarLinks url="/" title="Home" />
          <NavbarLinks
            url={ROUTES.COMPONENTS.BUTTON.url}
            title={ROUTES.COMPONENTS.BUTTON.title}
          />
        </Navbar>
      </div>

      <div>
        <div>
          <h3>Navbar with dropdown</h3>
          <Navbar theme="light">
            <NavbarLinks url="/" title="Home" />
            <NavbarLinks
              url={ROUTES.COMPONENTS.BUTTON.url}
              title={ROUTES.COMPONENTS.BUTTON.title}
            />
            <NavbarDropDown title="Dropdown">
              <NavbarLinks url="/" title="Option 1" />
              <NavbarLinks
                url={ROUTES.COMPONENTS.BUTTON.url}
                title="Option 2"
              />
              <NavbarLinks url="/" title="Option 3" />
            </NavbarDropDown>
            <NavbarLinks
              url={ROUTES.COMPONENTS.BUTTON.url}
              title="Another link"
            />
          </Navbar>

          <Navbar theme="dark">
            <NavbarLinks url="/" title="Home" />
            <NavbarLinks
              url={ROUTES.COMPONENTS.BUTTON.url}
              title={ROUTES.COMPONENTS.BUTTON.title}
            />
            <NavbarDropDown title="Dropdown">
              <NavbarLinks url="/" title="Option 1" />
              <NavbarLinks
                url={ROUTES.COMPONENTS.BUTTON.url}
                title="Option 2"
              />
              <NavbarLinks url="/" title="Option 3" />
            </NavbarDropDown>

            <NavbarLinks
              url={ROUTES.COMPONENTS.BUTTON.url}
              title="Another link"
            />
          </Navbar>
        </div>
      </div>

      <div>
        <h3>Placement of navbar</h3>
        <p>fixed?: string = 'top' | 'bottom'</p>
        <Navbar theme="light" linksToRight>
          <NavbarLinks url="/" title="Home" />
          <NavbarLinks
            url={ROUTES.COMPONENTS.BUTTON.url}
            title={ROUTES.COMPONENTS.BUTTON.title}
          />
        </Navbar>
      </div>
    </>
  );
}

export default NavbarPage;
