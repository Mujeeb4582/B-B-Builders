import Link from 'next/link';
import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  showLabel?: boolean;
  news?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
  showLabel,
  news,
}) => (
  <div className="card">
    <div className="face face1">
      <div className="content bg-logo h-full w-full flex flex-col items-center justify-center">
        {showLabel && (
          <div className="text-white py-2 px-4 text-4xl font-extrabold absolute -top-14 sales-animations">
            {news}
          </div>
        )}
        <h3>{title}</h3>
      </div>
    </div>
    <div className="face face2">
      <div className="content">
        <p>{description}</p>
        <Link href={`/our-projects${link}`} className="button">
          Read More
        </Link>
      </div>
    </div>
  </div>
);

const ProjectsCardWrapper = () => {
  const projects = [
    {
      title: 'B & B Tower-1',
      description:
        'B&B-Tower-1 is a master piece Commercial development comprises of Retails/Shops and Residential Apartments Developed by B&B Builders',
      link: '#tower-1',
      showLabel: false,
    },
    {
      title: 'B & B Tower-2',
      description:
        ' B&B-Tower-2, a distinctive blend of commercial and residential excellence set in the heart of Islamabad&apos;s dynamic Civic Center Block-C, Faisal Town, invites you to embark on a new urban experience.',
      link: '#tower-2',
      showLabel: true,
      news: 'Hot Deal',
    },
    {
      title: 'B & B Tower-3',
      description:
        ' Get ready to upgrade your living with B&B Builders future masterpiece that is Tower 3! This architectural masterpiece located in the heart of boulevard Faisal Hills, Islamabad.',
      link: '#tower-3',
      showLabel: true,
      news: 'Pre-Launch',
    },
    {
      title: 'B & B Villas',
      description:
        'Elevate your lifestyle with B&B Builders modern and luxury villas, that establish variety through the flawless combination of modern architecture and lavish luxuries.',
      link: '#villas',
      showLabel: false,
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

export default ProjectsCardWrapper;
