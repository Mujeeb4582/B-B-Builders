'use client'
import React from 'react';

const ProjectCard = ({ iconClass, title, description }) => (
  <div className="card">
    <div className="face face1">
      <div className="content">
        <i className={iconClass}></i>
        <h3>{title}</h3>
      </div>
    </div>
    <div className="face face2">
      <div className="content">
        <p>{description}</p>
        <a href="#" className="button" type="button">
          Read More
        </a>
      </div>
    </div>
  </div>
);

const ProjectsSlider = () => {
  const projects = [
    {
      iconClass: 'fab fa-windows',
      title: 'Windows',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?',
    },
    {
      iconClass: 'fab fa-android',
      title: 'Android',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?',
    },
    {
      iconClass: 'fab fa-apple',
      title: 'Apple',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?',
    },
  ];

  return (
    <div className="container">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectsSlider;
