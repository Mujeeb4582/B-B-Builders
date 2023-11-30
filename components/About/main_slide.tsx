// 'use client';
import pic4 from '../../public/image/about.png';
import Image from 'next/image';

const AboutSlider = () => {
  return (
    <div className="relative w-full lg:h-160">
      <div className="absolute rounded-lg bottom-[-10%] left-1/2 transform -translate-x-1/2 bg-white p-2 lg:p-10 shadow-xl dark:shadow-xl ring-white ring-offset-80">
        <p className="my-5 text-[#c86500] text-3xl lg:text-6xl text-center font-bold">
          4+
        </p>{' '}
        <div className="text-[#c86500] mb-5 lg:mb-8 text-center font-bold lg:text-2xl">
          Years of Experience{' '}
        </div>
      </div>
      <Image src={pic4} className="w-full lg:h-full" alt="alt" />
    </div>
  );
};

export default AboutSlider;
