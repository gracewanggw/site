import React, {useEffect, useState, useRef} from 'react';

const ProjectDetail = ({ project }) => {
  const containerRef = useRef(null);
  const [fontSizeH1, setFontSizeH1] = useState('2vw');
  const [fontSizeH3, setFontSizeH3] = useState('2vw');
  const [fontSizeP, setFontSizeP] = useState('2vw');

  useEffect(() => {
    const calculateFontSize = () => {
      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = containerRef.current.offsetHeight;

      const calculatedFontSize = (0.9 * Math.min(containerWidth, containerHeight));
      setFontSizeH1(`${calculatedFontSize}px`);
      setFontSizeH3(`${0.75 * calculatedFontSize}px`);
      setFontSizeP(`${0.5 * calculatedFontSize}px`);
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
      <h1 style={{fontSize: fontSizeH1}} >{project.title}</h1>
      <h3 style={{fontSize: fontSizeH3}}>{project.subtitle}</h3>
      <p style={{fontSize: fontSizeP, textAlign: 'center', marginLeft: '1vw', marginRight:'1vw'}}>{project.description}</p>
      <p style={{fontSize: fontSizeP, textAlign: 'center', marginLeft: '1vw', marginRight:'1vw'}}>Tech Stack: {project.stack}</p>
    </div>
  );
};

export default ProjectDetail;
