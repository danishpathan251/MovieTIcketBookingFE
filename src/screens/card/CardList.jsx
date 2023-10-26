import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './CardList.css'; // CSS for the animation
import Card from './Card';

function CardList({ cards, onDelete }) {
    return (
      <TransitionGroup className="card-list">
        {cards.map((card) => (
          <CSSTransition key={card.id} timeout={300} classNames="fade">
            <Card card={card} onDelete={onDelete} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }

export default CardList;