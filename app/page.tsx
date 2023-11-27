'use client';

import React from 'react';
import Services from '@/components/Services/Services';
import Slider from '@/components/Slider/main_slider';
import About from '@/components/About/about';
import RecentProject from '@/components/RecentProject/RecentProject';
import Projects from '@/components/Projects/projects';
import CounterUp from '@/components/Counter/index';
const Home = () => {
  return (
    <>
      <div className="container mt-24 pt-1">
        <div className="w-full ">
          <Slider />
        </div>
        {/* <div className="text-center lg:text-left p-12 pl-24 w-full sm:w-1/2">
          <h1 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-8">
            An opportunity for
            <span className="text-[#7C4700]"> sustainable living </span>
            <div>and Development</div>
          </h1>
          <p className="text-base lg:text-lg mb-4 lg:mb-2">
            In the heart of Block-C Civic Center, Faisal Town, stands a recently
            completed commercial high-rise. This modern structure offers a
            variety of living and working spaces, including studios, 1- and
            2-bedroom apartments, offices, and retail shops.
          </p> */}

        {/* <div className="flex flex-wrap justify-center lg:justify-start">
            <button className="bg-[#0C3D90] hover:bg-blue-700 text-white font-bold py-2 px-4 m-2">
              Learn More
            </button>
            <button className="bg-[#FF7C24] hover:bg-green-700 text-white font-bold py-2 px-4 m-2">
              Get Quote
            </button>
          </div> */}
        {/* </div> */}
      </div>
      <div className="flex flex-col lg:flex-row p-12 bg-gray-100">
        <div className="">
          <Services />
        </div>
      </div>
      <About />
      <RecentProject />

      <Projects />
      <div className="p-24">
        <CounterUp />
      </div>
    </>
  );
};
export default Home;
