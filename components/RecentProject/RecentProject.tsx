// import RecentSlider from '@/components/RecentProject/main_slider';
import Image from 'next/image';
import towerTwoPic1 from '../../public/image/tower-2/Tower-2-3.jpg';

const RecentProject = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center px-12 bg-white">
        <div className="w-full sm:w-1/2 pt-8">
          {/* <RecentSlider /> */}
          <Image
            src={towerTwoPic1}
            alt="Picture of the tower-2"
            className="h-full w-full"
          />
        </div>
        <div className="text-center lg:text-left lg:p-12 lg:pl-24 sm:w-1/2 w-full bg-logo">
          <div className="flex items-center justify-center lg:justify-start mb-4 lg:mb-8">
          
            <h2 className="text-2xl lg:text-4xl font-bold text-[#c86500]">
              B & B Tower 2
            </h2>
          </div>
          <p className="text-base lg:text-lg mb-4 text-justify lg:mb-2 text-[#c86500]">
            B&B Tower 2, a distinctive blend of commercial and residential
            excellence set in the heart of Islamabad's dynamic Civic Center
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
         
              <button className="relative font-thin text-xl text-white">
                <div className="inset-x-0 h-full bottom-0 rounded-lg relative bg-[#c86500] border border-white-500 rounded-lg px-20 transition transform duration-200 hover:translate-y-2">
         
                    Learn More
             
                </div>
              </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row p-12 bg-gray-100"></div>
    </>
  );
};

export default RecentProject;
