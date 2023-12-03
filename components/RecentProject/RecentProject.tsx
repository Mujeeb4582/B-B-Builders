import Image from 'next/image';
// import { CEOImage } from '@/utils/staff';
// import { useRouter } from 'next/navigation';

const RecentProject = () => {
  // const router = useRouter();
  // const handleClick = () => router.push('/our-projects#tower-two');
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center px-12 bg-white">
        <div className="w-full sm:w-1/2 pt-8">
          <Image
            // src={CEOImage}
            src="https://static.wixstatic.com/media/ef30b1_5f5d16c25b744036837ec6e392187e8e~mv2.jpg"
            width={500}
            height={500}
            alt="CEO Image"
            className="h-full w-full shadow-2xl rounded-md"
            priority
          />
        </div>
        <div className="text-center lg:text-left lg:p-12 lg:pl-24 sm:w-1/2 w-full bg-logo">
          <div className="flex items-center justify-center lg:justify-start mb-4 lg:mb-8">
            <h2 className="text-2xl lg:text-4xl font-bold text-[#c86500]">
              Meet Our CEO
            </h2>
            {/* <button className="bg-green-500 sales-animations text-white ml-10 px-10 py-2 text-lg rounded-md shadow-2xl font-semibold">
              Hot sale
            </button> */}
          </div>
          <p className="text-base lg:text-lg mb-4 text-justify lg:mb-2">
            Founded in 2019, B&B Builders, underneath my management as an
            electrical engineer, isn&apos;t always only a industrial creation
            company; it&apos;s a passion-pushed journey to redefine modern
            structure. Our dedication to precision and innovation has been the
            cornerstone of our success. As we keep to shape skylines, B&B
            Builders stands as a testament to the relentless pursuit of
            excellence, in which each project reflects our willpower to
            developing areas that inspire and undergo. Thank you for being a
            part of our transformative story.
          </p>
          {/* <button
            onClick={handleClick}
            className="inset-x-0 h-full relative bg-[#c86500] border-white-500 rounded-md px-5 py-2 shadow-md shadow-amber-950 hover:scale-90 duration-300"
          >
            Learn More
          </button> */}
        </div>
      </div>
    </>
  );
};

export default RecentProject;
