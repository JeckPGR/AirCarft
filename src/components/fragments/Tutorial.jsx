import OutlineButton from "../Elements/Button/OutlineButton";
import PlayButton from "../Elements/Button/PlayButton";
import PropTypes from "prop-types";
const Tutorial = ({ title, children, type, buttonNeed, imgUrl }) => {
  return (
    <>
      <div
        className={`flex gap-y-6 justify-between  items-center py-11 px-6 md:px-3 lg:px-20 mt-5 lg:mt-10 flex-col-reverse  ${
          type ? " md:flex-row" : "md:flex-row-reverse"
        } `}
      >
        <div className="font-poppins md:w-72 w-[97%] text-justify lg:w-96 flex flex-col items-center gap-y-3">
          <h3 className=" font-bold text-3xl lg:text-4xl w-full text-darkblue">
            {title}
          </h3>
          <p className=" text-secondary text-base w-full md:text-lg">
            {children}
          </p>
          <div
            className={`flex w-full  mt-2 items-center lg:items-start  ${
              type
                ? "justify-around lg:justify-between"
                : "justify-center lg:justify-start"
            }`}
          >
            {buttonNeed ? (
              <>
                <OutlineButton
                  text="Start Design"
                  custom="w-28 text-sm lg:w-32 lg:text-base"
                />
                <PlayButton text="Watch Tutorial" custom="text-lg" />
              </>
            ) : (
              <PlayButton text="Watch Tutorial" />
            )}
          </div>
        </div>
        <div>
          <img src={imgUrl} alt="Picture" className="md:w-96" />
        </div>
      </div>
    </>
  );
};

Tutorial.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  type: PropTypes.bool,
  buttonNeed: PropTypes.bool,
  imgUrl: PropTypes.string.isRequired,
};

export default Tutorial;
