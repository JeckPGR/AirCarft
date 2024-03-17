import PropTypes from "prop-types";
export default function OutlineButton({ text, custom, type = "button" }) {
  return (
    <div>
      <button
        type={type}
        className={` w-24 h-11 rounded-3xl font-Poppins text-primary border-2 border-primary font-semibold text-base hover:text-white hover:bg-primary duration-300 ${custom}`}
      >
        {text}
      </button>
    </div>
  );
}
OutlineButton.propTypes = {
  text: PropTypes.string.isRequired,
  custom: PropTypes.string,
  type: PropTypes.string,
};
