import VideoBg from "/images/VideoBg.png";
import { MdPlayCircleFilled } from "react-icons/md";
const ClipVideo = () => {
  return (
    <>
      <section
        style={{ backgroundImage: `url(${VideoBg})` }}
        className="w-full h-96 bg-no-repeat bg-center  bg-cover relative group  mt-16 cursor-pointer "
      >
        <div className="absolute bg-white w-36  lg:w-[400px] h-32  lg:h-80 right-0 top-0 rounded-bl-full"></div>
        <div className="absolute bg-darkblue w-32 lg:w-[360px] h-28 lg:h-72 right-0 top-0 rounded-bl-full text-white ">
          <MdPlayCircleFilled className=" z-10 w-20 h-16 lg:w-36 lg:h-32 absolute left-10 top-3  lg:top-14 lg:left-36 group-hover:text-gray-300/40 duration-200" />
        </div>
      </section>
    </>
  );
};

export default ClipVideo;
