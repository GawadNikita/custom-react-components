import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import ButtonPage from "./pages/ButtonPage";
import FormPage from "./pages/FormPage/FormPage";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/button",
        element: <ButtonPage />,
      },
      {
        path: "/checkbox",
        element: <FormPage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
