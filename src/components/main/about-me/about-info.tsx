import { Button } from "@/components/ui/button";
import { aboutmeTiles } from "./constants";
import { FileBadge2 } from "lucide-react";

const AboutInfo = () => {
  return (
    <div className="flex flex-col gap-y-6">
      {/* Tiles */}
      <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
        {aboutmeTiles.map(({ label, text, icon: Icon }) => (
          <div
            key={label}
            className=" border rounded-xl flex flex-col items-center px-3 py-5 bg-white dark:bg-neutral-800 gap-y-2"
          >
            <Icon />
            <p className="text-sm">{label}</p>
            <span className="text-muted-foreground text-[12px]">{text}</span>
          </div>
        ))}
      </div>
      {/* Info */}
      <div className="text-muted-foreground">
        <p>
          With my expertise as a full-stack developer, I possess the skills to
          create robust and scalable applications that are ready for production.
          I have a year of experience working with various technologies, and I
          have successfully delivered multiple projects. Whether it's front-end
          development, back-end development, or database management, I have the
          knowledge and experience to handle it all.
        </p>
      </div>
      {/* CV Download btn */}
      <div>
        <Button
          size={"lg"}
          className="text-lg font-semibold flex items-center justify-center gap-3 rounded-xl"
        >
          Download CV <FileBadge2 className="w-7 h-7" />
        </Button>
      </div>
    </div>
  );
};
export default AboutInfo;
