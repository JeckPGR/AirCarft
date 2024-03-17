import { FiUserPlus } from "react-icons/fi";
import { LuThumbsUp } from "react-icons/lu";
import ButtonFilled from "../Elements/Button/ButtonFilled";
import OutlineButton from "../Elements/Button/OutlineButton";
import InfoGraph from "../fragments/Infographis";
import craft from "/images/Blueprint.png";
import teamwork from "/images/teamwork.png";
import Aos from "aos";
import "aos/dist/aos";
import { useEffect } from "react";
const Information = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <section className="flex flex-col gap-y-3 lg:px-80 items-center my-16 lg:my-10">
        <h2 className="font-poppins text-5xl md:text-7xl text-primary font-bold">
          Get Creative !
        </h2>
        <p className="font-poppins text-center w-3/4 space-y-2 text-darkblue text-base md:text-xl">
          <span className="font-Julius text-black">
            Air<span className="text-darkblue">Carft</span>
          </span>{" "}
          <span className=" text-center">
            {" "}
            was an online self learning web app for 3D Aircraft Design
          </span>
        </p>
        <div className="flex flex-col gap-y-3">
          <div className="flex w-72 md:w-[380px] gap-x-4 lg:gap-x-0     lg:w-96 justify-between my-3">
            {/* Top Icon */}
            <div className="flex items-center text-center justify-center gap-x-3 text-sm md:text-base  lg:text-lg text-darkblue ">
              {" "}
              <FiUserPlus size={20} />
              <p>30 Million Users</p>
            </div>
            <div className="flex items-center gap-x-2 text-center text-sm md:text-base  lg:text-lg text-darkblue">
              <LuThumbsUp size={20} />
              <p> 10 Millions Awardee</p>
            </div>
          </div>
          {/* Button Bottom */}
          <div className="flex justify-center gap-x-3 md:gap-x-6  ">
            <OutlineButton
              text="Join Class"
              custom=" w-28 text-sm text-base  md:w-32 font-bold"
            />
            <ButtonFilled
              text="Lets Crafting"
              custom=" w-28 text-sm text-base  md:w-32 font-bold"
            />
          </div>
        </div>
      </section>
      <section className="flex  flex-wrap gap-x-10 gap-y-7 justify-center">
        <div
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-duration="500"
        >
          {" "}
          <InfoGraph title="Learning make Blueprint" images={craft} />
        </div>
        <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="500">
          <InfoGraph title="Group Work" images={teamwork} />
        </div>
      </section>
    </>
  );
};

export default Information;
