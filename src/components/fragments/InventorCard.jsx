import PropTypes from "prop-types";
import { MdMoreTime } from "react-icons/md";

export default function InventorCard({ children, name, where, exp, imgUrl }) {
  return (
    <div className="flex md:flex-row relative flex-col-reverse pb-6 pt-7 gap-y-3  md:h-fit px-3 gap-x-6 h-72 md:w-[521px] w-full items-center justify-between bg-white rounded-2xl">
      <div className="flex flex-col gap-y-3 font-Poppins text-center md:text-left items-center w-60 text-secondary font-medium">
        <div className="  max-h-28 w-full">
          <p className=" text-lg">{children}</p>
        </div>
        <div className="flex flex-col text-xs w-full">
          <p>{name}</p>
          <div className="flex flex-col md:flex-row gap-y-2 items-center justify-between w-full">
            <p>{where}</p>
            <div className="flex items-center gap-x-1">
              <MdMoreTime size={18} />
              <p>{exp}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:static z-20 absolute -top-7">
        <img
          src={imgUrl}
          alt="Inventor"
          className="rounded-full size-20 items-start md:w-full md:h-full md:rounded-none"
        />
      </div>
    </div>
  );
}

InventorCard.propTypes = {
  children: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  exp: PropTypes.string.isRequired,
  where: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};
