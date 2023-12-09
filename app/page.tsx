'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import About from '@/components/About/about';
import RecentProject from '@/components/RecentProject/RecentProject';
import Projects from '@/components/Projects/projects';
import CounterUp from '@/components/Counter/index';
const ReactSlider = dynamic(() => import('@/components/Sliders/React-slider'), {
  loading: () => <p className="text-white">Loading...</p>,
});

const Home = () => {
  return (
    <>
      <div className="bg-black font-sans">
        <div className="container mt-24 pt-1">
          <div className="w-full">
            <ReactSlider />
          </div>
        </div>
        <About />
        <RecentProject />

        <Projects />
        <CounterUp />
      </div>
    </>
  );
};
export default Home;
