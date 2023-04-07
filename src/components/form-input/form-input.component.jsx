import "./form-input.style.jsx";
import { FormInputLabel, Input, Group } from "../form-input/form-input.style";
const FormInput = ({ label, ...other }) => {
  return (
    <Group>
      <Input {...other} />
      {label && (
        <FormInputLabel shrink={other.value.length}>{label}</FormInputLabel>
      )}
    </Group>
  );
};
export default FormInput;
