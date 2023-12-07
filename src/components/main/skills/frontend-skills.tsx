import { BadgeCheck } from "lucide-react";
import { frontend_skills } from "./constants";

const FrontendSkills = () => {
  return (
    <div className="flex flex-col items-start w-full border px-5 py-7 rounded-xl bg-white dark:bg-neutral-800 gap-y-3 h-full">
      <div className="w-full flex items-center justify-center">
        <p className="text-lg">Frontend Developer</p>
      </div>
      {frontend_skills.map((skill) => (
        <div className="flex items-center justify-start gap-x-3" key={skill.id}>
          <BadgeCheck className="fill-black text-white w-7 h-7 dark:fill-neutral-100 dark:text-neutral-900" />
          <p>{skill.label}</p>
        </div>
      ))}
    </div>
  );
};
export default FrontendSkills;
