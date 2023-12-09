// import React from 'react';
// import Image from 'next/image';
// import { offices, amenities } from '@/utils/cards';

// const TowerSlider: React.FC = () => {
//   return (
//     <div className="containerTower1">
//       <input
//         type="radio"
//         name="slider"
//         className="d-none"
//         id="s1"
//         defaultChecked
//       />
//       <input
//         type="radio"
//         name="slider"
//         className="hidden"
//         id="s1"
//         defaultChecked
//       />
//       <input type="radio" name="slider" className="hidden" id="s2" />
//       <input type="radio" name="slider" className="hidden" id="s3" />
//       <input type="radio" name="slider" className="hidden" id="s4" />
//       <input type="radio" name="slider" className="hidden" id="s5" />

//       <div className="cards flex">
//         {/* Slide 1 */}
//         <label htmlFor="s1" id="slide1" className="rounded-xl">
//           <div className="card">
//             <div className="image">
//               <Image src={tower3Pics[3]} alt="pic" />
//             </div>
//             <div className="infos">
//               <span className="name">Studio Apartment</span>
//               <span className="lorem">
//                 Charming studio apartment, ideal for individuals or couples,
//                 offers a cozy, all-in-one living space with a combined bedroom,
//                 living area, and kitchen.
//               </span>
//             </div>
//             {/* <a href="#" className="btn-details">
//               details
//             </a> */}
//           </div>
//         </label>

//         {/* Slide 2 */}
//         <label htmlFor="s2" id="slide2" className="rounded-xl">
//           <div className="card">
//             <div className="image">
//               <Image src={tower3Pics[2]} alt="pic1" />
//             </div>
//             <div className="infos">
//               <span className="name">1-Bed Apartment</span>
//               <span className="lorem">
//                 Comfortable one-bedroom apartment, ideal for individuals or
//                 couples, with a separate bedroom, cozy living area, and
//                 well-equipped kitchen.
//               </span>
//             </div>
//             {/* <a href="#" className="btn-details">
//               details
//             </a> */}
//           </div>
//         </label>

//         {/* Slide 3 */}
//         <label htmlFor="s3" id="slide3" className="rounded-xl">
//           <div className="card">
//             <div className="image">
//               <Image src={tower3Pics[4]} alt="pic2" />
//             </div>
//             <div className="infos">
//               <span className="name">2-Bed Apartment</span>
//               <span className="lorem">
//                 Spacious two-bedroom apartment, perfect for families or
//                 roommates, two private bedrooms, and a well-appointed kitchen
//                 for a comfortable and shared living experience.
//               </span>
//             </div>
//             {/* <a href="#" className="btn-details">
//               details
//             </a> */}
//           </div>
//         </label>

//         {/* Slide 4 */}
//         <label htmlFor="s4" id="slide4" className="rounded-xl">
//           <div className="card">
//             <div className="image">
//               <Image src={offices[0]} alt="pic3" />
//             </div>
//             <div className="infos">
//               <span className="name">Shops & Offices</span>
//               <span className="lorem">
//                 Furnished shop for all business and all kind of office.
//               </span>
//             </div>
//             {/* <a href="#" className="btn-details">
//               details
//             </a> */}
//           </div>
//         </label>

//         {/* Slide 5 */}
//         <label htmlFor="s5" id="slide5" className="rounded-xl">
//           <div className="card">
//             <div className="image">
//               <Image src={amenities[0]} alt="pic4" />
//             </div>
//             <div className="infos">
//               <span className="name">Amenities</span>
//               <span className="lorem">
//                 All kind of amenities are available in the building.
//               </span>
//             </div>
//             {/* <a href="#" className="btn-details">
//               details
//             </a> */}
//           </div>
//         </label>
//       </div>
//     </div>
//   );
// };

// export default TowerSlider;
