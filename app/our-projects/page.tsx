'use client';

import Image from 'next/image';
import ApartmentCard from '@/components/Card';
import SectionWithTitle from '@/components/SectionWithTitle';
import {
  tower3Data,
  tower2Pics,
  tower2Data,
  tower1Data,
  villasData,
} from '@/utils/cards';
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
    <main className="container pt-1 mt-24 p-8 lg:px-24 bg-logo">
      <div className="backdrop-blur-sm">
        <div>
          <SectionWithTitle title="B & B Tower-3">
            <p className="mt-3 text-xl md:text-2xl text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              ut corporis in accusantium nostrum praesentium, tempora voluptatum
              iure earum nihil esse soluta nobis veritatis id itaque! Sint, unde
              ratione. Saepe?Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Placeat in voluptas tempore, itaque consectetur repudiandae
              delectus. Ipsam aliquam nisi commodi nobis tempora iusto eveniet
              saepe ut ipsum, laboriosam, vero quas.
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
              B&B-Tower-2 embodies the seamless convergence of luxury, comfort,
              and premier amenities, presenting an unparalleled living
              experience. This collaborative venture between Emirates Builders
              and B&B Builders reflects a rare opportunity, showcasing a
              distinctive blend of commercial and residential facilities.
              Spanning a total covered area of one kanal, the proposed
              infrastructure of ground plus 5 levels sets the stage for a unique
              lifestyle. With a three-year easy installment plan, B&B Tower 2
              invites those with a penchant for premium living to indulge in the
              epitome of luxury, strategically located in the picturesque Faisal
              Town, Islamabad.
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
              &quot;Indulge in the pinnacle of contemporary living with B&B
              Builders&apos; modern and luxury villas that redefine opulence.
              Our residences seamlessly blend modern architecture with lavish
              comforts, offering a lifestyle of unmatched sophistication. Each
              villa is a testament to our commitment to excellence, featuring
              meticulously designed bedrooms, luxurious bathrooms, a spacious TV
              lounge, and a state-of-the-art kitchen. Embracing sustainable
              living, our villas come equipped with an installed solar system,
              ensuring energy efficiency and a reduced carbon footprint.
              Experience the utmost convenience with our flexible one-year
              installment plans, making your dream home a reality with ease.
              Security is paramount, and our villas are outfitted with CCTV
              cameras, providing residents with peace of mind and a secure haven
              to call home.&quot; <br />
              &quot;Step into the future of luxury living at B&B Builders, where
              every detail reflects a commitment to unparalleled elegance and
              convenience. Our modern villas redefine the standards of
              contemporary living, boasting sleek architectural designs and
              cutting-edge features. Enjoy the comfort of well-appointed
              bedrooms, spa-like bathrooms, and a stylish TV lounge that becomes
              the heart of your home. The fully-equipped kitchen caters to the
              demands of modern living, ensuring a seamless blend of
              functionality and aesthetics. What sets us apart is our commitment
              to sustainability, our villas feature an installed solar system,
              promoting eco-friendly living. With the added convenience of
              one-year installments, we make luxury living accessible. Safety is
              paramount, and our villas are equipped with CCTV cameras,
              providing residents with a secure and technologically advanced
              haven to cherish.&quot;
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
