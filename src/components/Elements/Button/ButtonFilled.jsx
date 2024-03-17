import PropTypes from "prop-types";
export default function ButtonFilled({ text, custom, type = "button" }) {
  return (
    <div>
      <button
        type={type}
        className={` bg-primary w-24 h-11 rounded-3xl font-Poppins text-white font-semibold active:bg-primary/75  text-base hover:shadow-shadow/60 hover:drop-shadow-xl duration-300 ${custom}`}
      >
        {text}
      </button>
    </div>
  );
}
ButtonFilled.propTypes = {
  text: PropTypes.string.isRequired,
  custom: PropTypes.string,
  type: PropTypes.string,
};
