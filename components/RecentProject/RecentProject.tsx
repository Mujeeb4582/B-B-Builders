// import RecentSlider from '@/components/RecentProject/main_slider';
import Image from 'next/image';
import towerTwoPic1 from '../../public/image/tower-2/Tower-2-1.jpg';
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
          <h2 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-8 text-[#c86500]">
            B & B Tower 2
          </h2>
          <p className="text-base lg:text-lg mb-4 text-justify lg:mb-2 text-[#c86500]">
            B&B Tower 2 embodies the seamless convergence of luxury, comfort,
            and premier amenities, presenting an unparalleled living experience.
            This collaborative venture between Emirates Builders and B&B
            Builders reflects a rare opportunity, showcasing a distinctive blend
            of commercial and residential facilities. Spanning a total covered
            area of one kanal, the proposed infrastructure of ground plus 5
            levels sets the stage for a unique lifestyle. With a three-year easy
            installment plan, B&B Tower 2 invites those with a penchant for
            premium living to indulge in the epitome of luxury, strategically
            located in the picturesque Faisal Town, Islamabad.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row p-12 bg-gray-100"></div>
    </>
  );
};
export default RecentProject;
