import ComponentHeader from "../component-header";
import { services_type } from "./constants";
import ServicesCard from "./service-card";

const Services = () => {
  return (
    <div id="services" className="h-full w-full py-20">
      <ComponentHeader label="Services" text="What I offer" />
      <div className="grid md:grid-cols-3 grid-cols-1 mt-10 w-full items-center gap-10">
        {services_type.map((service) => (
          <ServicesCard
            key={service.id}
            label={service.label}
            icon={service.icon}
            content={service.content}
          />
        ))}
      </div>
    </div>
  );
};
export default Services;
