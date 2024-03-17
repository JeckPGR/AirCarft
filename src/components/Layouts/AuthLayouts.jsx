import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const AuthLayout = ({ title, children, type }) => {
  return (
    <>
      {type === "contact" ? (
        ""
      ) : (
        <Link
          to="/"
          className="flex items-center gap-x-2 fixed top-3 left-4 py-2 px-2 text-secondary hover:bg-secondary/10 hover:rounded-full duration-150"
        >
          <IoIosArrowBack size={21} />
        </Link>
      )}

      <div
        className={` relative ${
          type === "contact"
            ? "w-full flex items-center justify-center"
            : "flex justify-center  bg-gradient-to-br from-primary/30 via-orange-200/60 to-darkblue/35  min-h-screen items-center gap-3"
        }`}
      >
        <div
          className={` ${
            type === "contact"
              ? "bg-white max-w-xl rounded-md md:p-10 lg:m-14 md:m-8 m-6 p-5 lg:py-14 lg:px-20 "
              : "w-full max-w-md bg-white rounded-md p-7 "
          }`}
        >
          <h1
            className={` ${
              type !== "contact"
                ? "text-3xl font-bold mb-3 text-blue-600 "
                : "text-4xl  bg-clip-text text-transparent bg-gradient-to-r from-darkblue/55 to-primary/70"
            } `}
          >
            {title}
          </h1>
          <p className="font-medium text-slate-500 mb-5">
            {type === "login"
              ? "Hello, Please Enter Your Details"
              : type === "register"
              ? "Welcome, Please Enter Your Details"
              : ""}
          </p>
          {children}
          <Navigation type={type} />
        </div>
      </div>
    </>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-sm text-slate-800/55 mt-2 text-center">
        Don`t have an account?{" "}
        <Link
          to="/register"
          className="text-darkblue font-bold hover:underline"
        >
          Sign Up
        </Link>
      </p>
    );
  } else if (type === "register") {
    return (
      <p className="text-sm text-slate-800/55 mt-2 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-darkblue font-bold hover:underline">
          Log In
        </Link>
      </p>
    );
  } else {
    return <></>;
  }
};

Navigation.propTypes = {
  type: PropTypes.string.isRequired,
};

AuthLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};

export default AuthLayout;
