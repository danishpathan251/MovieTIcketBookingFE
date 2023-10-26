import React,{useState} from 'react';
import axios from 'axios';
import Modal from '../Modal/Confirm/Modal';


function Card({ card, onDelete }) {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
      setIsOpen(true);
      console.log("You select")
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };

    
    const handleDelete = () => {
      onDelete(card.id);
      axios.delete(`http://localhost:8899/home/delete/${card.id}`).then(res =>{
        closeModal();
      })

    };
  
    return (
        <>
      <div className="card">
        <div className="card-content">
          <h3>Time: {card.shows.showstime}</h3>
          <p>SeatNumber: {card.seatNumber}</p>
          <button onClick={openModal}>Delete</button>
        </div>
      </div>
      
      <Modal isOpen={isOpen} closeModal={closeModal} handleDelete={handleDelete} />
      </>
    );
  }

export default Card