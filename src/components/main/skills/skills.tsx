import ComponentHeader from "../component-header";
import FrontendSkills from "./frontend-skills";
import BackendSkill from "./backend-skills";
import ProgrammingLang from "./programming-lang";
import Tools from "./tools";

const Skills = () => {
  return (
    <div
      id="skill"
      className="h-full min-h-screen w-full flex flex-col items-center justify-center pt-16"
    >
      <ComponentHeader label="Skills" text="My technical level" />
      <div className="grid md:grid-cols-2 grid-cols-1 mt-10 w-full items-center gap-10">
        <FrontendSkills />
        <BackendSkill />
        <ProgrammingLang />
        <Tools />
      </div>
    </div>
  );
};
export default Skills;
