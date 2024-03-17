import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import PropTypes from "prop-types";

export default function Accord({ title, children }) {
  const [AccordionIsOpen, setAccordionIsOpen] = useState(false);

  return (
    <div className=" bg-white  ">
      <button
        className={` px-3 py-4 text-lg rounded-sm text-secondary flex justify-between w-full items-center  transition-all duration-300   
        ${AccordionIsOpen && "bg-primary/70 text-white "}`}
        onClick={() => setAccordionIsOpen(!AccordionIsOpen)}
      >
        <span className="text-sm md:text-base text-left">{title}</span>
        <span
          className={` transform origin-center transition duration-200 ease-out ${
            AccordionIsOpen && " !rotate-180"
          }`}
        >
          {AccordionIsOpen ? <FiMinus /> : <FiPlus />}
        </span>
      </button>
      <div
        className={`p-3 h-ful   text-justify grid overflow-hidden transition-all duration-500 ease-in-out text-secondary text-base 
        ${
          AccordionIsOpen
            ? "  max-h-96 opacity-100 "
            : " hidden  max-h-0 opacity-0"
        }`}
      >
        <p className="overflow-hidden text-xs md:text-sm px-5 ">{children}</p>
      </div>
    </div>
  );
}

Accord.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
