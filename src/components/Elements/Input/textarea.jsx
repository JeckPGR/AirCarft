import PropTypes from "prop-types";
const Textarea = ({ name, placeholder }) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      className="w-full border p-2 resize-none placeholder:text-sm placeholder:text-secondary/50"
      cols={50}
      rows={7}
    ></textarea>
  );
};

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Textarea;
