import { Link } from "react-router-dom";
import ButtonFilled from "../Button/ButtonFilled";
import OutlineButton from "../Button/OutlineButton";
import Dropdown from "../Dropdown";
import { RxHamburgerMenu } from "react-icons/rx";

import { MdOutlineClose } from "react-icons/md";

import { useState } from "react";
const aboutItems = [
  { label: "Company", element: "/about" },
  { label: "3D Design", element: "/3D Design" },
];

const servicesItems = [
  { label: "Mentoring", element: "/mentor" },
  { label: "Classroom", element: "/classroom" },
  { label: "Tutorial", element: "/tutorial" },
];
export default function Navbar() {
  const [IsOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!IsOpen);
  };

  return (
    <>
      <nav className="w-full z-10 flex items-center justify-between px-7 lg:px-14 py-4 border bg-transparent   border-bottom border-b border-b-secondary/50 ">
        <Link to="/" className=" font-Julius text-4xl">
          Air<span className=" text-darkblue">Carft</span>
        </Link>
        <button
          onClick={handleIsOpen}
          className={` lg:hidden hover:bg-secondary/10 p-2 rounded-full transform origin-center transition duration-200 ease-in-out ${
            IsOpen && "!rotate-180"
          }`}
        >
          {IsOpen ? (
            <MdOutlineClose size={26} />
          ) : (
            <RxHamburgerMenu size={26} />
          )}
        </button>
        <div
          className={`absolute lg:static top-[75px]  flex bg-white lg:border-none  border-b l border-secondary  lg:h-fit  w-full lg:w-fit -left-96 z-20 transition-all duration-700  lg:flex gap-x-2
          ${
            IsOpen ? "opacity-100 translate-x-96" : "opacity-0 lg:opacity-100 "
          }`}
        >
          <ul className="flex mt-4  flex-col  w-full justify-start  lg:flex-row lg:mt-0 px-3 gap-y-4 md:text-xl md:gap-y-7 z-20 md:items-center gap-x-6 lg:text-base  font-Poppins">
            <li>
              <Dropdown
                title="About"
                items={aboutItems}
                url="/about"
                {...aboutItems.element}
              />
            </li>
            <li>
              <Dropdown
                title="Services"
                items={servicesItems}
                url="/services"
                {...servicesItems.element}
              />
            </li>
            <li className="mt-3 lg:mt-0">
              <Link
                to="/contact"
                className="  text-secondary duration-150 hover:bg-secondary/10 py-2 px-3 rounded-full hover:text-black  "
              >
                Contact
              </Link>
            </li>
            <div className="flex gap-x-3 justify-center my-6 lg:my-0">
              <Link to="/login">
                <ButtonFilled text="Log In" />
              </Link>
              <Link to="/register">
                <OutlineButton text="Sign Up" />
              </Link>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}
