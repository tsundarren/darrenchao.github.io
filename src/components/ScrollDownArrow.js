import React, { useState, useEffect } from 'react';
import './ScrollDownArrow.css';
import arrowImage from '../img/arrow-down.png';

const ScrollDownArrow = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`ScrollDownContainer ${isVisible ? 'visible' : 'hidden'}`}>
      <img
        src={arrowImage}
        alt="Scroll Down Arrow"
        className="ScrollDownArrow"
        aria-label="Scroll Down"
      />
      <span className="ScrollDownText">SCROLL DOWN</span>
    </div>
  );
};

export default ScrollDownArrow;
