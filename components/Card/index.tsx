import Image, { StaticImageData } from 'next/image';
import Slider from 'react-slick';

interface ApartmentCardProps {
  bedCount: string;
  imagePath: StaticImageData[];
  description: string;
}

const ApartmentCard = ({
  bedCount,
  imagePath,
  description,
}: ApartmentCardProps) => {
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
    <div className="bg-gray-100 p-4 rounded-md shadow-md text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
      <div>
        <Slider {...settings} className="rounded-lg overflow-hidden">
          {Array.isArray(imagePath) &&
            imagePath.map((image, index) => (
              <div key={index} className="w-full">
                <Image
                  src={image}
                  alt={`slide-${index + 1}`}
                  className="h-72 rounded-lg"
                />
              </div>
            ))}
        </Slider>
      </div>
      <h3 className="text-lg font-semibold mb-2">{bedCount}</h3>
      <p className="text-gray-600">{description}</p>
      <button className="bg-yellow-600 text-white px-4 py-2 mt-4 rounded-md shadow-md">
        Learn More
      </button>
    </div>
  );
};

export default ApartmentCard;
{
  /* <div>
<Image
  src={imagePath}
  alt={`Apartment ${bedCount} Bed Image`}
  width={400}
  height={200}
  className="rounded-md mb-2 h-72"
/>
</div> */
}
