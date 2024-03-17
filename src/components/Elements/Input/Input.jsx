import PropTypes from "prop-types";

const Input = ({ type, placeholder, name }) => {
  return (
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      className="text-sm border rounded w-full py-2 px-3 placeholder:opacity-40"
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;
