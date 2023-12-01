'use client';

import Image from 'next/image';
import ApartmentCard from '@/components/Card';
import SectionWithTitle from '@/components/SectionWithTitle';
import pic1 from '../../public/image/pic1.jpg';
import pic2 from '../../public/image/pic2.jpg';
import pic3 from '../../public/image/pic3.jpg';
import pic4 from '../../public/image/pic4.jpg';
import Tower2 from '../../public/image/tower-2/Tower-2-1.jpg'
import Tower11 from '../../public/image/tower-2/Tower-2-11.jpg'
import Tower12 from '../../public/image/tower-2/Tower-2-2.jpg'
import Tower13 from '../../public/image/tower-2/Tower-2-3.jpg'
import {
  tower3Data,
  tower2Pics,
  tower2Data,
  tower1Data,
  villasData,
} from '@/utils/cards';
import Slider from 'react-slick';

const OurProjects = () => {
  const images = [pic1, pic2, pic3, pic4, Tower2, Tower11, Tower12, Tower13];
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
    <main className="container pt-1 mt-24 p-8 lg:px-24 bg-logo">
      <div className="backdrop-blur-sm">
        <div>
          <SectionWithTitle title="B & B Tower-3">
            <p className="mt-3 text-xl md:text-2xl text-justify">
              Get ready to upgrade your living with B&B Builders' future
              masterpiece that is Tower 3! This architectural masterpiece,
              located in the heart of boulevard Faisal Hills, Islamabad,
              elegantly mixes the greatest of commercial and residential
              facilities over a broad 1 kanal covered space. Tower 3 is more
              than simply a structure; it's a way of life designed for residents
              who value quality and comfort.B&B Tower 3 welcomes you to make
              your dream lifestyle a reality with ease by offering a fascinating
              three-year installment plan. Consider a location where luxury
              meets convenience—this innovative building has a broad range of
              facilities, from a modern restaurant service to modern
              fire-fighting tools, ensuring safety is essential. The 24-hour
              CCTV cameras, satisfactory parking, an attractive mosque,
              efficient elevators, and a well-stocked grocery shop add higher
              levels of functionality and ease to your daily life. Furthermore,
              electricity power backup ensures continuous existence. B&B Tower 3
              is more than just a building; it is a promise of a lively,
              elevated lifestyle in which every aspect has been thoughtfully
              created to provide you with a memorable stay. Secure an apartment
              in the future of urban living—where luxury lives outstanding
            </p>

            {/* Slider component */}
            <div className="center-container">
              <div className="slider">
                {images.map((src, i) => (
                  <span key={i} style={{ '--i': i + 1 } as any}>
                    <Image src={src} alt={`img${i + 1}`} />
                  </span>
                ))}
              </div>
            </div>
            {/* Apartment Cards Section */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {tower3Data.map((apartment, index) => (
                <ApartmentCard
                  key={index}
                  bedCount={apartment.bedCount}
                  imagePath={apartment.imagePath}
                  description={apartment.description}
                />
              ))}
            </div> */}
          </SectionWithTitle>
        </div>
        <div>
          <SectionWithTitle title="B & B Tower-2">
            <div className="w-full h-full mt-2">
              <Slider {...settings} className="rounded-lg overflow-hidden">
                {Array.isArray(tower2Pics) &&
                  tower2Pics.map((image, index) => (
                    <div key={index} className="w-full h-60 sm:h-144 ">
                      <Image
                        src={image}
                        alt={`slide-${index + 1}`}
                        className="w-full h-full rounded-lg"
                      />
                    </div>
                  ))}
              </Slider>
            </div>
            <p className="mt-3 text-xl md:text-2xl text-justify">
              B&B Tower 2, a distinctive blend of commercial and residential
              excellence set in the heart of Islamabad's dynamic Civic Center
              Block-C, Faisal Town, invites you to embark on a new urban
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
        <div>
          <SectionWithTitle title="B & B Tower-1">
            <p className="mt-3 text-xl md:text-2xl text-justify">
              B&B tower 1is a master piece Commercial development comprises of
              Retails/Shops and Residential Apartments Developed by B&B Builders
              on Prime location of fast Developing community of C-Block Main
              Civic Center of Faisal Town having Geo Strategic location
              encompassing Access from both Islamabad International Airport,
              Srinagar highway. Tarnol Pass G.T Road and M1 Motorway near from
              other Popular City Areas and also from Taxila, Wah, Hazara
              Division, lower & Upper Kpk, Punjab. The project was started in
              February 2O2I by B&B Builders with the passion to deliver on time.
              B&B tower 1 will be handed over to the clients before
              February 2024.
              <strong>
                {' '}
                B&B-Tower-1 will be handed over to the clients before February
                2024.
              </strong>
            </p>

            {/* Apartment Cards Section */}
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
        <div>
          <SectionWithTitle title="B & B Villas">
            <p className="mt-3 text-xl md:text-2xl text-justify">
              &quot;Elevate your lifestyle with B&B Builders' modern and luxury
              villas, that establish variety through the flawless combination of
              modern architecture and lavish luxuries.&apos; Each house features
              stunning decor in bedrooms, luxury bathrooms, a large TV area, and
              a modern kitchen. Our villas, which value long-term
              sustainability, have installed solar systems for energy
              efficiency. Experience a level of comfort with flexible one-year
              installment options that conveniently transform your dream house
              into a reality. In this smart and secure refuge, security is
              key,&quot; <br />
              &quot;with CCTV cameras providing peace of mind. B&B Builders
              welcomes you to the future of luxury living, where every detail
              represents a commitment to remarkable professionalism and
              affordability.&quot;
            </p>

            {/* Apartment Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {villasData.map((apartment, index) => (
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
    </main>
  );
};

export default OurProjects;
