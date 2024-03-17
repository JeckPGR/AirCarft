import PropTypes from "prop-types";
import { IoIosArrowDown } from "react-icons/io";

export const Aboutimg = ({ url }) => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${url})` }}
        className="w-full relative min-h-screen bg-no-repeat grayscale folter bg-fixed bg-center bg-cover text-white text-6xl md:text-8xl font-semibold flex justify-center items-center"
      >
        <h1>About Us</h1>
        <div className="absolute bottom-4 lg:bottom-20 right-1/2 translate-x-1/2 animate-bounce W">
          <IoIosArrowDown size={35} />
        </div>
      </div>
    </>
  );
};

Aboutimg.propTypes = {
  url: PropTypes.string.isRequired,
};
