import Contactcard from "../fragments/Contactcard";
import { RiCustomerService2Fill } from "react-icons/ri";
import { RiTeamLine } from "react-icons/ri";

const Contact = () => {
  return (
    <div className="relative lg:mb-48">
      <div className=" bg-gradient-to-br flex w-full p-5 h-full lg:h-[470px] flex-col items-center  from-sky-300 to-indigo-300 lg:p-14 ">
        <h2 className="text-5xl lg:text-7xl mb-2 text-white">Contact Us</h2>
        <p className="text-darkblue lg:text-lg">Let us know how we can help</p>
        <div className="lg:absolute -bottom-24 mt-20 flex flex-col md:flex-row gap-20">
          <Contactcard
            link="/helpdesk"
            title="Help Desk"
            buttonname="Find Help"
            icon={RiCustomerService2Fill}
            size={40}
          >
            Getting trouble with our app? we&apos;re here to help
          </Contactcard>
          <Contactcard
            link="/collab"
            title="Collaborate"
            buttonname="Lets Collab"
            icon={RiTeamLine}
            size={40}
          >
            Let&apos;s Talk how we can work together
          </Contactcard>
        </div>
      </div>
    </div>
  );
};

export default Contact;
