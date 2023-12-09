import React from 'react';
import ProjectsCardWrapper from './project-card';
const Projects = () => {
  return (
    <>
      <div className="bg-headingText font-mono">
        <div className="pt-12 font-extrabold text-4xl sm:text-7xl pl-9">
          Our <span className="text-white font-bold">Projects</span>
        </div>
        <ProjectsCardWrapper />
      </div>
    </>
  );
};

export default Projects;
