// import RecentSlider from '@/components/RecentProject/main_slider';
import Image from 'next/image';
import towerTwoPic1 from '../../public/image/tower-2/Tower-2-3.jpg';
import { useRouter } from 'next/navigation';

const RecentProject = () => {
  const router = useRouter();
  const handleClick = () => router.push('/our-projects#tower-two');
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center px-12 bg-white">
        <div className="w-full sm:w-1/2 pt-8">
          {/* <RecentSlider /> */}
          <Image
            src={towerTwoPic1}
            alt="Picture of the tower-2"
            className="h-full w-full shadow-2xl rounded-md"
            priority
          />
        </div>
        <div className="text-center lg:text-left lg:p-12 lg:pl-24 sm:w-1/2 w-full bg-logo">
          <div className="flex items-center justify-center lg:justify-start mb-4 lg:mb-8">
            <h2 className="text-2xl lg:text-4xl font-bold text-[#c86500]">
              B & B Tower 2
            </h2>
            <button className="bg-green-500 sales-animations text-white ml-10 px-10 py-2 text-lg rounded-md shadow-2xl font-semibold">
              Hot sale
            </button>
          </div>
          <p className="text-base lg:text-lg mb-4 text-justify lg:mb-2">
            B&B Tower 2, a distinctive blend of commercial and residential
            excellence set in the heart of Islamabad&apos;s dynamic Civic Center
            Block-C, Faisal Town, invites you to embark on a new urban
            experience. This modern masterpiece covers a one-kanal area,
            perfectly blending modern living and commercial spaces. B&B Tower 2
            delivers a lifestyle of outstanding convenience with an exclusive
            opportunity and a flexible three-year installment plan. Enjoy a
            variety of amenities, such as a broad broad range restaurants,
            modern fire-fighting tools, 24-hour CCTV security, satisfactory
            vehicle parking, an attractive mosque, explosive elevators, a
            well-stocked grocery store, and constant electricity power backup.
            At B&B Tower 2, where innovation meets luxury, you can raise your
            standards and embrace the future of unified living.
          </p>
          <button className="relative text-xl text-white">
            <button
              onClick={handleClick}
              className="inset-x-0 h-full relative bg-[#c86500] border-white-500 rounded-md px-5 py-2 shadow-md shadow-amber-950 hover:scale-90 duration-300"
            >
              Learn More
            </button>
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row p-12 bg-gray-100"></div>
    </>
  );
};

export default RecentProject;
