import underconstruct from "/images/underconstruct.jpg";
const services = () => {
  return (
    <div className="min-h-screen flex flex-col gap-y-4 justify-center items-center bg-yellow-200/20">
      <img
        src={underconstruct}
        alt="wait"
        className=" w-72 md:w-80 lg:w-[500px]"
      />
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold ">
        Sorry this page Under construction
      </h1>
    </div>
  );
};

export default services;
