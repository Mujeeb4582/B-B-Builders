'use client';
import Image from 'next/image';
import Build from '../../public/image/pic1.jpg';

const WhatWeDo = () => {
  return (
    <div className="container mx-auto p-8 mt-24">
      {/* Building and Selling Flats and Houses Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Building and Selling Flats and Houses
        </h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Image
          src={Build} // Replace with the path to an image
          alt="Building and Selling"
          width={1200}
          height={600}
          className="rounded-md mt-4"
        />
      </div>

      {/* Flat Maintenance Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Flat Maintenance</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Image
          src={Build} // Replace with the path to an image
          alt="Flat Maintenance"
          width={1200}
          height={600}
          className="rounded-md mt-4"
        />
      </div>

      {/* Services, Shops, and Buildings Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">
          Services, Shops, and Buildings
        </h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Image
          src={Build} // Replace with the path to an image
          alt="Services, Shops, and Buildings"
          width={1200}
          height={600}
          className="rounded-md mt-4"
        />
      </div>
    </div>
  );
};

export default WhatWeDo;
