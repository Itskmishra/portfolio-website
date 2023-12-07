import { Calendar } from "lucide-react";
import ComponentHeader from "../component-header";
import { degress } from "./constant";

const Qualifictaion = () => {
  return (
    <div
      id="#qualification"
      className="h-full w-full flex flex-col items-center justify-center py-20"
    >
      <ComponentHeader label="Qualifications" text="My Personal Journey" />
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-7 items-center mt-10">
        {degress.map((item) => (
          <div
            key={item.id}
            className="w-full h-24 flex flex-col items-center justify-center bg-white dark:bg-neutral-800 px-8 py-10 rounded-xl border gap-y-1"
          >
            <h1 className="text-sm">{item.label}</h1>
            <p className="text-[12px]">{item.institute}</p>
            <span className="flex items-center justify-center text-muted-foreground text-xs">
              <Calendar className="w-4 h-4 mr:2" /> {item.year}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Qualifictaion;
