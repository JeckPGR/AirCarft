import Button from "../Elements/Button/ButtonFilled";
import NewsCard from "../fragments/NewsCard";
const NewsData = [
  {
    id: "1",
    imgUrl: "https://source.unsplash.com/600x400/?news",
    title: "Dummy Data ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo ut velit lacinia dapibus",
    author: "John Doe",
  },
  {
    id: "2",
    imgUrl: "https://source.unsplash.com/600x400/?plane",
    title: "Lorem Ipsum ",
    description:
      "Sed varius, ipsum ac efficitur hendrerit, turpis libero sagittis libero, id feugiat odio risus ac neque. Integer ut justo ac arcu cursus mattis.",
    author: "Jane Smith",
  },
  {
    id: "3",
    imgUrl: "https://source.unsplash.com/600x400/?AI",
    title: "News Title",
    description:
      "Sed varius, ipsum ac efficitur hendrerit, turpis libero sagittis libero, id feugiat odio risus ac neque. Integer ut justo ac arcu cursus mattis.",
    author: "Lauren Alph",
  },
  {
    id: "4",
    imgUrl: "https://source.unsplash.com/600x400/?blueprint",
    title: "News Title",
    description:
      "Sed varius, ipsum ac efficitur hendrerit, turpis libero sagittis libero, id feugiat odio risus ac neque. Integer ut justo ac arcu cursus mattis.",
    author: "Lauren Alph",
  },
];
const Blog = () => {
  return (
    <>
      <section className="flex flex-col w-full gap-y-6 mt-10">
        <div className="flex flex-col gap-y-3 items-center">
          <h2 className=" font-bold text-4xl text-blue-900/95">Blogs</h2>
          <p className=" font-medium  text-sm text-center  text-gray-400 w-72">
            Lorem ipsum is placeholder text commonly used in the industries
          </p>
          <Button text="Show All" />
        </div>

        <div className="flex justify-center w-full items-center gap-x-14 gap-y-10 flex-wrap mt-4 ">
          {NewsData.map((Data) => (
            <NewsCard
              key={Data.id}
              imgUrl={Data.imgUrl}
              title={Data.title}
              descirption={Data.description}
              author={Data.author}
              loading="lazy"
            />
          ))}
          ;
        </div>
      </section>
    </>
  );
};

export default Blog;
