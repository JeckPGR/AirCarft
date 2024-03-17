import CopyRight from "./Copyright";
import AppStore from "/images/App.png";
import PlayStore from "/images/Paly.png";

export default function Footer() {
  return (
    <>
      <section className="flex flex-wrap py-6 gap-x-16 md:gap-y-0 gap-y-7 items-center justify-center lg:px-32 bg-primary mt-14 text-white">
        {/* Logo */}
        <div className="flex flex-col gap-y-1">
          <h3 className="font-Julius text-5xl text-black">
            Air<span className="text-darkblue">Carft</span>
          </h3>
          <p className="font-poppins text-base w-48 h-20 ">
            1234 Mockingbird Lane Los Angeles, CA 90001 USA
          </p>
        </div>
        {/* Lesson */}
        <div className="flex flex-col w-28 h-28 lg:w-44 lg:h-32 font-Poppins justify-around">
          <h3 className="font-semibold  text-base">Lesson</h3>
          <ul>
            <li>
              <a href="" className="hover:text-white/80 text-sm duration-150">
                3D Design
              </a>
            </li>
            <li>
              <a href="" className="hover:text-white/80 text-sm duration-150">
                BlocksCode
              </a>
            </li>
            <li>
              <a href="" className="hover:text-white/80 text-sm duration-150">
                Clasrooms
              </a>
            </li>
          </ul>
        </div>
        {/* Resources */}
        <div className="flex flex-col w-28 h-28 lg:w-44 lg:h-32 font-Poppins justify-around">
          <h3 className="font-semibold  text-base">Resources</h3>
          <ul>
            <li>
              <a href="" className="hover:text-white/80 text-sm duration-150">
                Customer Services
              </a>
            </li>
            <li>
              <a href="" className="hover:text-white/80 text-sm duration-150">
                Tips & Tricks
              </a>
            </li>
            <li>
              <a href="" className="hover:text-white/80 text-sm duration-150">
                Server
              </a>
            </li>
          </ul>
        </div>
        {/* Learning Center */}
        <div className="flex flex-col w-28 h-28 lg:w-44 lg:h-32 font-Poppins justify-around">
          <h3 className="font-semibold  text-base">Learning Center</h3>
          <ul>
            <li>
              <a href="" className="hover:text-white/80 text-sm duration-150">
                Mentoring
              </a>
            </li>
            <li>
              <a href="" className="hover:text-white/80 text-sm duration-150">
                Video
              </a>
            </li>
            <li>
              <a href="" className="hover:text-white/80 text-sm duration-150">
                Blog
              </a>
            </li>
          </ul>
        </div>
        {/* Download */}
        <div className="flex flex-col md:flex-row lg:flex-col w-28 h-28 lg:w-44 lg:h-32 justify-between items-center ">
          <div>
            <img
              src={PlayStore}
              alt="Download Playstore"
              className="w-full h-full"
            />
          </div>
          <div>
            <img
              src={AppStore}
              alt="Download Applestore"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
      <CopyRight />
    </>
  );
}
