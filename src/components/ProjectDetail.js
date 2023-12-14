import React, {useEffect, useState, useRef} from 'react';

const ProjectDetail = ({ project }) => {
  const containerRef = useRef(null);
  const [fontSize, setFontSize] = useState('2vw');

  useEffect(() => {
    const calculateFontSize = () => {
      const containerWidth = containerRef.current.offsetWidth;
      const numberOfColumns = 2; // Change this based on your layout
      const baseFontSize = 2; // Change this based on your design
      const calculatedFontSize = (containerWidth / numberOfColumns) / baseFontSize;
      setFontSize(`${calculatedFontSize}vw`);
    };

    calculateFontSize();

    // Recalculate on window resize
    window.addEventListener('resize', calculateFontSize);

    return () => {
      window.removeEventListener('resize', calculateFontSize);
    };
  }, []);

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
      <h1 style={{fontSize: {fontSize}}} >{project.title}</h1>
      <h3 style={{fontSize: 0.7*{fontSize}}}>{project.subtitle}</h3>
      <p style={{ textAlign: 'center', marginLeft: '1vw', marginRight:'1vw'}}>{project.description}</p>
      <p style={{ textAlign: 'center', marginLeft: '1vw', marginRight:'1vw'}}>Tech Stack: {project.stack}</p>
    </div>
  );
};

export default ProjectDetail;
