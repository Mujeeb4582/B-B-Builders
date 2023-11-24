'use client';
import pic1 from '../../public/image/pic1.jpg';
import pic2 from '../../public/image/pic2.jpg';
import pic3 from '../../public/image/pic3.jpg';
import pic4 from '../../public/image/pic4.jpg';
import AboutCarousel from '../About/AboutCrousel';
import Image from 'next/image';

const AboutSlider = () => {
  const images = [pic1, pic2, pic3, pic4];
  return (
    <div>
      <AboutCarousel loop>
        {images.map((src, i) => {
          return (
            <div className="relative flex-[0_0_50%]" key={i}>
              {/* use object-cover + fill since we don't know the height and width of the parent */}
              <Image src={src} className="w-full h-full" alt="alt" />
            </div>
          );
        })}
      </AboutCarousel>
    </div>
  );
};

export default AboutSlider;
