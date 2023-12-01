import Slider from 'react-slick';
import Image from 'next/image';
import pic1 from '../../public/image/pic1.jpg';
import pic2 from '../../public/image/pic2.jpg';
import pic3 from '../../public/image/pic3.jpg';
import pic4 from '../../public/image/pic4.jpg';

const ReactSlider = () => {
  const images = [pic1, pic2, pic3, pic4];
  const settings = {
    infinite: true,
    dots: true,
    speed: 3000,
    slidesToShow: 1, // Set to 1 to show one slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  return (
    <div className="w-full h-full">
      <Slider {...settings} className="rounded-lg overflow-hidden">
        {Array.isArray(images) &&
          images.map((image, index) => (
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
  );
};

export default ReactSlider;
