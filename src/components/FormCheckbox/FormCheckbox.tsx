import React from "react";
import "./FormCheckbox.scss";

interface CheckBoxInterface {
  label: string;
  group: string;
  disabled?: boolean;
}

const FormCheckbox: React.FC<CheckBoxInterface> = (
  props: CheckBoxInterface
) => {
  let classNames = "";
  const checkBoxDisabledClass = props.disabled ? "disabled" : "";
  classNames = `form-checkbox-wrapper ${checkBoxDisabledClass}`;
  return (
    <div className={classNames}>
      <input
        className="form-check-element"
        type="checkbox"
        id="form-checkbox"
        name={props.group}
        disabled={props.disabled}
      />
      <label className="form-check-label" htmlFor="form-checkbox">
        {props.label}
      </label>
    </div>
  );
};

export default FormCheckbox;
