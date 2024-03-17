import OutlineButton from "../Elements/Button/OutlineButton";
import PropTypes from "prop-types";

const InfoGraph = ({ title, images }) => {
  return (
    <>
      <div className="flex  justify-center ">
        <div className=" w-80 h-96 flex flex-col justify-around items-center">
          <img src={images} alt="Crafting" className=" w-48 h-44" />
          <h2 className="font-poppins font-bold text-lg">{title}</h2>
          <p className="font-poppins  text-secondary w-72 text-center">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries.
          </p>
          <OutlineButton text="Learn More" custom="w-28" />
        </div>
        <div></div>
      </div>
    </>
  );
};

InfoGraph.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
};

export default InfoGraph;
