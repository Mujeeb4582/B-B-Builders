'use client';
import Image from 'next/image';
import CEO from '../../public/image/ceo.jpg';
import { staffData } from '../../utils/staff';

const WhoWeAre = () => {
  return (
    <div className="container mx-auto p-12 mt-24">
      {/* CEO Section */}
      <div className="flex flex-col-reverse md:flex-row items-center mb-12 justify-items-center">
        {/* CEO Message */}
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-2xl font-semibold mb-4">Meet Our CEO</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* CEO Image */}
        <div className="md:w-1/2 mb-4 md:mb-0">
          <Image
            src={CEO} // Replace with the path to your CEO's image
            alt="CEO Image"
            width={700}
            height={300}
            className="rounded-md"
          />
        </div>
      </div>

      {/* Other Staff Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {staffData.map((staff, index) => (
          <div
            key={index}
            className="bg-gray-200 p-4 rounded-md shadow-lg text-center"
          >
            <Image
              src={staff.image} // Assume staff images are in the public folder
              alt={`${staff.name} Image`}
              width={400}
              height={200}
              className="rounded-md mb-2"
            />
            <h3 className="text-lg font-semibold mb-2">{staff.name}</h3>
            <p className="text-gray-600">Position: {staff.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoWeAre;
