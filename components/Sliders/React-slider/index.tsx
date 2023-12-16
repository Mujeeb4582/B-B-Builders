import Slider from 'react-slick';
import Image from 'next/image';
import logo from '../../../public/image/logo.png';
import { homePageMainSliderImages } from '../../../utils/images';
import './react-slider.scss';

const ReactSlider = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 2000,
    slidesToShow: 1, // Set to 1 to show one slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="h-full">
      <Slider {...settings} className="rounded-lg overflow-hidden flex">
        {Array.isArray(homePageMainSliderImages) &&
          homePageMainSliderImages.map((image, index) => (
            <div key={index}>
              <div className="w-full flex flex-row h-60 sm:h-144">
                <Image
                  src={image.src}
                  alt={`slide-${index + 1}`}
                  className="w-2/3 h-full rounded-lg"
                  width={500}
                  height={500}
                />
                <div className="text-white font-mono w-1/3 h-full text-center">
                  <Image
                    src={logo}
                    alt="logo"
                    width={500}
                    height={500}
                    className="w-full lg:h-3/4"
                  />
                  <h1 className="text-2xl lg:text-4xl font-bold">
                    {image.name}
                  </h1>
                  <h1 className="text-2xl lg:text-4xl font-bold">
                    {image.address}
                  </h1>
                  <h1 className="text-2xl lg:text-4xl font-bold">Islamabad</h1>
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default ReactSlider;
