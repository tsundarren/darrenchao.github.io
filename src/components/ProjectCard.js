import React, { useState } from 'react';
import './ProjectCard.css'; // Import the CSS file
import Modal from './Modal'; // Import the Modal component

const ProjectCard = ({ id, title, description, imageUrl, preview }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div
        className="ProjectCardContainer"
        onClick={openModal}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div id={id} className="ProjectCard"></div>
        <p>{title}</p>
      </div>
      {modalOpen && (
        <Modal
          title={title}
          imageUrl={imageUrl}
          preview={preview}
          description={description}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default ProjectCard;
