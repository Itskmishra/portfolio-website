import { contact_info } from "./constants";

const ContactInfo = () => {
  return (
    <div className="cols-span-1">
      {/* Header */}
      <div className="grid items-center justify-center mb-5">
        <h1 className="md:text-2xl text-xl font-semibold text-muted-foreground">
          Talk to me
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {/* Info */}
        {contact_info.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center gap-y-2 px-2 py-8 bg-white dark:bg-neutral-800 rounded-xl border max-w-sm w-full mx-auto"
          >
            <Icon className="font-semibold w-8 h-8" />
            <p className="text-xl font-semibold">{label}</p>
            <span className="text-muted-foreground">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ContactInfo;
