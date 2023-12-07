const ComponentHeader = ({ label, text }: { label: string; text: string }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold">
        {label}
      </h1>
      <p className="text-muted-foreground">{text}</p>
    </div>
  );
};
export default ComponentHeader;
