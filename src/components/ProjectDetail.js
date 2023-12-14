import React from 'react';

const ProjectDetail = ({ project }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
      }}
    >
      <h1 style={{fontSize: '10%'}}>{project.title}</h1>
      <h3 style={{fontSize: '6%'}}>{project.subtitle}</h3>
      <p style={{ fontSize: '4%', textAlign: 'center', marginLeft: '1vw', marginRight:'1vw'}}>{project.description}</p>
      <p style={{ fontSize: '4%', textAlign: 'center', marginLeft: '1vw', marginRight:'1vw'}}>Tech Stack: {project.stack}</p>
    </div>
  );
};

export default ProjectDetail;
