import React from "react";
import Button from "../components/Button/Button";

const ButtonPage: React.FC = () => {
  return (
    <>
      <h2>Buttons</h2>
      <div>
        <h4>Example for Button themes</h4>
        <Button variant="primary" label="Primary" />
        <Button variant="secondary" label="Secondary" />
        <Button variant="no-theme" label="Plain Button" />
      </div>

      <div>
        <h4>Example for disabled button</h4>
        <Button variant="primary" disabled label="Primary" />
        <Button variant="secondary" disabled label="Secondary" />
        <Button variant="no-theme" disabled label="Plain Button" />
      </div>

      <div>
        <h4>Example for button size</h4>
        <Button variant="primary" label="Primary" size="lg" />
        <Button variant="secondary" label="Secondary" size="lg" />
        <Button variant="no-theme" label="Plain Button" size="lg" />
      </div>
    </>
  );
};

export default ButtonPage;
