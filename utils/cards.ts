// Tower 2
import Tower2_1 from '../public/image/tower-2/Tower-2-6.jpg';
import Tower2_2 from '../public/image/tower-2/Tower-2-2.jpg';
import Tower2_3 from '../public/image/tower-2/Tower-2-3.jpg';
import Tower2_4 from '../public/image/tower-2/Tower-2-4.jpg';
import Tower2_5 from '../public/image/tower-2/Tower-2-5.jpg';
import Tower2_6 from '../public/image/tower-2/Tower-2-7.jpg';
import Tower2_7 from '../public/image/tower-2/Tower-2-8.jpg';

// Tower 2 apartments
import studioPicT2 from '../public/image/tower-2/Tower-2-studio.jpg';
import singleBedT2 from '../public/image/tower-2/Tower-2-single-bed.jpg';
import doubleBedT2 from '../public/image/tower-2/Tower-2-two-bed.jpg';

// Tower 2 cafe
import TopFloorCafeT2_1 from '../public/image/tower-2/Tower-2-cafe-1.jpg';
import TopFloorCafeT2_2 from '../public/image/tower-2/Tower-2-cafe-2.jpg';
import TopFloorCafeT2_3 from '../public/image/tower-2/Tower-2-cafe-3.jpg';

// Tower 3
import Tower3_1 from '../public/image/Tower-3/Tower-3-1.jpg';
import Tower3_2 from '../public/image/Tower-3/Tower-3-2.jpg';
// import Tower3_3 from '../public/image/Tower-3/Tower-3-Map.jpg';
import Tower3_4 from '../public/image/Tower-3/Tower-3-one-bed-A.jpg';
import Tower3_5 from '../public/image/Tower-3/Tower-3-studio.jpg';
import Tower3_6 from '../public/image/Tower-3/Tower-3-two-bed-B.jpg';

// Villas
import Villa1 from '../public/image/Villas/villas1.jpg';
import Villa2 from '../public/image/Villas/villas2.jpg';
import VillaBathroom from '../public/image/Villas/bathroom.jpeg';
import VillaKitchen from '../public/image/Villas/Kitchen.jpg';
import VillaBedroom from '../public/image/Villas/bedroom.jpg';

// Offices
import Office1 from '../public/image/Offices/office1.jpg';
import Office2 from '../public/image/Offices/office2.jpg';

// Amenities
import Malls from '../public/image/Amenities/grocery.jpg';
import Mosque from '../public/image/Amenities/mosque.jpg';
import Restaurant from '../public/image/Amenities/restaurant.jpg';
import CCTV from '../public/image/Amenities/cctv.jpg';
import SwimmingPool from '../public/image/Amenities/swimming-pool.jpg';
import Elevator from '../public/image/Amenities/elevators.jpg';
import CarParking from '../public/image/Amenities/car-parking.jpg';
import FirFighting from '../public/image/Amenities/fire-fighting.jpg';
import Electricity from '../public/image/Amenities/electricity.jpg';

export const tower2Pics = [
  Tower2_1,
  Tower2_2,
  Tower2_3,
  Tower2_4,
  Tower2_5,
  Tower2_6,
  Tower2_7,
];

export const tower3Pics = [
  Tower3_1,
  Tower3_2,
  // Tower3_3,
  Tower3_4,
  Tower3_5,
  Tower3_6,
];

export const villasPics = [
  Villa2,
  Villa1,
  VillaBedroom,
  VillaKitchen,
  VillaBathroom,
];

export const offices = [Office1, Office2];

export const amenities = [Elevator];

export const tower2Data = [
  {
    title: 'Studio Apartment',
    bedCount: 'Studio Apartment',
    imagePath: [studioPicT2],
    description:
      'Charming studio apartment, ideal for individuals or couples, offers a cozy, all-in-one living space with a combined bedroom, living area, and kitchen.',
  },
  {
    title: '1-Bed Apartment',
    bedCount: '1-Bed Apartment',
    imagePath: [singleBedT2],
    description:
      'Comfortable one-bedroom apartment, ideal for individuals or couples, with a separate bedroom, cozy living area, and well-equipped kitchen.',
  },
  {
    title: '2-Bed Apartment',
    bedCount: '2-Bed Apartment',
    imagePath: [doubleBedT2],
    description:
      'Spacious two-bedroom apartment, perfect for families or roommates, offering a generous living area, two private bedrooms, and a well-appointed kitchen for a comfortable and shared living experience.',
  },
  {
    title: 'Top Floor Cafe',
    bedCount: 'Top Floor Cafe',
    imagePath: [TopFloorCafeT2_1, TopFloorCafeT2_2, TopFloorCafeT2_3],
    description:
      'Cafe for all kind of food and drinks and all kinds of events. ',
  },
  {
    title: 'Malls and Offices',
    bedCount: 'Malls and Offices',
    imagePath: [Office1, Office2, Malls],
    description: 'Furnished shop for all business and all kind of office.',
  },
  {
    title: 'Amenities',
    bedCount: 'Amenities',
    imagePath: [
      Mosque,
      Restaurant,
      CCTV,
      SwimmingPool,
      Elevator,
      CarParking,
      FirFighting,
      Electricity,
    ],
    description: 'All kind of amenities are available in the building.',
  },
];
