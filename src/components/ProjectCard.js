import React, { useState } from 'react';
import ProjectDetail from './ProjectDetail';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleTouchStart = () => {
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
  };

  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      <div
        style={{
          position: 'relative',
          cursor: 'pointer',
          overflow: 'hidden',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{ width: '100%', height: 'auto', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
        />
        {isHovered && <ProjectDetail project={project} />}
      </div>
    </a>
  );
};

export default ProjectCard;
