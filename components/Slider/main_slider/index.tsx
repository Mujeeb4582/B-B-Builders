'use client';
import Image from 'next/image';
import pic from '../../../public/image/pic.webp';
import pic1 from '../../../public/image/pic1.jpg';
import pic2 from '../../../public/image/pic2.webp';
import pic3 from '../../../public/image/pic3.jpeg';
import pic4 from '../../../public/image/pic4.jpeg';
import Carousel from '../Carousel';

const Slider = () => {
  const images = [pic, pic1, pic2, pic3, pic4];
  return (
    <div>
      <Carousel loop>
        {images.map((src, i) => {
          return (
            <div className="relative  flex-[0_0_100%]" key={i}>
              {/* use object-cover + fill since we don't know the height and width of the parent */}
              <Image src={src} alt="alt" className="w-full h-full" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
