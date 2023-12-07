import { TabsContent } from "@/components/ui/tabs";
import { projects } from "./constants";
import CardDailog from "./card-dailog";

const ProjectList = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      {projects.map((project) => (
        <TabsContent value={project.type} key={project.label}>
          <CardDailog
            label={project.label}
            github={project.github}
            hosted={project.hosted}
            description={project.description}
            img_url={project.img_url}
          />
        </TabsContent>
      ))}
    </div>
  );
};
export default ProjectList;
