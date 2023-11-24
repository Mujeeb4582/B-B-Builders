// components/Amenities.js
import Image from 'next/image';

interface AmenityCardProps {
  title: string;
  imagePath: string;
  description: string;
}

const AmenityCard = ({ title, imagePath, description }: AmenityCardProps) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md text-center">
      <Image
        src={imagePath} // Replace with the path to your amenity image
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

const Amenities = () => {
  const amenitiesData = [
    {
      title: 'Swimming Pool',
      imagePath: '/swimming-pool.jpg', // Replace with the path to your swimming pool image
      description: 'Enjoy a refreshing swim in our spacious swimming pool.',
    },
    {
      title: 'Gym',
      imagePath: '/gym.jpg', // Replace with the path to your gym image
      description:
        'Stay fit with state-of-the-art fitness equipment in our gym.',
    },
    {
      title: 'Community Lounge',
      imagePath: '/community-lounge.jpg', // Replace with the path to your community lounge image
      description: 'Relax and socialize in our comfortable community lounge.',
    },
    // Add more amenity entries as needed
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center min-h-[90vh] w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Amenities</h1>
        <p className="mt-3 text-2xl">Explore the amenities we offer</p>

        {/* Amenity Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {amenitiesData.map((amenity, index) => (
            <AmenityCard
              key={index}
              title={amenity.title}
              imagePath={amenity.imagePath}
              description={amenity.description}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Amenities;
