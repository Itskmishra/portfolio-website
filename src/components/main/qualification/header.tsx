import { Briefcase, GraduationCap } from "lucide-react";

const Header = () => {
  return (
    <div className="col-span-2 flex gap-x-12 items-center mt-10">
      <h1 className="text-xl font-semibold flex items-center justify-end gap-x-3">
        <GraduationCap className="w-8 h-8" />
        Education
      </h1>
      <h1 className="text-xl font-semibold flex items-center justify-end gap-x-3">
        <Briefcase className="w-8 h-8" />
        Courses
      </h1>
    </div>
  );
};
export default Header;
