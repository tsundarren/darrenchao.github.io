import React, { useRef } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, imageUrl, url, stack }) => {
  const containerRef = useRef(null);

  const handleMouseEnter = () => {
    const cards = document.querySelectorAll('.ProjectCardContainer');
    cards.forEach(card => {
      if (card !== containerRef.current) {
        card.style.opacity = '0.4';
      }
    });
  };

  const handleMouseLeave = () => {
    const cards = document.querySelectorAll('.ProjectCardContainer');
    cards.forEach(card => {
      card.style.opacity = '1';
    });
  };

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="ProjectCardLink">
      <div
        ref={containerRef}
        className="ProjectCardContainer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ opacity: 1 }}
      >
        <div className="ImagePreview" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <div className="CardContent">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="Stack">
            {stack && stack.map((tech, index) => (
              <span key={index} className="Pill">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
