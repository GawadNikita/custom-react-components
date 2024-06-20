import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export { default as Button } from "./components/Button/Button";
export { default as Modal } from "./components/Modal/Modal";
export { default as ModalBody } from "./components/Modal/ModalBody";
export { default as ModalFooter } from "./components/Modal/ModalFooter";
export { default as ModalTitle } from "./components/Modal/ModalTitle";
export { default as Nav } from "./components/Navbar/Nav";
export { default as Navbar } from "./components/Navbar/Navbar";
export { default as NavbarBrand } from "./components/Navbar/NavbarBrand";
export { default as NavbarDropDown } from "./components/Navbar/NavbarDropDown";
export { default as NavbarLinks } from "./components/Navbar/NavbarLinks";

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
