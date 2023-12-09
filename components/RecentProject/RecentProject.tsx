import Image from 'next/image';

const RecentProject = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center px-12 pb-6 bg-black">
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
        <div className="text-center lg:text-left lg:p-12 lg:pl-24 sm:w-1/2 w-full bg-logo text-white lg:h-144">
          <div className="flex items-center justify-center lg:justify-start mb-4 lg:mb-8">
            <h2 className="text-3xl lg:text-8xl font-extrabold font-mono text-white pt-10">
              CEO
            </h2>
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
          <h3 className="text-right text-2xl font-mono lg:text-5xl mt-10">
            Engr. Syed Abduallah Shah
          </h3>
        </div>
      </div>
    </>
  );
};

export default RecentProject;
