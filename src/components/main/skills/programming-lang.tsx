import { BadgeCheck } from "lucide-react";
import { programming_languages } from "./constants";

const ProgrammingLang = () => {
  return (
    <div className="flex flex-col items-start w-full border px-5 py-7 rounded-xl bg-white dark:bg-neutral-800 gap-y-3 h-full">
      <div className="w-full flex items-center justify-center">
        <p className="text-lg">Programming Languages</p>
      </div>
      {programming_languages.map((lang) => (
        <div className="flex items-center justify-start gap-x-3" key={lang.id}>
          <BadgeCheck className="fill-black text-white w-7 h-7 dark:fill-neutral-100 dark:text-neutral-900" />
          <p>{lang.label}</p>
        </div>
      ))}
    </div>
  );
};
export default ProgrammingLang;
