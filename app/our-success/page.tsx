'use client';

import Image from 'next/image';
import Slider from 'react-slick';
import SectionWithTitle from '@/components/SectionWithTitle';
import { tower1, villa } from '@/utils/images';
import ApartmentCard from '@/components/Card';
import { tower1Data } from '@/utils/cards';

const OurSuccess = () => {
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
    <main className="pt-1 mt-24 p-8 lg:px-24 bg-logo bg-black font-sans">
      <div className="backdrop-blur-sm">
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
              B&B Tower-1 is a master piece. Commercial development comprises
              retails, shops, and residential apartments developed by B&B
              builders in the prime location of the fast-developing community of
              C-Block Main Civic Center of Faisal Town, which has a
              geo-strategically strategic location encompassing access from both
              Islamabad International Airport and Srinagar Highway. Tarnol Pass
              G.T. Road and M1 Motorway are near other popular city areas and
              also from Taxila, Wah, Hazara Division, lower and upper Kpk,
              Punjab. The project was started in February 2O2I by B&B Builders
              with the passion to deliver on time.
              <br />
              <br />
              <strong className="text-2xl md:text-4xl font-mono text-headingText">
                B&B Tower-1 will be handed over to the clients before February
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
                    <div key={index} className="w-full h-60 sm:h-160 ">
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
              &quot;
              <strong className="text-headingText">
                Make your way to an era of luxury living with B&B Builders&apos;
                amazing 8 Marla villas.
              </strong>
              &quot; Immerse yourself in the heights of elegance as these
              luxurious homes perfectly combine modern architecture with lavish
              amenities. Each villa is meticulously designed, with luxurious
              bedrooms, excellent bathrooms, a comfortable entertainment area,
              and a modern kitchen. Our villas are equipped with solar
              technology, showing a lifelong commitment to the environment and
              proving our commitment to sustainable living. At B&B Builders, we
              understand the value of adaptation in making aspirations a
              reality. That&apos;s why we offer the flexibility of one-year
              installment plans, bringing your dream home closer than ever
              before. With your comfort and security as our main focus, our
              smart and safe comfort features modern CCTV cameras for enhanced
              peace of mind and a peaceful living experience. We invite you to
              join us in experiencing the future of wonderful living, where
              every detail represents our dedication to excellent
              professionalism and affordability. Welcome to a lifestyle that not
              only meets expectations but also creates a new standard for
              enhanced living.
            </p>
          </SectionWithTitle>
        </div>
      </div>
    </main>
  );
};

export default OurSuccess;
