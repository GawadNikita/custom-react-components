import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import ButtonPage from "./pages/ButtonPage";
import ComponentsLayout from "./pages/ComponentsLayout";
import HomePage from "./pages/HomePage";
import ModalPage from "./pages/ModalPage";
import NavbarPage from "./pages/NavbarPage";
import RootLayout from "./pages/RootLayout";
import { ROUTES } from "./routes.constant";
const routes = createBrowserRouter([
  {
    path: ROUTES.HOME.url,
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: ROUTES.COMPONENTS.groupId,
        element: <ComponentsLayout />,
        children: [
          {
            index: true,
            path: ROUTES.COMPONENTS.BUTTON.pageId,
            element: <ButtonPage />,
          },
          {
            path: ROUTES.COMPONENTS.NAVBAR.pageId,
            element: <NavbarPage />,
          },
          {
            path: ROUTES.COMPONENTS.MODAL.pageId,
            element: <ModalPage />,
          },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
