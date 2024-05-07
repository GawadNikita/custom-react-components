import Nav from "../components/Navbar/Nav";
import Navbar from "../components/Navbar/Navbar";
import NavbarBrand from "../components/Navbar/NavbarBrand";
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
          <NavbarBrand
            logoSrc="https://placehold.co/90x35?text=Brand+Logo"
            altText="Brand logo"
          />
          <Nav>
            <NavbarLinks url="/" title="Home" />
            <NavbarLinks
              url={ROUTES.COMPONENTS.BUTTON.url}
              title={ROUTES.COMPONENTS.BUTTON.title}
            />
          </Nav>
        </Navbar>

        <Navbar theme="dark">
          <NavbarBrand
            logoSrc="https://placehold.co/90x35?text=Brand+Logo"
            altText="Brand logo"
          />
          <Nav>
            <NavbarLinks url="/" title="Home" />
            <NavbarLinks
              url={ROUTES.COMPONENTS.BUTTON.url}
              title={ROUTES.COMPONENTS.BUTTON.title}
            />
          </Nav>
        </Navbar>
      </div>

      <div>
        <h3>Aligning the links</h3>
        <p>linksToRight?: boolean</p>
        <Navbar theme="light" linksToRight>
          <NavbarBrand
            logoSrc="https://placehold.co/90x35?text=Brand+Logo"
            altText="Brand logo"
          />
          <Nav>
            <NavbarLinks url="/" title="Home" />
            <NavbarLinks
              url={ROUTES.COMPONENTS.BUTTON.url}
              title={ROUTES.COMPONENTS.BUTTON.title}
            />
          </Nav>
        </Navbar>
      </div>

      <div>
        <div>
          <h3>Navbar with dropdown</h3>
          <Navbar theme="light">
            <NavbarBrand
              logoSrc="https://placehold.co/90x35?text=Brand+Logo"
              altText="Brand logo"
            />
            <Nav>
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
            </Nav>
          </Navbar>
        </div>
      </div>

      <div>
        <h3>Placement of navbar</h3>
        <p>fixed?: string = 'top' | 'bottom'</p>
        <Navbar theme="light" linksToRight>
          <NavbarBrand
            logoSrc="https://placehold.co/90x35?text=Brand+Logo"
            altText="Brand logo"
          />
          <Nav>
            <NavbarLinks url="/" title="Home" />
            <NavbarLinks
              url={ROUTES.COMPONENTS.BUTTON.url}
              title={ROUTES.COMPONENTS.BUTTON.title}
            />
          </Nav>
        </Navbar>
      </div>

      <div>
        <h3>Navbar with Logo and title</h3>

        <Navbar theme="light" linksToRight>
          <NavbarBrand
            logoSrc="https://placehold.co/90x35?text=Brand+Logo"
            altText="Brand logo"
            title="React Custom UI"
          />
          <Nav>
            <NavbarLinks url="/" title="Home" />
            <NavbarLinks
              url={ROUTES.COMPONENTS.BUTTON.url}
              title={ROUTES.COMPONENTS.BUTTON.title}
            />
          </Nav>
        </Navbar>
      </div>

      <div>
        <h3>Navbar without brand logo</h3>

        <Navbar theme="light">
          <Nav>
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
          </Nav>
        </Navbar>
      </div>
    </>
  );
}

export default NavbarPage;
