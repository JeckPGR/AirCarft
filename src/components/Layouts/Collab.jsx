import AuthLayout from "./AuthLayouts";
import ContactForm from "../fragments/FormContact";
import { CollabCard } from "../fragments/CollabCard";
export const Collab = () => {
  return (
    <>
      <div className="bg-gradient-to-tl relative  from-primary/50  to-indigo-400/40 ">
        <div className="relative -right-28">
          <AuthLayout title="Get In Touch" type="contact">
            <ContactForm />
          </AuthLayout>
          <CollabCard />
        </div>
      </div>
    </>
  );
};
