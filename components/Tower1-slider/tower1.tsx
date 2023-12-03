import React from 'react';
import Image from 'next/image';
import pic from '../../public/image/pic.jpg';
import pic1 from '../../public/image/pic1.jpg';
import pic2 from '../../public/image/pic2.jpg';
import pic3 from '../../public/image/pic3.jpg';
import pic4 from '../../public/image/pic4.jpg';

const TowerSlider: React.FC = () => {
  // const images = [pic, pic1, pic2, pic3, pic4];
  return (
    <div className="containerTower1">
      <input
        type="radio"
        name="slider"
        className="d-none"
        id="s1"
        defaultChecked
      />
      <input
        type="radio"
        name="slider"
        className="hidden"
        id="s1"
        defaultChecked
      />
      <input type="radio" name="slider" className="hidden" id="s2" />
      <input type="radio" name="slider" className="hidden" id="s3" />
      <input type="radio" name="slider" className="hidden" id="s4" />
      <input type="radio" name="slider" className="hidden" id="s5" />

      <div className="cards flex">
        {/* Slide 1 */}
        <label htmlFor="s1" id="slide1" className="w-full sm:w-1/2 lg:w-1/5">
          <div className="card">
            <div className="image">
              <Image src={pic} alt="pic" />
            </div>
            <div className="infos">
              <span className="name">Studio Apartment</span>
              <span className="lorem">
                Cozy apartment with one bedroom, perfect for individuals or
                couples.
              </span>
            </div>
            <a href="#" className="btn-details">
              details
            </a>
          </div>
        </label>

        {/* Slide 2 */}
        <label htmlFor="s2" id="slide2" className="w-full sm:w-1/2 lg:w-1/5">
          <div className="card">
            <div className="image">
              <Image src={pic1} alt="pic1" />
            </div>
            <div className="infos">
              <span className="name">1-Bed Apartment</span>
              <span className="lorem">
                Spacious apartment with two bedrooms, ideal for small families
                or roommates.
              </span>
            </div>
            <a href="#" className="btn-details">
              details
            </a>
          </div>
        </label>

        {/* Slide 3 */}
        <label htmlFor="s3" id="slide3" className="w-full sm:w-1/2 lg:w-1/5">
          <div className="card">
            <div className="image">
              <Image src={pic2} alt="pic2" />
            </div>
            <div className="infos">
              <span className="name">2-Bed Apartment</span>
              <span className="lorem">
                Large apartment with three bedrooms, suitable for families or
                groups.
              </span>
            </div>
            <a href="#" className="btn-details">
              details
            </a>
          </div>
        </label>

        {/* Slide 4 */}
        <label htmlFor="s4" id="slide4" className="w-full sm:w-1/2 lg:w-1/5">
          <div className="card">
            <div className="image">
              <Image src={pic3} alt="pic3" />
            </div>
            <div className="infos">
              <span className="name">Shops & Offices</span>
              <span className="lorem">
                Furnished shop for all business and all kind of office.
              </span>
            </div>
            <a href="#" className="btn-details">
              details
            </a>
          </div>
        </label>

        {/* Slide 5 */}
        <label htmlFor="s5" id="slide5" className="w-full sm:w-1/2 lg:w-1/5">
          <div className="card">
            <div className="image">
              <Image src={pic4} alt="pic4" />
            </div>
            <div className="infos">
              <span className="name">Amenities</span>
              <span className="lorem">
                All kind of amenities are available in the building.
              </span>
            </div>
            <a href="#" className="btn-details">
              details
            </a>
          </div>
        </label>
      </div>
    </div>
  );
};

export default TowerSlider;
