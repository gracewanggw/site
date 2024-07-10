import { useState, useEffect } from 'react';

const Typewriter = ({ text, delay, font, align }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout;

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, text]);

  useEffect(() => {
    // Toggle cursor every 500 milliseconds
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return <h1 style={{fontSize: font === 'lg' ? '80px' : '48px', color: '#46694e', textAlign: align ? 'center' : 'left' }}>
    {currentText}
    <span style={{ visibility: showCursor ? 'visible' : 'hidden', color: '#46694e' }}>&nbsp;|</span>
  </h1>;
};

export default Typewriter;