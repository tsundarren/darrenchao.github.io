import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <div className="ProjectCardContainer">
      <div className="ImagePreview" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="CardContent">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
