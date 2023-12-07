import AboutInfo from "./about-info";
import AboutImage from "./about-img";
import ComponentHeader from "../component-header";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="h-full w-full flex flex-col items-center justify-center py-20"
    >
      {/* Heading */}
      <ComponentHeader label="About me" text="My Introduction" />
      <div className="grid md:grid-cols-2 grid-cols-1 mt-10 w-full items-center gap-10">
        <AboutImage />
        <AboutInfo />
      </div>
    </div>
  );
};
export default AboutMe;
