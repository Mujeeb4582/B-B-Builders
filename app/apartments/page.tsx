// components/Apartments.js
import Image, { StaticImageData } from 'next/image';
import apartment from '../../public/image/pic4.jpg';

interface ApartmentCardProps {
  bedCount: number;
  imagePath: StaticImageData;
  description: string;
}

const ApartmentCard = ({
  bedCount,
  imagePath,
  description,
}: ApartmentCardProps) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md text-center">
      <Image
        src={imagePath} // Replace with the path to your apartment image
        alt={`Apartment ${bedCount} Bed Image`}
        width={400}
        height={200}
        className="rounded-md mb-2"
      />
      <h3 className="text-lg font-semibold mb-2">{`${bedCount}-Bed Apartment`}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Apartments = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center min-h-[90vh] w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Apartments</h1>
        <p className="mt-3 text-2xl">Find your next apartment here</p>

        {/* Apartment Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Single Bed Apartment Card */}
          <ApartmentCard
            bedCount={1}
            imagePath={apartment} // Replace with the path to your single bed apartment image
            description="Cozy apartment with one bedroom, perfect for individuals or couples."
          />

          {/* Two Bed Apartment Card */}
          <ApartmentCard
            bedCount={2}
            imagePath={apartment} // Replace with the path to your two bed apartment image
            description="Spacious apartment with two bedrooms, ideal for small families or roommates."
          />

          {/* Three Bed Apartment Card */}
          <ApartmentCard
            bedCount={3}
            imagePath={apartment} // Replace with the path to your three bed apartment image
            description="Large apartment with three bedrooms, suitable for families or groups."
          />
        </div>
      </main>
    </div>
  );
};

export default Apartments;
