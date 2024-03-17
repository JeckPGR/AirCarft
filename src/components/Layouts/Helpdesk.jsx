import ContactForm from "../fragments/FormContact";
import AuthLayout from "./AuthLayouts";
import Accord from "../Elements/Accordion";

const AccordData = [
  {
    id: "1",
    title: "Restore Accout",
    description:
      "Simply enter your email, verify your identity, and we'll guide you through the account recovery process step by step. Our team is dedicated to ensuring a smooth and secure restoration experience. Thank you for choosing our platform!",
  },
  {
    id: "2",
    title: "My Project Gone",
    description:
      "If you've found that your project has disappeared, don't panic! Our platform automatically saves your work, but sometimes issues can arise. We understand the frustration this can cause, but rest assured, we're here to help. Let us know the details, and our team will work diligently to recover your project and get you back on track.",
  },
  {
    id: "3",
    title: "Billing and Payment Issues",
    description:
      "Are you facing technical challenges while using our design tools? Don't worry; we're here to provide you with the support you need. Our technical experts are available to assist you with any questions or issues you encounter while working with our design tools. From troubleshooting to providing guidance on best practices, we're committed to ensuring that you have a seamless experience using our platform.",
  },
  {
    id: "4",
    title: "Account Security and Password Management",
    description:
      "Your account security is of utmost importance to us. If you have concerns about the security of your account or need assistance with password management, we're here to help enhance your account's safety.Whether it's resetting your password, enabling two-factor authentication, or addressing any security-related questions you may have, our team is dedicated to ensuring the integrity and security of your account.",
  },
];

const Help = () => {
  return (
    <div className=" bg-gradient-to-tl   from-primary/50 via-white to-primary/40">
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-center ">
        <div className="lg:w-1/2 w-full flex items-center ">
          <AuthLayout title="What Happen ?" type="contact">
            <ContactForm />
          </AuthLayout>
        </div>
        <div className="lg:w-1/2 w-3/4 m-14 flex flex-col">
          <h2 className="text-5xl md:text-left text-center text-black bg-clip-text text-transparent bg-gradient-to-r  font-semibold from-darkblue to-primary/90">
            Most Frequently Asked
          </h2>
          <div className="mt-7 rounded-lg">
            {AccordData.map((data) => (
              <Accord key={data.id} title={data.title}>
                {data.description}
              </Accord>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
