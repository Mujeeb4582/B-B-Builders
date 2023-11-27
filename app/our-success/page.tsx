// components/OurPastPerformance.js
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  imagePath: string;
  description: string;
}

const ProjectCard = ({ title, imagePath, description }: ProjectCardProps) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md text-center">
      <Image
        src={imagePath} // Replace with the path to your project image
        alt={`${title} Image`}
        width={400}
        height={200}
        className="rounded-md mb-2"
      />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const OurPastPerformance = () => {
  const projectsData = [
    {
      title: 'Residential Complex',
      imagePath: '/residential-complex.jpg', // Replace with the path to your project image
      description:
        'Successfully completed a modern residential complex with luxurious amenities.',
    },
    {
      title: 'Commercial Tower',
      imagePath: '/commercial-tower.jpg', // Replace with the path to your project image
      description:
        'Delivered a state-of-the-art commercial tower for thriving businesses.',
    },
    {
      title: 'Urban Renewal Project',
      imagePath: '/urban-renewal.jpg', // Replace with the path to your project image
      description:
        'Contributed to the revitalization of urban areas through a successful renewal project.',
    },
    // Add more project entries as needed
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center min-h-[90vh] w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Our Past Performance</h1>
        <p className="mt-3 text-2xl">
          Explore our successful projects and achievements
        </p>

        {/* Project Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              imagePath={project.imagePath}
              description={project.description}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default OurPastPerformance;
