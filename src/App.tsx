import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import ButtonPage from "./pages/ButtonPage";
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
    ],
  },
]);
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
