import PropTypes from "prop-types";
import { useState } from "react";
const NewsCard = ({ imgUrl, title, descirption, author }) => {
  const [imageLoaded, setImageLoaded] = useState(false); //Blur it before load

  return (
    <div className="overflow-hidden cursor-pointer w-80 lg:w-64 h-[300px] border border-slate-400 flex flex-col rounded-2xl justify-between group hover:shadow-lg duration-200 font-Poppins">
      <img
        src={imgUrl}
        alt="images"
        className={`lg:w-64 h-36 w-full bg-center bg-cover rounded-t-xl group-hover:scale-110 scale duration-300 ${
          imageLoaded ? "" : "filter blur-md origin-top-right scale-75"
        }`}
        onLoad={() => setImageLoaded(true)}
      />
      <div className=" w-full  h-32 flex flex-col gap-y-2 px-3">
        <h4 className=" font-medium text-2xl  w-3/4">{title}</h4>
        <p className=" w-full h-14 text-sm text-[#4d4c4c] text-ellipsis overflow-hidden ">
          {descirption}
        </p>
        <p className=" text-xs  text-gray-400/80">Written by {author}</p>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  descirption: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default NewsCard;
