import React from 'react';
import Image from 'next/image';
import { projectPageMainSliderImages } from '@/utils/images';

const ThreeDSlider = () => {
  return (
    <div className="center-container w-full">
      <div className="slider">
        {projectPageMainSliderImages.map((src, i) => (
          <span key={i} style={{ '--i': i + 1 } as any}>
            <Image src={src} alt={`img${i + 1}`} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default ThreeDSlider;
