import React, { MouseEventHandler } from "react";
import "./Button.scss";
interface ButtonProps {
  variant: string;
  label: string;
  disabled?: boolean;
  size?: string;
  onClick?: MouseEventHandler;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const btnDisabledClass = props.disabled ? "btn-disabled" : "";
  const btnSizeClass = props.size === "lg" ? "btn-lg" : "";
  let classNames = `btn btn-${props.variant} ${btnDisabledClass} ${btnSizeClass}`;

  return (
    <button
      type="button"
      className={classNames}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default Button;
