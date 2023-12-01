import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description }) => (
  <div className="card">
    <div className="face face1">
      <div className="content">
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
      title: 'B & B Tower-1',
      description:
        'B&B tower 1is a master piece Commercial development comprises of Retails/Shops and Residential Apartments Developed by B&B Builders',
    },
    {
      title: 'B & B Tower-2',
      description:
        ' B&B Tower 2, a distinctive blend of commercial and residential excellence set in the heart of Islamabads dynamic Civic Center Block-C, Faisal Town, invites you to embark on a new urban experience.',
    },
    {
      title: 'B & B Tower-3',
      description:
        ' Get ready to upgrade your living with B&B Builders future masterpiece that is Tower 3! This architectural masterpiece located in the heart of boulevard Faisal Hills, Islamabad.',
    },
    {
      title: 'B & B Villas',
      description:
        'Elevate your lifestyle with B&B Builders modern and luxury villas, that establish variety through the flawless combination of modern architecture and lavish luxuries.',
    },
  ];

  return (
    <div className="containerCard">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectsSlider;
