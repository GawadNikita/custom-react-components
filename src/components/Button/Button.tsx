import "./Button.scss";
interface ButtonProps {
  variant: string;
  label: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const isBtnDisabled = props.disabled ? "btn-disabled" : "";
  let classNames = `btn btn-${props.variant} ${isBtnDisabled}`;

  return (
    <button type="button" className={classNames} disabled={props.disabled}>
      {props.label}
    </button>
  );
};

export default Button;
