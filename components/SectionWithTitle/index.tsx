const SectionWithTitle = ({
  title,
  children,
  showLabel,
  news,
}: {
  title: string;
  children: React.ReactNode;
  showLabel?: boolean;
  news?: string;
}) => (
  <div className="pb-5">
    <div className="bg-headingText text-white text-center py-2 rounded-lg shadow-lg relative">
      {showLabel && (
        <div className="text-headingText py-2 px-4 text-2xl font-bold bg-yellow-400 absolute rounded-lg top-2 left-56 sales-animations">
          {news}
        </div>
      )}
      <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">{title}</h2>
      {showLabel && (
        <div className="text-headingText py-2 px-4 text-2xl font-bold bg-yellow-400 absolute rounded-lg top-2 right-48 sales-animations">
          {news}
        </div>
      )}
    </div>
    {children}
  </div>
);

export default SectionWithTitle;
