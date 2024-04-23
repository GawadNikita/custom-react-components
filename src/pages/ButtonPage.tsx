import React from "react";
import Button from "../components/Button/Button";

const ButtonPage: React.FC = () => {
  return (
    <>
      <h2>Buttons</h2>
      <div>
        <h4>Example 1 | Primary Button</h4>
        <Button variant="primary" label="Primary" />
      </div>

      <div>
        <h4>Example 2 | Secondary Button</h4>
        <Button variant="secondary" label="Secondary" />
      </div>

      <div>
        <h4>Example 3 | Disabled Button</h4>
        <Button variant="primary" disabled label="Primary" />
        <Button variant="secondary" disabled label="Secondary" />
      </div>
    </>
  );
};

export default ButtonPage;
