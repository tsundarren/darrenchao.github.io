import React from 'react';
import './Modal.css'

const Modal = ({ title, preview, description, link, closeModal }) => {
  return (
    <div className="ModalOverlay" onClick={closeModal}>
      <div className="ModalContent" onClick={(e) => e.stopPropagation()}>
        <button className="CloseButton" onClick={closeModal}>×</button>
        <h2>{title}</h2>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={preview} alt={title} className="ModalImage" />
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Modal;
