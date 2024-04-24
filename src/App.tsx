import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import ButtonPage from "./pages/ButtonPage";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";
import { ROUTES } from "./routes.constant";
const routes = createBrowserRouter([
  {
    path: ROUTES.HOME.url,
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: ROUTES.COMPONENTS.BUTTON.url,
        element: <ButtonPage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
