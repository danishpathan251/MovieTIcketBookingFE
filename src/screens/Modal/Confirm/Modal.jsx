import React,{useState} from 'react';

import './Modal.css';

const Modal = ({ isOpen, closeModal, handleDelete }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Are you sure?</h3>
        <p>Apko Apka Paisa Refund Mil Jayga</p>
        <div className="modal-buttons">
          <button className="btn btn-primary" onClick={handleDelete}>
            Confirm
          </button>
          <button className="btn btn-secondary" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
