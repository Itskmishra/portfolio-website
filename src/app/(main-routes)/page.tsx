import {
  AboutMe,
  ContactMe,
  Greeting,
  Portfolio,
  Services,
  Skills,
} from "@/components/main";
import Qualifictaion from "@/components/main/qualification/qualification";
import ScrollUp from "@/components/scroll-up";

const HomaPage = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 ">
      <Greeting />
      <AboutMe />
      <Skills />
      <Services />
      <Qualifictaion />
      <Portfolio />
      <ContactMe />
    </div>
  );
};
export default HomaPage;
