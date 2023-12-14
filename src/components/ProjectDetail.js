import React, {useEffect, useState, useRef} from 'react';

const ProjectDetail = ({ project }) => {
  const containerRef = useRef(null);
  const [fontSize, setFontSize] = useState('2vw');

  useEffect(() => {
    const calculateFontSize = () => {
      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = containerRef.current.offsetHeight;
      const baseFontSize = 2; // Adjust this based on your design

      // Calculate the font size proportionally to the smaller dimension (width or height)
      const calculatedFontSize = (Math.min(containerWidth, containerHeight) / baseFontSize);
      setFontSize(`${calculatedFontSize}px`);
    };

    calculateFontSize();

    // Recalculate on window resize
    window.addEventListener('resize', calculateFontSize);

    return () => {
      window.removeEventListener('resize', calculateFontSize);
    };
  }, []);

  console.log(fontSize);

  return (
    <div
      ref={containerRef}
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
      <h3 style={{fontSize: {fontSize}}}>{project.subtitle}</h3>
      <p style={{ textAlign: 'center', marginLeft: '1vw', marginRight:'1vw'}}>{project.description}</p>
      <p style={{ textAlign: 'center', marginLeft: '1vw', marginRight:'1vw'}}>Tech Stack: {project.stack}</p>
    </div>
  );
};

export default ProjectDetail;
