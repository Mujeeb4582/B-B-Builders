const SectionWithTitle = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="mt-8">
    <div className="bg-yellow-600 text-white text-center py-2 title-animations rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">{title}</h2>
    </div>
    {children}
  </div>
);

export default SectionWithTitle;
