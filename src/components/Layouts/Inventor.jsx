import InventorCard from "../fragments/InventorCard";
import { inventordata } from "../../../data/inventor";

const Inventor = () => {
  return (
    <section className="flex justify-center items-center  flex-col gap-y-3 bg-secondary/5 py-20">
      <h4 className="font-poppins font-medium text-3xl md:text-4xl text-center text-darkblue ">
        {" "}
        World Airplane Inventor
      </h4>
      {/* Carousel section */}
      <div className="flex flex-col w-full mt-10 gap-x-7 transition-transform ease-in-out duration-500 lg:flex-row lg:px-16 p-4 gap-y-9  lg:gap-x-28 justify-center items-center">
        <div className="flex overflow-hidden w-full gap-20 items-center justify-center flex-col lg:flex-row">
          {inventordata.map((data) => (
            <InventorCard
              key={data.id}
              imgUrl={data.imgUrl}
              name={data.name}
              exp={data.exp}
              where={data.where}
            >
              {data.quotes}
            </InventorCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inventor;
