'use client';

import about from '../../public/image/about.png';
import Image from 'next/image';

const AboutSlider = () => {
  return (
    <div className="relative w-full lg:min-h-[40rem]">
      <div className="absolute rounded-lg font-mono bottom-[-10%] left-1/2 transform -translate-x-1/2 bg-white p-2 lg:p-10 shadow-lg">
        <p className="lg:my-4 text-[#c86500] text-2xl lg:text-6xl text-center font-extrabold">
          4+
        </p>{' '}
        <div className="text-[#c86500] mb-3 lg:mb-8 text-center font-extrabold text-xl lg:text-3xl">
          Years of Experience{' '}
        </div>
      </div>
      <Image src={about} className="w-full lg:h-full" alt="alt" priority />
    </div>
  );
};

export default AboutSlider;
