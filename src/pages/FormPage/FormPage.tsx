import FormCheckbox from "../../components/FormCheckbox/FormCheckbox";

function FormPage() {
  return (
    <>
      <h2>Form elements</h2>
      <div>
        <h4>Checkboxes</h4>
        <FormCheckbox label="Option 1" group="Example1" />
        <FormCheckbox label="Option 2" group="Example1" />
        <FormCheckbox label="Option 3" group="Example1" />
      </div>

      <div>
        <h4>Disabled Checkboxes</h4>
        <FormCheckbox label="Option 1" group="Example1" />
        <FormCheckbox label="Option 2" group="Example1" />
        <FormCheckbox label="Option 3" group="Example1" disabled />
      </div>
    </>
  );
}
export default FormPage;
