import InputForm from "../Elements/Input";
import ButtonFilled from "../Elements/Button/ButtonFilled";

const FormRegister = () => {
  return (
    <>
      <form action="">
        <InputForm
          label="Fullname"
          type="text"
          placeholder="insert your name"
          name="fullname"
        />
        <InputForm
          label="Email"
          type="email"
          placeholder="example@gmail.com"
          name="email"
        />
        <InputForm
          label="Password"
          type="password"
          placeholder="******"
          name="password"
        />
        <InputForm
          label="Confirm Password"
          type="password"
          placeholder="******"
          name="confirmpassword"
        />
        <ButtonFilled
          text="Register"
          type="submit"
          custom="w-full rounded-sm"
        ></ButtonFilled>
      </form>
    </>
  );
};

export default FormRegister;
