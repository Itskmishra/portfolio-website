import ComponentHeader from "../component-header";
import ContactForm from "./contact-form";
import ContactInfo from "./contact-info";

const ContactMe = () => {
  return (
    <div
      id="contact"
      className="h-full min-h-screen w-full flex flex-col items-center justify-center pt-16"
    >
      <ComponentHeader label="Contact me" text="Get in touch" />
      <div className="grid md:grid-cols-2 grid-cols-1 mt-10 w-full items-start gap-10">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};
export default ContactMe;
