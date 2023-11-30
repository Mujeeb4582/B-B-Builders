'use client';
import Image from 'next/image';
import CEO from '../../public/image/Abdullah.jpg';
import { staffData } from '../../utils/staff';

const WhoWeAre = () => {
  return (
    <div className="container mx-auto p-12 mt-24">
      {/* CEO Section */}
      <div className="flex flex-col-reverse md:flex-row items-center mb-12 justify-items-center lg:h-128">
        {/* CEO Message */}
        <div className="flex flex-col md:w-1/2 md:pr-8 bg-logo md:min-h-full bg-opacity-50 bg-gray content-center justify-center">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-headingText">
            Meet Our CEO
          </h2>
          <p className="md:text-xl text-justify text-headingText">
            Founded in 2019, B&B Builders, underneath my management as an
            electrical engineer, isn't always only a industrial creation
            company; it's a passion-pushed journey to redefine modern
            structure.&apos;Our dedication to precision and innovation has been
            the cornerstone of our success. As we keep to shape skylines, B&B
            Builders stands as a testament to the relentless pursuit of
            excellence, in which each project reflects our willpower to
            developing areas that inspire and undergo. Thank you for being a
            part of our transformative story.
          </p>
        </div>

        {/* CEO Image */}
        <div className="md:w-1/2 mb-4 md:mb-0 h-full">
          <Image
            src={CEO} // Replace with the path to your CEO's image
            alt="CEO Image"
            width={700}
            height={200}
            className="rounded-md h-full"
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
