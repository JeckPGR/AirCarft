import ButtonFilled from "../Elements/Button/ButtonFilled";
import InputForm from "../Elements/Input";
import Textarea from "../Elements/Input/textarea";

const ContactForm = () => {
  return (
    <>
      <form action="">
        <InputForm
          label="Nama"
          type="text"
          placeholder="Dzaky Razi"
          name="Nama"
        />
        <InputForm
          label="Email"
          type="email"
          placeholder="example@gmail.com"
          name="email"
        />

        <Textarea name="description" placeholder="Your text here..." />
        <ButtonFilled
          type="submit"
          custom="w-full rounded-sm  text-xl font-medium mt-3"
          text=" Submit"
        />
      </form>
    </>
  );
};

export default ContactForm;
