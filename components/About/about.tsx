import React from 'react';
import AboutSlider from './main_slide';

const About = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center p-8 sm:px-12 bg-headingText">
        <div className="w-full lg:w-1/2 sm:text-center lg:text-left lg:mr-4">
          <h1 className="text-white text-3xl lg:text-6xl font-mono font-bold">
            About
          </h1>
          <h1 className="text-3xl sm:text-6xl font-bold font-mono  text-white sm:py-3">
            B & B BUILDERS
          </h1>
          <p className="text-base sm:text-lg sm:pr-4 py-6 text-white text-justify">
            B&B Builders entered the real estate market in 2019 in the
            developing capital city of Islamabad, Pakistan, with the goal of
            re-creating urban living and commercial spaces. B&B Builders, which
            specializes in commercial plots, shops, and offices, became
            well-known for its dedication to modern architecture and modern
            building techniques rapidly. The company successfully delivered over
            50+ villas, setting high standards in the industry and proving its
            commitment to quality and customer satisfaction with each one it
            delivered. With the increasing demand for high-rise buildings, B&B
            builders rose to the occasion and set out to transform the look of
            cities.
            <br />
            Tower-1, a rising structure that will be handed over to its owners
            in February 2024, is the completion of their best. Tower 1
            represents B&B Builders focus on quality with its diligent
            combination of design and service. Their grand project includes
            Towers 2 and 3, which are expected to grace Islamabad&apos;s skyline
            with an artistic blend of modern residential and commercial spaces.
            As builders, B&B creates lifestyles in addition to buildings. With a
            group of contemporary architects and a variety of commercial plots,
            the company keeps up its contribution to the architectural
            development of the city. In the real estate market of Islamabad, B&B
            Builders is now known for their reliability and sophistication—from
            developing creative designs to producing structures that are ready
            for occupation.
          </p>
        </div>
        <div className="w-full lg:w-1/2 rounded-lg">
          <AboutSlider />
        </div>
      </div>
    </>
  );
};

export default About;
