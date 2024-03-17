import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const CollabCard = () => {
  return (
    <div className="bg-darkblue absolute top-[76px] left-32 rounded-sm w-96 flex flex-col items-center gap-y-10   text-white py-5 ">
      <h3 className="text-3xl">Contact Us</h3>
      {/* Address */}
      <div className="flex items-start justify-between w-[65%] ">
        <div>
          {" "}
          <IoLocationSharp size={30} />
        </div>
        <div className=" space-y-4 px-4">
          <h4>Address</h4>
          <p>1234 Mockingbird Lane Los Angeles, CA 90001 USA</p>
        </div>
      </div>
      {/* Phone */}
      <div className="flex items-start w-[65%] ">
        <div>
          {" "}
          <FaPhone size={30} />
        </div>
        <div className=" flex flex-col gap-y-2 px-4">
          <h4>Phone Number</h4>
          <a href="#">(01) 489-642-8903</a>
          <a href="#">(01) 687-942-2165</a>
        </div>
      </div>
      {/* Email */}
      <div className="flex items-start w-[65%] ">
        <div>
          {" "}
          <MdEmail size={30} />
        </div>
        <div className=" flex flex-col gap-y-2 px-4">
          <h4>Email</h4>
          <a href="#">astrid93@gmail.com</a>
          <a href="#">company1@compnay.com</a>
        </div>
      </div>
    </div>
  );
};
