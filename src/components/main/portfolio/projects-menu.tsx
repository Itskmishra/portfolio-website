import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { project_type } from "./constants";
import AllProjectsTab from "./all-projects";
import ProjectList from "./projects-list";

const ProjectsMenu = () => {
  return (
    <Tabs defaultValue="All" className="overflow-x-auto w-full">
      <TabsList>
        {project_type.map((type) => (
          <TabsTrigger key={type.id} value={type.label} className="w-full truncate">
            {type.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <ProjectList />
      <AllProjectsTab />
    </Tabs>
  );
};
export default ProjectsMenu;
