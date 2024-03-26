import React, { useState, useEffect } from 'react';
import './TitleBar.css';

const TitleBar = () => {
  const [scrolledDown, setScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setScrolledDown(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (event, sectionId) => {
    event.preventDefault(); 
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`TitleBar ${scrolledDown ? 'scrolled' : ''}`}>
      <span className="Name">Darren Chao</span>
      <div className="Links">
        <a href="#home" onClick={(event) => handleClick(event, 'home')}>Home</a>
        <a href="#portfolio" onClick={(event) => handleClick(event, 'portfolio')}>Portfolio</a>
        <a href="#skill" onClick={(event) => handleClick(event, 'skill')}>Skill</a>
      </div>
    </div>
  );
};

export default TitleBar;
