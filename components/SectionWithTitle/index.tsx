const SectionWithTitle = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="pb-5">
    <div className="bg-headingText text-white text-center py-2 title-animations rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">{title}</h2>
    </div>
    {children}
  </div>
);

export default SectionWithTitle;
