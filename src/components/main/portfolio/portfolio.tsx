import ComponentHeader from "../component-header";
import ProjectsMenu from "./projects-menu";

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="h-full w-full flex flex-col items-center justify-center py-20"
    >
      <ComponentHeader label="Portfolio" text="My recent work" />
      <div className="grid mt-10 w-full items-start gap-10 p-3">
        <ProjectsMenu />
      </div>
    </div>
  );
};
export default Portfolio;
