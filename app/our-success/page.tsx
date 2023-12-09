'use client';

import Image from 'next/image';
import Slider from 'react-slick';
import SectionWithTitle from '@/components/SectionWithTitle';
import { villa } from '@/utils/images';
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
    <main className="container pt-1 mt-24 p-8 lg:px-24 bg-logo bg-black font-sans">
      <div className="backdrop-blur-sm">
        <div id="tower-1">
          <SectionWithTitle title="B & B Tower-1">
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
              &quot;Elevate your lifestyle with B&B Builders&apos; modern and
              luxury villas, that establish variety through the flawless
              combination of modern architecture and lavish luxuries.&apos; Each
              house features stunning decor in bedrooms, luxury bathrooms, a
              large TV area, and a modern kitchen. Our villas, which value
              long-term sustainability, have installed solar systems for energy
              efficiency. Experience a level of comfort with flexible one-year
              installment options that conveniently transform your dream house
              into a reality. In this smart and secure refuge, security is key,
              with CCTV cameras providing peace of mind. B&B Builders welcomes
              you to the future of luxury living, where every detail represents
              a commitment to remarkable professionalism and
              affordability.&quot;
            </p>
          </SectionWithTitle>
        </div>
      </div>
    </main>
  );
};

export default OurSuccess;
