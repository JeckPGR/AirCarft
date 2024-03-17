import OutlineButton from "../Elements/Button/OutlineButton";
import Airplane from "/images/Airplane.jpg";

const Hero = () => {
  return (
    <>
      <section
        style={{ backgroundImage: `url(${Airplane})` }}
        className="w-full min-h-screen bg-no-repeat bg-cover bg-center lg:bg-top  flex flex-col justify-center items-center"
      >
        <h1 className=" text-5xl md:text-7xl font-bold font-Poppins text-white/90">
          Manufacture
        </h1>
        <h1 className=" text-3xl md:text-5xl lg:text-6xl font-bold font-Poppins text-white/80 my-4">
          Your Personal Air<span className="text-darkblue">Craft</span>
        </h1>
        <OutlineButton text="Get Started" custom="text-white w-32" />
      </section>
    </>
  );
};

export default Hero;
