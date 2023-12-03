import Slider from 'react-slick';
import Image from 'next/image';
// import pic1 from '../../public/image/pic1.jpg';
import pic1 from '../../public/image/Tower-1/Tower-1-1.jpg';
import pic2 from '../../public/image/tower-2/Tower-2-2.jpg';
import pic3 from '../../public/image/tower-2/Tower-2-3.jpg';
import pic4 from '../../public/image/Tower-3/Tower-3-1.jpg';
import pic5 from '../../public/image/Tower-3/Tower-3-2.jpg';
import pic6 from '../../public/image/Villas/villas3.jpg';
import pic7 from '../../public/image/Villas/villas2.jpg';

// const pic1 =
//   'https://static.wixstatic.com/media/ef30b1_16799e6181324ac4abcc2f54107c4e16~mv2.png';

const ReactSlider = () => {
  const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7];
  const settings = {
    infinite: true,
    dots: true,
    speed: 3000,
    slidesToShow: 1, // Set to 1 to show one slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
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
                width={500}
                height={500}
              />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default ReactSlider;
