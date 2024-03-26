import React from 'react';
import './Modal.css'; // Import the CSS file for modal styles

const Modal = ({ title, preview, description, closeModal }) => {
  return (
    <div className="ModalOverlay" onClick={closeModal}>
      <div className="ModalContent" onClick={(e) => e.stopPropagation()}>
        <button className="CloseButton" onClick={closeModal}>×</button>
        <h2>{title}</h2>
        <img src={preview} alt={title} className="ModalImage" />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Modal;
