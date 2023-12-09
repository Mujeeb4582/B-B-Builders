'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import ApartmentCard from '@/components/Card';
import SectionWithTitle from '@/components/SectionWithTitle';
import { tower1Data, tower2Data, tower3Data } from '@/utils/cards';
import { tower3, tower2, tower1, villa } from '@/utils/images';
const ThreeDSlider = dynamic(() => import('@/components/Sliders/3DSlider'), {
  loading: () => <p className="text-center text-white">Loading...</p>,
  ssr: false,
});
import Slider from 'react-slick';

const OurProjects = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1, // Set to 1 to show one slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <main className="container pt-44 p-8 lg:px-24 bg-logo bg-black font-sans">
      <div className="backdrop-blur-sm">
        <div>
          <ThreeDSlider />
          <div className="mt-20" id="tower-3">
            <SectionWithTitle
              title="B & B Tower-3"
              showLabel={true}
              news="Pre-Launch"
            >
              <div className="w-full mt-2">
                <Slider {...settings} className="rounded-lg overflow-hidden">
                  {Array.isArray(tower3) &&
                    tower3.map((image, index) => (
                      <div key={index} className="w-full h-60 sm:h-144 ">
                        <Image
                          src={image}
                          alt={`slide-${index + 1}`}
                          className="w-full h-full rounded-lg"
                          priority
                        />
                      </div>
                    ))}
                </Slider>
              </div>
              <p className="mt-3 text-xl md:text-2xl text-justify text-white">
                Get ready to upgrade your living with B&B Builders&apos; future
                masterpiece that is Tower 3! This architectural masterpiece,
                located in the heart of boulevard Faisal Hills, Islamabad,
                elegantly mixes the greatest of commercial and residential
                facilities over a broad 1 kanal covered space. Tower 3 is more
                than simply a structure; it&apos;s a way of life designed for
                residents who value quality and comfort.B&B Tower 3 welcomes you
                to make your dream lifestyle a reality with ease by offering a
                fascinating three-year installment plan. Consider a location
                where luxury meets convenience—this innovative building has a
                broad range of facilities, from a modern restaurant service to
                modern fire-fighting tools, ensuring safety is essential. The
                24-hour CCTV cameras, satisfactory parking, an attractive
                mosque, efficient elevators, and a well-stocked grocery shop add
                higher levels of functionality and ease to your daily life.
                Furthermore, electricity power backup ensures continuous
                existence. B&B Tower 3 is more than just a building; it is a
                promise of a lively, elevated lifestyle in which every aspect
                has been thoughtfully created to provide you with a memorable
                stay. Secure an apartment in the future of urban living—where
                luxury lives outstanding
              </p>
              {/* Apartment Cards Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {tower3Data.map((apartment, index) => (
                  <ApartmentCard
                    key={index}
                    bedCount={apartment.bedCount}
                    imagePath={apartment.imagePath}
                    description={apartment.description}
                  />
                ))}
              </div>
            </SectionWithTitle>
          </div>
        </div>
        <div id="tower-2">
          <SectionWithTitle
            title="B & B Tower-2"
            showLabel={true}
            news="Hot Deal"
          >
            <div className="w-full h-full mt-2">
              <Slider {...settings} className="rounded-lg overflow-hidden">
                {Array.isArray(tower2) &&
                  tower2.map((image, index) => (
                    <div key={index} className="w-full h-60 sm:h-144 ">
                      <Image
                        src={image}
                        alt={`slide-${index + 1}`}
                        className="w-full h-full rounded-lg"
                        priority
                      />
                    </div>
                  ))}
              </Slider>
            </div>
            <p className="mt-3 text-xl md:text-2xl text-justify text-white">
              B&B Tower 2, a distinctive blend of commercial and residential
              excellence set in the heart of Islamabad&apos;s dynamic Civic
              Center Block-C, Faisal Town, invites you to embark on a new urban
              experience. This modern masterpiece covers a one-kanal area,
              perfectly blending modern living and commercial spaces. B&B Tower
              2 delivers a lifestyle of outstanding convenience with an
              exclusive opportunity and a flexible three-year installment plan.
              Enjoy a variety of amenities, such as a broad broad range
              restaurants, modern fire-fighting tools, 24-hour CCTV security,
              satisfactory vehicle parking, an attractive mosque, explosive
              elevators, a well-stocked grocery store, and constant electricity
              power backup. At B&B Tower 2, where innovation meets luxury, you
              can raise your standards and embrace the future of unified living.
            </p>
            {/* Apartment Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {tower2Data.map((apartment, index) => (
                <ApartmentCard
                  key={index}
                  bedCount={apartment.bedCount}
                  imagePath={apartment.imagePath}
                  description={apartment.description}
                />
              ))}
            </div>
          </SectionWithTitle>
        </div>
        <div id="tower-1">
          <SectionWithTitle title="B & B Tower-1">
            <div className="w-full h-full mt-2">
              <Slider {...settings} className="rounded-lg overflow-hidden">
                {Array.isArray(tower1) &&
                  tower1.map((image, index) => (
                    <div key={index} className="w-full h-60 sm:h-144 ">
                      <Image
                        src={image}
                        alt={`slide-${index + 1}`}
                        className="w-full h-full rounded-lg"
                        priority
                      />
                    </div>
                  ))}
              </Slider>
            </div>
            <p className="mt-3 text-xl md:text-2xl text-justify text-white">
              B&B-Tower-1 is a master piece Commercial development comprises of
              Retails/Shops and Residential Apartments Developed by B&B Builders
              on Prime location of fast Developing community of C-Block Main
              Civic Center of Faisal Town having Geo Strategic location
              encompassing Access from both Islamabad International Airport,
              Srinagar highway. Tarnol Pass G.T Road and M1 Motorway near from
              other Popular City Areas and also from Taxila, Wah, Hazara
              Division, lower & Upper Kpk, Punjab. The project was started in
              February 2O2I by B&B Builders with the passion to deliver on time.
              <strong>
                {' '}
                B&B-Tower-1 will be handed over to the clients before February
                2024.
              </strong>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {tower1Data.map((apartment, index) => (
                <ApartmentCard
                  key={index}
                  bedCount={apartment.bedCount}
                  imagePath={apartment.imagePath}
                  description={apartment.description}
                />
              ))}
            </div>
          </SectionWithTitle>
        </div>
        <div id="villas">
          <SectionWithTitle title="B & B Villas">
            <div className="w-full h-full mt-2">
              <Slider {...settings} className="rounded-lg overflow-hidden">
                {Array.isArray(villa) &&
                  villa.map((image, index) => (
                    <div key={index} className="w-full h-60 sm:h-144 ">
                      <Image
                        src={image}
                        alt={`slide-${index + 1}`}
                        className="w-full h-full rounded-lg"
                        priority
                      />
                    </div>
                  ))}
              </Slider>
            </div>
            <p className="mt-3 text-xl md:text-2xl text-justify text-white">
              &quot;Make your way to an era of luxury living with B&B
              Builders&apos; amazing 8 Marla villas.&quot; Immerse yourself in
              the heights of elegance as these luxurious homes perfectly combine
              modern architecture with lavish amenities. Each villa is
              meticulously designed, with luxurious bedrooms, excellent
              bathrooms, a comfortable entertainment area, and a modern kitchen.
              Our villas are installed with solar technology, showing a lifelong
              commitment to the environment and proving our commitment to
              sustainable living.At B&B Builders, we understand the value of
              adaptation in making aspirations a reality. That&apos;s why we
              offer the flexibility of one-year installment plans, putting your
              dream home closer than ever before. With your comfort and security
              as our main focus, our smart and safe comfort features modern CCTV
              cameras for enhanced peace of mind and a peaceful living
              experience. We invite you to join us in experiencing the future of
              wonderful living, where every detail represents our dedication to
              excellent professionalism and affordability. Welcome to a
              lifestyle that not only meets expectations, but also creates a new
              standard for enhanced living.
            </p>
          </SectionWithTitle>
        </div>
      </div>
    </main>
  );
};

export default OurProjects;
