import ButtonFilled from "../Elements/Button/ButtonFilled";
import InputForm from "../Elements/Input";

const Formlogin = () => {
  return (
    <>
      <form>
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
        <ButtonFilled
          text="Login"
          type="submit"
          custom="w-full rounded-sm"
        ></ButtonFilled>
      </form>
    </>
  );
};

export default Formlogin;
