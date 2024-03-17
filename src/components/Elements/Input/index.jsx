import Label from "./label";
import Input from "./Input";

import PropTypes from "prop-types";

const InputForm = ({ label, name, type, placeholder }) => {
  return (
    <div className="mb-5">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} />
      <br />
    </div>
  );
};
InputForm.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default InputForm;
