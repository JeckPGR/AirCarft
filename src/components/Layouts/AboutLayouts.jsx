import { Aboutimg } from "../Elements/Aboutimage";
import AboutImage from "/images/About.jpg";
import PropTypes from "prop-types";
import Profile from "/images/Profile.png";
import Vision from "/images/Vision.png";
import { useState } from "react";
export const About = () => {
  const [navigationType, setnavigationType] = useState("profile");

  return (
    <>
      <Aboutimg url={AboutImage} />
      <AboutHeading />
      <div className="flex w-full justify-center mt-8 lg:mt-14">
        <div className="flex w-3/4 md:gap-0 gap-x-5  justify-between">
          <button
            onClick={() => setnavigationType("profile")}
            className={`border-b-2 h-16 md:h-10  ${
              navigationType === "profile"
                ? "border-b-primary -translate-y-5 ease-in-out transition duration-500"
                : "border-b-secondary -translate-y-0 transition duration-300 ease-linear"
            } text-base w-24 md:w-fit lg:text-2xl text-darkblue font-semibold`}
          >
            Profile Company
          </button>
          <button
            onClick={() => setnavigationType("vision")}
            className={`border-b-2 h-16 md:h-10 ${
              navigationType === "vision"
                ? "border-b-primary -translate-y-5 ease-in-out transition duration-500"
                : "border-b-secondary -translate-y-0 transition duration-300 ease-linear "
            } text-base w-24 md:w-fit lg:text-2xl text-darkblue font-semibold`}
          >
            Mission Vission
          </button>
        </div>
      </div>
      <Navigation type={navigationType} />
    </>
  );
};

const AboutHeading = () => {
  return (
    <div className="text-center flex flex-col md:items-start lg:pt-16  items-center md:text-left w-full md:w-3/4 lg:w-2/4 md:m-8 space-y-3 mt-10 ">
      <h2 className="text-primary text-3xl lg:text-5xl font-semibold w-full md:w-2/3 lg:w-3/4 leading-normal">
        Soaring into the Future of Aircraft Design
      </h2>
      <p className=" w-3/4 text-xs  md:text-sm font-medium  text-secondary/80">
        Embark on a journey of innovation and creativity with AirCarft.
      </p>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "profile") {
    return (
      <>
        <div className="flex lg:flex-row gap-y-6 flex-col-reverse py-7 md:px-16 px-10 items-center mb-20 ">
          <div className=" w-full lg:w-1/2 text-justify text-secondary text-base md:text-lg">
            <p>
              At AirCarft, we are driven by our unwavering passion for aviation
              and the boundless possibilities it offers. As fervent enthusiasts
              ourselves, we understand the thrill of seeing ideas take flight,
              quite literally. Our platform is more than just a collection of
              tools; it&apos;s a vibrant community where budding designers and
              seasoned professionals converge to explore, learn, and innovate in
              the dynamic realm of aircraft design.
              <br />
              <br /> With a commitment to excellence and a dedication to
              nurturing creativity, AirCarft provides a comprehensive yet
              intuitive online environment where individuals can unleash their
              imagination and bring their aerospace visions to life.
            </p>
          </div>
          <div className=" w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img src={Profile} alt="Profile" />
          </div>
        </div>
      </>
    );
  } else if (type === "vision") {
    return (
      <>
        <div className="flex lg:flex-row gap-y-6 flex-col-reverse py-7 md:px-16 px-10 items-center mb-20 ">
          <div className=" w-full lg:w-1/2 text-justify space-y-4 text-secondary text-base md:text-lg">
            <div>
              <h3> Vision </h3>
              <p>
                to lead a revolution in aircraft design education by leveraging
                innovative technology. We aspire to inspire tomorrow&apos;s
                aviators through immersive and interactive learning experiences
                that push the boundaries of what&apos;s possible in aerospace
                innovation.
              </p>
            </div>
            <div>
              <h3>Mission </h3>
              <ul className="list-disc px-6">
                <li>
                  Provide Accessible and Engaging Resources to Foster a New
                  Generation of Aircraft Designers
                </li>
                <li>
                  {" "}
                  Cultivate a Global Community of Aviation Innovators by
                  Offering Comprehensive Training and Support
                </li>
              </ul>
            </div>
          </div>
          <div className=" w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img src={Vision} alt="VIsion&Mission" />
          </div>
        </div>
      </>
    );
  }
};

Navigation.propTypes = {
  type: PropTypes.string.isRequired,
};
