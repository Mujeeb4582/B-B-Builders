'use client';

import React from 'react';
// import Services from '@/components/Services/Services';
import About from '@/components/About/about';
import RecentProject from '@/components/RecentProject/RecentProject';
import Projects from '@/components/Projects/projects';
import CounterUp from '@/components/Counter/index';
import ReactSlider from '@/components/React-slider';
const Home = () => {
  return (
    <>
      <div className="container mt-24 pt-1">
        <div className="w-full">
          <ReactSlider />
        </div>
      </div>
      <About />
      <RecentProject />

      <Projects />
      <CounterUp />
    </>
  );
};
export default Home;
