import React from 'react';
import ProjectsCardWrapper from './project-card';
const Projects = () => {
  return (
    <>
      <div className="pt-12 font-bold text-4xl sm:text-6xl pl-9">
        Our <span className="text-headingText font-bold">Projects</span>
      </div>
      <ProjectsCardWrapper />
    </>
  );
};

export default Projects;
