import Image from "next/image";
import MyInfo from "./my-info";
import Socials from "./socials";
import MouseAnimation from "./mouse-animation";

const Greeting = () => {
  return (
    <div
      id="home"
      className="py-16 min-h-screen h-full grid container w-full relative"
    >
      <div className="grid md:grid-cols-4 grid-cols-2 items-center w-full">
        {/* Social links */}
        <Socials />
        {/* Image */}
        <div className="md:order-1 relative sm:w-40 sm:h-40 md:w-60 md:h-60 w-32 h-32">
          <Image
            src={"/about.png"}
            fill
            className="object-cover rounded-full"
            alt="image"
          />
        </div>
        {/* Name and data */}
        <MyInfo />
      </div>
      {/* Mouse animation */}
      <MouseAnimation />
    </div>
  );
};
export default Greeting;
