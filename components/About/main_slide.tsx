// 'use client';
import pic4 from '../../public/image/about.png';
import Image from 'next/image';

const AboutSlider = () => {
  return (
    <div className="relative w-full h-160">
      <div className="absolute bottom-[-5%] left-1/2 transform -translate-x-1/2 bg-white p-10 shadow-xl dark:shadow-6xl ring-white ring-offset-80">
        <p className="mb-11 text-[#c86500] text-6xl text-center font-bold">
          25+
        </p>{' '}
        <div className="text-[#c86500] mb-10 text-center font-bold text-2xl">
          Years of Experience{' '}
        </div>
      </div>
      <Image src={pic4} className="w-full h-full" alt="alt" />
    </div>
  );
};

export default AboutSlider;
