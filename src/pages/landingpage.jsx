import Navbar from "../components/Elements/navbar/navbar";
import Blog from "../components/Layouts/Blogs";
import ClipVideo from "../components/Layouts/ClipVideo";
import Hero from "../components/Layouts/Hero";
import Information from "../components/Layouts/Information";
import Tutorial from "../components/fragments/Tutorial";
import Assosiate from "/images/Assosiate.png";
import DesignFirst from "/images/3Design.png";
import Crafting from "/images/Crafting.png";
import Inventor from "../components/Layouts/Inventor";
import Footer from "../components/Elements/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div
        style={{ backgroundImage: `url(${Assosiate})` }}
        className="w-full h-16 md:h-28 lg:h-36 bg-no-repeat mt-4 bg-center bg-cover"
      ></div>
      <Information />
      <ClipVideo />{" "}
      <Tutorial
        title="Start  3D Design"
        imgUrl={DesignFirst}
        type={true}
        buttonNeed={true}
      >
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </Tutorial>
      <Tutorial
        title="What is Crafting ?"
        imgUrl={Crafting}
        type={false}
        buttonNeed={false}
      >
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </Tutorial>{" "}
      <Inventor />
      <Blog />
      <Footer />
    </>
  );
};
export default LandingPage;
