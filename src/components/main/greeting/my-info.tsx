import { Button } from "@/components/ui/button";
import HandSVG from "./hand-svg";
import Link from "next/link";
import { Send } from "lucide-react";

const MyInfo = () => {
  return (
    <div className="col-span-2">
      <div className="flex flex-col items-start justify-center gap-y-3">
        {/* Greeting hand and name */}
        <div className="flex items-center gap-x-2">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold">
            Sumit
          </h1>
          <HandSVG />
        </div>
        <div className="flex items-center gap-3 w-full">
          <span className="w-10 h-[2px] bg-neutral-800"></span>
          <p className="lg:text-lg text-sm truncate">Full Stack Developer</p>
        </div>
        {/* Description */}
        <div>
          <p className="text-sm lg:text-lg text-muted-foreground">
            I'm a full-stack developer based in New-Delhi,India and I'm very
            passionate and dedicated to my work.
          </p>
        </div>
        {/* Contact btn */}
        <div>
          <Button size={"lg"} className="rounded-xl">
            <Link
              href={"#Contact-section"}
              className="flex items-center justify-center gap-2"
            >
              Say Hello <Send className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default MyInfo;
