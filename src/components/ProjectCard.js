import React, { useState } from 'react';
import ProjectDetail from './ProjectDetail';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer">
        <div
            style={{
                position: 'relative',
                // width: '300px', // Adjust as needed
                // margin: '10px',
                cursor: 'pointer',
                overflow: 'hidden',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
            <img
                src={project.image}
                alt={project.title}
                style={{ width: '100%', height: 'auto' }}
            />
            {isHovered && <ProjectDetail project={project} />}
        </div>
    </a>
    
  );
};

export default ProjectCard;
