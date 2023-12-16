'use client';
import React from 'react';
import Image from 'next/image';
import CEO from '../../public/image/Abdullah.jpg';
import { staffData } from '../../utils/staff';

const OurTeam = () => {
  return (
    <div className="mx-auto p-12 mt-16 bg-logo bg-black">
      {/* CEO Section */}
      <div className="grid grid-cols-1 justify-items-center mb-12">
        <div className="bg-gray-200 p-4 rounded-md shadow-lg text-center">
          <Image
            src={CEO} // Replace with the path to your CEO's image
            alt="CEO Image"
            width={600}
            height={100}
            className="rounded-md mb-4"
          />
          {/* CEO Message */}
          {/* <div className="flex flex-col md:w-1/2 md:pr-8 md:min-h-full bg-opacity-50 bg-gray content-center justify-center"> */}
          <h3 className="text-lg md:text-3xl font-semibold mb-2 font-mono">
            Engr. Syed Abdullah Shah
          </h3>
          <p className="md:text-xl text-gray-600">Position: CEO</p>
          {/* <p className="md:text-xl text-gray-600 mb-2">
            Degree: BS Electrical Engineering
          </p> */}
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
              className="rounded-md mb-2 "
            />
            <h3 className="text-2xl font-semibold mb-2 font-mono">
              {staff.name}
            </h3>
            <p className="text-gray-600">Position: {staff.designation}</p>
            {/* <p className="text-gray-600">Degree: {staff.degree}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
