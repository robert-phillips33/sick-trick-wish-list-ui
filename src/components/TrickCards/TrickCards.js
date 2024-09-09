import React from 'react';
import './TrickCard.css';

function TrickCards({ tricks }) {
  
  return (
    <div className="tricks-container">
      {tricks.map(trick => (
        <div className="trick-card" key={trick.id}>
          <h2>{trick.name}</h2>
          <p>Stance: {trick.stance}</p>
          <p>Obstacle: {trick.obstacle}</p>
        </div>
      ))}
    </div>
  );
}

export default TrickCards;