import Image from "next/image";

const AboutImage = () => {
  return (
    <Image
      src={"/about.png"}
      width={300}
      height={300}
      className="rounded-md md:justify-self-end justify-self-center"
      alt="image"
    />
  );
};
export default AboutImage;
