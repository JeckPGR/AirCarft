import { MdPlayCircleFilled } from "react-icons/md";
import PropTypes from "prop-types";
export default function PlayButton({ text, custom }) {
  return (
    <div>
      <button
        className={`flex ${custom} text-secondary text-5xl items-center justify-center gap-x-2 group hover:text-gray-600/90 duration-100`}
      >
        {" "}
        <MdPlayCircleFilled size={44} />
        <span className="text-lg group-hover:text-gray-600/90 duration-100">
          {text}
        </span>
      </button>
    </div>
  );
}

PlayButton.propTypes = {
  text: PropTypes.string.isRequired,
  custom: PropTypes.string,
};
