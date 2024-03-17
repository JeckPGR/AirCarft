import PropTypes from "prop-types";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Contactcard({
  title,
  children,
  buttonname,
  icon,
  size,
  link,
}) {
  return (
    <div
      to={link}
      className="   cursor-pointer hover:drop-shadow-xl duration-300 w-72 h-56 lg:w-96 lg:h-72 relative font-Poppins z-10 bg-white pt-10  rounded-sm  flex flex-col items-center justify-between shadow-md"
    >
      <div className=" flex justify-center items-center absolute rounded-full size-20 drop-shadow-md bg-white -top-12 text-primary">
        {icon && React.createElement(icon, { size: size || 10 })}
      </div>
      <h4 className=" text-3xl lg:text-4xl ">{title}</h4>
      <p className="text-secondary w-60 lg:w-72 lg:text-xl text-base text-center">
        {children}
      </p>
      <Link
        to={link}
        className=" w-full bg-primary/30 hover:bg-primary/40 duration-100  text-darkblue h-9 flex items-center gap-x-4 justify-center"
      >
        {buttonname} <FaArrowRight />
      </Link>
    </div>
  );
}

Contactcard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  buttonname: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  size: PropTypes.number,
};
